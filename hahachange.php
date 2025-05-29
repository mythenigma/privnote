<?php 
if(!isset($_SERVER['HTTPS'])){
   $url= 'https://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
   header("Location: $url");
}

//echo "mm//1EEOSlMcM<br>";

//echo crypt("joemm//1EEOSlMcM","su").'<br>';
//echo crypt("joempAhCIzvy/X9.","su").'<br>';
//$passcodes=htmlspecialchars($_POST['passcode']);

if((isset($_POST['email']))&& (isset($_POST['email2'])) && isset(($_POST['pwd']))&& (isset($_POST['pwd2']))){
	
	//echo "part 1";
   $email = htmlspecialchars($_POST['email']);
   $email2 = htmlspecialchars($_POST['email2']);
   $pwd = htmlspecialchars($_POST['pwd']);
   $pwd2 = htmlspecialchars($_POST['pwd2']);
  
   
  //if($email2=='grace' && $pwd2=='grace'){
   if($email2=='grace'){
    $emailcode= 'joe'.$email;
    $good1=crypt($emailcode,'su');

    if($pwd=='joe'){
      $pwd2=(int) $pwd2;
      if($pwd2==0){ $pwd2=1;}
      $pwd2=35*$pwd2;
      echo $pwd2.'<br>';
      $day=date('Y-m-d');
      $endday = date('Y-m-d',strtotime('+'.$pwd2.' day'));
      //echo $endday;
      $day=$day.'@'.$endday;
      echo $day;
     // exit();

       $number=$pwd2;
      // if($email[1]!='g' || $email[1]!='n'){
		  echo '<br>: '.$email[1].':'.ord($email[1]).'<br>';
       if(ord($email[1])<97 && ord($email[1])>64){  
        $number=2;
         $arr = str_split($email);
         $i=0;
       foreach($arr as $value){
           $atype= ord($value)-64;
         if($atype==10){
           $atype=0;
         }
        // echo $atype.':'.$value.'#';
         echo ' Picture ';
          $akey[$i]=$atype;
          $i++;
       }
       print_r($akey);
        $number=implode("", $akey);
        //echo $number;
       }
       
      // echo $number;
      $sqlres="INSERT INTO `block`(`ip`,`md5`,`attr`,`number`)VALUES('$day','$email','user',$number)";
      

     include_once ('../password.php');
     $conn = new mysqli($servernameMai, $usernameMai, $passwordMai, $dbnameMai);
        if ($conn->connect_error) 
      {
      die("Failed: " . $conn->connect_error);
      } 
      //$baidan = mysqli_query($conn, $sqlres);
      //$baidan = mysqli_fetch_assoc($baidan);
      //echo '<br>'.$sqlres.'<br>';
     // $conn->query($sqlres);
     // print_r($conn->insert_id);

         if (mysqli_query($conn, $sqlres)) {
               echo "New record created successfully";
            } else {
               echo "Error: "  . "is " . mysqli_error($conn);
            }




      echo 'The ID is: '.$conn->insert_id.'<br>';
       mysqli_close($conn);

       
        exit('ADD to white list');
    }else{
     //     echo $emailcode.$good1;
    }
  }




   
   if($pwd[0]=='i'){
	     $emailcode= 'joe'.$email;
       $emailcode2='joe'.$email2;
	     $good1=crypt($emailcode,'ig');
       $good2=crypt($emailcode2,'ig');
      
      $arr = str_split($key);
       $i=0;
       foreach($arr as $value){
           $atype= ord($value)-64;
         if($atype==10){
           $atype=0;
         }
          $akey[$i]=$atype;
          $i++;
       }
        $key=implode("", $akey);
	   $sql=   "SELECT * FROM `picture` WHERE `mdemail` LIKE '$email2' LIMIT 1";
	  // $sql2= "UPDATE `picture` SET `url`='$newurl',`password`= '$newpassword',`limit`= '$newlimit' WHERE `mdemail`='$email' ";
   }else{
   $emailcode= 'joe'.$email;
   $emailcode2='joe'.$email2;
   $good1=crypt($emailcode,'su');
   $good2=crypt($emailcode2,'su');
   $sql=   "SELECT * FROM `pdf` WHERE `mdemail`LIKE '$email2' LIMIT 1";
   //$sql2= "UPDATE `pdf` SET `url`='$newurl',`password`= '$newpassword',`limit`= '$newlimit' WHERE `mdemail`='$email' ";
  //echo $sql2;
   }
   
   
   

  
   if(($pwd==$good1) && ($pwd2==$good2) ){
	  
     	 // echo "right ";
		//  echo $email[1];
		
      include_once ('../password.php');
     $conn = new mysqli($servernameMai, $usernameMai, $passwordMai, $dbnameMai);
		    if ($conn->connect_error) 
			{
			die("Failed: " . $conn->connect_error);
			} 
			
	   //$sql=   "SELECT * FROM `pdf` WHERE `mdemail`LIKE '$email2' LIMIT 1";
	   
	   
	   $result = mysqli_query($conn, $sql);
	   if (mysqli_num_rows($result) > 0) {
		   $row = mysqli_fetch_assoc($result);
		   $newurl= $row['url'];
		   $newpassword= $row['password'];
		   $newlimit= $row['limit'];
           $newalert= $row['alert'];
		   $newsms =$row['sms'];
	   }else{
		    //echo "error search".$sql;
		    mysqli_close($conn);
				exit();
	   }
	   //$sql2= "UPDATE `pdf` SET `url`='$newurl',`password`= '$newpassword',`limit`= '$newlimit' WHERE `mdemail`='$email' ";
	   //echo $sql2;
	   //$result2 = mysqli_query($conn, $sql2);

   if($pwd[0]=='i'){
	   
	   $sql2= "UPDATE `picture` SET `url`='$newurl',`password`= '$newpassword',`limit`= '$newlimit' WHERE `mdemail`='$email' ";
   }else{
  
      $sql2= "UPDATE `pdf` SET `sms`='$newsms',`url`='$newurl',`password`= '$newpassword',`limit`= '$newlimit',`alert`='$newalert' WHERE `mdemail`='$email' ";
  //echo $sql2;
   }


	   if ($conn->query($sql2) === TRUE) {

          $a=$conn->affected_rows;
		  $updateResult=1;
		  
		  //echo  "good";
          //echo $a;
           // echo $conn->query($sql)->rows();       
      } else {
          //asdfasecho "Error: " . $sql . "<br>" . $conn->error;
          exit ("not active");
      }    
	   
	   mysqli_close($conn);
   }else{
	   $updateResult=2;
	 //  echo $emailcode.'<br>';
	 // echo $emailcode2.'<br>';
	 // echo crypt($emailcode,'su').'<br>';
	 // echo crypt($emailcode2,'su').'<br>';
   }
  
}else{
	
	//echo "pass";
}


