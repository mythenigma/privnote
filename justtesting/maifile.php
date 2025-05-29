<?php 

 ini_set("display_errors", true);
 ini_set("html_errors", true); 
 date_default_timezone_set('Asia/Shanghai');

          $year= date("Y");
          $month= date("m");
          $week=  date("d");
          
          $fileplace = "pdf/store/".$year."/".$month."/".$week."/";
          $picplace  =  "pdf/store/".$year."/".$month."/".$week."/";
          $fileplaceSHOW="store/".$year."/".$month."/".$week."/";
          $encryfile='';

   
    //这里开启的时候 密码 要有  qweewq 其实在 2024年， 我已经不明白为什么qweewq了
          $fileplace =  "/var/www/whatstheirip/pdf/yes/extra/pdf/".$year."/".$month."/".$week."/";
          $picplace  =  "/var/www/whatstheirip/pdf/yes/extra/pdf/".$year."/".$month."/".$week."/";
          $fileplaceSHOW= "pdf/".$year."/".$month."/".$week."/";
          $encryfile='';
  
   
// 369 行也有 badlist 在上传前检查
if (isset($_COOKIE["shenfen"])){
    if($_COOKIE["shenfen"]=='bad'){exit('滚');}
}

if (isset($_SERVER['HTTP_CF_CONNECTING_IP']) && strlen($_SERVER['HTTP_CF_CONNECTING_IP']) > 0) {
    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}


if (isset($_COOKIE["dc"])){
      session_start();
}else{
  //echo 'mai';
}
     

if (isset($_SESSION["user"])){
      $dengru=$_SESSION["user"];
      //echo 'session: '.$dengru;
}else{
     $dengru='wofocibeifox';
     //session_destroy();
     if (session_status() === PHP_SESSION_ACTIVE) {
        session_destroy();
      }
}

echo "<script>var dizhi = '$ip';var dengru = '$dengru'; var fileplaceSHOW='$fileplaceSHOW'; </script>";

if(!isset($_SERVER['HTTPS'])){
  
   $url= 'https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
   header("Location: $url");
   exit();
}
$br=$_SERVER['HTTP_USER_AGENT'];

//echo $url.$agenter.$ip;
include_once ('password.php');
 $conn = new mysqli($servernameMai, $usernameMai, $passwordMai, $dbnameMai);
 if($conn->connect_error){
    die("CANNOT INSERT");
}


?>




