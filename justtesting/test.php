<!DOCTYPE html>
<html>
<head>
  <title>List</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <script src="https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.3/js/bootstrap.min.js"></script>
  <link href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet"> 
    <link href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" type="text/css">  
<script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/qrcodejs/1.0.0/qrcode.min.js"></script>
</head>
<body>
<?php
// 设置PHP内部编码
ini_set('default_charset', 'utf-8');
mb_internal_encoding('UTF-8');

// 设置HTTP响应头的字符编码
header('Content-Type: text/html; charset=utf-8');
?>

     <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://maipdf.cn" style="color: white">
            <h1>MaiPDF.com</h1>
          </a>
          <small>File List</small>
        </div>
      </nav>

        <style>
    .container-fluid{
        color:white;
        background-color:hsl(0, 60%, 50%);
    }



  </style>
<div class="container">

 <div class="table-responsive">  
   <table class="table table-dark table-hover">
     
    <thead>
      <tr >
        <th>Reading Code</th> 
        <th>Upload Time</th>
        <th>File Name</th>
      </tr>
    </thead>

  <tbody id="tablebody">
<?php 

//  $riqi2='2021-06-21';
//  $pwd2=55;
  //$riqi2 = date('Y-m-d',$riqi2);
  //$time=strtotime($riqi2);
 // $newformat = date('Y-m-d',$time);

ini_set("display_errors", true);
ini_set("html_errors", true); 


    if (isset($_COOKIE["dc"])){
          session_start();
    }
         

    if (isset($_SESSION["user"])){
          $dengru=$_SESSION["user"];
        
    }else{
           $dengru='wofocibeifox';
           session_destroy();exit('bye');
    }


echo '<div class="alert alert-primary"> Account Balance: $'.$_SESSION["balance"].'</div>';

include_once ('../password.php');
$sql= "SELECT * FROM `block` WHERE `attr`='$dengru' ORDER BY `ip` DESC ";
    //echo $sql;
$conn = new mysqli($servernameMai, $usernameMai, $passwordMai, $dbnameMai);

// 设置数据库连接字符编码为UTF-8
if (!$conn->set_charset("utf8")) {
    // 如果utf8不工作，尝试utf8mb4
    $conn->set_charset("utf8mb4");
}

$value='';

 $sizetotal=$size=0;
    $result=mysqli_query($conn,$sql);$conn->close();
      if (mysqli_num_rows($result)>0) {
         //  echo "yes";
          while($row = mysqli_fetch_assoc($result)){
               $location=$row['ip'];
               $md5=$row['md5'];

          
          
    if(!stristr($location,"%%%%%")){

       
      
        if(strchr($location,".pdf")){
            $location= str_replace("/preview/","/",$location);

          //   $size='/var/www/html/pdf/yes'.$location;
          //   $size=filesize($size)/1024/1024;
          //   $size=round($size,2);
            $filelistname = explode('/',$location);
            $count_raw_name = count($filelistname);
            $tou = $filelistname[$count_raw_name-4].'-'.$filelistname[$count_raw_name-3].'-'.$filelistname[$count_raw_name-2];
        }

//  '-'.$filelistname[$count_raw_name-1]

           


           // $tou = $filelistname;
            $touwei= $filelistname[$count_raw_name-1];
            

            $value =$value.'*'.substr($md5, 2);// 就是所有 阅读码 

         // $fangwen= '<a href="https://maiimg.com/pdf?e='.substr($md5, 2).'" class="card-link">访问该链接</a>';
          $fangwen= '<a href="https://maipdf.com/file/'.substr($md5, 2).'@pdf">'.substr($md5, 2).'</a>';
         if($dengru=='joe' || $dengru=='coookkk' ){
          // $fangwen= '<a href="https://pdf.maitube.com/pdf?e='.substr($md5, 2).'" class="card-link">访问该链接</a>';
           $fangwen= '<a href="https://maipdf.com/file/'.substr($md5, 2).'@pdf">'.substr($md5, 2).'</a>';
         }


           


    echo '<tr>'.'<td>'.$fangwen.'</td>'.'<td>'.htmlspecialchars($tou, ENT_QUOTES, 'UTF-8').'</td>'.'<td>'.htmlspecialchars($touwei, ENT_QUOTES, 'UTF-8').'</td>';

    echo '</tr>';

     }else{
              $picinfo=explode('%%%%%',$location);
              $piclink=explode('#',$md5);
              //$fangwen= '<a href="https://qr.maitube.com/'.$piclink[1].'" class="card-link">'.$piclink[1]</a>';
               $value =$value.'*'.$piclink[1];
          /////////    echo '<h5 class="text-center text-warning">'.$picinfo[0].':<small>'.$picinfo[1].'</small></h5>';
          ///////    echo '<h6 class="text-center">'.$piclink[1].' <small>追踪:'.$piclink[2].'</small></h6><br>';
              
          }
          }
         
     // echo '<h5 class="text-center text-success">PDF总大小 '.$sizetotal.'m</h5>';
      } else {
      //  echo 'nope';

      }
 echo "<script>var dengru = '$dengru';var henduo = '$value';</script>";

  /*if(!strchr("20210-29349-29949#frd#sss","frequent")){
                 echo strchr("20210-29349-29949#fr#sss","frequent").'x';
                 $x=strchr("20210-29349-29949#fr#sss","frequent").'x';
                 echo strlen($x);
               } */
     

