function maitime(){
  let d = new Date();
  d=d+'maipdf';
  console.log(d);
   if(d.indexOf("0800")<1){  

      return 0;
   }else{
    let  filterstrings = ['鍙�','棣�','鏂�','sin','hong','sg','tw','hk','鑷�'];
    let  regex = new RegExp( filterstrings.join( "|" ), "i");  
     if(regex.test(d)){
       return 0;
     }
   }
   //alert('MaiPDF妫€娴嬪埌鎮ㄥ湪涓浗,鏈〉闈㈢敓鎴愮殑閾炬帴鍦ㄤ腑鍥藉湴鍖烘墦寮€闈炲父鎱�,浜插彲浠ュ幓鎴戜滑鐨勪腑鏂囩珯鐐� maitube.com 涓婄敓鎴怭DF閾炬帴');
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
  // Extract note ID from URL and show note if present
  const url = window.location.href;
  // 鏀寔 /note/鏁板瓧 浼潤鎬佽矾鐢�
  const regexNote = /\/note\/(\d+)/;
  const matchNote = url.match(regexNote);
  if (matchNote !== null) {
    const numberoffile = matchNote[1];
    shouData(numberoffile);
    // 闅愯棌棣栭〉鍐呭锛屼粎灞曠ず绗旇
    if (document.getElementById('mainHome')) {
      document.getElementById('mainHome').style.display = 'none';
    }
    return;
  }
  // 鍙鐞� /note/鏁板瓧/note 杩欑 legacy fallback锛岀Щ闄� /priv/鏁板瓧 鑷姩閲嶅畾鍚戦€昏緫
  const regexWithNote = /note\/(\d+)\/note/;
  const matchWithNote = url.match(regexWithNote);
  if (matchWithNote !== null) {
    const numberoffile = matchWithNote[1];
    shouData(numberoffile);
    return;
  }
  // 濡傛灉娌℃湁 note ID锛屾樉绀� grabify 鍖哄煙
  if (document.getElementById('grabify')) {
    document.getElementById('grabify').style.display = 'block';
  }
  // Debug: 杈撳嚭褰撳墠URL鍜宩snopri08.js宸插姞杞�
  if (!window._jsnopri08_debug) {
    window._jsnopri08_debug = true;
    const debugDiv = document.createElement('div');
    debugDiv.style = 'position:fixed;bottom:0;left:0;z-index:9999;background:#fff3cd;color:#856404;padding:8px 16px;border:1px solid #ffeeba;font-size:14px;';
    debugDiv.innerHTML = 'jsnopri08.js loaded. URL: ' + url;
    document.body.appendChild(debugDiv);
    setTimeout(()=>debugDiv.remove(), 6000);
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
        // 鎴愬姛锛氭寜閽彉缁裤€佸浘鏍囧彉瀵瑰嬀銆佹枃瀛楀彉鈥滃凡澶嶅埗鈥�
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-success');
        button.innerHTML = '<i class="fas fa-check me-2"></i>' + (currentLanguage === 'zh' ? '宸插鍒�' : 'Copied!');
        button.disabled = true;
        setTimeout(() => {
            button.className = originalClass;
            button.innerHTML = originalHTML;
            button.disabled = false;
        }, 1800);
    })
    .catch((err) => {
        // 澶辫触锛氭寜閽彉绾€€佸浘鏍囧彉鍙夈€佹枃瀛楀彉鈥滃鍒跺け璐モ€�
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-danger');
        button.innerHTML = '<i class="fas fa-times me-2"></i>' + (currentLanguage === 'zh' ? '澶嶅埗澶辫触' : 'Copy Failed');
        setTimeout(() => {
            button.className = originalClass;
            button.innerHTML = originalHTML;
        }, 1800);
        console.error('Error copying text: ', err);
    });
}


