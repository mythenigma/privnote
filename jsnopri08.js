function maitime(){
  let d = new Date();
  d=d+'maipdf';
  console.log(d);
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

// This code block has been replaced by the language system above.
// The initialization of language is now done in the DOMContentLoaded event listener

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
// Remove cookie-based note ID logic and rely solely on URL parsing

document.addEventListener('DOMContentLoaded', function() {
 try {
   applyLanguage(currentLanguage);
 } catch (e) {
   console.error('Error applying language:', e);
   applyLanguage('en');
 }

 // Extract note ID from URL and show note if present
 const url = window.location.href;
 const regex = /priv\/(\d+)\/note/;
 const match = url.match(regex);
 if (match !== null) {
   const numberoffile = match[1];
   shouData(numberoffile);
 } else {
   // No note ID in URL, show grabify section
   document.getElementById('grabify').style.display = 'block';
 }
});

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
var combineallvalue='';
function copylink(){
    const exampleLi = document.getElementById('innerlink');
    const exampleText = exampleLi.textContent;
    const button = document.getElementById("copybutton");
    const originalHTML = button.innerHTML;
    const originalClass = button.className;
    navigator.clipboard.writeText(exampleText)
    .then(() => {
        // 成功：按钮变绿、图标变对勾、文字变“已复制”
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-success');
        button.innerHTML = '<i class="fas fa-check me-2"></i>' + (currentLanguage === 'zh' ? '已复制' : 'Copied!');
        button.disabled = true;
        setTimeout(() => {
            button.className = originalClass;
            button.innerHTML = originalHTML;
            button.disabled = false;
        }, 1800);
    })
    .catch((err) => {
        // 失败：按钮变红、图标变叉、文字变“复制失败”
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-danger');
        button.innerHTML = '<i class="fas fa-times me-2"></i>' + (currentLanguage === 'zh' ? '复制失败' : 'Copy Failed');
        setTimeout(() => {
            button.className = originalClass;
            button.innerHTML = originalHTML;
        }, 1800);
        console.error('Error copying text: ', err);
    });
}


// 加密过程：使用XOR对文本进行加密，并转换为0和1的二进制
function textToBinaryEncryption(text, key) {
   const keyCodes = Array.from(key).map(char => char.charCodeAt(0));  // 转换密钥为字符的charCode数组

   // 第一步：对每个字符进行XOR加密，并转换为二进制
   const encryptedText = Array.from(text).map((char, index) => {
       // 使用密钥字符的charCode与当前字符的charCode进行异或运算
       let charCode = char.charCodeAt(0) ^ keyCodes[index % keyCodes.length];
       
       // 转换为二进制，返回的是0和1的字符串（每个字符的16位二进制表示）
       return charCode.toString(2).padStart(16, '0'); // 每个字符的二进制表示为16位
   }).join('');

   return encryptedText;
}

// 解密过程：从0和1的二进制恢复原始文本
function binaryToTextDecryption(binaryText, key) {
   const keyCodes = Array.from(key).map(char => char.charCodeAt(0));  // 转换密钥为字符的charCode数组

   // 分割二进制字符串为每16位一组（每个字符的16位二进制表示）
   const text = binaryText.match(/.{16}/g).map((bin, index) => {
       // 将二进制字符串转为整数（字符编码），并进行XOR解密
       let charCode = parseInt(bin, 2) ^ keyCodes[index % keyCodes.length];
       return String.fromCharCode(charCode);
   }).join('');

   return text;
}

// 使用统一的 16 位二进制进行 XOR 加密，并转换为零宽字符
function textToZeroWidthWithDoubleEncryption(text, key) {
   // 将密钥字符串转为字符的 charCode 数组
   const keyCodes = Array.from(key).map(char => char.charCodeAt(0));

   // 第一步：XOR 加密
   const xorEncryptedText = Array.from(text).map((char, index) => {
       // 使用 keyCodes 中的字符与原始字符的 charCode 进行异或运算
       let charCode = char.charCodeAt(0) ^ keyCodes[index % keyCodes.length];
       
       // 将字符编码强制为 16 位二进制字符串，确保统一长度
       return charCode.toString(2).padStart(16, '0');
   }).join('');

   // 第二步：将 XOR 加密后的二进制转换为零宽字符
   return xorEncryptedText.split('').map(bit => bit === '0' ? '\u200B' : '\u200C').join('');
}


// 解密流程：先解码零宽字符，再使用 XOR 解密
function zeroWidthToTextWithDoubleDecryption(zeroWidthText, key) {
   // 将密钥字符串转为字符的 charCode 数组
   const keyCodes = Array.from(key).map(char => char.charCodeAt(0));

   // 将零宽字符转换为二进制字符串
   const binary = Array.from(zeroWidthText).map(char => {
       return char === '\u200B' ? '0' : '1';
   }).join('');

   // 每16个二进制位恢复为一个字符
   const text = binary.match(/.{16}/g).map((bin, index) => {
       let charCode = parseInt(bin, 2) ^ keyCodes[index % keyCodes.length];
       return String.fromCharCode(charCode);
   }).join('');

   // 检查并替换最后一个字符是否是非法字符（如半角字符）
   if (text.charCodeAt(text.length - 1) < 32 || text.charCodeAt(text.length - 1) > 126) {
       // 如果最后一个字符是非法字符（如换行符、回车符），就替换为空格
       return text.slice(0, -1) + ' ';
   }
   return text;
}

// 先使用 XOR 加密，再进行零宽字符编码
function textToZeroWidthWithDoubleEncryptionNostring(text, key) {
   // 第一步：XOR 加密
   const xorEncryptedText = Array.from(text).map(char => {
       // 使用 charCodeAt 获取 UTF-16 编码，并与密钥进行异或操作
       let charCode = char.charCodeAt(0) ^ key;
       return charCode.toString(2).padStart(16, '0');  // 修改为 16 位二进制表示，支持更大范围的字符
   }).join('');

   // 第二步：将 XOR 加密后的二进制转换为零宽字符
   return xorEncryptedText.split('').map(bit => bit === '0' ? '\u200B' : '\u200C').join('');
}

// 解密流程：先解码零宽字符，再使用 XOR 解密
function zeroWidthToTextWithDoubleDecryptionNostring(zeroWidthText, key) {
   const binary = Array.from(zeroWidthText).map(char => {
       return char === '\u200B' ? '0' : '1';
   }).join('');

   // 每16个二进制位恢复为一个字符（支持多字节字符）
   const text = binary.match(/.{16}/g).map(bin => {
       let charCode = parseInt(bin, 2) ^ key;
       return String.fromCharCode(charCode);
   }).join('');

   return text;
}

function decoding() {
  const textarea = document.getElementById('myTextarea');
  textareaValue = textarea.value;
  pass1 = document.getElementById('pass1').value;
  pass2 = document.getElementById('pass2').value;
  if (pass1 === "" && pass2 === "") {
    pass1 = 'mythenigma';
  }
  const isBinary = /^[01]+$/.test(textareaValue);
  let decodedSecretMessage;
  if (isBinary) {
    decodedSecretMessage = binaryToTextDecryption(textareaValue, pass1);
  } else {
    decodedSecretMessage = zeroWidthToTextWithDoubleDecryption(textareaValue, pass1);
  }
  // 直接弹窗显示或输出到控制台
  alert(decodedSecretMessage);
}

function create() {
  const textarea = document.getElementById('myTextarea');
  textareaValue = textarea.value;

  let totallength = textareaValue.length;
  if (totallength > 30000) {
    alert('Too long.....');
    return;
  }
  if (textareaValue === "") {
    alert('Write something on note');
    return;
  }

  const select = document.getElementById("my-select");
  expiretime = select.selectedIndex;
  const mySwitch = document.getElementById("mySwitch");
  confirmask = mySwitch.checked;
  pass1 = document.getElementById('pass1').value;
  pass2 = document.getElementById('pass2').value;
  if (pass1 === "" && pass2 === "") {
    pass1 = 'mythenigma';
  } else if (pass1 === pass2) {
    pass1 = pass2;
  } else {
    alert('Password Not Matching or Clear the Password');
    return;
  }
  emailnoti = document.getElementById('emailnoti').value;
  refename = document.getElementById('refename').value;
  if (emailnoti === "") {
    emailnoti = 'nothingin';
  }
  if (refename === "") {
    refename = 'nothingin';
  }
  // 只发送 textareaValue，不再拼接隐藏内容
  sendData();
}

async function shouData(filename) {
 const buttcontent = document.getElementById('containerbox');
 
 const data = new FormData();
 data.append('e', filename);
 const response = await fetch("https://maipdf.com/baidu.php", {
   method: "POST",
   body: data
 });

 try {
   const result = await response.text().then(text => text.trim());
   if(result == 'filenotexist'){
     if(currentLanguage === 'zh'){
       buttcontent.innerHTML = "<h3>您好,</h3><p>很抱歉通知您该文件我们无法找到;建议您在重新核对一下便签码</p>";
     } else {
       buttcontent.innerHTML = "<h3>Dear client,</h3><p>we regret to inform you that the file number you are looking for does not exist. Please check the file number and try again.</p>";
     }
     return;
   }

   if (result.includes("æ")) {
     myArray = result.split("æ");
     lastElement = myArray[myArray.length - 1];
     globename = filename;
     
     if(myArray[2]=='mythenigma'){
       if(myArray[0]=='0'){
         expiretime = 0;
         textareaValue = filename;
       } else {
         expiretime = myArray[6];
         textareaValue = lastElement;
       }
       
       if(currentLanguage === 'zh'){
         buttcontent.innerHTML = "<h3>阅读后销毁?</h3><p>您即将开始阅读便签 " + filename + "</p>" + 
           '<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">' + 
           '<button type="button" class="btn btn-warning btn-lg px-4 me-sm-3" onclick="tocontent()">现在查看</button>' + 
           '<button type="button" class="btn btn-outline-secondary btn-lg px-4">暂时不打开</button></div>';
       } else {
         buttcontent.innerHTML = "<h3>Read and destroy?</h3><p>You're about to read and destroy the note with id " + filename + "</p>" + 
           '<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">' + 
           '<button type="button" class="btn btn-warning btn-lg px-4 me-sm-3" onclick="tocontent()">Yes, Show it now</button>' + 
           '<button type="button" class="btn btn-outline-secondary btn-lg px-4">Not This time</button></div>';
       }
     } else {
       textareaValue = filename;
       pass1 = myArray[2];
       
       if(currentLanguage === 'zh'){
         buttcontent.innerHTML = "<h3>输入密码进行阅读</h3><p>您即将开始阅读便签 "+ filename + 
           '   <div class="mb-3"><label for="pwd"></label>' + 
           '<input type="password" class="form-control" id="mythenigma" placeholder="输入密码"></div> ' + 
           '<button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onclick="yanzheng()">开始阅读</button></p>';
       } else {
         buttcontent.innerHTML = "<h3>Enter Password to read note</h3><p>You're about to read and destroy the note with id "+ filename + 
           '   <div class="mb-3"><label for="pwd"></label>' + 
           '<input type="password" class="form-control" id="mythenigma" placeholder="Enter password"></div> ' + 
           '<button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onclick="yanzheng()">Proceed</button></p>';
       }
     }
   } else {
     const shi = convertTime2(result);
     
     if(currentLanguage === 'zh'){
       buttcontent.innerHTML = "<h3>您好,</h3><p>有人已经阅读过了 "+filename+" 该文件可能已经失效，并在 "+shi+" 之前已经销毁. 您可以自己尝试创建一个自己的便签</p>";
     } else {
       buttcontent.innerHTML = "<h3>Dear client,</h3><p>someone has accessed the file with the FileName "+filename+" and it may be reaching its expiration date already. Please note that the file has been self-destructed at "+shi+" ago. If you are interested in this service, please create your own self-destructing notes.</p>";
     }
     return;
   }
 } catch (error) {
   return;
 }
}

function yanzheng(){
  const passInput = document.getElementById('mythenigma');
  const password = passInput ? passInput.value : '';
  if (!password) {
    passInput.value = '';
    passInput.focus();
    return;
  }
  // textareaValue 是当前 note 的 id
  const noteId = textareaValue;
  const data = new URLSearchParams();
  data.append('e', noteId);
  data.append('myth', password);

  // 请求远端 PHP 验证密码
  fetch('https://maipdf.com/baidu.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data.toString(),
    credentials: 'include'
  })
  .then(res => res.text())
  .then(res => {
    if (res.startsWith('18æ1æ') || res.startsWith('19æ1æ')) {
      passInput.value = '';
      passInput.placeholder = currentLanguage === 'zh' ? '密码错误，请重试' : 'Wrong password, try again';
      passInput.focus();
      return;
    }
    // 密码正确，直接展示内容
    // 这里 textareaValue 可能需要更新为 noteId
    textareaValue = noteId;
    tocontent();
  })
  .catch(() => {
    passInput.value = '';
    passInput.placeholder = currentLanguage === 'zh' ? '网络错误' : 'Network error';
    passInput.focus();
  });
}