?>


    </tbody>
  </table>

<style>
.table-responsive{
  display:block;
  max-height:500px;
  overflow-y:auto;
}
thead th {
 
    position: sticky; top: 0; 
}
</style>





 </div>
       <div class="row mt-5">
           <div class="col-6 text-center">
             <span  class="input-group-addon" id="biaoti">Reading Code: </span>
             <input type="text" class="form-control" id="joeresult" value="">
            </div>

            <div class="col-6 text-center">
            
               <button type="button" class="btn btn-info" onclick="chaxun()">Check Status</button>

               <button type="button" class="btn btn-info" onclick="admove()">Remove Ads</button>
               <br><br>
               <button type="button" class="btn btn-info" onclick="del()">Delete</button>

               <button type="button" class="btn btn-info" onclick="tihuan()">Swap</button>
           

            </div>


             <div class="col-6 text-center" id="mubiao">
             <span  class="input-group-addon">PDF inside link will be swapped to below reading code: </span>
             <input type="text" class="form-control" id="mubiaolink" value="">
            </div>

              <div class="col-6 text-center" id="adkuang">
                  <span  class="input-group-addon">Time Period in Month: </span>
                   <input type="number" class="form-control" id="adyue"  step="1" onchange="jisuan()">
                   <button type="button" class="btn btn-info" onclick="jisuan()">Price Calculation</button>
                   
             </div>



        </div>


</div>






  <script>
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        console.log(`Button ${button.id} clicked`);
        makeCodeweb(button.id);
      });
    });
    
  async function  makeCodeweb(buttonid) {
      document.getElementById('wepayqr').innerHTML ='';
      try {
          var wepayqr = new QRCode(document.getElementById("wepayqr"), {
               width : 228,
               height : 228,
               colorDark : "#000000",
               colorLight : "#ffffff",
               correctLevel : QRCode.CorrectLevel.H
          });

         } catch (error) {
            document.getElementById('wepayqr').innerHTML ='请关闭此窗口重新打开一下';   
         }
      const data = new FormData();
      let md5= dengru +'MaiPDF'+buttonid;
      data.append('thisfile', md5);
      const response = await fetch("../indexpay.php", {
         method: "POST",
         body: data
      });
      try {
         var texttemp = await response.text().then(text => text.trim());
         console.log(texttemp);
        }catch (error) {
       document.getElementById('wepayqr').innerHTML ='I really do nottttt know~~~~';   
      }
       texttemp = 'weixin://wxpay/bizpayurl?pr='+texttemp;
       wepayqr.makeCode(texttemp);
      
  }
  </script>
  
  

  
  
  
  
  
<script>
//console.log(henduo);

if(henduo.length>5){
    var henduo = henduo.split("*");
}else{
    var henduo = 'Nothing';
}
   


document.getElementById("mubiao").style.display = "none";
var miao = 1;

document.getElementById("adkuang").style.display = "none";
var ad = 1;

