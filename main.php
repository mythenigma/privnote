 <?php 
// Loop through all cookies and print their names and values


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
       $mythline    =  $originalTime;            // 
       $mythline[2] =  'mythenigma'; 
       $mythenigma   =  $originalTime[2]; // 
       $originalTime =  $originalTime[5];  // 
       
       $originalTime = intval($originalTime);
       

      $copyoforiginaltime = $originalTime;

       $originalTime = time() - $originalTime - $timegap;


    if($mythenigma != 'mythenigma'){
        if (isset($_COOKIE['myth'])) {
      $cookie_value = $_COOKIE['myth'];
      if($cookie_value != 'ok'){
        exit('18æ1æ'.$mythenigma);
      }else{
        
        setcookie('myth', '12345', time() + 30, '/');
      
        $firstLine = implode('æ', $mythline);
      
      }
    }else{
      exit('19æ1æ'.$mythenigma);
    }

        
  }
   
   
   
  if ($firstline[0]== '0'){
    
    
    
      echo $firstLine.'æ';
      exit();

  
  }else{



        if($originalTime < 0){
          //echo '##'.$originalTime;
          $originalTime = 0-$originalTime;
            echo $firstLine.'æ'.$originalTime.'æ'.$file_content;
            exit();
          
        }else{
          

            $readyin = $copyoforiginaltime+$timegap;// 
            $readyin = '-'.$readyin;
            //$readyin = '-'.time();
            echo $originalTime;
            file_put_contents($file_path,$readyin);//
            exit();
         

        }
  }
      
   
   
    } else {
     exit('filenotexist'); 
    }

  }

?>
