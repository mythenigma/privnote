function maitime(){
   let d = new Date();
   d=d+'maipdf';
    if(d.indexOf("0800")<1){  
       return 0;
    }else{
     let  filterstrings = ['台','香','新','sin','hong','sg','tw','hk','臺'];
     let  regex = new RegExp( filterstrings.join( "|" ), "i");  
      if(regex.test(d)){
        return 0;
      }
    }
    //alert('MaiPDF检测到您在中国,本页面生成的链接在中国地区打开非常慢,亲可以去我们的中文站点 maitube.com 上生成PDF链接');
    return 7;
}

var maigua = maitime();
console.log(maigua);
if(maigua ==7){
 document.getElementById('trans1').textContent='阅后即焚的便签工具';
 document.getElementById('trans2').textContent='创建一个便签';
 document.getElementById('demo2').textContent='输入便签内容-生成链接发给他人-查看阅读结果';
  document.getElementById('tranmake').textContent='生成链接';
  document.getElementById('tranoption').textContent='更多选项';
  document.getElementById('myTextarea').placeholder='请在此输入便签内容';
  document.getElementById('tranafter').textContent='链接发送出去之后？可以通过一下链接查看一下阅读记录，查看打开者的IP;还可以将阅读链接生成二维码发给他人';
  document.getElementById('trana').textContent='查看打开记录';
  document.getElementById('tranb').textContent='便签链接生成二维码';
  document.getElementById('tranli').textContent='便签会根据您的设置进行自毁';
  document.getElementById('copybutton').textContent='复制链接';
   document.getElementById('trantou').textContent='便签有效期';
  document.getElementById('my-select').innerHTML='<option >阅后即焚</option><option>1小时后</option><option>24 小时后</option><option>7 天后</option><option>24 天后</option>';
  
   
              
  
  
  
}

function convertTime2(num) {
  if (num < 60) {
    return num + " seconds";
  } else if (num < 3600) {
    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    return minutes + " minutes and " + seconds + " seconds";
  } else if (num < 86400) {
    const hours = Math.floor(num / 3600);
    const minutes = Math.floor((num % 3600) / 60);
    const seconds = num % 60;
    let result = hours + " hours";
    if (minutes > 0) {
      result += " and " + minutes + " minutes";
    }
    if (seconds > 0) {
      result += " and " + seconds + " seconds";
    }
    return result;
  } else {
    const days = Math.floor(num / 86400);
    const hours = Math.floor((num % 86400) / 3600);
    const minutes = Math.floor((num % 3600) / 60);
    const seconds = num % 60;
    let result = days + " days";
    if (hours > 0) {
      result += ":" + hours + " hours";
    }
    if (minutes > 0) {
      result += ":" + minutes + " minutes";
    }
    if (seconds > 0) {
      result += ":" + seconds + " seconds";
    }
    return result;
  }
}

function convertTime(seconds) {
  if (seconds < 60) {
    return seconds + " seconds";
  } else if (seconds < 3600) {
    return Math.floor(seconds / 60) + " minutes";
  } else if (seconds < 86400) {
    return Math.floor(seconds / 3600) + " hours";
  } else {
    return Math.floor(seconds / 86400) + " days";
  }
}
//console.log(convertTime2(343434));
const url = window.location.href;
const regex = /prive\/(\d+)\/note/;
const match = url.match(regex);

//console.log(match); // logs "2146489127"




let myCookieValue = document.cookie
  .split('; ')
  .find(cookie => cookie.startsWith('cookiefilenumber='))
  ?.split('=')[1];
if (myCookieValue) {
  ///console.log(myCookieValue);

   const numberoffile = myCookieValue;
   const buttcontent = document.getElementById('containerbox');
   buttcontent.innerHTML = '<h3><div class="spinner-grow text-muted"></div><div class="spinner-grow text-primary"></div><div class="spinner-grow text-success"></div><div class="spinner-grow text-info"></div><div class="spinner-grow text-warning"></div><div class="spinner-grow text-danger"></div><div class="spinner-grow text-secondary"></div><div class="spinner-grow text-dark"></div><div class="spinner-grow text-light"></div></h3>';

  shouData(numberoffile);
  document.cookie = "cookiefilenumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


} else {
  //console.log("Cookie not found.");
  document.getElementById('grabify').style.display='block';
}




if(match !== null){
  const numberoffile = match[1];
 
   shouData(numberoffile);
  

}