function jisuan(){
   var adyue = document.getElementById("adyue").value;


   adyue= adyue*2;

   if(adyue>36){

    alert('Max ads removing period is 18 Months!');
    return;
   }


   document.getElementById("biaoti").innerHTML="Price: $"+adyue+' ';  
}

 function chaxun(){

    var yueduma = document.getElementById("joeresult").value;

 hh=henduo.includes(yueduma);
 //console.log(yueduma);console.log(henduo);console.log(hh);
 if(henduo.includes(yueduma)==false){
  alert('not found');
  return ;
 }




        if (window.XMLHttpRequest)
    {
        
        xmlhttp=new XMLHttpRequest();
    }
    else
    {    
        //IE6, IE5 浏览器执行的代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)

        {
            var res=xmlhttp.responseText;
           // alert(res);
            var res = res.split(":");
            document.getElementById("biaoti").innerHTML="Number of opens: "+res[1]+"<br>Each Reading Duration: "+res[0]+"<br>No ads Period: "+res[2];   
        }
    }
    xmlhttp.open("GET","change2.php?chaxun="+yueduma,true);
    xmlhttp.send();
   

 }
 function del(){

    var yueduma = document.getElementById("joeresult").value;

  if(henduo.includes(yueduma)==false){
  alert('not found');
  return ;
 }

        if (window.XMLHttpRequest)
    {
        
        xmlhttp=new XMLHttpRequest();
    }
    else
    {    
        //IE6, IE5 浏览器执行的代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)

        {
            var res=xmlhttp.responseText;
            alert(res);
            //var res = res.split(":");
            //document.getElementById("biaoti").innerHTML="阅读次数: "+res[0]+"<br>每次阅读时长: "+res[1];   

        }
    }
    xmlhttp.open("GET","change2.php?del=yes&chaxun="+yueduma,true);
    xmlhttp.send();
   

 }
function tihuan(){
  
 
 

    if(miao==1){
        document.getElementById("mubiao").style.display = "block";
        miao =2 ;
        return;
    }
    var yueduma = document.getElementById("joeresult").value;
  var mubiaolink = document.getElementById("mubiaolink").value;
 if(henduo.includes(yueduma)==false){
  alert('not found');
  return ;
 }

  if(henduo.includes(mubiaolink)==false){
  alert('not found');
  return ;
 }

        if (window.XMLHttpRequest)
    {
        
        xmlhttp=new XMLHttpRequest();
    }
    else
    {    
        //IE6, IE5 浏览器执行的代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)

        {
            var res=xmlhttp.responseText;

            alert(res);
            document.getElementById("mubiao").style.display = "none";
            miao = 1;
          //  var res = res.split(":");
           // document.getElementById("aer").innerHTML="Email Tracker: <br>"+"<a href=https://grabify.icu/mail/"+res[1]+" target=\"_blank\">https://grabify.icu/mail/"+res[1]+"</a>";
           // document.getElementById("bsay").innerHTML="Tracking Code: "+res[2];
            //document.getElementById("ber").innerHTML="Tracking Link: <br>"+"<a href=https://grabify.icu/"+res[2]+" target=\"_blank\">https://grabify.icu/"+res[2]+"</a>";   

        }
    }
    yueduma=yueduma+'@'+mubiaolink;
    xmlhttp.open("GET","change2.php?ti=yes&chaxun="+yueduma,true);
    xmlhttp.send();
   

 }

 function admove(){

    if(ad==1){
      document.getElementById("adkuang").style.display = "block";
     ad =2 ;
      return;
    }
  var yueduma = document.getElementById("joeresult").value;
  var adyue = document.getElementById("adyue").value;

   if(adyue>18){

    alert('Max ads removing period is 18 Months!');
    return;
   }

  if (window.XMLHttpRequest)
    {
        
        xmlhttp=new XMLHttpRequest();
    }
    else
    {    
        //IE6, IE5 浏览器执行的代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)

        {
            var res=xmlhttp.responseText;
                 res=res.replace(/\s+/g,'').trim();
            alert(res);
            document.getElementById("adkuang").style.display = "none";
            ad= 1;
        
        }
    }
    //yueduma=yueduma+'@'+mubiaolink;
    //alert(adyue);
    xmlhttp.open("GET","change2.php?ad=yes&chaxun="+yueduma+'&adyue='+adyue,true);
    xmlhttp.send();
   

 }

</script>
</body>
</html>