?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"> 
  <title>MaiPDF-Result Check</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
   

 <link href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" type="text/css">
 <link rel="stylesheet" href="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.3/css/bootstrap.min.css">
  <script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.3/js/bootstrap.min.js"></script>
  
   <style>
      html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
	  h6{
		  text-shadow: 5px 5px 5px #FF0000;
		}
    </style>  

</head>


<body class="text-center">
	<main class="form-signin">
    <?php  
		if($updateResult==1){
			echo "<div class=\"alert alert-danger\"><h2 class=\"text-center\">*****You have Successfully updated your Reading Link*****</h2></div>";
		}elseif($updateResult==2){
			echo "<div class=\"alert alert-warning\"><h2 class=\"text-center\">*Failed.Two Pairs are not Matching*</h2></div>";
		}else{
			echo "<div class=\"alert alert-warning\"><h6 class=\"text-center\">Document Replacement Portal</h6></div>";
		}
   
   ?>




  
<!-- StART FROM HERE -->
<form class="form-horizontal"  role="form" action="hahachange.php" method="post">      
        <div class="form-floating">
      <input type="text" class="form-control"  id="email" name="email"> 
      <label for="floatingInput">Reading Code to Update:</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control"  id="pwd" name="pwd"> 
      <label for="floatingInput">Paired Control Code:</label>
    </div>
    <h6 class="text-center text-success">The Reading Code in the upper section will point to or be replaced by the Reading Code below along with its settings</h6>
    <div class="form-floating">
      <input type="text" class="form-control"  id="email2" name="email2"> 
      <label for="floatingInput">Replacement Reading Code:</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="pwd2" name="pwd2"> 
      <label for="floatingInput">Paired Control Code:</label>
    </div>

<button type="submit" class="btn btn-primary">Update File</button>


 </form>
 
 


 <img src="css/changecode.jpg" class="img-fluid" alt="changecode" data-bs-toggle="modal" data-bs-target="#myModal">
	<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- 模态框头部 -->
      <div class="modal-header">
        <h4 class="modal-title">Example</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- 模态框内容 -->
      <div class="modal-body">
 <img src="https://maipdf.com/share/cloudMaipdf/replaceEN.png" class="img-fluid" alt="changecode" data-bs-toggle="modal" data-bs-target="#myModal">
      </div>

      <!-- 模态框底部 -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div> 

<div class="container">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">1.Enter the <strong>Reading Code</strong> to Update and its corresponding <strong>Paired Control Code</strong> to verify the file you want to replace.</li>
    <li class="list-group-item">2.Enter the Replacement <strong>Reading Code</strong> and its<strong>Paired Control Code</strong> for the new file and settings</li>
    <li class="list-group-item">3.After completing the input, click the "Update File" button. The old link will point to the new file and its settings.</li>
 
  </ul>
</div>






 </div>
</div>



  </main>
 </body>
</html>