<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords" content="PDF在线分享, PDF设置打开次数, PDF转换成二维码, 查看PDF打开记录, 防止PDF转发, PDF保护, PDF安全分享">
    <meta name="description" content="提供PDF在线分享服务，支持设置打开次数、转换为二维码、查看打开记录并防止PDF转发，保护您的文件安全，轻松分享。">
    <meta name="author" content="MaiPDF">
    <title>MaiPDF在线分享-设置PDF的打开次数和时长-PDF生成链接</title>
    
    <script type="text/javascript" src="https://maitube.com/pdf/qrcode.min.js"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9224406325142860" crossorigin="anonymous"></script>
    <script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.3/js/bootstrap.min.js"></script>
    <link href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" type="text/css">
    <script src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/dropzone/5.9.3/dropzone.min.js"></script>
    <link rel="stylesheet" href="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/dropzone/5.9.3/dropzone.min.css">
    <link rel="stylesheet" href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/dropzone/5.9.3/basic.min.css">

    <script>
        var d = new Date();
        document.cookie = "usertime=" + d.getHours();
        document.cookie = "usertime2=" + encodeURI(d);
        d = d + 'maipdf';
        if (d.indexOf("0800") < 1) {
            //window.location.href = "https://maipdf.com/pdf/boot.php";
        } else {
            filterstrings = ['台', '香', '新', 'sin', 'hong', 'sg', 'tw', 'hk', '臺'];
            regex = new RegExp(filterstrings.join("|"), "i");
            if (regex.test(d)) {
                //window.location.href = "https://maipdf.com/pdf/boot.php";
            }
        }
    </script>

    <style>
    :root {
        --primary: #7c3aed; /* 紫色主色 */
        --primary-light: #a78bfa;
        --primary-dark: #5b21b6;
        --secondary: #6366f1;
        --accent: #f472b6;
        --text-dark: #232136;
        --text-light: #fff;
        --bg-light: #f6f3ff;
        --bg-card: #fff;
        --border: #e9d5ff;
        --shadow: 0 2px 8px rgba(124,58,237,0.08);
        --shadow-hover: 0 4px 16px rgba(124,58,237,0.13);
        --radius: 14px;
        --radius-lg: 22px;
        --transition: all 0.22s cubic-bezier(.4,2,.6,1);
    }
    body {
        font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
        background: linear-gradient(120deg, #f6f3ff 0%, #e0c3fc 100%);
        color: var(--text-dark);
        font-size: 1rem;
        min-height: 100vh;
    }
    .navbar-custom {
        background: linear-gradient(90deg, #7c3aed 60%, #6366f1 100%);
        color: var(--text-light);
        box-shadow: var(--shadow);
        border-radius: 0 0 var(--radius-lg) var(--radius-lg);
    }
    .navbar-custom .navbar-brand h1 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--text-light);
        margin-bottom: 0;
        letter-spacing: 1px;
    }
    .navbar-custom .navbar-text {
        color: #ede9fe;
        font-size: 1rem;
        opacity: 0.92;
    }
    .page-section {
        background: var(--bg-card);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow);
        padding: 2.2rem 1.2rem;
        margin-bottom: 2rem;
        border: 1px solid var(--border);
    }
    .section-heading {
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 1.2rem;
        text-align: center;
        letter-spacing: 0.5px;
        background: linear-gradient(90deg, #7c3aed 60%, #f472b6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    .section-heading::after {
        content: '';
        display: block;
        width: 60px;
        height: 3px;
        background: var(--primary-light);
        border-radius: 2px;
        margin: 0.5rem auto 0 auto;
    }
    .step-card {
        background: #f3e8ff;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        padding: 1.3rem 1rem;
        margin-bottom: 1.2rem;
        border: 1px solid var(--border);
        transition: var(--transition);
    }
    .step-card:hover {
        box-shadow: var(--shadow-hover);
        border-color: var(--primary-light);
    }
    .step-card .fas, .step-card .far, .step-card .fab {
        color: var(--primary);
        margin-bottom: 0.5rem;
        font-size: 2em;
    }
    #dropz {
        border: 2.5px dashed var(--primary);
        background: #ede9fe;
        color: var(--primary-dark);
        font-weight: 500;
        padding: 1.7rem 1.2rem;
        border-radius: var(--radius-lg);
        transition: var(--transition);
        font-size: 1.1rem;
        box-shadow: var(--shadow);
        text-align: center;
    }
    #dropz .dz-message {
        color: var(--primary-dark);
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 0.5px;
    }
    #dropz:hover, #dropz.dz-drag-hover {
        background: #d1c4e9;
        border-color: var(--primary-dark);
        color: var(--primary-dark);
        box-shadow: var(--shadow-hover);
    }
    .form-control:focus {
        border-color: var(--primary);
        box-shadow: 0 0 0 0.15rem rgba(124,58,237,0.10);
    }
    .form-check-input:checked {
        background-color: var(--primary);
        border-color: var(--primary);
    }
    .btn-danger, .btn-outline-danger:hover {
        background: linear-gradient(90deg, #7c3aed 60%, #f472b6 100%);
        color: #fff;
        border: none;
        box-shadow: 0 2px 8px 0 rgba(124,58,237,0.10);
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: var(--transition);
    }
    .btn-outline-danger {
        color: var(--primary);
        border: 1.5px solid var(--primary);
        background: #fff;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: var(--transition);
    }
    .btn-outline-danger:hover {
        color: #fff;
        background: linear-gradient(90deg, #7c3aed 60%, #f472b6 100%);
        border: none;
        box-shadow: 0 2px 8px 0 rgba(124,58,237,0.10);
    }
    .btn-primary, .btn-success, .btn-outline-success, .btn-outline-primary {
        background: var(--secondary);
        color: #fff;
        border: none;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: var(--transition);
    }
    .btn-primary:hover, .btn-success:hover, .btn-outline-success:hover, .btn-outline-primary:hover {
        filter: brightness(1.08);
        box-shadow: 0 2px 8px 0 rgba(124,58,237,0.10);
        color: #fff;
    }
    .custom-divider {
        margin: 2rem 0;
        border: 0;
        border-top: 1.5px solid var(--border);
        opacity: 0.6;
    }
    .footer-custom {
        background: var(--primary-dark);
        color: #fff;
        padding: 1.2rem 0;
        margin-top: 2rem;
        border-radius: 0 0 var(--radius-lg) var(--radius-lg);
        box-shadow: 0 -2px 12px 0 rgba(124,58,237,0.08);
    }
    .footer-custom .text-muted {
        color: #ede9fe !important;
    }
    #cishu {
        background: #ede9fe;
        color: var(--primary-dark);
        padding: 0.6rem 1rem;
        border-radius: 0.5rem;
        font-weight: 600;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 0.98rem;
        box-shadow: var(--shadow);
        letter-spacing: 0.5px;
    }
    .modal-header {
        background: var(--primary-light);
        color: #fff;
        border-radius: var(--radius) var(--radius) 0 0;
    }
    .modal-title {
        color: #fff;
    }
    .breadcrumb {
        background: #ede9fe;
        padding: 0.7rem 1.2rem;
        border-radius: 0.5rem;
        font-size: 1.02rem;
        box-shadow: var(--shadow);
    }
    .breadcrumb-item a {
        color: var(--primary);
        text-decoration: none;
        font-weight: 600;
    }
    .breadcrumb-item.active {
        color: #6c757d;
    }
    .qr-code-area #qrcode {
        border: 4px solid #e9d5ff;
        padding: 8px;
        display: inline-block;
        border-radius: var(--radius);
        line-height: 0;
        background: #fff;
        box-shadow: var(--shadow);
    }
    .qr-code-area #qrcode canvas, .qr-code-area #qrcode img {
        max-width: 100%;
        height: auto !important;
    }
    @media (max-width: 992px) {
        .page-section { padding: 1.2rem 0.3rem; }
        .step-card { padding: 1rem 0.3rem; }
    }
    @media (max-width: 767.98px) {
        body { font-size: 0.97rem; }
        .navbar-custom .navbar-brand h1 { font-size: 1.3rem; }
        .section-heading { font-size: 1.1rem; margin-bottom: 1rem; }
        .step-card { padding: 0.8rem; }
        #dropz { padding: 0.8rem; }
        #dropz .dz-message { font-size: 0.98rem; }
    }
    @media (max-width: 575.98px) {
        .step-card .fas.fa-4x, .step-card .far.fa-4x, .step-card .fab.fa-4x { font-size: 1.5em !important; }
        .step-card .fas.fa-2x, .step-card .far.fa-2x, .step-card .fab.fa-2x { font-size: 1em !important; }
        #cishu { font-size: 0.85rem; padding: 0.5rem; }
        .breadcrumb { font-size: 0.9rem; }
    }
    </style>
