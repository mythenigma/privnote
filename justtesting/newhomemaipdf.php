

<?php 

 //ini_set("display_errors", true);
 //ini_set("html_errors", false); 

// Initialize variables to prevent undefined variable warnings
$identifier = '';
$messagebox = "Don't forget <span style='color:green';> Create</span> in Step2";
$pdflinkshort = "";
$pdflinkfull = "";
$formSubmitted = false; // Flag to track if form has been submitted

$year= date("Y");
$month= date("m");
$week=  date("d");
          


   
//英文版只有一个地址
$fileplaceSHOW="/".$year."/".$month."/".$week."/";
$fileplace="yes/".$year."/".$month."/".$week."/";
// $picplace  = "yes/".$year."/".$month."/".$week."/preview/";
$encryfile='';
  
   
// 369 行也有 badlist 在上传前检查
if (isset($_COOKIE["shenfen"])){
   if($_COOKIE["shenfen"]=='badd'){exit('Not available to you=== joe@pdfhost.online');}
}


 
    $ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
      if(strlen($ip)<1){
       $ip = $_SERVER['REMOTE_ADDR'];
      }

if (isset($_COOKIE["dc"])){
      session_start();
}else{
  //echo 'mai';
}
     

if (isset($_SESSION["user"])){
      $dengru=$_SESSION["user"];
    
}else{
     $dengru='wofocibeifox';
     //session_destroy();
     if (session_status() === PHP_SESSION_ACTIVE) {
        session_destroy();
      }
}

echo "<script>var dizhi = '$ip';var dengru = '$dengru'; var fileplaceSHOW='$fileplaceSHOW'; </script>";




//$cookiehour =  date("G");
//$timesqure= $_COOKIE['usertime2'];



if(!isset($_SERVER['HTTPS'])){
  
   $url= 'https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
   header("Location: $url");
   exit();
}
$br=$_SERVER['HTTP_USER_AGENT'];

//echo $url.$agenter.$ip;




?>




<!DOCTYPE html>
<html>

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  
  
  <meta name="author" content="MaiPDF">
  <title>Share PDF with expiration time and restrictions</title>
  <script type="text/javascript" src="qrcode.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Share PDFs online securely with features like setting open limits, converting to QR codes, tracking access logs, and preventing PDF forwarding. Protect your documents with ease.">

<meta name="keywords" content="PDF online sharing, set PDF open limit, convert PDF to QR code, view PDF access logs, prevent PDF forwarding">
  
  <script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.3/js/bootstrap.min.js"></script>
  <link href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet"> 
  
  
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css" rel="stylesheet" type="text/css">
<script src="https://cdn.jsdelivr.net/npm/dropzone@5.9.3/dist/dropzone.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dropzone@5.9.3/dist/dropzone-amd-module.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dropzone@5.9.3/dist/dropzone.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/dropzone@5.9.3/dist/basic.css">
 <script>
   var d = new Date();
   document.cookie ="usertime="+d.getHours();
   document.cookie ="usertime2="+encodeURI(d);
   d=d+'maipdf';
    if(d.indexOf("0800")<1){  
    //window.location.href = "https://maipdf.com/pdf/boot.php";
    }else{
    filterstrings = ['台','香','新','sin','hong','sg','tw','hk','臺'];
    regex = new RegExp( filterstrings.join( "|" ), "i");  
    if(regex.test(d)){
      //window.location.href = "https://maipdf.com/pdf/boot.php";
    }
    }
