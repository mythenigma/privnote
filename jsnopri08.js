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

// Extract note ID from URL and store it for reference
function extractNoteIdFromUrl() {
  const url = window.location.href;
  const regex = /priv\/([^\/]+)(?:\/note)?/; // Improved regex to handle paths with or without /note
  const match = url.match(regex);
  if (match !== null) {
    const noteId = match[1];
    console.log("Found note ID in URL:", noteId);
    window.noteId = noteId; // Store for reference
    return noteId;
  }
  return null;
}

document.addEventListener('DOMContentLoaded', function() {
  try {
    // Get saved language preference or detect from browser
    currentLanguage = localStorage.getItem('selectedLanguage');
    
    // If no saved preference, try to detect
    if (!currentLanguage) {
      var maigua = maitime();
      if (maigua == 7) {
        currentLanguage = 'zh';
      } else {
        // Fall back to browser language detection
        currentLanguage = detectBrowserLanguage();
      }
      // Save detected language
      localStorage.setItem('selectedLanguage', currentLanguage);
    }
    
    console.log('Initial language set to:', currentLanguage);
    applyLanguage(currentLanguage);
    
    // Update language dropdown display
    document.getElementById('currentLanguage').textContent = 
      currentLanguage === 'en' ? 'English' : '中文';
  } catch (e) {
    console.error('Error applying language:', e);
    applyLanguage('en');
  }

  // Extract note ID from URL and show note if present
  const noteId = extractNoteIdFromUrl();
  if (noteId) {
    shouData(noteId);
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

function decoding(){
  const textarea = document.getElementById('myTextarea'); // Get the textarea element by its ID
  textareaValue = textarea.value; 
  
  
  pass1 = document.getElementById('pass1').value;
  pass2 = document.getElementById('pass2').value;
  if (pass1 === "" && pass2 === "") {
    pass1 = 'mythenigma';
  }
  const isBinary = /^[01]+$/.test(textareaValue);
  let decodedSecretMessage;

if (isBinary) {
   decodedSecretMessage = binaryToTextDecryption(textareaValue,pass1);
 console.log(decodedSecretMessage);
} else {
  const encodedSecretPart = textareaValue.slice(0, textareaValue.length);  // 提取加密部分
  decodedSecretMessage = zeroWidthToTextWithDoubleDecryption(encodedSecretPart, pass1);  // 解密加密部分
}




  //console.log(decodedSecretMessage);
  simulateTyping("HiddenTextarea",decodedSecretMessage, 100);
}

function create() {

   const textarea = document.getElementById('myTextarea'); // Get the textarea element by its ID
   textareaValue = textarea.value; 

   const hiddentext = document.getElementById('HiddenTextarea'); // Get the textarea element by its ID
   hiddentextValue = hiddentext.value; hiddentextValue += ' \n ';


  let totallength = textareaValue.length + hiddentextValue.length ;

  if(totallength > 30000){
    alert('Too long.....');
    return ;
  }


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
  
 const encodedSecretMessage = textToZeroWidthWithDoubleEncryption(hiddentextValue, pass1); 
 const encodedSecretMessage01= textToBinaryEncryption(hiddentextValue, pass1); 
 combineallvalue =  encodedSecretMessage + textareaValue;
 textareaValue   =  combineallvalue;
 textarea.value  =  combineallvalue;
 hiddentext.value=   encodedSecretMessage01;
 //document.getElementById('topbanner').innerHTML="Notes have been combined&ready";

 simulateTypinghtml('topbanner','Notes have been combined&ready',100);
 let hiddenbox = document.getElementById('HiddenTextarea');
 //fadeOut(hiddenbox);
 sendData();

//console.log('hope no');
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
          buttcontent.innerHTML = `<div style="background:#fff;border-radius:20px;box-shadow:0 8px 32px rgba(44,62,80,0.08);padding:3rem 2rem 2.5rem 2rem;margin:2rem auto;max-width:900px;border-top:8px solid #f39c12;">
            <h2 style="font-weight:700;font-size:2.5rem;color:#2c3e50;">阅读后销毁?</h2>
            <p style="font-size:1.3rem;color:#555;">您即将开始阅读便签 <b>${filename}</b></p>
            <div class="d-flex flex-wrap justify-content-center gap-4 mt-5">
              <button type="button" class="btn btn-warning btn-lg px-5 py-3 fw-bold shadow" style="font-size:1.2rem;border-radius:40px;" onclick="tocontent()">现在查看</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-5 py-3 fw-bold" style="font-size:1.2rem;border-radius:40px;">暂时不打开</button>
            </div>
          </div>`;
        } else {
          buttcontent.innerHTML = `<div style="background:#fff;border-radius:20px;box-shadow:0 8px 32px rgba(44,62,80,0.08);padding:3rem 2rem 2.5rem 2rem;margin:2rem auto;max-width:900px;border-top:8px solid #f39c12;">
            <h2 style="font-weight:700;font-size:2.5rem;color:#2c3e50;">Read and destroy?</h2>
            <p style="font-size:1.3rem;color:#555;">You're about to read and destroy the note with id <b>${filename}</b></p>
            <div class="d-flex flex-wrap justify-content-center gap-4 mt-5">
              <button type="button" class="btn btn-warning btn-lg px-5 py-3 fw-bold shadow" style="font-size:1.2rem;border-radius:40px;" onclick="tocontent()">YES, SHOW IT NOW</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-5 py-3 fw-bold" style="font-size:1.2rem;border-radius:40px;">NOT THIS TIME</button>
            </div>
          </div>`;
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

  pass2 = document.getElementById('mythenigma');
  var expires = new Date(Date.now() + 700000).toUTCString();
  if(pass1 == pass2.value){
   document.cookie = "myth=ok; expires=" + expires;
// to textareavlue is file name
   window.location.href = "https://privnote.chat/priv/"+textareaValue+"/note";
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

  //  myDiv.style.display="block";    fadeIn(encrydiv);
    setTimeout(() => {
            fadeIn(myDiv);
      }, 2000);
    // Use the generateNoteUrl function to create a consistent URL format
    document.getElementById("innerlink").textContent = generateNoteUrl(result);
    
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

// Store UI text content for different languages
const languageStrings = {
  'en': {
    'encryptinfo': 'The note has been successfully encrypted with two methods: the upper box contains zero-width character encryption, storing the information within the text, while the lower box shows the encryption as binary (0s and 1s). Both can be copied and used for decryption.',
    'trans1': 'Secure your words, vanish your trace',
    'trans2': 'Encrypts your notes with links, zero-width characters, or binary, ensuring secure sharing and auto-destruction',
    'demo2': 'Privnote is a versatile encryption tool for secure notes. You can:<br>1. Encrypted Link Sharing: <small>Generate a secure link for your note, which auto-destructs after a set time.</small><br>2. Zero-Width Character Encryption: <small>Hide your note in plain text using zero-width characters, making it invisible to the naked eye.</small><br>3. Binary Encryption: <small>Convert your note into binary (0s and 1s) for extra security.</small>',
    'tranmake': 'Encrypt Note',
    'tranoption': 'Optional Setting',
    'myTextarea': 'Write Your Note Here...',
    'HiddenTextarea': 'Write Hidden Messages Here...',
    'tranafter': 'You can track the results of when the note link was opened, on which device it was opened, and by what IP was opened.',
    'trana': 'Check Open Log',
    'tranb': 'How to decode?',
    'tranli': 'The message will be automatically destroyed according to your settings.',
    'decodemessage': 'Decrypt Notes',
    'copybutton': 'Copy Link',
    'trantou': 'Link URL self-destructs',
    'my-select': '<option>after reading it</option><option>1 hour from now</option><option>24 hour from now</option><option>7 days from now</option><option>24 days from now</option>',
    'topbanner': 'New Notes',
    'currentLanguage': 'English',
    'decrysrc': 'read/pic/enDecode1.png'
  },
  'zh': {
    'encryptinfo': '\u4FBF\u7B7E\u5DF2\u6210\u529F\u52A0\u5BC6\uFF0C\u751F\u6210\u4E86\u4E24\u79CD\u52A0\u5BC6\u65B9\u5F0F\uFF1A\u4E0A\u6846\u5185\u5BB9\u4E3A\u96F6\u5BBD\u5B57\u7B26\u52A0\u5BC6\uFF0C\u4FE1\u606F\u5B58\u50A8\u5728\u6587\u5B57\u4E2D\uFF1B\u4E0B\u6846\u5185\u5BB9\u4E3A\u52A0\u5BC6\u540E\u76840\u548C1\u6570\u5B57\u3002\u4E24\u4E2A\u6846\u4E2D\u7684\u5185\u5BB9\u90FD\u53EF\u4EE5\u590D\u5236\u5E76\u7528\u4E8E\u89E3\u5BC6',
    'trans1': '\u9690\u4FE1\u4E91 \u2013 \u52A0\u5BC6\u4F60\u7684\u8BDD\u8BED\uFF0C\u6D88\u5931\u4F60\u7684\u75D5\u8FF9',
    'trans2': '\u521B\u5EFA\u4E00\u4E2A\u4FBF\u7B7E',
    'demo2': '\u9690\u4FE1\u4E91\u662F\u4E00\u6B3E\u591A\u529F\u80FD\u7684\u52A0\u5BC6\u4FBF\u7B7E\u5DE5\u5177\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u4FDD\u62A4\u60A8\u7684\u4FBF\u7B7E\u5185\u5BB9\uFF1A\u52A0\u5BC6\u94FE\u63A5\u5206\u4EAB,\u96F6\u5BBD\u5B57\u7B26\u52A0\u5BC6,\u4E8C\u8FDB\u5236\u52A0\u5BC6.',
    'tranmake': '\u52A0\u5BC6\u4FBF\u7B7E',
    'tranoption': '\u66F4\u591A\u8BBE\u7F6E',
    'myTextarea': '\u8BF7\u5728\u6B64\u8F93\u5165\u4FBF\u7B7E\u5185\u5BB9',
    'HiddenTextarea': '\u5728\u6B64\u8F93\u5165\u6216\u73B0\u5B9E\u9690\u85CF\u5185\u5BB9',
    'tranafter': '\u9690\u4FE1\u4E91\u94FE\u63A5\u53D1\u9001\u51FA\u53BB\u4E4B\u540E\uFF1F\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E0B\u94FE\u63A5\u67E5\u770B\u4E00\u4E0B\u9605\u8BFB\u8BB0\u5F55\uFF0C\u67E5\u770B\u6253\u5F00\u8005\u7684IP;\u8FD8\u53EF\u4EE5\u5C06\u9605\u8BFB\u94FE\u63A5\u751F\u6210\u4E8C\u7EF4\u7801\u53D1\u7ED9\u4ED6\u4EBA',
    'trana': '\u67E5\u770B\u6253\u5F00\u8BB0\u5F55',
    'tranb': '\u5982\u4F55\u8FDB\u884C\u89E3\u5BC6?',
    'tranli': '\u4FBF\u7B7E\u4F1A\u6839\u636E\u60A8\u7684\u8BBE\u7F6E\u8FDB\u884C\u81EA\u6BC1',
    'decodemessage': '\u89E3\u5BC6\u4FE1\u606F',
    'copybutton': '\u590D\u5236\u94FE\u63A5',
    'trantou': '\u4FBF\u7B7E\u94FE\u63A5\u6709\u6548\u671F',
    'my-select': '<option>\u9605\u540E\u5373\u7130</option><option>1\u5C0F\u65F6\u540E</option><option>24 \u5C0F\u65F6\u540E</option><option>7 \u5929\u540E</option><option>24 \u5929\u540E</option>',
    'topbanner': '\u65B0\u5EFA\u4FBF\u7B7E',
    'currentLanguage': '\u4E2D\u6587',
    'decrysrc': 'read/pic/CNdecode1.png'
  }
};

// Get user language preference from localStorage or set default
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

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

// Function to apply language strings to UI elements
function applyLanguage(language) {
  console.log('Main applyLanguage called with:', language);
  
  if (!languageStrings[language]) {
    console.error('Language not supported:', language);
    return;
  }
  
  // Set current language and save to localStorage
  currentLanguage = language;
  localStorage.setItem('selectedLanguage', language);
  
  // Update the language dropdown display
  const langElement = document.getElementById('currentLanguage');
  if (langElement) {
    langElement.textContent = language === 'en' ? 'English' : '中文';
  }
  
  // Track which elements were updated for debugging
  const updatedElements = [];
  
  // Update UI with selected language strings
  for (const [elementId, textContent] of Object.entries(languageStrings[language])) {
    const element = document.getElementById(elementId);
    if (element) {
      try {
        if (elementId === 'my-select') {
          element.innerHTML = textContent;
        } else if (elementId === 'encryptinfo' || elementId === 'demo2') {
          element.innerHTML = textContent;
        } else if (elementId === 'myTextarea' || elementId === 'HiddenTextarea') {
          element.placeholder = textContent;
        } else if (elementId === 'decrysrc') {
          element.src = textContent;
        } else {
          // Directly update text content
          element.textContent = textContent;
          updatedElements.push(elementId);
        }
      } catch (error) {
        console.error(`Error updating element ${elementId}:`, error);
      }
    } else {
      console.warn(`Element with ID '${elementId}' not found in the DOM`);
    }
  }
  
  console.log('Language applied:', language, 'Updated elements:', updatedElements);
  
  // Handle special cases for note viewing
  handleNoteViewLanguageChange(language);
}

// Function to switch language manually - make it globally accessible
window.applyLanguage = applyLanguage;
// Function to check if we're in note view mode and handle language change
function handleNoteViewLanguageChange(language) {
  try {
    // Check if we're on a note page by examining the URL
    const url = window.location.href;
    const regex = /priv\/([^\/]+)(?:\/note)?/;
    const match = url.match(regex);
    
    if (match && match[1]) {
      const noteId = match[1];
      console.log('We are on a note page:', noteId);
      
      // Store noteId globally for reference
      window.noteId = noteId;
      
      // Check if we're in read mode by looking for specific elements
      const containerBox = document.getElementById('containerbox');
      const isReadMode = containerBox && !containerBox.querySelector('textarea');
      
      if (isReadMode && typeof shouData === 'function') {
        console.log('In read mode, refreshing note content with new language');
        shouData(noteId);
      }
    }
  } catch (error) {
    console.error('Error in handleNoteViewLanguageChange:', error);
  }
}

// Safer implementation that won't cause refresh loops
window.switchLanguage = function(language) {
  try {
    console.log('Main switchLanguage called with:', language);
    
    // Validate language
    if (!languageStrings[language]) {
      console.error('Unsupported language:', language);
      return;
    }
    
    // Update the localStorage preference without page reload
    localStorage.setItem('selectedLanguage', language);
    currentLanguage = language;
    
    // Apply language changes to UI
    applyLanguage(language);
    
  } catch (error) {
    console.error('Error in switchLanguage:', error);
  }
};

// Function to detect browser language
function detectBrowserLanguage() {
  const language = navigator.language || navigator.userLanguage || 'en'; // Default to English
  return language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

// Auto-detect language on page load if user hasn't set a preference
if (!localStorage.getItem('selectedLanguage')) {
  // Try primary detection method first
  var maigua = maitime();
  if (maigua == 7) {
    currentLanguage = 'zh';
  } else {
    // Fall back to browser language detection
    currentLanguage = detectBrowserLanguage();
  }
}

// Apply the language when page loads
document.addEventListener('DOMContentLoaded', function() {
  try {
    applyLanguage(currentLanguage);
  } catch (e) {
    console.error('Error applying language:', e);
    // If there's an error, fall back to English
    applyLanguage('en');
  }
});

// Make essential functions globally available
window.create = create;
window.decoding = decoding;
window.yanzheng = yanzheng;
window.tocontent = tocontent;

// Function to generate the note URL
function generateNoteUrl(noteId) {
  // Get the current origin (e.g., https://privnote.chat)
  const origin = window.location.origin;
  
  // Create the URL with the /priv/noteId path
  return `${origin}/priv/${noteId}`;
}

// Function to display the generated note link properly
function displayNoteLink(noteId) {
  const noteUrl = generateNoteUrl(noteId);
  const innerLink = document.getElementById('innerlink');
  
  if (innerLink) {
    innerLink.textContent = noteUrl;
    
    // Display the result link container
    const resultLinkContainer = document.getElementById('resultlink');
    if (resultLinkContainer) {
      resultLinkContainer.style.display = 'block';
    }
    
    // Hide the grabify section if it's currently visible
    const grabifySection = document.getElementById('grabify');
    if (grabifySection) {
      grabifySection.style.display = 'none';
    }
  }
}