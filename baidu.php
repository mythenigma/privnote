<?php
// CORS 头部，允许主站和带 www 的域名跨域访问
$allowed_origins = [
    'https://privnote.chat',
    'https://www.privnote.chat'
];
if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
}
// 处理预检请求
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// 调试信息 - 记录 Cookie 和请求方法
error_log("Request Method: " . $_SERVER['REQUEST_METHOD']);
if(isset($_COOKIE['myth'])) {
    error_log("Cookie myth value: " . $_COOKIE['myth']);
} else {
    error_log("Cookie myth not set");
}

// 设置字符编码，确保中文等多字节字符正常显示
header('Content-Type: text/html; charset=UTF-8');
mb_internal_encoding('UTF-8');
mb_http_output('UTF-8');
mb_regex_encoding('UTF-8');
mb_language('uni');

// 设置文件操作的本地化编码
setlocale(LC_ALL, 'en_US.UTF-8');

// ----------------------
// Privnote.chat 便签读取与销毁接口
// ----------------------

// 处理 GET 请求：用于初次访问链接，设置 cookie 并重定向

if(isset ($_GET['e'])){
    $email=htmlspecialchars($_GET['e']);
    setcookie('cookiefilenumber', $email, time() + (20), "/");
    header("Location: /");  
    exit();
  } 
//echo time();
  ini_set("display_errors", true);
  ini_set("html_errors", true); 

  if(isset ($_POST['e'])){
    $email=htmlspecialchars($_POST['e']);
    $nametxt = $email;
    $email = intval($email) - 123456789;

    $year  =   substr(strval($email), 0, 4);
    $month =   substr(strval($email), 4, 2);
    $week =    substr(strval($email), 6, 2);
    $file_path = '/var/www/html/pdf/yes/'.$year.'/'.$month.'/'.$week.'/'.$nametxt.'.txt';
    //echo $email.":".$year.":".$month.":".$week;

  if (file_exists($file_path)) {
   
    $file_lines = file($file_path);
    $firstline= $file_lines[0];
    $firstLine = trim($file_lines[0]); // removes the newline character from the first line
 
    if ($firstline[0]== '-'){
      //exit('filedestoryed');
      $timediff = substr($firstline, 1);
      $timediff = intval($timediff);

      echo time() - $timediff;
      exit();
    }
     $file_lines   =  array_slice($file_lines, 1);
     $file_content =  implode("", $file_lines);
	 	if(isset ($_POST['mudi'])){
           $mudi=htmlspecialchars($_POST['mudi']);
		   if($mudi == 'y'){
			   echo $file_content;
			   $readyin = '-'.time();
			   file_put_contents($file_path,$readyin);
			   exit();
		   }
		}
	 if ($firstline[0]== '1'){
			$timegap = 60*60;
		}elseif($firstline[0]== '2'){
			$timegap = 60*60*24;
		}elseif($firstline[0]== '0'){
			$timegap = 0;
		}elseif($firstline[0]== '3'){
			$timegap = 60*60*24*7;
		}else{
			$timegap = 60*60*24*24;
		}
	   $originalTime =  explode('æ', $firstline);
       $mythline    =  $originalTime;            // array复制
       $mythline[2] =  'mythenigma'; 
       $mythenigma   =  $originalTime[2]; // 原文密码
       $originalTime =  $originalTime[5];  // 文件生成时间
       
       $originalTime = intval($originalTime);
       

      $copyoforiginaltime = $originalTime;

       $originalTime = time() - $originalTime - $timegap;
    if($mythenigma != 'mythenigma'){
       	if (isset($_COOKIE['myth'])) {
		  $cookie_value = $_COOKIE['myth'];
		  error_log("处理密码保护笔记，cookie值: " . $cookie_value);
		  // 支持两种cookie值: 'ok'（客户端设置）和'12345'（服务器更新）
		  if($cookie_value != 'ok' && $cookie_value != '12345'){
		    error_log("Cookie值无效: " . $cookie_value);
		  	exit('18æ1æ'.$mythenigma);
		  }else{
		  	// 设置更长的过期时间，确保在整个会话期间有效
		  	error_log("Cookie验证成功，设置新cookie");
		  	setcookie('myth', '12345', time() + 3600, '/', '', false, true);
			
				$firstLine = implode('æ', $mythline);
			
		  }
		}else{
			// 没有设置cookie，返回错误代码和密码
			error_log("未找到myth cookie");
			exit('19æ1æ'.$mythenigma);
		}

       	
  }
	 
	 
	 
	if ($firstline[0]== '0'){
		
		
	  // 符合阅后即焚的特征， 现在其实是不能删除的。
      echo $firstLine.'æ';
	    exit();

	
	}else{



        if($originalTime < 0){
        	//echo '##'.$originalTime;
        	$originalTime = 0-$originalTime;
            echo $firstLine.'æ'.$originalTime.'æ'.$file_content;
            exit();
           // 最后一部分, 是有效期内的
        }else{
        	

        	  $readyin = $copyoforiginaltime+$timegap;// 预订被删除的时间
            $readyin = '-'.$readyin;
            //$readyin = '-'.time();
            echo $originalTime;
            file_put_contents($file_path,$readyin);//六月二号
            exit();
        	// 进行写入 表示 这个可以删除了

        }
	}
			
	 
	 
    } else {
     exit('filenotexist'); 
    }

  }

?>