var textareaValue='';
var expiretime = 0;
var confirmask = 1;
var pass1=''; var pass2='';
var emailnoti='';var refename='';
var containerbox = document.getElementById('demo');
var buttontwo = document.getElementById('buttontwo');
var myArray = '';
var lastElement = '';
var globename='';
function copylink(){
     const exampleLi = document.getElementById('innerlink'); // select the <li> element with id "example"
     const exampleText = exampleLi.textContent; // get the text content of the <li> element
     navigator.clipboard.writeText(exampleText) // copy the text to the clipboard
  .then(() => {

var button = document.getElementById("copybutton");
button.classList.add('rotate');
button.textContent = "Link Copied";

  })
  .catch((err) => {
    console.error('Error copying text: ', err);
  });

}
function create() {

   const textarea = document.getElementById('myTextarea'); // Get the textarea element by its ID
    textareaValue = textarea.value; 
if (textareaValue === ""){
  alert('Write something on note');
  return ;
}



   const select = document.getElementById("my-select");
   expiretime = select.selectedIndex;
   //console.log("Selected option index: " + expiretime );
   const mySwitch = document.getElementById("mySwitch");
   confirmask = mySwitch.checked;
   //console.log("Checkbox is checked with value: " + confirmask);
   pass1 = document.getElementById('pass1').value;
   pass2 = document.getElementById('pass2').value;
   //console.log(pass1);

  if (pass1 === "" && pass2 === "") {
    pass1 = 'mythenigma';
  } else if (pass1 === pass2) {
    pass1 = pass2;
  } else {
    alert('Password Not Matching or Clear the Password');
    return;
  }

  emailnoti =  document.getElementById('emailnoti').value;
  refename  =  document.getElementById('refename').value;

  if(emailnoti ===""){
     emailnoti = 'nothingin';
  }

  if(refename===""){
    refename = 'nothingin';
  }
 sendData();

//console.log('hope no');
}

async function shouData(filename) {



const buttcontent = document.getElementById('containerbox');
//const buttcontent = document.getElementById('containerbox');
 
  const data = new FormData();
  data.append('e', filename);
  const response = await fetch("main.php", {
    method: "POST",
    body: data
  });


  try {
   const result = await response.text().then(text => text.trim());
   // console.log(result);
     if(result == 'filenotexist'){
      //alert('You have entered a wrong file number');
      if(maigua ==7){
	   buttcontent.innerHTML = "<h3>您好,</h3><p>很抱歉通知您该文件我们无法找到;建议您在重新核对一下便签码</p>";
     
	  }else{
      buttcontent.innerHTML = "<h3>Dear client,</h3><p>we regret to inform you that the file number you are looking for does not exist. Please check the file number and try again.</p>";
     
	 }
	  
	  return ;
     }

    if (result.includes("æ")) {
    //console.log("The string contains a semicolon");
     myArray = result.split("æ");
     lastElement = myArray[myArray.length - 1];
     globename = filename;
    //console.log(myArray[0]); 
    if(myArray[2]=='mythenigma'){

       if(myArray[0]=='0'){
       expiretime = 0 ;
       textareaValue = filename;
       }else{
       expiretime = myArray[6];
       textareaValue = lastElement;
       }
  
        
	   if(maigua ==7){
	    buttcontent.innerHTML = "<h3>阅读后销毁?</h3><p>您即将开始阅读便签  " + filename + "</p>"+'<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5"><button type="button" class="btn btn-warning btn-lg px-4 me-sm-3" onclick="tocontent()">现在查看</button><button type="button" class="btn btn-outline-secondary btn-lg px-4">暂时不打开</button></div>';
	   }else{
	   buttcontent.innerHTML = "<h3>Read and destroy?</h3><p>You're about to read and destroy the note with id  " + filename + "</p>"+'<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5"><button type="button" class="btn btn-warning btn-lg px-4 me-sm-3" onclick="tocontent()">Yes,Show it now</button><button type="button" class="btn btn-outline-secondary btn-lg px-4">Not This time</button></div>';
       
	   }
        
    }else{
        textareaValue = filename;
        pass1 = myArray[2];
        
   if(maigua ==7){
	buttcontent.innerHTML = "<h3>输入密码进行阅读</h3><p>您即将开始阅读便签 "+ filename +'   <div class="mb-3"><label for="pwd"></label><input type="password" class="form-control" id="mythenigma" placeholder="Enter password"></div> <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onclick="yanzheng()">开始阅读</button></p>';
   
	}else{
	buttcontent.innerHTML = "<h3>Enter Password to read note</h3><p>You're about to read and destroy the note with id "+ filename +'   <div class="mb-3"><label for="pwd"></label><input type="password" class="form-control" id="mythenigma" placeholder="Enter password"></div> <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onclick="yanzheng()">Proceed</button></p>';
   
   }
	
	}
    
    
    
  } else {
    const shi = convertTime2(result)
     
	 if(maigua ==7){
	 buttcontent.innerHTML = "<h3>您好,</h3><p>有人已经阅读过了 "+filename+" 该文件可能已经失效，并在 "+shi+" 之前已经销毁. 您可以自己尝试创建一个自己的便签</p>";
    
	}else{
buttcontent.innerHTML = "<h3>Dear client,</h3><p>someone has accessed the file with the FileName "+filename+" and it may be reaching its expiration date already. Please note that the file has been self-destructed at "+shi+" ago. If you are interested in this service, please create your own self-destructing notes.</p>";
    
    }	
	  
	  return ;
  }

   } catch (error) {
       return ;
   }
}