// 鍔犲瘑杩囩▼锛氫娇鐢╔OR瀵规枃鏈繘琛屽姞瀵嗭紝骞惰浆鎹负0鍜�1鐨勪簩杩涘埗
function textToBinaryEncryption(text, key) {
   const keyCodes = Array.from(key).map(char => char.charCodeAt(0));  // 杞崲瀵嗛挜涓哄瓧绗︾殑charCode鏁扮粍

   // 绗竴姝ワ細瀵规瘡涓瓧绗﹁繘琛孹OR鍔犲瘑锛屽苟杞崲涓轰簩杩涘埗
   const encryptedText = Array.from(text).map((char, index) => {
       // 浣跨敤瀵嗛挜瀛楃鐨刢harCode涓庡綋鍓嶅瓧绗︾殑charCode杩涜寮傛垨杩愮畻
       let charCode = char.charCodeAt(0) ^ keyCodes[index % keyCodes.length];
       
       // 杞崲涓轰簩杩涘埗锛岃繑鍥炵殑鏄�0鍜�1鐨勫瓧绗︿覆锛堟瘡涓瓧绗︾殑16浣嶄簩杩涘埗琛ㄧず锛�
       return charCode.toString(2).padStart(16, '0'); // 姣忎釜瀛楃鐨勪簩杩涘埗琛ㄧず涓�16浣�
   }).join('');

   return encryptedText;
}

// 瑙ｅ瘑杩囩▼锛氫粠0鍜�1鐨勪簩杩涘埗鎭㈠鍘熷鏂囨湰
function binaryToTextDecryption(binaryText, key) {
   const keyCodes = Array.from(key).map(char => char.charCodeAt(0));  // 杞崲瀵嗛挜涓哄瓧绗︾殑charCode鏁扮粍

   // 鍒嗗壊浜岃繘鍒跺瓧绗︿覆涓烘瘡16浣嶄竴缁勶紙姣忎釜瀛楃鐨�16浣嶄簩杩涘埗琛ㄧず锛�
   const text = binaryText.match(/.{16}/g).map((bin, index) => {
       // 灏嗕簩杩涘埗瀛楃涓茶浆涓烘暣鏁帮紙瀛楃缂栫爜锛夛紝骞惰繘琛孹OR瑙ｅ瘑
       let charCode = parseInt(bin, 2) ^ keyCodes[index % keyCodes.length];
       return String.fromCharCode(charCode);
   }).join('');

   return text;
}

// 浣跨敤缁熶竴鐨� 16 浣嶄簩杩涘埗杩涜 XOR 鍔犲瘑锛屽苟杞崲涓洪浂瀹藉瓧绗�
function textToZeroWidthWithDoubleEncryption(text, key) {
   // 灏嗗瘑閽ュ瓧绗︿覆杞负瀛楃鐨� charCode 鏁扮粍
   const keyCodes = Array.from(key).map(char => char.charCodeAt(0));

   // 绗竴姝ワ細XOR 鍔犲瘑
   const xorEncryptedText = Array.from(text).map((char, index) => {
       // 浣跨敤 keyCodes 涓殑瀛楃涓庡師濮嬪瓧绗︾殑 charCode 杩涜寮傛垨杩愮畻
       let charCode = char.charCodeAt(0) ^ keyCodes[index % keyCodes.length];
       
       // 灏嗗瓧绗︾紪鐮佸己鍒朵负 16 浣嶄簩杩涘埗瀛楃涓诧紝纭繚缁熶竴闀垮害
       return charCode.toString(2).padStart(16, '0');
   }).join('');

   // 绗簩姝ワ細灏� XOR 鍔犲瘑鍚庣殑浜岃繘鍒惰浆鎹负闆跺瀛楃
   return xorEncryptedText.split('').map(bit => bit === '0' ? '\u200B' : '\u200C').join('');
}