</head>

<body id="page-top">

    <nav class="navbar navbar-custom">
        <div class="container-fluid">
            <a class="navbar-brand" href="maifile.php">
                <h1>MaiPDF.cn</h1>
            </a>
            <span class="navbar-text">PDF分享</span>
        </div>
    </nav>

    <section class="text-center container masthead-section">
        <div class="row py-lg-2 justify-content-center">
            <div class="col-lg-10 col-md-12">
                <div id="diyi" class="mb-3">
                    <button type="button" class="btn btn-danger btn-lg me-sm-2 mb-2 mb-sm-0" data-bs-toggle="modal" data-bs-target="#myModal">
                        <i class="fas fa-sign-in-alt me-1"></i> 登录使用
                    </button>
                    <a href="#grabify" class="btn btn-outline-info btn-lg mb-2 mb-sm-0">
                        <i class="fas fa-user-circle me-1"></i> 访客使用
                    </a>
                </div>
                <div class="pt-2">
                    <div class="d-flex flex-wrap justify-content-center gap-2">
                        <a href="/getresult.html" class="btn btn-outline-danger my-1 btn-icon">
                            <i class="fas fa-link me-1"></i> 查看文件打开记录
                        </a>
                        <a href="/pdf/hahachange.php" class="btn btn-outline-success my-1 btn-icon">
                            <i class="fas fa-edit me-1"></i> 修改链接参数
                        </a>
                        <a href="/watermark.html" class="btn btn-outline-primary my-1 btn-icon">
                            <i class="fas fa-search me-1"></i> 查询水印信息
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="myModalLabel">用户登录</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal" role="form" action="../6/session.php" method="post">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="yonghuming" name="email" placeholder="请输入用户名">
                                <label for="yonghuming">用户名</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="mima" name="passcode" placeholder="请输入密码">
                                <label for="mima">密码</label>
                            </div>
                            <button type="submit" class="w-100 btn btn-lg btn-primary">登录</button>
                        </form>
                        <div class="text-center mt-3">
                            <a href="6/login.php" class="text-decoration-none small">注册新账号 / 忘记密码?</a>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="container">
         <nav aria-label="breadcrumb" class="mb-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="https://maipdf.cn/est/k16445999998/pdf">FenceView</a></li>
                <li class="breadcrumb-item"><a href="https://maifile.cn/est/?e=agiJY3lJ4OntAm">标准防护</a></li>
                <li class="breadcrumb-item"><a href="https://maipdf.cn/est/d79414001472/pdf">完全开放</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="https://mp.weixin.qq.com/mp/video?__biz=MzIwMzE2Mjk1MA==&mid=501247362&sn=c528d3b3326cb7eec97d16b736a30130&vid=wxv_1650260391244972041&idx=1&vidsn=74c705bb24ed37459fce86ac41124615&fromid=1&scene=18&xtrack=1#wechat_redirect">视频教程</a></li>
            </ol>
        </nav>
    </div>

    <hr class="custom-divider container">

    <section class="container page-section" id="section1">
        <h2 class="section-heading" id="1step">第一步: 上传PDF文件</h2>
        <p class="lead text-center text-muted mb-4" id="pleaseupload">拖拽文件到下方区域或点击选择</p>
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
                <div class="form-group">
                    <div id="dropz" class="dropzone"></div>
                </div>
                <input type="hidden" name="file_id" ng-model="file_id" id="file_id" />
            </div>
        </div>
    </section>

    <hr class="custom-divider container">

    <section class="container page-section" id="section2">
        <h2 class="section-heading" id="2step">第二步：设置阅读次数和每次阅读的时间</h2>
        <form role="form" action="maifile.php#3step" method="post">
            <div class="row justify-content-center mb-4">
                 <div class="col-lg-6">
                    <label for="name" class="form-label visually-hidden">文件名 (自动填充)</label>
                    <input type="text" class="form-control text-center" id="name" name="sender" value="文件" readonly="readonly">
                 </div>
            </div>
            <div class="row g-3 g-lg-4" id="2step3"> <div class="col-lg-3 col-md-6">
                    <div class="step-card text-center h-100">
                        <i class="fas fa-2x fa-folder-open"></i>
                        <p class="fw-bold mb-1">可打开的次数</p>
                        <input class="form-control mb-3" type="number" id="limit" name="limit" placeholder="输入整数 (例如: 5)">
                        <i class="fas fa-2x fa-user-clock"></i>
                        <p class="fw-bold mb-1">每次阅读时长 (秒)</p>
                        <input class="form-control" type="number" name="password" placeholder="例如: 300 (5分钟)">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="step-card text-center h-100">
                        <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="MaiPDF 有效防止下载和无限传播，提供访问控制、链接禁用和内容更新功能。虽无法完全阻止截图和录屏，但已足够满足大部分安全需求，是共享敏感信息的理想选择">
                            <i class="fas fa-4x fa-lock mb-3"></i>
                        </a>
                        <div class="form-check form-switch mb-2 d-flex justify-content-center align-items-center">
                             <input class="form-check-input me-2" type="checkbox" name="darkmode" value="yes" id="dynamicWatermark" style="font-size: 1.2em;">
                             <label class="form-check-label" for="dynamicWatermark">动态水印</label>
                        </div>
                        <hr class="my-3">
                        <p class="fw-bold mb-2">防护模式:</p>
                        <div class="form-check text-start mb-1">
                            <input type="radio" class="form-check-input" name="zhangai" value="straight" id="modeStandard" checked>
                            <label class="form-check-label" for="modeStandard">
                                <a href="#" class="text-decoration-none text-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="禁止下载和打印，提供有限的访问控制和安全保护">标准防护</a>
                            </label>
                        </div>
                        <div class="form-check text-start mb-1">
                            <input type="radio" class="form-check-input" name="zhangai" value="obstacle" id="modeFenceView">
                            <label class="form-check-label" for="modeFenceView">
                                 <a href="#" class="text-decoration-none text-dark" data-bs-toggle="tooltip" data-bs-placement="top" title="FenceView 在 PDF 页面上添加竖线覆盖，需将鼠标悬停在竖线上才能暂时消失">FenceView</a>
                            </label>
                        </div>
                        <div class="form-check text-start">
                            <input type="radio" class="form-check-input" name="zhangai" value="topen" id="modeOpen">
                            <label class="form-check-label" for="modeOpen">开放打印和下载</label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="step-card text-center h-100">
                        <i class="fas fa-4x fa-phone-alt mb-3"></i>
                        <p class="fw-bold mb-2">手机号验证 (可选)</p>
                        <div class="form-check form-switch mb-2 d-flex justify-content-center align-items-center">
                            <input class="form-check-input me-2" type="checkbox" id="enablePhoneValidation" name="enablePhoneValidation" value="yes" style="font-size: 1.2em;">
                            <label class="form-check-label" for="enablePhoneValidation">启用验证</label>
                        </div>
                        <div id="phoneNumbersInput" style="display: none;">
                            <textarea class="form-control" name="phoneNumbers" placeholder="最多输入50个中国手机号，英文逗号分隔" rows="4"></textarea>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="step-card text-center h-100 d-flex flex-column justify-content-between">
                        <div>
                            <i class="fas fa-4x fa-bell mb-3"></i>
                            <p class="fw-bold mb-1">邮件提醒 (可选)</p>
                            <input class="form-control mb-3" type="email" name="mailalert" placeholder="接收提醒的邮箱">
                        </div>
                        <input type="submit" value="生成阅读链接" class="btn btn-danger btn-lg w-100">
                    </div>
                </div>
            </div>
        </form>
    </section>
    
    <div class="container">
      <h6 class="text-center" id="cishu">↡打开次数超过1万次即设置为无限次阅读↡</h6>
    </div>

    <?php
    // PHP CODE REMAINS UNCHANGED (with previous safety comments/placeholders if applicable)
    date_default_timezone_set('etc/gmt-8');
    $identifier='';$messagebox="第二步需点<span style='color:green';>生成链接</span>";
    $pdflinkshort="";
    $pdflinkfull="";
    if(isset ($_POST['limit']) ){
        $limit= htmlspecialchars($_POST['limit']);
        if(isset ($_POST['password']) ){
                $password=htmlspecialchars($_POST['password']);
                    if($password<30 || $limit<1){
                        exit("<script>
                            document.getElementById(\"diyi\").className=\"text-warning\";
                                document.getElementById(\"diyi\").innerHTML = 
                            \"阅读时间太短了<br>还是打开次数没设置呢<br>重新上传文件设置时间吧.....\";</script>");
                        }
                $url = $_POST['sender'];
                $zhangai = $_POST['zhangai'];
                $identifier=uniqid();
    if(!isset($_COOKIE["uploadedfile"]) || $_COOKIE["uploadedfile"]=="notyet"){
    exit("<script>
                                document.getElementById(\"2step\").className=\"text-danger\";
                                document.getElementById(\"2step\").innerHTML = 
                                \"该页面不要重复刷新<br>点击左上角MaiPDF重新进入上传<br>如有具体问题,请进入公众号咨询.....\";
    document.getElementById(\"2step3\").innerHTML = 
                                \"该页面不要重复刷新<br>点击左上角MaiPDF重新进入上传<br>如有具体问题,请进入公众号咨询.....\";
                                </script>");
    }
                if(substr($url, -3) != 'pdf'){ exit(); }
                    if($password>99999999){ $password=99999999; }
                    if($limit>99999999){ $limit=99999999; }
    if(isset ($_POST['mailalert']) ){
        $mailalert=$_POST['mailalert']; 
    $injectionChars = array( '(', ')','/', '*', '%','&', "'", '#');
    foreach ($injectionChars as $char) { if (strpos($mailalert, $char) !== false) { $mailalert='1998'; } }
    }else{ $mailalert='1998'; }
        $phoneNumbers = isset($_POST['phoneNumbers']) ? $_POST['phoneNumbers'] : '';
        $phoneNumbers = trim($phoneNumbers);
    $phoneNumbers = str_replace('，', ',', $phoneNumbers);
        $byteLength = strlen($phoneNumbers); 
        if ($byteLength > 3500) {
            echo "输入的手机号列表过长，不能超过 3500 字节。";
            $phoneNumbers = null;
        } elseif (!empty($phoneNumbers)) {
            $phoneNumbersArray = explode(',', $phoneNumbers);
            $valid = true;
            if (count($phoneNumbersArray) > 50) $valid = false;
            if ($valid) {
                foreach ($phoneNumbersArray as $phone) {
                    $phone = trim($phone);
                    if (strlen($phone) != 11 || !preg_match('/^\d{11}$/', $phone)) { $valid = false; break; }
                }
            }
            if (!$valid) { $phoneNumbers = null; }
        } else { $phoneNumbers = null; }
        if($zhangai=='obstacle'){ $identifier='kt'.$identifier; }
        elseif($zhangai=='topen'){ $identifier='dt'.$identifier; }
        else{ $identifier='at'.$identifier; }
            $pdflinkshort= "maipdf.cn/file/".$identifier."/pdf";
            $pdflinkfull="https://maipdf.cn/file/".$identifier."/pdf";
          //  $dengru = isset($_COOKIE['dengru']) ? $_COOKIE['dengru'] : '';
            $encryfile='/var/www/whatstheirip/pdf/yes/extra/'.$url;
            if($zhangai!='topen'){
                if (!file_exists($encryfile)) { exit('文件没有上传成功或者您需要更改文件名再重新上传'); } 
    if(filesize($encryfile) < 3797152 ){
        try{
    require_once __DIR__ . '/vendorJiami/autoload.php';
        $mpdf = new \Mpdf\Mpdf();
        $pagecount = $mpdf->SetSourceFile($encryfile);
        for($i=1;$i<=$pagecount;$i++){
            $mpdf->AddPage();
            $tplId3 = $mpdf->ImportPage($i);
            $size=$mpdf->getTemplateSize($tplId3);
            $mpdf->UseTemplate($tplId3,0,0,$size['width'],$size['height'],true); 
        }
        $mpdf->SetProtection(array(), 'guaguashimaimai', 'qweewqasd'); 
        $mpdf->Output($encryfile, \Mpdf\Output\Destination::FILE); 
        }catch(Exception $e){}
    }}
    $host = '10.0.4.4'; $port = 22; $username = 'root'; $passwordTencent = 'GUAgua123!';
    $file_path = $encryfile; $remote_path = '/var/www/html/pdf/yes/extra/'.$url;
    if (function_exists('ssh2_connect')) {
        $connection = ssh2_connect($host, $port);
        if ($connection && ssh2_auth_password($connection, $username, $passwordTencent)) {
            $encoded_filepath = urlencode($url);
            $remote_url = 'https://maiimg.com/onlyupload.php?joename='.$encoded_filepath; 
            $content = @file_get_contents($remote_url);
        if ($content !== false) { $trimmed_content = trim($content); } 
        else { /* echo "Failed to fetch remote content."; */ } 
        if (isset($trimmed_content) && $trimmed_content == 'isdircunzai') {} 
        else { if (!ssh2_scp_send($connection, $file_path, $remote_path)) { /* echo "Failed to upload file.\n"; */ } }
        } else { /* echo "<p class='text-danger text-center'>SSH Authentication Failed...</p>"; */ }
    } else { /* echo "<p class='text-warning text-center'>SSH2 extension not available...</p>"; */ }
        $messagebox='阅读链接已生成';
        if(substr($url, -3)== 'pdf'){
        // !!! IMPORTANT: Ensure $conn (database connection) is established before this point !!!
        // Example: $conn = new mysqli("DB_HOST", "DB_USER", "DB_PASS", "DB_NAME");
        if (isset($conn) && $conn->ping()) {
            $day=date('Y-m-d');
            $sanitized_url = $conn->real_escape_string($url);
            if(isset($_POST['darkmode'])) { $allurl = 'waterf1'.$sanitized_url; } 
            else { $allurl ='f1'.$sanitized_url; }
            $sanitized_identifier = $conn->real_escape_string($identifier);
            $sanitized_password = (int)$password; // Ensure numeric
            $sanitized_limit = (int)$limit; // Ensure numeric
            $sanitized_mailalert = $conn->real_escape_string($mailalert);
            $sanitized_phoneNumbers_sql = ($phoneNumbers === NULL) ? "NULL" : "'" . $conn->real_escape_string($phoneNumbers) . "'";
            $sql="INSERT INTO `pdf` VALUES('$sanitized_identifier','$allurl',$sanitized_password,$sanitized_limit,'$day','$sanitized_mailalert',$sanitized_phoneNumbers_sql)";
            $ip_for_sql = isset($ip) ? $conn->real_escape_string($ip) : 'unknown_ip'; // Sanitize IP
           // $sanitized_dengru_for_sql = $dengru;
		  // echo 'xxxx: '.$dengru;
            if($dengru == 'wofocibeifox'){
                    $sqlres="INSERT INTO `block`(`ip`,`md5`,`attr`) VALUES('$ip_for_sql','$sanitized_url','pdf') ON DUPLICATE KEY UPDATE `number` = 1";
            }else{ 
                    $sqlres="INSERT INTO `block`(`ip`,`md5`,`attr`) VALUES('$sanitized_url','m#$sanitized_identifier','$dengru') ON DUPLICATE KEY UPDATE `number` = 1";
            }
        echo "<script> document.getElementById('section2').style.display='none'; document.getElementById('section1').style.display='none';var at='".$identifier."';var bt='".$identifier."';var place='".$url."';</script>";
            mysqli_query($conn,$sql);
            // mysqli_query($conn,$sqlcopy); // Assuming pdf_copy structure matches or is updated
			//echo $sqlres;
            mysqli_query($conn,$sqlres);
            $conn->close(); 
        } else { /* echo "<p class='text-danger text-center'>Database connection error. Cannot save link details.</p>"; */ }
        }}
    }
    ?>

    <hr class="custom-divider container d-none" id="results-divider">

    <section class="container page-section" id="resultsSection" style="display: <?php echo empty($pdflinkfull) ? 'none' : 'block'; ?>;">
        <h2 class="section-heading" id="3step">第三步：链接与二维码</h2>
        <div class="row justify-content-center">
            <div class="col-lg-9 col-xl-8"> <div class="step-card">
                    <div class="row align-items-center gy-3 gy-md-0"> <div class="col-md-7 text-center text-md-start">
                            <h5 class="mb-1">您的阅读链接:</h5>
                            <p class="text-muted small mb-2" id="pdflinkshort-display"><?php echo htmlspecialchars($pdflinkshort); ?></p>
                            <div class="input-group mb-2"> <input type="text" value="<?php echo htmlspecialchars($pdflinkfull); ?>" id="myInput" class="form-control" readonly aria-label="Generated PDF Link">
                                <button class="btn btn-outline-danger" onclick="myFunction()" type="button" id="copyButton"><i class="fas fa-copy me-1"></i> 复制</button>
                            </div>
                            <h6 id='Copied' class="mt-1 mb-2" style="font-size: 0.9em;"></h6>
                            <hr class="my-3">
                            <p class="text-muted mb-1 small">
                                <strong>阅读码：</strong><code class="user-select-all bg-light p-1 rounded"><?php echo strlen($identifier)<2 ? '用于识别PDF文件' : htmlspecialchars($identifier);?></code>
                            </p>
                            <p class="text-muted small">
                                <strong>修改码：</strong><code class="user-select-all bg-light p-1 rounded"><?php $identifier2='joe'.htmlspecialchars($identifier); echo strlen($identifier)<2 ? '修改/删除链接' : htmlspecialchars(crypt($identifier2,'su')); ?></code>
                            </p>
                             <div class="mt-3">
                                <a class="btn btn-outline-dark btn-sm me-2" href="pdf/hahachange.php" target="_blank"><i class="fas fa-edit me-1"></i>修改文件</a>
                                <a class="btn btn-outline-dark btn-sm" href="getresult.html" target="_blank"><i class="fas fa-list-alt me-1"></i>查询记录</a>
                             </div>
                        </div>
                        <div class="col-md-5 text-center mt-3 mt-md-0 qr-code-area">
                             <div id="qrcode" class="d-inline-block"></div>
                             <p class="mt-2 mb-0"><small>扫描二维码阅读</small></p>
                        </div>
                    </div>
                </div>
                <p class="text-center text-success mt-3"><?php if(isset($messagebox) && $messagebox === '阅读链接已生成') { echo htmlspecialchars($messagebox); } ?></p>
            </div>
        </div>
    </section>

    <div class="modal fade" id="globalRedirectModal" tabindex="-1" aria-labelledby="globalRedirectModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="globalRedirectModalLabel">Faster Access Recommendation</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>We've detected you might be outside Mainland China. For better performance:</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i class="fas fa-globe-asia me-2 text-primary"></i>Current Site: Global Site (Optimized Worldwide)</li>
                        <li class="list-group-item"><i class="fas fa-rocket me-2 text-success"></i>Recommended: English Site (Faster International CDN)</li>
                    </ul>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Stay on Current Site
                    </button>
                    <a href="https://maipdf.com" class="btn btn-success" target="_blank" rel="noopener">
                       <i class="fas fa-external-link-alt me-1"></i> Visit English Site
                    </a>
                </div>
            </div>
        </div>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function () {
        var pdflinkfullValue = "<?php echo trim($pdflinkfull); // Ensure no leading/trailing whitespace ?>";
        var resultsSection = document.getElementById('resultsSection');
        var resultsDivider = document.getElementById('results-divider');
        var qrcodeElement = document.getElementById("qrcode");

        if (pdflinkfullValue) {
            if(resultsSection) resultsSection.style.display = 'block';
            if(resultsDivider) resultsDivider.classList.remove('d-none');

            if (qrcodeElement && typeof QRCode !== 'undefined') {
                qrcodeElement.innerHTML = ''; // <<<< KEY FIX: Clear previous QR code

                var qrcodeContainer = qrcodeElement.closest('.qr-code-area');
                var containerWidth = qrcodeContainer ? qrcodeContainer.offsetWidth : 140;
                
                // Calculate responsive QR size, considering padding of qr-code-area (8px * 2)
                // and border of #qrcode (5px * 2)
                var internalPaddingAndBorder = (8 * 2) + (5 * 2); 
                var availableWidth = containerWidth - internalPaddingAndBorder;
                var qrSize = Math.max(80, Math.min(availableWidth, 180)); // Min 80px, Max 180px, adjust as needed

                new QRCode(qrcodeElement, {
                    text: pdflinkfullValue,
                    width: qrSize,
                    height: qrSize,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            } else if (!qrcodeElement) {
                console.error("QR Code element #qrcode not found.");
            } else if (typeof QRCode === 'undefined') {
                console.error("qrcode.min.js not loaded or QRCode class not defined.");
            }
        } else {
            if(resultsSection) resultsSection.style.display = 'none'; // Hide if no link
            if(resultsDivider) resultsDivider.classList.add('d-none');
        }

        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });
    });

    document.getElementById("enablePhoneValidation").addEventListener("change", function() {
        var phoneInput = document.getElementById("phoneNumbersInput");
        phoneInput.style.display = this.checked ? "block" : "none";
    });

    var dengru = typeof dengru !== 'undefined' ? dengru : (localStorage.getItem("dengru_status") || "");
    var dizhi = typeof dizhi !== 'undefined' ? dizhi : "请上传文件";

    if (dengru && dengru !== 'wofocibeifox' && dengru !== '') {
        const diyiElement = document.getElementById("diyi");
        if (diyiElement) {
            diyiElement.innerHTML = "<h5 class='mb-2'>欢迎回来: " + dengru + "</h5><a href='6/list.php' class='btn btn-outline-dark my-2'><i class='fas fa-tachometer-alt me-1'></i>进入控制面板</a>";
        }
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var res = xmlhttp.responseText;
            var n = res.indexOf("hot");
            console.log("XHR Response:", res);
            if (n > 1) {
                if (typeof (Storage) !== "undefined") { localStorage.setItem("shenfen", "bad"); }
                window.location.href = "bad.html";
                return false;
            }
            if (typeof (Storage) !== "undefined") { localStorage.setItem("shenfen", "princess"); }
        }
    }

    if (typeof (Storage) !== "undefined") {
        var goodbad = localStorage.getItem("shenfen");
        var pleaseuploadElement = document.getElementById("pleaseupload");
        if (goodbad == 'bad') {
            window.location.href = "bad.html";
        } else {
            if(pleaseuploadElement && dizhi !== "请上传文件" && dizhi !== "") { // Only update if dizhi has a real value
                 pleaseuploadElement.innerHTML = dizhi + '<a href="https://whatstheirip.tech/iplookup.php" style="color:var(--mai-text-dark); text-decoration:none;" target="_blank"><small> - IP查询</small></a>';
            }
            // Only send XHR if dizhi is not the placeholder
            if (dizhi !== "请上传文件" && dizhi !== "") {
                xmlhttp.open("GET", "log.php?pic=" + encodeURIComponent(dizhi), true);
                xmlhttp.send();
            }
            console.log("User 'shenfen':", goodbad);
        }
    } else {
        console.warn("LocalStorage is not supported in this browser.");
    }

    function myFunction() {
        var copyText = document.getElementById("myInput");
        var copiedMsg = document.getElementById("Copied");
        if (!copyText || !copiedMsg) return;
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        try {
            document.execCommand("copy");
            copiedMsg.innerHTML = "已复制!";
            copiedMsg.classList.add('text-success'); // Add success class
            copiedMsg.classList.remove('text-danger');
            setTimeout(function(){ copiedMsg.innerHTML = ""; }, 2500);
        } catch (err) {
            copiedMsg.innerHTML = "复制失败";
            copiedMsg.classList.add('text-danger');
            copiedMsg.classList.remove('text-success');
            console.error('Failed to copy: ', err);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
    const isInternationalUser = () => {
        const isNotChinese = !navigator.languages.some(lang => lang.toLowerCase().startsWith('zh'));
        const isNotChinaTZ = () => {
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            return !['Asia/Shanghai', 'Asia/Chongqing', 'Asia/Urumqi', 'Asia/Harbin'].includes(tz);
        } catch(e) { return new Date().getTimezoneOffset() !== -480; }};
        return isNotChinese && isNotChinaTZ();
    };
    if (isInternationalUser()) {
        var globalModalElement = document.getElementById('globalRedirectModal');
        if (globalModalElement) { new bootstrap.Modal(globalModalElement, { backdrop: 'static', keyboard: false }).show(); }
    }});
    </script>

    <footer class="footer-custom py-3">
        <div class="container">
            <div class="small text-center text-muted">Copyright &copy; 2025 - MaiPDF</div>
        </div>
    </footer>

</body>
</html>

  <script>
  document.cookie = "uploadedfile=notyet";
var zhuceid = 1;
// setInterval(zhucece, 1000); // Functionality related to this interval is unclear, keeping it commented out

function zhucece() {
  // Toggles class names for the element with id "zhuce" between "btn-warning btn-xl js-scroll-trigger" and "btn-danger btn-xl js-scroll-trigger"
  const zhuceButton = document.getElementById("zhuce");
  if (zhuceButton) { // Check if the element exists to avoid errors
    if (zhuceid == 1) {
      zhuceButton.className = "btn btn-warning btn-xl js-scroll-trigger";
      zhuceid = 2;
    } else {
      zhuceButton.className = "btn btn-danger btn-xl js-scroll-trigger";
      zhuceid = 1;
    }
  }
}

// Unused variable, removing it
var bt = 'xxx';

var appElement = document.querySelector('div .inmodal'); // Consider if this is needed for AngularJS scope interaction

// --- Configuration ---
const MAX_FILE_SIZE_MB = 82; // Maximum file size in MB
const ACCEPTED_FILE_TYPES = ".png,.jpg,.jpeg,.gif,image/*,.pdf"; // Accepted file types
const UPLOAD_URL = "onlyupload.php"; // URL for file upload

var myDropzone = new Dropzone("#dropz", {
  url: UPLOAD_URL,
  method: "post",
  paramName: "file", // File parameter name on the server
  maxFiles: 1, // Only allow one file at a time
  maxFilesize: MAX_FILE_SIZE_MB, // Maximum file size in MB
  acceptedFiles: ACCEPTED_FILE_TYPES,
  addRemoveLinks: true,
  parallelUploads: 1,
  dictDefaultMessage: '拖动文件至此或者点击上传 <br><br><small style="font-style: italic;">建议上传之前自行压缩一下</small>  ',
  dictMaxFilesExceeded: "您最多只能上传1个文件！",
  dictResponseError: '文件上传失败!',
  dictInvalidFileType: "文件类型只能是*.pdf,*.png,*.jpeg。",
  dictFallbackMessage: "浏览器不受支持",
  dictFileTooBig: "建议用其它工具先压缩一下.文件太大会导致他人打开速度特别慢",
  dictRemoveLinks: "删除",
  dictCancelUpload: "取消",
  timeout: 190000,

  init: function () {
    this.on("addedfile", function (file) {
      // Hide default message when a file is added
      document.querySelector('div .dz-default').style.display = 'none';

      // --- File Validation ---
      if (file.name.endsWith('.PDF')) { // Case-sensitive check, consider toLowerCase() for robustness if needed
        alert('文件尾椎的pdf不能为大写');
        this.removeFile(file); // Remove the invalid file from Dropzone
        return false; // Prevent upload
      }

      if (file.name.includes('#')) {
        const errorMessage = '请去除文件名中的特殊字符';
        alert(errorMessage);
        simulateTyping("pleaseupload", errorMessage, 180); // Assuming simulateTyping is a defined function
        this.removeFile(file);
        return false; // Prevent upload
      }

      if (file.size / 1024 / 1024 > MAX_FILE_SIZE_MB -2 ) { // Compare file size with defined constant, slightly reduced limit for safety
        const errorMessage = `请上传 ${MAX_FILE_SIZE_MB-2}M 内文件且名字无特殊字符`; // Use template literals for better readability
        simulateTyping("pleaseupload", errorMessage, 150); // Assuming simulateTyping is a defined function
        this.removeFile(file);
        return false; // Prevent upload
      }

      if (file.name.length === 17 && file.name.startsWith('16458')) {
        localStorage.setItem("shenfen", "bad");
        window.location.href = "bad.html";
        return false; // Prevent further processing in this function as page is redirecting
      }
    });

    this.on("success", function (file, data) {
      // --- File Upload Success ---
      document.cookie = "uploadedfile=success";

      var uploadedFileNameWithPath = fileplaceSHOW + file.name; // Assuming fileplaceSHOW is defined elsewhere

      if (['作品集.pdf', '简历.pdf', '作品.pdf'].includes(file.name)) { // Use includes for cleaner code
        const message1 = "该文件名<br>容易与其它文件发生冲突，请尽量修改名字";
        document.getElementById("2step").innerHTML = message1;
        document.getElementById("2step").style.color = "green";
        simulateTyping("2step", "可以将文件重新命名之后进行上传", 100); // Assuming simulateTyping is a defined function
        simulateTyping("2step3", "系统中以用此文件名命名的文件已经太多了", 100); // Assuming simulateTyping is a defined function
      }

      document.getElementById("name").value = uploadedFileNameWithPath;
      simulateTyping("2step", "已经成功上传\n 第二步：设置阅读次数和每次阅读的时间", 180); // Assuming simulateTyping is a defined function
      document.getElementById('section1').style.display = 'none';

      const trimmedData = (typeof data === 'string' ? data.trim() : String(data).trim()); // Trim if string, convert to string and trim otherwise
      console.log("Server response data (trimmed):", trimmedData); // Log trimmed data

      if (trimmedData.includes("Duplicate")) {
        alert("如果要修改之前上传文件，请修改一下文件名\n 如果仅是设置新链接，请继续下一步");
 
      }



    });

    this.on("error", function (file, data) {
      // --- File Upload Error ---
      console.error('File upload failed:', file, data); // Log error details for debugging
      let message = '文件上传失败! '; // Default message
      if (file.accepted) {
        // If file was accepted but still error, iterate through error data (assuming it's an object)
        if (typeof data === 'object') {
          for (const key in data) {
            if (data.hasOwnProperty(key) && Array.isArray(data[key])) {
              message += data[key].join(';') + ';'; // Join array values with semicolon
            }
          }
        } else if (typeof data === 'string') {
          message += data; // Append string error message if data is a string
        }
        alert(message); // Display error message to the user - consider a more user-friendly display
      }
    });

    this.on("removedfile", function (file) {
      // --- File Removed (Cancel Upload or Remove Link Clicked) ---
      // AngularJS scope interaction for file deletion (if needed)
      if (appElement && angular.element(appElement).scope()) {
        var file_id = angular.element(appElement).scope().file_id;
        if (file_id) {
          fetch('/admin/del/' + file_id, {
              method: 'DELETE',
            })
            .then(function(response) { return response.text(); })
            .then(function(data) {
              console.log('删除结果:', data); // Log deletion result
            })
            .catch(function(error) {
              console.error('Error deleting file:', error); // Handle deletion error
            });
        }
        angular.element(appElement).scope().file_id = 0; // Reset file_id in AngularJS scope
        // angular.element(appElement).scope().$apply(); // Trigger AngularJS digest cycle if needed after scope update - test if necessary
      }
      var dzDefault = document.querySelector('div .dz-default');
      if (dzDefault) dzDefault.style.display = 'block'; // Show default message again
    });

    // --- init function end ---
  }
});
</script>
      <script>
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 127,
        height : 127,
        colorDark : "#be847d",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });

      function makeCode () {    
        var elText = document.getElementById("myInput");
        if (!elText) return;
        qrcode.makeCode(elText.value);
    // Removed bt usage as it's not defined or needed
      }
      makeCode();
      $("#myInput").
        on("blur", function () {
          makeCode();
        }).
        on("keydown", function (e) {
          if (e.keyCode == 13) {
            makeCode();
          }
        });
    
  const inputElement = document.getElementById("limit");  
    inputElement.addEventListener("change", function(event){
    let userInput = event.target.value;
     //console.log(userInput);
    simulateTyping("cishu","↡打开次数超过1万次即设置为无限次阅读↡", 120);
    if(userInput < 3){
      alert('3为最少可设置的次数');
    }
  });


  simulateTyping("1step","第一步:上传PDF文件", 100);

  function simulateTyping(selectid,text, delay) {
  let index = 0;
  const textarea = document.getElementById(selectid);
  textarea.innerHTML ='';
  function typeNextCharacter() {
  if (index < text.length) {
    const character = text.charAt(index);
    
     if (character === '\n') {
      // Check if there are multiple consecutive new lines
  textarea.innerHTML += '<br>';
      index++;
    } else {
      textarea.innerHTML += character;
      index++;
    }

    setTimeout(typeNextCharacter, delay);
  }
}
  //console.log(text);
  typeNextCharacter();
}

</script>