function yanzheng(){

  pass2 = document.getElementById('mythenigma');
  var expires = new Date(Date.now() + 700000).toUTCString();
  if(pass1 == pass2.value){
   document.cookie = "myth=ok; expires=" + expires;
// to textareavlue is file name
   window.location.href = "https://privnote.maipdf.com/priv/"+textareaValue+"/note";
  }else{
    pass2.value ='';
    confirmask ++;
    if(confirmask > 20){
      document.cookie = "myCookie=bad; expires=" + expires;
    }
    
  }
}


async function sendData() {
  const data = new FormData();
  data.append('textareaValue', textareaValue);
  data.append('confirmask', confirmask);
  data.append('expiretime', expiretime);
  data.append('pass1', pass1);
  data.append('emailnoti', emailnoti);
  data.append('refename', refename );
  const response = await fetch("privcheck.php", {
    method: "POST",
    body: data
  });

  try {
    const result = await response.text();
    // do something with the result
    fadeOut(containerbox); fadeOut(buttontwo);
    const myDiv = document.getElementById("resultlink");
    myDiv.style.display="block";
    document.getElementById("innerlink").textContent= 'https://privnote.maipdf.com/priv/'+result+'/note';
    
  } catch (error) {

    return ;
  }
    //const result = await response.text();
     //console.log(result);

}


async function tocontent(){
  if(expiretime>0){
    expiretime = convertTime2(expiretime);
  }else{
     // 在这进行回传删除！
    // textareaValue 是文件名
    //  console.log(textareaValue);
        const data = new FormData();
      data.append('e', textareaValue);
      data.append('mudi', 'y');
      const response = await fetch("main.php", {
      method: "POST",
      body: data
      });
      try {
       const result = await response.text().then(text => text.trim());
      // data = textareaValue;
       
       textareaValue = result ;
        }catch (error) {
        return ;
      }
	  if(maigua ==7){
	  expiretime = '本次阅读之后';
	  }else{
	  expiretime = 'this reading session';
	  }
        
    }
//&shijian="+d+"&pic="+check+"&yj="+eAlert+"&dtitle="+doctitle

 const buttcontent = document.getElementById('containerbox');
 
 if(maigua ==7){
 buttcontent.innerHTML = '<h3>便签内容</h3> <div class="alert alert-success">该便签将在以下时间销毁： '+expiretime+' </div><textarea class="form-control" rows="12"  style="background-color:hsla(120,65%,75%,0.3);">'+textareaValue+'</textarea>';
 
 }else{
 buttcontent.innerHTML = '<h3>Note Content</h3> <div class="alert alert-success">This note will be self-destructed after '+expiretime+' </div><textarea class="form-control" rows="12"  style="background-color:hsla(120,65%,75%,0.3);">'+textareaValue+'</textarea>';
 
 }
 
 setTimeout(jilu(), 2000);


}
function jilu(){
  const md5 = globename;
  const d = new Date();
  const check = 1;
  let eAlert='';let doctitle='';
  //console.log(myArray[3]);
  if(myArray[3]=='nothingin'){
    eAlert = ''; 
  }else{
    eAlert = myArray[3]; 
  }
   if(myArray[4]=='nothingin'){
     doctitle = globename; 
  }else{
     doctitle = myArray[4]; 
  }
  
  const toyou = "https://grabifyicu.com/log.php?md5="+md5+"&shijian="+d+"&pic="+check+"&yj="+eAlert+"&dtitle="+doctitle;
  //console.log(toyou);
  fetch(toyou);
}

function fadeOut(element) {
  let opacity = 1;

  function decreaseOpacity() {
    opacity -= 0.05;
    element.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
    }
  }

  const fadeOutInterval = setInterval(decreaseOpacity, 50);
}