// 瑙ｅ瘑娴佺▼锛氬厛瑙ｇ爜闆跺瀛楃锛屽啀浣跨敤 XOR 瑙ｅ瘑
function zeroWidthToTextWithDoubleDecryption(zeroWidthText, key) {
   // 灏嗗瘑閽ュ瓧绗︿覆杞负瀛楃鐨� charCode 鏁扮粍
   const keyCodes = Array.from(key).map(char => char.charCodeAt(0));

   // 灏嗛浂瀹藉瓧绗﹁浆鎹负浜岃繘鍒跺瓧绗︿覆
   const binary = Array.from(zeroWidthText).map(char => {
       return char === '\u200B' ? '0' : '1';
   }).join('');

   // 姣�16涓簩杩涘埗浣嶆仮澶嶄负涓€涓瓧绗�
   const text = binary.match(/.{16}/g).map((bin, index) => {
       let charCode = parseInt(bin, 2) ^ keyCodes[index % keyCodes.length];
       return String.fromCharCode(charCode);
   }).join('');

   // 妫€鏌ュ苟鏇挎崲鏈€鍚庝竴涓瓧绗︽槸鍚︽槸闈炴硶瀛楃锛堝鍗婅瀛楃锛�
   if (text.charCodeAt(text.length - 1) < 32 || text.charCodeAt(text.length - 1) > 126) {
       // 濡傛灉鏈€鍚庝竴涓瓧绗︽槸闈炴硶瀛楃锛堝鎹㈣绗︺€佸洖杞︾锛夛紝灏辨浛鎹负绌烘牸
       return text.slice(0, -1) + ' ';
   }
   return text;
}

// 鍏堜娇鐢� XOR 鍔犲瘑锛屽啀杩涜闆跺瀛楃缂栫爜
function textToZeroWidthWithDoubleEncryptionNostring(text, key) {
   // 绗竴姝ワ細XOR 鍔犲瘑
   const xorEncryptedText = Array.from(text).map(char => {
       // 浣跨敤 charCodeAt 鑾峰彇 UTF-16 缂栫爜锛屽苟涓庡瘑閽ヨ繘琛屽紓鎴栨搷浣�
       let charCode = char.charCodeAt(0) ^ key;
       return charCode.toString(2).padStart(16, '0');  // 淇敼涓� 16 浣嶄簩杩涘埗琛ㄧず锛屾敮鎸佹洿澶ц寖鍥寸殑瀛楃
   }).join('');

   // 绗簩姝ワ細灏� XOR 鍔犲瘑鍚庣殑浜岃繘鍒惰浆鎹负闆跺瀛楃
   return xorEncryptedText.split('').map(bit => bit === '0' ? '\u200B' : '\u200C').join('');
}

