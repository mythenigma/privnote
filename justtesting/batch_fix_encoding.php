<?php
// 设置编码
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');
header('Content-Type: text/html; charset=utf-8');

// 智能编码检测和修复函数
function smartFixEncoding($text) {
    // 如果已经是正确的UTF-8，直接返回
    if (mb_check_encoding($text, 'UTF-8') && !preg_match('/[ä¸æ±‡]/', $text)) {
        return $text;
    }
    
    // 常见的乱码模式检测和修复
    $patterns = [
        '/ä¸æ±‡/' => '中汇',
        '/ä¸­æ–‡/' => '中文',
        '/æµ‹è¯•/' => '测试',
        '/æ–‡æ¡£/' => '文档',
        '/ç®€åŽ†/' => '简历',
        '/ä½œå"é›†/' => '作品集',
        '/æŠ¥å'Š/' => '报告',
        '/ç "ç©¶/' => '研究',
        '/å­¦ä¹ /' => '学习',
        '/æ•™è‚²/' => '教育',
        '/ç®¡ç†/' => '管理',
        '/æŠ€æœ¯/' => '技术',
        '/ç³»ç»Ÿ/' => '系统',
        '/ä¸­å›½/' => '中国',
        '/å®‰å…¨/' => '安全',
        '/åˆ†äº«/' => '分享',
        '/ä¸‹è½½/' => '下载',
        '/ä¸Šä¼ /' => '上传',
        '/æ–‡ä»¶/' => '文件',
        '/å›¾ç‰‡/' => '图片',
        '/è§†é¢'/' => '视频',
        '/éŸ³ä¹/' => '音乐',
    ];
    
    $fixed = $text;
    foreach ($patterns as $pattern => $replacement) {
        $fixed = preg_replace($pattern, $replacement, $fixed);
    }
    
    return $fixed;
}

// 获取数据库连接参数
include_once('../password.php');

try {
    $conn = new mysqli($servernameMai, $usernameMai, $passwordMai, $dbnameMai);
    
    if ($conn->connect_error) {
        throw new Exception("数据库连接失败: " . $conn->connect_error);
    }
    
    // 设置数据库连接字符编码
    if (!$conn->set_charset("utf8")) {
        $conn->set_charset("utf8mb4");
    }
    
    $fixedCount = 0;
    $totalCount = 0;
    
    // 修复 block 表中的 ip 字段（文件路径）
    $sql = "SELECT id, ip FROM `block` WHERE ip LIKE '%.pdf'";
    $result = mysqli_query($conn, $sql);
    
    if ($result && mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_assoc($result)) {
            $totalCount++;
            $original = $row['ip'];
            $fixed = smartFixEncoding($original);
            
            if ($original !== $fixed) {
                // 更新数据库
                $updateSql = "UPDATE `block` SET `ip` = ? WHERE `id` = ?";
                $stmt = $conn->prepare($updateSql);
                $stmt->bind_param("si", $fixed, $row['id']);
                
                if ($stmt->execute()) {
                    $fixedCount++;
                } else {
                    echo "更新失败 ID " . $row['id'] . ": " . $stmt->error . "<br>";
                }
                $stmt->close();
            }
        }
    }
    
    // 修复 pdf 表中的 url 字段
    $sql2 = "SELECT mdemail, url FROM `pdf`";
    $result2 = mysqli_query($conn, $sql2);
    
    if ($result2 && mysqli_num_rows($result2) > 0) {
        while($row = mysqli_fetch_assoc($result2)) {
            $totalCount++;
            $original = $row['url'];
            $fixed = smartFixEncoding($original);
            
            if ($original !== $fixed) {
                // 更新数据库
                $updateSql = "UPDATE `pdf` SET `url` = ? WHERE `mdemail` = ?";
                $stmt = $conn->prepare($updateSql);
                $stmt->bind_param("ss", $fixed, $row['mdemail']);
                
                if ($stmt->execute()) {
                    $fixedCount++;
                } else {
                    echo "更新失败 mdemail " . $row['mdemail'] . ": " . $stmt->error . "<br>";
                }
                $stmt->close();
            }
        }
    }
    
    $conn->close();
    
    echo "批量修复完成！<br>";
    echo "检查了 $totalCount 条记录<br>";
    echo "修复了 $fixedCount 条乱码记录<br>";
    
    if ($fixedCount > 0) {
        echo "✅ 数据库乱码已修复，页面将在2秒后刷新显示结果";
    } else {
        echo "ℹ️ 没有发现需要修复的乱码";
    }
    
} catch (Exception $e) {
    echo "错误: " . $e->getMessage();
}
?>