async function sendData() {
 
 const data = new FormData();
 data.append('textareaValue', textareaValue);
 data.append('confirmask', confirmask);
 data.append('expiretime', expiretime);
 data.append('pass1', pass1);
 data.append('emailnoti', emailnoti);
 data.append('refename', refename );
 const response = await fetch("https://maipdf.com/privcheck.php", {
   method: "POST",
   body: data
 });

 try {
   const result = await response.text();
   // do something with the result
   fadeOut(containerbox); fadeOut(buttontwo);
   
   const myDiv = document.getElementById("resultlink");
   const encrydiv = document.getElementById("encryptinfo");

 //  myDiv.style.display="block";
   fadeIn(encrydiv);
   setTimeout(() => {
           fadeIn(myDiv);
     }, 2000);
   document.getElementById("innerlink").textContent= 'https://privnote.chat/priv/'+result+'/note';
   
 } catch (error) {

   return ;
 }

}
function simulateTypinghtml(selectid,text, delay) {
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

function simulateTyping(selectid, text, delay) {
   let index = 0;
   const textarea = document.getElementById(selectid); 
   textarea.value += '\n';
   function typeNextCharacter() {
       if (index < text.length) {
           const character = text.charAt(index);
           if (character === '\n') {
               // 如果是换行符，直接插入换行符
               textarea.value += '\n';
               index++;  // 跳过换行符
           } else if (character === ' ') {
               // 如果是空格，直接插入一个空格
               textarea.value += ' ';
               index++;
           } else {
               // 否则插入字符
               textarea.value += character;
               index++;
           }

           // Move cursor to the end of the textarea
           textarea.scrollTop = textarea.scrollHeight;  // 让滚动条滚动到底部

           // 调用下一个字符的输入
           setTimeout(typeNextCharacter, delay);
       }
   }

   // 开始模拟输入
   typeNextCharacter();
}



function simulateTypingfromTXT(selectid,text, delay) {
 let index = 0;
 const textarea = document.getElementById(selectid); 
 function typeNextCharacter() {
 if (index < text.length) {
   const character = text.charAt(index);
   
    if (character === '\n') {
     // Check if there are multiple consecutive new lines
     const consecutiveNewLines = text.substring(index).match(/^\n+/);
     if (consecutiveNewLines) {
       const numConsecutiveNewLines = consecutiveNewLines[0].length;

       // Remove one new line from the consecutive new lines
       const modifiedNewLines = '\n'.repeat(numConsecutiveNewLines - 1);
       textarea.value += modifiedNewLines;
       
       index += numConsecutiveNewLines;
     } else {
       textarea.value = textarea.value.trim(); // Remove trailing whitespace
       textarea.value += character; // Add the single new line
       index++;
     }
   } else {
     textarea.value += character;
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
async function tocontent(){
 if(expiretime>0){
   expiretime = convertTime2(expiretime);
 } else {
   // Send request to delete note
   const data = new FormData();
   data.append('e', textareaValue);
   data.append('mudi', 'y');
   const response = await fetch("https://maipdf.com/baidu.php", {
     method: "POST",
     body: data
   });
   
   try {
     const result = await response.text().then(text => text.trim());
     textareaValue = result;
   } catch (error) {
     return;
   }
   
   if(currentLanguage === 'zh'){
     expiretime = '本次阅读之后';
   } else {
     expiretime = 'this reading session';
   }
 }

 const buttcontent = document.getElementById('containerbox');
 
 if(currentLanguage === 'zh'){
   buttcontent.innerHTML = '<h3>便签内容</h3> <div class="alert alert-success">该便签将在以下时间销毁： '+expiretime+' </div><textarea id="resultarea" class="form-control" rows="12" style="background-color:hsla(120,65%,75%,0.3);"></textarea>';
 } else {
   buttcontent.innerHTML = '<h3>Note Content</h3> <div class="alert alert-success">This note will be self-destructed after '+expiretime+' </div><textarea id="resultarea" class="form-control" rows="12" style="background-color:hsla(19,65%,75%,0.3);"></textarea>';
 }
 
 const textarea = document.getElementById('resultarea');
 textarea.value = textareaValue;
 
 setTimeout(jilu(), 2000);
}
async function jilu(){
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
 
 const data = new FormData();
 data.append('md5', md5);
 data.append('shijian', d);
 //data.append('pic', check);
 data.append('yj', eAlert);
 data.append('dtitle', doctitle);
 //data.append('tok', ip);
   const response = await fetch("https://maipdf.com/log.php?&pic="+check, {
    method: "POST",
    body: data
   });
}

function fadeOut(element) {
 let opacity = 1;

 function decreaseOpacity() {
   opacity -= 0.05;
   if (opacity <= 0) {
     opacity = 0;
     element.style.opacity = opacity;
     clearInterval(fadeOutInterval);
     element.style.display = 'none'; // 完全隐藏元素，不占用空间
   } else {
     element.style.opacity = opacity;
   }
 }

 const fadeOutInterval = setInterval(decreaseOpacity, 50);
}

function fadeIn(element, duration = 1000) { // 默认持续时间为1000毫秒
           let opacity = 0; // 初始透明度
           element.style.opacity = opacity;
           element.style.display = 'block'; // 确保元素可见

           const interval = 50; // 每次增加透明度的时间间隔（毫秒）
           const increment = interval / duration; // 每次增加的透明度

           const fadeInInterval = setInterval(() => {
               opacity += increment;
               if (opacity >= 1) {
                   opacity = 1;
                   clearInterval(fadeInInterval);
               }
               element.style.opacity = opacity;
           }, interval);
   }

// Function to detect location based timing
function maitime(){
  let d = new Date();
  d=d+'maipdf';
  console.log(d);
   if(d.indexOf("0800")<1){  
      return 0;
   }else{
    let  filterstrings = ['台','香','新','sin','hong','sg','tw','hk','臺'];
    let  regex = new RegExp( filterstrings.join( "|" ), "i");  
     if(regex.test(d)){
       return 0;
     }
   }
   return 7;
}

// 字符加密Tab功能
function encryptZeroWidth() {
  const cover = document.getElementById('coverText').value || '';
  const hidden = document.getElementById('hiddenText').value || '';
  const key = document.getElementById('encryptKey').value || 'mythenigma';
  if (!hidden) {
    document.getElementById('encryptResult').value = currentLanguage === 'zh' ? '请输入隐藏内容' : 'Please enter hidden content';
    return;
  }
  const encoded = textToZeroWidthWithDoubleEncryption(hidden, key);
  document.getElementById('encryptResult').value = cover + encoded;
}

function encryptBinary() {
  const cover = document.getElementById('coverText').value || '';
  const hidden = document.getElementById('hiddenText').value || '';
  const key = document.getElementById('encryptKey').value || 'mythenigma';
  if (!hidden) {
    document.getElementById('encryptResult').value = currentLanguage === 'zh' ? '请输入隐藏内容' : 'Please enter hidden content';
    return;
  }
  const encoded = textToBinaryEncryption(hidden, key);
  document.getElementById('encryptResult').value = cover + encoded;
}

function copyEncryptResult() {
  const result = document.getElementById('encryptResult').value;
  if (!result) return;
  navigator.clipboard.writeText(result).then(() => {
    const btn = document.getElementById('btnCopyEncryptResult');
    const old = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check me-2"></i>' + (currentLanguage === 'zh' ? '已复制' : 'Copied!');
    btn.classList.remove('btn-outline-success');
    btn.classList.add('btn-success');
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = old;
      btn.classList.remove('btn-success');
      btn.classList.add('btn-outline-success');
      btn.disabled = false;
    }, 1500);
  });
}

// 事件绑定
window.addEventListener('DOMContentLoaded', function() {
  const btnZero = document.getElementById('btnZeroWidthEncrypt');
  const btnBin = document.getElementById('btnBinaryEncrypt');
  const btnCopy = document.getElementById('btnCopyEncryptResult');
  if (btnZero) btnZero.onclick = encryptZeroWidth;
  if (btnBin) btnBin.onclick = encryptBinary;
  if (btnCopy) btnCopy.onclick = copyEncryptResult;
});

// 解密Tab功能
function decryptZeroWidth() {
  const input = document.getElementById('decryptInput').value || '';
  const key = document.getElementById('decryptKey').value || 'mythenigma';
  if (!input) {
    document.getElementById('decryptResult').value = currentLanguage === 'zh' ? '请输入加密内容' : 'Please enter encrypted content';
    return;
  }
  try {
    const decoded = zeroWidthToTextWithDoubleDecryption(input, key);
    document.getElementById('decryptResult').value = decoded;
  } catch (e) {
    document.getElementById('decryptResult').value = currentLanguage === 'zh' ? '解密失败，请检查内容和密码' : 'Decrypt failed, check content and password';
  }
}

function decryptBinary() {
  const input = document.getElementById('decryptInput').value || '';
  const key = document.getElementById('decryptKey').value || 'mythenigma';
  if (!input) {
    document.getElementById('decryptResult').value = currentLanguage === 'zh' ? '请输入加密内容' : 'Please enter encrypted content';
    return;
  }
  try {
    const decoded = binaryToTextDecryption(input, key);
    document.getElementById('decryptResult').value = decoded;
  } catch (e) {
    document.getElementById('decryptResult').value = currentLanguage === 'zh' ? '解密失败，请检查内容和密码' : 'Decrypt failed, check content and password';
  }
}

function copyDecryptResult() {
  const result = document.getElementById('decryptResult').value;
  if (!result) return;
  navigator.clipboard.writeText(result).then(() => {
    const btn = document.getElementById('btnCopyDecryptResult');
    const old = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check me-2"></i>' + (currentLanguage === 'zh' ? '已复制' : 'Copied!');
    btn.classList.remove('btn-outline-success');
    btn.classList.add('btn-success');
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = old;
      btn.classList.remove('btn-success');
      btn.classList.add('btn-outline-success');
      btn.disabled = false;
    }, 1500);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  // ...existing code...
  const btnZeroDec = document.getElementById('btnZeroWidthDecrypt');
  const btnBinDec = document.getElementById('btnBinaryDecrypt');
  const btnCopyDec = document.getElementById('btnCopyDecryptResult');
  if (btnZeroDec) btnZeroDec.onclick = decryptZeroWidth;
  if (btnBinDec) btnBinDec.onclick = decryptBinary;
  if (btnCopyDec) btnCopyDec.onclick = copyDecryptResult;
});