// 瑙ｅ瘑娴佺▼锛氬厛瑙ｇ爜闆跺瀛楃锛屽啀浣跨敤 XOR 瑙ｅ瘑
function zeroWidthToTextWithDoubleDecryptionNostring(zeroWidthText, key) {
   const binary = Array.from(zeroWidthText).map(char => {
       return char === '\u200B' ? '0' : '1';
   }).join('');

   // 姣�16涓簩杩涘埗浣嶆仮澶嶄负涓€涓瓧绗︼紙鏀寔澶氬瓧鑺傚瓧绗︼級
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
  // 鐩存帴寮圭獥鏄剧ず鎴栬緭鍑哄埌鎺у埗鍙�
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
  // 鍙彂閫� textareaValue锛屼笉鍐嶆嫾鎺ラ殣钘忓唴瀹�
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
       buttcontent.innerHTML = "<h3>鎮ㄥソ,</h3><p>寰堟姳姝夐€氱煡鎮ㄨ鏂囦欢鎴戜滑鏃犳硶鎵惧埌;寤鸿鎮ㄥ湪閲嶆柊鏍稿涓€涓嬩究绛剧爜</p>";
     } else {
       buttcontent.innerHTML = "<h3>Dear client,</h3><p>we regret to inform you that the file number you are looking for does not exist. Please check the file number and try again.</p>";
     }
     return;
   }

   if (result.includes("忙")) {
     myArray = result.split("忙");
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
         buttcontent.innerHTML = "<h3>闃呰鍚庨攢姣�?</h3><p>鎮ㄥ嵆灏嗗紑濮嬮槄璇讳究绛� " + filename + "</p>" + 
           '<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">' + 
           '<button type="button" class="btn btn-warning btn-lg px-4 me-sm-3" onclick="tocontent()">鐜板湪鏌ョ湅</button>' + 
           '<button type="button" class="btn btn-outline-secondary btn-lg px-4">鏆傛椂涓嶆墦寮€</button></div>';
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
         buttcontent.innerHTML = "<h3>杈撳叆瀵嗙爜杩涜闃呰</h3><p>鎮ㄥ嵆灏嗗紑濮嬮槄璇讳究绛� "+ filename + 
           '   <div class="mb-3"><label for="pwd"></label>' + 
           '<input type="password" class="form-control" id="mythenigma" placeholder="杈撳叆瀵嗙爜"></div> ' + 
           '<button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" onclick="yanzheng()">寮€濮嬮槄璇�</button></p>';
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
       buttcontent.innerHTML = "<h3>鎮ㄥソ,</h3><p>鏈変汉宸茬粡闃呰杩囦簡 "+filename+" 璇ユ枃浠跺彲鑳藉凡缁忓け鏁堬紝骞跺湪 "+shi+" 涔嬪墠宸茬粡閿€姣�. 鎮ㄥ彲浠ヨ嚜宸卞皾璇曞垱寤轰竴涓嚜宸辩殑渚跨</p>";
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
  // textareaValue 鏄綋鍓� note 鐨� id
  const noteId = textareaValue;
  const data = new URLSearchParams();
  data.append('e', noteId);
  data.append('myth', password);

  // 璇锋眰杩滅 PHP 楠岃瘉瀵嗙爜
  fetch('https://maipdf.com/baidu.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data.toString(),
    credentials: 'include'
  })
  .then(res => res.text())
  .then(res => {
    if (res.startsWith('18忙1忙') || res.startsWith('19忙1忙')) {
      passInput.value = '';
      passInput.placeholder = currentLanguage === 'zh' ? '瀵嗙爜閿欒锛岃閲嶈瘯' : 'Wrong password, try again';
      passInput.focus();
      return;
    }
    // 瀵嗙爜姝ｇ‘锛岀洿鎺ュ睍绀哄唴瀹�
    // 杩欓噷 textareaValue 鍙兘闇€瑕佹洿鏂颁负 noteId
    textareaValue = noteId;
    tocontent();
  })
  .catch(() => {
    passInput.value = '';
    passInput.placeholder = currentLanguage === 'zh' ? '缃戠粶閿欒' : 'Network error';
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
   // 鍙繚鐣欏睍绀洪摼鎺ュ崱鐗�
   setTimeout(() => {
           fadeIn(myDiv);
     }, 2000);
   document.getElementById("innerlink").textContent= 'https://privnote.chat/note/'+result;
   
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
               // 濡傛灉鏄崲琛岀锛岀洿鎺ユ彃鍏ユ崲琛岀
               textarea.value += '\n';
               index++;  // 璺宠繃鎹㈣绗�
           } else if (character === ' ') {
               // 濡傛灉鏄┖鏍硷紝鐩存帴鎻掑叆涓€涓┖鏍�
               textarea.value += ' ';
               index++;
           } else {
               // 鍚﹀垯鎻掑叆瀛楃
               textarea.value += character;
               index++;
           }

           // Move cursor to the end of the textarea
           textarea.scrollTop = textarea.scrollHeight;  // 璁╂粴鍔ㄦ潯婊氬姩鍒板簳閮�

           // 璋冪敤涓嬩竴涓瓧绗︾殑杈撳叆
           setTimeout(typeNextCharacter, delay);
       }
   }

   // 寮€濮嬫ā鎷熻緭鍏�
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
     expiretime = '鏈闃呰涔嬪悗';
   } else {
     expiretime = 'this reading session';
   }
 }

 const buttcontent = document.getElementById('containerbox');
 
 if(currentLanguage === 'zh'){
   buttcontent.innerHTML = '<h3>渚跨鍐呭</h3> <div class="alert alert-success">璇ヤ究绛惧皢鍦ㄤ互涓嬫椂闂撮攢姣侊細 '+expiretime+' </div><textarea id="resultarea" class="form-control" rows="12" style="background-color:hsla(120,65%,75%,0.3);"></textarea>';
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
     element.style.display = 'none'; // 瀹屽叏闅愯棌鍏冪礌锛屼笉鍗犵敤绌洪棿
   } else {
     element.style.opacity = opacity;
   }
 }

 const fadeOutInterval = setInterval(decreaseOpacity, 50);
}