</script>

    <style>

          
      .b-example-divider {
        height: 2rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      @media (min-width: 992px) {
        .rounded-lg-3 { border-radius: .3rem; }
      }
    </style>


</head>

<bod y id="page-top">

     <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="maipdf.php" style="color: white">
            <h1>MaiPDF.com</h1>
          </a>
          <small>Share PDF Online</small>
        </div>
      </nav>

  <style>
    .container-fluid{
        color:white;
        background-color:hsl(0, 60%, 50%);
    }
  
  </style>

  <!-- Masthead -->
    <section class="py-2 text-center container">
    <div class="row py-lg-3" id="MayBegrabify" >
      <div class="col-lg-6 col-md-8 mx-auto" id="diyi">
        


  <div id="userInfo" style="margin-top: 20px;"></div>


       
          <button type="button" class="btn btn-danger"  id="loginBtn">
            Login
          </button>
          <button class="btn btn-outline-info my-2" id="logoutBtn" style="display:none;">Log Out</button>
      
          <a href='../6/list.php' class='btn btn-outline-dark my-2' id="controlpanel" style="display:none;">Control Panel</a>
        </div>
      </div>

  </section>  
       <ul class="breadcrumb">
          <li class="breadcrumb-item"><a class="link-secondary" href="https://maipdf.com/est/k6776416f71665@pdf">FenceView</a></li>
          <li class="breadcrumb-item"><a class="link-secondary" href="https://maipdf.com/est/a677641030889c@pdf">SafeLink</a></li>
          <li class="breadcrumb-item"><a class="link-secondary" href="https://maipdf.com/est/d67764148dd446@pdf">OpenLink</a></li>
         
    </ul>

  <div class="b-example-divider"></div>

    <section class="py-4 text-center container" id="section1">

    <div class="row py-lg-4" id="grabify" >
      <div class="col-lg-6 col-md-8 mx-auto">
        <h5 class="fst-italic" id="1step">1: Upload File</h5>
        <p class="lead text-body-secondary">
           <br>
          <div class="form-group">
             <label class="title" id="pleaseupload"></label>
             <div id="dropz" class="dropzone" style="font-weight:900;border-style:dashed;border-width:5px;background-color:hsl(0, 66%, 80%);"> </div>
          </div>
             <input type="hidden" name="file_id" ng-model="file_id" id="file_id"/>
        </p>
      </div>
    </div>
  </section>       

  

  <section class="page-section" id="section2">
    <div class="b-example-divider"></div>
    <div class="container">
  <form   role="form" action="newhomemaipdf.php" method="post">
      <h5 id="2step" class="text-center mt-5">2：Set Up reading times and each period of length</h5>
     
     <br><br>
          <p class="text-muted mb-0"> 
       <input type="text" class="form-control text-center" id="name" name="sender" value="File" readonly="readonly">
      </p>
      <div class="row" id="2step3" >

        <div class="col-lg-3 col-6 text-center">
          <div class="mt-5">
           
            <p class="text-muted mb-0">
               <i class="fas fa-2x fa-folder-open text-danger mb-0"></i><br>Access Limit
              <input class="form-control"  type="number"  id="limit" name="limit" placeholder="Number of Open">
            </p>

            <p class="text-muted mb-0">
              <i class="fas fa-2x fa-user-clock text-danger mb-0"></i>Each Session
              <input class="form-control"  type="number"  name="password" placeholder="in (seconds)">
            </p>

          </div>
        </div>
   
        <div class="col-lg-3 col-6 text-center">
          <div class="mt-5">
            <i class="fas fa-4x fa-lock text-danger mb-4"></i>
            <br><small>
              <input class="form-check-input" type="checkbox" name="darkmode" value="yes" >
                    <label class="form-check-label" for="mySwitch">Dynamowatermark</label>
          </small>
      <br>
          <label class="radio-inline">
          <input type="radio" name="zhangai" value="straight" checked>SecureView
        </label>
        <label class="radio-inline">
          <input type="radio" name="zhangai" value="obstacle">FenceView
        </label>
         <br><label class="radio-inline">
          <input type="radio" name="zhangai" value="topen">Unrestricted
        </label>
           
          </div>
        </div>
    
<!-- Optional Setting: Email Verification -->
<div class="col-lg-3 col-6 text-center">
    <div class="mt-5">
        <i class="fas fa-4x fa-shield-alt text-danger mb-4"></i>
        <p class="h6 mb-2">Enable Email Verification</p>
        <p class="text-muted mb-0">
            <input class="form-check-input" type="checkbox" id="enableEmailValidation" name="enableEmailValidation" value="yes">
            <label class="form-check-label" for="enableEmailValidation">Require email verification</label>
        </p>

        <!-- Input up to 50 email addresses (hidden by default) -->
        <div id="emailAddressesInput" style="display: none;">
            <p class="text-muted mb-1">
                <textarea class="form-control" name="emailAddresses" placeholder="Enter up to 50 email addresses, separated by commas" rows="5"></textarea>
            </p>
        </div>
    </div>
</div>

<!-- Use JavaScript to toggle email input visibility -->
<script>
    document.getElementById("enableEmailValidation").addEventListener("change", function() {
        var emailInput = document.getElementById("emailAddressesInput");
        if (this.checked) {
            emailInput.style.display = "block"; // Show email input
        } else {
            emailInput.style.display = "none"; // Hide email input
        }
    });
</script>







      <div class="col-lg-3 col-6 text-center">
          <div class="mt-5">
            <i class="fas fa-4x fa-bell text-danger mb-1"></i>
            <br><small>ReadNotify</small>
       <p class="text-muted mb-1"><input class="form-control"  type="text"  name="mailalert" placeholder="@ - optional"></p>
            
       <p class="text-muted mb-1"><input type="submit" value="Create" class="btn btn-danger"></p>
          </div>
        </div>
    
      </div>
    </form>
    </div>
  </section><h6 class="text-center" id="cishu">↡Unlimited open will be applied if 'Access-Limit' is over 10k,and no access record will be logged↡</h6>
 



<div class="b-example-divider"></div>





  


  <!-- <div class="b-example-divider"></div> About Section <div class="alert alert-danger">德国网站,国内速度慢</div>-->




<script>
  document.cookie="uploadedfile=notyet"; 
var zhuceid=1;
//setInterval(zhucece, 1000);
  function zhucece(){
  
  if(zhuceid==1){
   document.getElementById("zhuce").className = "btn btn-warning btn-xl js-scroll-trigger";
   zhuceid=2;
  }else{
    document.getElementById("zhuce").className = "btn btn-danger btn-xl js-scroll-trigger";
    zhuceid=1;
  }
  }



  var bt='xxx';
  var appElement = document.querySelector('div .inmodal');



    var myDropzone = new Dropzone("#dropz", {
         url: "onlyupload.php",//文件提交地址
        method:"post",  //也可用put
        paramName:"file", //默认为file
        maxFiles:1,//一次性上传的文件数量上限
        maxFilesize: 82, //文件大小，单位：MB
    //chunking: true,
    //forceChunking: true,
    //chunkSize: 256000,
    //retryChunks: true,
       // retryChunksLimit: 3,
      
        acceptedFiles: ".png,.jpg,.jpeg,.gif,image/*,.pdf",
        addRemoveLinks:true,
    //retryChunksLimit: 3,
        parallelUploads: 1,//一次上传的文件数量
        //previewsContainer:"#preview",//上传图片的预览窗口
        //dictDefaultMessage:'拖动文件至此或者点击上传 <br><br><small style="font-style: italic;">建议上传之前自行压缩一下</small>  ',
        dictDefaultMessage:'Choose File<br><small style="font-style: italic;">Or Drop File Here</small> ',
        dictMaxFilesExceeded: "One File！",
        dictResponseError: 'Failed!',
        dictInvalidFileType: "only with *.pdf,*.png,*.jpeg。",
        dictFallbackMessage:"You have an Antique Browser",
        dictFileTooBig:"Reach Size Limit.",
        dictRemoveLinks: "Delete",
        dictCancelUpload: "Cancel",
        timeout: 190000,
        


        init:function(){
            this.on("addedfile", function(file) {
                //上传文件时触发的事件
                document.querySelector('div .dz-default').style.display = 'none';
        if(file.name.endsWith('.PDF')){
          alert('.PDF extention cannot be in Capital');
          return false;
        }
        if(file.name.includes('#')){
          alert('Remove the Special character in File Name');
          simulateTyping("pleaseupload","Remove the Special character in File Name", 180);
          return false;
        }
        //console.log(file.name.length);console.log(file.name);console.log(file.size/1024/1024);
        if(file.size/1024/1024 > 80){
          simulateTyping("pleaseupload","Please Upload Pdf files within 90M", 150);
          return false;
        }
        if(file.name.length== 17 && file.name.startsWith('16458')){
          localStorage.setItem("shenfen", "bad");
          window.location.href = "../bad.html";   
        }
            });
            this.on("success",function(file,data){
        
        //console.log('upload good');
            document.cookie="uploadedfile=success"; 
            //document.getElementById('anquan').click();
      
            var a = fileplaceSHOW + file.name;

            if(file.name=='作品集.pdf' || file.name=='简历.pdf'|| file.name=='作品.pdf'){
          document.getElementById("2step").innerHTML ="该文件名<br>容易与其它文件发生冲突，请尽量修改名字" ;
          document.getElementById("2step").style.color="green";
          simulateTyping("2step","可以将文件重新命名之后进行上传", 100);
          simulateTyping("2step3","系统中以用此文件名命名的文件已经太多了", 100);
         
      
        }
        document.getElementById("name").value =a ;
       // document.getElementById("pleaseupload").innerHTML ="已经上传成功" ;
       simulateTyping("2step","Uploaded Successfully\n Second Step：Set Up reading times and each period of length", 180);//simulateTyping("2step","第二步：设置阅读次数和每次阅读的时间", 100);
        document.getElementById('section1').style.display='none';
        //document.getElementByClassName("dz-progress").style.opacity="0.1";
        
        //angular.element(appElement).scope().file_id = data.data.id;
            });
            this.on("error",function (file,data) {
                //上传失败触发的事件
                console.log('fail');
                var message = '';
                if (file.accepted){
                    $.each(data,function (key,val) {
                        message = message + val[0] + ';';
                    })
                    alert(message);
                }
            });
            this.on("removedfile",function(file){
                //删除文件时触发的方法
                var file_id = angular.element(appElement).scope().file_id;
                if (file_id){
                    $.post('/admin/del/'+ file_id,{'_method':'DELETE'},function (data) {
                        console.log('Deleted:'+data.message);
                    })
                }
                angular.element(appElement).scope().file_id = 0;
                document.querySelector('div .dz-default').style.display = 'block';
            });

            //return 0;
        }
    });

</script>
     

     
    <?php    date_default_timezone_set('etc/gmt-8');
    // Initialize variables to prevent undefined variable warnings if not already set
    if (!isset($identifier)) $identifier = '';
    if (!isset($messagebox)) $messagebox = "Don't forget <span style='color:green';> Create</span> in Step2";
    if (!isset($pdflinkshort)) $pdflinkshort = "";
    if (!isset($pdflinkfull)) $pdflinkfull = "";
    
  if(isset ($_POST['limit']) ){
     $formSubmitted = true; // Set the form submission flag
     $limit= htmlspecialchars($_POST['limit']);
      if(isset ($_POST['password']) ){
           $password=htmlspecialchars($_POST['password']);
      // echo $_SESSION["url"];
             if($password<30 || $limit<1){
              
                exit("<script>
                 document.getElementById(\"diyi\").className=\"text-warning\";
                   document.getElementById(\"diyi\").innerHTML = 
                \"Reading Session too Short<br>or open limit not set<br>Please Retry.....\";</script>");
                }
        $url = $_POST['sender'];
        $zhangai = $_POST['zhangai'];
        // Add debug message to help troubleshoot
        echo "<script>console.log('Form submission processing: URL=" + $url + ", Protection=" + $zhangai + "');</script>";
        // Generate a unique identifier
        $identifier=uniqid();
    
    
    
    
    
      //$identifier=md5($identifier);
       // echo substr($url, -3);

if($_COOKIE["uploadedfile"]=="notyet"){
  exit("<script>
                 document.getElementById(\"2step\").className=\"text-danger\";
                 document.getElementById(\"2step\").innerHTML = 
               \"Please do not refresh the page<br>Reopen it instead\";


document.getElementById(\"2step3\").innerHTML = 
                \"Please do not refresh the page<br>Reopen it instead\";

                </script>");
}else{
  //echo $_COOKIE["uploadedfile"];
}


        if(substr($url, -3) != 'pdf'){

          exit();
        }
            
         if($password>99999999){
          $password=99999999;
         }
         if($limit>99999999){
          $limit=99999999;
         }
if(isset ($_POST['mailalert']) ){
    $mailalert=$_POST['mailalert'];
  

  
  
      $injectionChars = array( '(', ')','/', '*', '%','&', "'", '#');
   foreach ($injectionChars as $char) {
        if (strpos($mailalert, $char) !== false) {
          $mailalert='1998';
        }
    } 
  
}else{
  $mailalert='1998';
}

// 获取用户输入的邮箱列表（逗号分隔）
$emailAddresses = $_POST['emailAddresses'] ?? '';
$emailAddresses = trim($emailAddresses);

// 将中文逗号替换为英文逗号
$emailAddresses = str_replace('，', ',', $emailAddresses);

// 计算字节长度
$byteLength = strlen($emailAddresses);

// 检查字节长度是否超过 3500 字节
if ($byteLength > 3500) {
    echo "输入的邮箱列表过长，不能超过 3500 字节。";
    $emailAddresses = null;
} else {
    // 拆分为数组
    $emailArray = explode(',', $emailAddresses);

    $valid = true;
    if (count($emailArray) > 50) {
        $valid = false;
    } else {
        foreach ($emailArray as $email) {
            $email = trim($email);
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $valid = false;
                break;
            }
        }
    }

    if (!$valid) {
        $emailAddresses = null;
    }
}


      if($zhangai=='obstacle'){
          // $identifier=crypt($identifier,'jy').'6';
        $identifier='k'.$identifier;
          // $pdflinkshort= "maifile.cn/pdf/".$identifier.".pdf";
                // $pdflinkfull="https://maifile.cn/pdf/".$identifier.".pdf";
        
       }elseif($zhangai=='topen'){
        //$identifier=crypt($identifier,'dy').'6';
        $identifier='d'.$identifier;
        //$pdflinkshort= "maifile.cn/pdf/".$identifier.".pdf";
                //$pdflinkfull="https://maifile.cn/pdf/".$identifier.".pdf";
       }else{
                 //$identifier=crypt($identifier,'ay').'6';
         $identifier='a'.$identifier;
                // $pdflinkshort= "maifile.cn/pdf/".$identifier.".pdf";
                // $pdflinkfull="https://maifile.cn/pdf/".$identifier.".pdf";
         if($dengru == 'wofocibeifox'){
          //  $pdflinkshort= "maifile.cn/pdf/".$identifier.".pdf";
                   //   $pdflinkfull="https://maifile.cn/pdf/".$identifier.".pdf";
         }
       }
       $pdflinkshort= "maipdf.com/file/".$identifier."@pdf";
       $pdflinkfull="https://maipdf.com/file/".$identifier."@pdf";


          if($dengru=='joe' || $dengru=='zhuzhuxia' ){
             
            }
           

        


        if($zhangai!='topen'){
          $encryfile='yes'.$url;
            if (!file_exists($encryfile)) {
        
              exit('Unkown Reason');
        //echo 'no exit';
            } 
           // echo filesize($encryfile) ;
        


        if(filesize($encryfile) < 3797152  ){

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

        $mpdf->SetProtection(array(), 'guaguashimaimai', 'qweewqer');
        
        $mpdf->Output($encryfile, \Mpdf\Output\Destination::FILE);
      
        }
        catch(Exception $e)
         {
        // echo 'Message: ' .$e->getMessage();
        // echo "~~~~";
         }
      }

      }else{
      echo 'open';
    }


    //setcookie("uploadsession", "yiwancheng","/");
      $messagebox='Your Reading link is Created';      if(substr($url, -3)== 'pdf'){
      //$conn= new mysqli("213.136.92.253","joe","JOEjoe123","record");
 include_once ('../password.php');
 $conn = new mysqli($servernameMai, $usernameMai, $passwordMai, $dbnameMai);
 if($conn->connect_error){
    die("CANNOT INSERT");
}
      $day=date('Y-m-d');
      $url = str_replace("'","\'",$url);
      if(isset($_POST['darkmode'])) {
      $allurl = 'water'.$url;  
    } else {
      $allurl = $url;
    }
     
     //$sqlcopy="INSERT INTO `pdf_copy` VALUES('$identifier','$url',$password,$limit,'$day','$mailalert')";
       $sql="INSERT INTO `pdf` VALUES('$identifier','$allurl',$password,$limit,'$day','$mailalert','$emailAddresses')";
    
      // Add a debug message to console to trace variables
      echo "<script>console.log('Database insert - identifier: ".$identifier."', 'URL: ".$url."', 'Link Full: ".$pdflinkfull."');</script>";

    
 
      if($dengru == 'wofocibeifox'){
          $sqlres="INSERT INTO `block`(`ip`,`md5`,`attr`) VALUES('$ip','$url','pdf') ON DUPLICATE KEY UPDATE `number` = 1";
      }else{   
           $sqlres="INSERT INTO `block`(`ip`,`md5`,`attr`) VALUES('$url','m#$identifier','$dengru') ON DUPLICATE KEY UPDATE `number` = 1";
      }   //echo  "<script>  var at='".$identifier."';var bt='".$identifier."';var place='".$url."';</script>";
   echo "<script> document.getElementById('section2').style.display='none'; document.getElementById('section1').style.display='none';var at='".$identifier."';var bt='".$identifier."';var place='".($url ?? '')."';</script>";
    
      $result=mysqli_query($conn,$sql);
    //mysqli_query($conn,$sqlcopy);
      $resultres=mysqli_query($conn,$sqlres);
      $conn->close();
      
      }else{
       // echo $url; exit();  
      }
     




     }
    }
  ?>
     <!--  <h2 class="mb-4">Your Reading is Created</h2>-->
   
   
   
   
   <!-- 模态框 HTML 结构 -->
<div class="modal fade" id="chinaRedirectModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">访问优化建议</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>检测到您可能位于中国大陆，推荐访问中文站点获得更快的访问速度！</p>
        <p>当前站点：国际站（全球加速）</p>
        <p>推荐站点：中文站（中国大陆优化）</p>
      </div>
      <div class="modal-footer">
        <a 
          href="https://maipdf.cn/maifile.php" 
          class="btn btn-danger"
          target="_blank"
          rel="noopener"
        >
          🇨🇳 立即访问中文站
        </a>
        <button 
          type="button" 
          class="btn btn-secondary" 
          data-bs-dismiss="modal"
        >
          继续留在国际站
        </button>
      </div>
    </div>
  </div>
</div>

<script>
// 初始化模态框
document.addEventListener('DOMContentLoaded', function() {
  // 检测逻辑
  const isChinese = () => {
    const lang = navigator.language.toLowerCase();
    const langs = navigator.languages?.map(l => l.toLowerCase()) || [lang];
    return langs.some(l => l === 'zh-cn' || l.startsWith('zh-hans'));
  };

  const isChinaTimeZone = () => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (['Asia/Shanghai', 'Asia/Chongqing', 'Asia/Urumqi'].includes(tz)) return true;
    } catch(e) { /* 兼容处理 */ }
    return new Date().getTimezoneOffset() === -480;
  };

  // 符合条件时弹出模态框
  if (isChinese() && isChinaTimeZone()) {
    const modal = new bootstrap.Modal('#chinaRedirectModal', {
      backdrop: 'static',  // 禁止点击背景关闭
      keyboard: false      // 禁止ESC关闭
    });
    modal.show();
  }
});
</script>
   
   
   
   
   
   
   
   
   
   
   
   
     <!-- Contact Section - Only shown after form submission -->
  <section class="page-section" <?php echo (isset($formSubmitted) && $formSubmitted && isset($pdflinkfull) && strlen($pdflinkfull) > 0) ? '' : 'style="display:none;"'; ?> >
    <div class="container" id="contact">
      <h5 id="3step" class="text-center mt-5">3：URL and QR created</h5>
      <div class="row">
            <div class="col-md-6 col-12 text-center">
              <div class="mt-5">            <h6 class="mt-0" id="contact"><?php echo isset($pdflinkshort) ? $pdflinkshort : ''; ?></h6>
            <input type="text" value="<?php echo isset($pdflinkfull) ? $pdflinkfull : ''; ?>" id="myInput" >    
            <p class="text-muted mt-0">            <h5 id='Copied'></h5>
            <button class="btn btn-outline-danger" onclick="myFunction()">Copy This Link</button>         
            <h6 class="mt-0"><?php echo isset($messagebox) ? $messagebox : ''; ?></h6>
            <h5 class="mb-0">Password："<?php $identifier2= isset($identifier) ? 'joe'.$identifier : 'joe'; strlen(isset($identifier) ? $identifier : '') < 2 ? print 'To Del.MOD Link': print crypt($identifier2,'su');  ?>"</h5>
            

         <a class="btn btn-info btn-xl" href="https://www.maipdf.com/pdf/hahachange.php" target="_blank">Change File</a>
                 <a class="btn btn-outline-dark" href="https://maipdf.com/pdf/haha.php"  target="_blank">Access Records</a>
              </div>
            </div>
            <div class="col-md-6 col-12  text-center">
              <div class="mt-5">
         
             <div id="qrcode" class="btn btn-default btn-xl"></div>
             <p><small>Scan QR Code To Read</small></p>
              </div>
            </div>
      </div>
    </div>
  </section>
<script>
//<a href='6/list.php' class='btn btn-outline-info my-2'>访客使用</a>








        xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            var res=xmlhttp.responseText;
            n=res.indexOf("hot");
            console.log(res);
             if(n>1){
              if (typeof(Storage) !== "undefined") {
                   localStorage.setItem("shenfen", "bad");
                    // Code for localStorage/sessionStorage.
                  } 
             window.location.href = "../bad.html";
             return false;
             }
             localStorage.setItem("shenfen", "princess");

        }
    }

    if (typeof(Storage) !== "undefined") {
       var goodbad=localStorage.getItem("shenfen");
         if(goodbad=='bad'){
           window.location.href = "../bad.html";  
          }else{
            //console.log(dizhi);document.getElementById("pleaseupload").innerHTML ="已经上传成功" ;
          document.getElementById("pleaseupload").innerHTML =dizhi+'<a  href="https://grabify.icu/#findanip" style="color:black" target="_blank"><small>-IP_Search</small></a>' ;
          xmlhttp.open("GET","../log.php?pic="+dizhi,true);
          xmlhttp.send();
         console.log(goodbad); 
          }
    }




    function myFunction() {
  /* Get the text field */
 
  var copyText = document.getElementById("myInput");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  document.getElementById("Copied").innerHTML = "Copied";
}
</script> 
  <!-- Footer -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9224406325142860" crossorigin="anonymous"></script>
<!-- 2024May -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9224406325142860"
     data-ad-slot="5762096909"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
  <footer class="bg-light py-2">
    <div class="container">
      <div class="small text-center text-muted">Copyright &copy; 2025 - MaiPDF</div>
     
    </div>
  </footer>

 




      <script>
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 127,
        height : 127,
        colorDark : "#be847d",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });      function makeCode () {    
        var elText = document.getElementById("myInput");
        if (elText && elText.value) {
            qrcode.makeCode(elText.value);
        }
    if (typeof bt !== 'undefined' && bt !== 'xxx'){
      simulateTyping('cishu','↡Please review the following generated results.↡\n If you need to generate a new link, please refresh the page.', 120);
    }
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
    
    
    
    
    //   https://item.taobao.com/item.htm?spm=a230r.1.14.1.7c9164aayLxd0o&id=675533071609
    
    

  const inputElement = document.getElementById("limit");  
    inputElement.addEventListener("change", function(event){
    let userInput = event.target.value;
     //console.log(userInput);
    simulateTyping("cishu","↡Unlimited open will be applied if 'Access-Limit' is over 10k,and no access record will be logged↡", 120);
    if(userInput < 3){
      alert('3 is the Least Number');
    }
  });


  simulateTyping("1step","1: Upload your PDF file", 100);

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

    // Move cursor to the end of the textarea
   // textarea.setSelectionRange(index, index);

    setTimeout(typeNextCharacter, delay);
  }
}
  //console.log(text);
  typeNextCharacter();
}