function fadeIn(element, duration = 1000) { // 榛樿鎸佺画鏃堕棿涓�1000姣
           let opacity = 0; // 鍒濆閫忔槑搴�
           element.style.opacity = opacity;
           element.style.display = 'block'; // 纭繚鍏冪礌鍙

           const interval = 50; // 姣忔澧炲姞閫忔槑搴︾殑鏃堕棿闂撮殧锛堟绉掞級
           const increment = interval / duration; // 姣忔澧炲姞鐨勯€忔槑搴�

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
    let  filterstrings = ['鍙�','棣�','鏂�','sin','hong','sg','tw','hk','鑷�'];
    let  regex = new RegExp( filterstrings.join( "|" ), "i");  
     if(regex.test(d)){
       return 0;
     }
   }
   return 7;
}

// 瀛楃鍔犲瘑Tab鍔熻兘
function encryptZeroWidth() {
  const cover = document.getElementById('coverText').value || '';
  const hidden = document.getElementById('hiddenText').value || '';
  const key = document.getElementById('encryptKey').value || 'mythenigma';
  if (!hidden) {
    document.getElementById('encryptResult').value = currentLanguage === 'zh' ? '璇疯緭鍏ラ殣钘忓唴瀹�' : 'Please enter hidden content';
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
    document.getElementById('encryptResult').value = currentLanguage === 'zh' ? '璇疯緭鍏ラ殣钘忓唴瀹�' : 'Please enter hidden content';
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
    btn.innerHTML = '<i class="fas fa-check me-2"></i>' + (currentLanguage === 'zh' ? '宸插鍒�' : 'Copied!');
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

// 浜嬩欢缁戝畾
window.addEventListener('DOMContentLoaded', function() {
  const btnZero = document.getElementById('btnZeroWidthEncrypt');
  const btnBin = document.getElementById('btnBinaryEncrypt');
  const btnCopy = document.getElementById('btnCopyEncryptResult');
  if (btnZero) btnZero.onclick = encryptZeroWidth;
  if (btnBin) btnBin.onclick = encryptBinary;
  if (btnCopy) btnCopy.onclick = copyEncryptResult;
});

// 瑙ｅ瘑Tab鍔熻兘
function decryptZeroWidth() {
  const input = document.getElementById('decryptInput').value || '';
  const key = document.getElementById('decryptKey').value || 'mythenigma';
  if (!input) {
    document.getElementById('decryptResult').value = currentLanguage === 'zh' ? '璇疯緭鍏ュ姞瀵嗗唴瀹�' : 'Please enter encrypted content';
    return;
  }
  try {
    const decoded = zeroWidthToTextWithDoubleDecryption(input, key);
    document.getElementById('decryptResult').value = decoded;
  } catch (e) {
    document.getElementById('decryptResult').value = currentLanguage === 'zh' ? '瑙ｅ瘑澶辫触锛岃妫€鏌ュ唴瀹瑰拰瀵嗙爜' : 'Decrypt failed, check content and password';
  }
}

function decryptBinary() {
  const input = document.getElementById('decryptInput').value || '';
  const key = document.getElementById('decryptKey').value || 'mythenigma';
  if (!input) {
    document.getElementById('decryptResult').value = currentLanguage === 'zh' ? '璇疯緭鍏ュ姞瀵嗗唴瀹�' : 'Please enter encrypted content';
    return;
  }
  try {
    const decoded = binaryToTextDecryption(input, key);
    document.getElementById('decryptResult').value = decoded;
  } catch (e) {
    document.getElementById('decryptResult').value = currentLanguage === 'zh' ? '瑙ｅ瘑澶辫触锛岃妫€鏌ュ唴瀹瑰拰瀵嗙爜' : 'Decrypt failed, check content and password';
  }
}

function copyDecryptResult() {
  const result = document.getElementById('decryptResult').value;
  if (!result) return;
  navigator.clipboard.writeText(result).then(() => {
    const btn = document.getElementById('btnCopyDecryptResult');
    const old = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check me-2"></i>' + (currentLanguage === 'zh' ? '宸插鍒�' : 'Copied!');
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
  const btnZeroDec = document.getElementById('btnZeroWidthDecrypt');
  const btnBinDec = document.getElementById('btnBinaryDecrypt');
  const btnCopyDec = document.getElementById('btnCopyDecryptResult');
  if (btnZeroDec) btnZeroDec.onclick = decryptZeroWidth;
  if (btnBinDec) btnBinDec.onclick = decryptBinary;
  if (btnCopyDec) btnCopyDec.onclick = copyDecryptResult;
});