</script>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
    import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyA-Y2zgMaXR08CYjS3HrucYi9xlcMr2_wQ",
      authDomain: "maipdf-login.firebaseapp.com",
      projectId: "maipdf-login",
      storageBucket: "maipdf-login.firebasestorage.app",
      messagingSenderId: "150464233488",
      appId: "1:150464233488:web:b365ab4e4a52eca157ca95",
      measurementId: "G-997G0FQK2H"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"  // 每次都强制弹出账号选择框
});
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const userInfo = document.getElementById("userInfo");
    const controlBtn = document.getElementById("controlpanel");
    // 登录按钮
    loginBtn.addEventListener("click", async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("登录成功：", user);

        // 调用你的后端注册接口
        fetch("../6/firebase-register.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: user.email,
            uid: user.uid
          })
        }).then(res => res.json()).then(data => {
          console.log("✅ 注册接口返回：", data);
        });

      } catch (error) {
        console.error("❌ 登录失败：", error);
      }
    });

    // 登出按钮
    logoutBtn.addEventListener("click", async () => {
      try {
        await signOut(auth);
        console.log("✅ 已登出");
        location.reload(); // 简单刷新清除状态
      } catch (error) {
        console.error("❌ 登出失败：", error);
      }
    });

// 状态监听（页面加载自动判断是否已登录）
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    controlBtn.style.display = "inline-block";

    userInfo.innerHTML = `
      <p>👤 Welcome Back：<strong>${user.email}</strong></p>
    `;

    // ✅ 登录后，把 email 和 uid 发给 PHP，写入 session
    fetch("../6/firebase-session-login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        uid: user.uid
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === "ok") {
        //console.log("✅ PHP session 已写入，用户验证通过");
        // 你可以在这里执行自己的 UI 控制或跳转逻辑
      } else {
        console.warn("⚠️ 用户验证失败：", data);
        // 后续处理放你自己逻辑里
      }
    })
    .catch(err => {
      console.error("❌ 发送请求失败：", err);
    });

  } else {
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    controlBtn.style.display = "none";
    userInfo.innerHTML = `<p>Guest</p>`;
  }
});

  </script>

</body>

</html>
