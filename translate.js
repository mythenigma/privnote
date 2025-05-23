// Translation and language switching logic for Privnote
// Only translation logic, no business logic here

// Common language strings for main pages
const languageCommonStrings = {
  en: {
    tagline: 'Secure your words, vanish your trace',
    navLinkText: 'Generate Link',
    navEncryptText: 'Character Encryption',
    navDecryptText: 'Decrypt',
    navBlogText: 'Blog',
    currentLanguage: 'English'
  },
  zh: {
    tagline: '安全传信，隐匿无踪',
    navLinkText: '生成链接',
    navEncryptText: '字符加密',
    navDecryptText: '解密工具',
    navBlogText: '博客',
    currentLanguage: '中文'
  },
  es: {
    tagline: 'Asegura tus palabras, desvanece tu rastro',
    navLinkText: 'Generar Enlace',
    navEncryptText: 'Cifrado de Caracteres',
    navDecryptText: 'Descifrar',
    navBlogText: 'Blog',
    currentLanguage: 'Español'
  },
  fr: {
    tagline: 'Sécurisez vos mots, faites disparaître votre trace',
    navLinkText: 'Générer un Lien',
    navEncryptText: 'Chiffrement de Caractères',
    navDecryptText: 'Déchiffrer',
    navBlogText: 'Blog',
    currentLanguage: 'Français'
  }
};

// Index page specific strings
const languageIndexStrings = {
  en: {
    trans2: 'Encrypts your notes with links, zero-width characters, or binary, ensuring secure sharing and auto-destruction',
    topbanner: 'New Notes',
    textareaPlaceholder: 'Write Your Note Here...',
    tranmake: 'Encrypt Note',
    tranoption: 'Optional Setting',
    decodemessage: 'Decrypt Notes',
    tranli: 'The message will be automatically destroyed according to your settings.',
    trantou: 'Link URL self-destructs',
    tranafter: 'You can track the results of when the note link was opened, on which device it was opened, and by what IP was opened.',
    trana: 'Check Open Log',
    tranb: 'How to decode?'
  },
  zh: {
    trans2: '通过链接、零宽字符或二进制加密您的便签，确保安全分享与自动销毁',
    topbanner: '新建便签',
    textareaPlaceholder: '在此输入便签内容...',
    tranmake: '加密便签',
    tranoption: '更多设置',
    decodemessage: '解密便签',
    tranli: '消息将根据您的设置自动销毁。',
    trantou: '链接URL自毁',
    tranafter: '您可以追踪便签链接被打开的时间、设备和IP。',
    trana: '查看打开日志',
    tranb: '如何解密？'
  },
  es: {
    trans2: 'Cifra tus notas con enlaces, caracteres de ancho cero o binarios, garantizando compartir seguro y autodestrucción',
    topbanner: 'Nuevas Notas',
    textareaPlaceholder: 'Escriba su nota aquí...',
    tranmake: 'Cifrar Nota',
    tranoption: 'Configuración Opcional',
    decodemessage: 'Descifrar Notas',
    tranli: 'El mensaje se destruirá automáticamente según su configuración.',
    trantou: 'URL del enlace se autodestruye',
    tranafter: 'Puede rastrear cuándo, en qué dispositivo y con qué IP se abrió el enlace de la nota.',
    trana: 'Ver Registro de Apertura',
    tranb: '¿Cómo descifrar?'
  },
  fr: {
    trans2: 'Chiffre vos notes avec des liens, des caractères de largeur zéro ou binaires, assurant un partage sécurisé et l\'auto-destruction',
    topbanner: 'Nouvelles Notes',
    textareaPlaceholder: 'Écrivez votre note ici...',
    tranmake: 'Chiffrer la Note',
    tranoption: 'Paramètres Optionnels',
    decodemessage: 'Déchiffrer les Notes',
    tranli: 'Le message sera automatiquement détruit selon vos paramètres.',
    trantou: 'L\'URL du lien s\'auto-détruit',
    tranafter: 'Vous pouvez suivre quand le lien de la note a été ouvert, sur quel appareil et par quelle IP.',
    trana: 'Vérifier le Journal d\'Ouverture',
    tranb: 'Comment déchiffrer?'
  }
};

// Decrypt page specific strings
const languageDecryptStrings = {
  en: {
    decryptTabTitle: 'Decrypt Tool',
    decryptInputLabel: 'Encrypted Content (Zero-Width or Binary)',
    decryptInputPlaceholder: 'Paste content to decrypt',
    decryptKeyLabel: 'Password (optional)',
    decryptKeyPlaceholder: 'Enter password (if any)',
    btnZeroWidthDecrypt: 'Zero-Width Decrypt',
    btnBinaryDecrypt: 'Binary Decrypt',
    decryptResultLabel: 'Decryption Result',
    decryptResultPlaceholder: 'Decryption result will appear here',
    btnCopyDecryptResult: 'Copy Result',
    decryptInfoText: 'Supports decryption of both zero-width and binary encrypted content. Leave password blank if not set.',
    alertNoContent: 'Please enter content to decrypt!',
    alertNoZeroWidth: 'No zero-width characters found in the content!',
    alertDecryptFailed: 'Decryption failed, please check if the content and password are correct.',
    alertNoBinaryFormat: 'Input is not valid binary format (0s and 1s)!',
    alertNoCopyContent: 'No content to copy!',
    copySuccess: 'Copied!',
    copyFailed: 'Copy failed, please copy manually.'
  },
  zh: {
    decryptTabTitle: '解密工具',
    decryptInputLabel: '加密内容（零宽字符或二进制）',
    decryptInputPlaceholder: '粘贴要解密的内容',
    decryptKeyLabel: '密码（可选）',
    decryptKeyPlaceholder: '输入密码（如果有）',
    btnZeroWidthDecrypt: '零宽字符解密',
    btnBinaryDecrypt: '二进制解密',
    decryptResultLabel: '解密结果',
    decryptResultPlaceholder: '解密结果将在此显示',
    btnCopyDecryptResult: '复制结果',
    decryptInfoText: '支持解密零宽字符和二进制加密内容。如果未设置密码，请留空。',
    alertNoContent: '请输入要解密的内容！',
    alertNoZeroWidth: '未找到零宽字符加密内容！',
    alertDecryptFailed: '解密失败，请检查内容和密码是否正确。',
    alertNoBinaryFormat: '输入内容不是有效的二进制格式（0和1）！',
    alertNoCopyContent: '没有可复制的内容！',
    copySuccess: '已复制！',
    copyFailed: '复制失败，请手动复制。'
  },
  es: {
    decryptTabTitle: 'Herramienta de Descifrado',
    decryptInputLabel: 'Contenido Cifrado (Ancho Cero o Binario)',
    decryptInputPlaceholder: 'Pegar contenido a descifrar',
    decryptKeyLabel: 'Contraseña (opcional)',
    decryptKeyPlaceholder: 'Ingrese contraseña (si hay alguna)',
    btnZeroWidthDecrypt: 'Descifrar Ancho Cero',
    btnBinaryDecrypt: 'Descifrar Binario',
    decryptResultLabel: 'Resultado del Descifrado',
    decryptResultPlaceholder: 'El resultado del descifrado aparecerá aquí',
    btnCopyDecryptResult: 'Copiar Resultado',
    decryptInfoText: 'Admite descifrado de contenido cifrado tanto en ancho cero como binario. Deje la contraseña en blanco si no se estableció.',
    alertNoContent: '¡Por favor ingrese contenido para descifrar!',
    alertNoZeroWidth: '¡No se encontraron caracteres de ancho cero en el contenido!',
    alertDecryptFailed: 'Descifrado fallido, verifique si el contenido y la contraseña son correctos.',
    alertNoBinaryFormat: '¡La entrada no tiene un formato binario válido (0s y 1s)!',
    alertNoCopyContent: '¡No hay contenido para copiar!',
    copySuccess: '¡Copiado!',
    copyFailed: 'Copia fallida, por favor copie manualmente.'
  },
  fr: {
    decryptTabTitle: 'Outil de Déchiffrement',
    decryptInputLabel: 'Contenu Chiffré (Largeur Zéro ou Binaire)',
    decryptInputPlaceholder: 'Collez le contenu à déchiffrer',
    decryptKeyLabel: 'Mot de passe (facultatif)',
    decryptKeyPlaceholder: 'Entrez le mot de passe (si nécessaire)',
    btnZeroWidthDecrypt: 'Déchiffrer Largeur Zéro',
    btnBinaryDecrypt: 'Déchiffrer Binaire',
    decryptResultLabel: 'Résultat du Déchiffrement',
    decryptResultPlaceholder: 'Le résultat du déchiffrement apparaîtra ici',
    btnCopyDecryptResult: 'Copier le Résultat',
    decryptInfoText: 'Prend en charge le déchiffrement du contenu chiffré en largeur zéro et binaire. Laissez le mot de passe vide s\'il n\'est pas défini.',
    alertNoContent: 'Veuillez saisir du contenu à déchiffrer !',
    alertNoZeroWidth: 'Aucun caractère de largeur zéro trouvé dans le contenu !',
    alertDecryptFailed: 'Échec du déchiffrement, veuillez vérifier si le contenu et le mot de passe sont corrects.',
    alertNoBinaryFormat: 'L\'entrée n\'est pas au format binaire valide (0 et 1) !',
    alertNoCopyContent: 'Aucun contenu à copier !',
    copySuccess: 'Copié !',
    copyFailed: 'Échec de la copie, veuillez copier manuellement.'
  }
};

const languageTabStrings = {
  en: {
    tabLinkText: 'Generate Link',
    tabEncryptText: 'Character Encryption',
    tabDecryptText: 'Decrypt',
    decryptTabTitle: 'Decrypt Tool',
    decryptInputLabel: 'Encrypted Content (Zero-Width or Binary)',
    decryptInputPlaceholder: 'Paste content to decrypt',
    decryptKeyLabel: 'Password (optional)',
    decryptKeyPlaceholder: 'Enter password (if any)',
    btnZeroWidthDecrypt: 'Zero-Width Decrypt',
    btnBinaryDecrypt: 'Binary Decrypt',
    decryptResultLabel: 'Decryption Result',
    decryptResultPlaceholder: 'Decryption result will appear here',
    btnCopyDecryptResult: 'Copy Result',
    decryptInfo: '<strong>Info:</strong> Supports decryption of both zero-width and binary encrypted content. Leave password blank if not set.'
  },
  zh: {
    tabLinkText: '生成链接',
    tabEncryptText: '字符加密',
    tabDecryptText: '解密',
    decryptTabTitle: '解密工具',
    decryptInputLabel: '加密内容（零宽字符或二进制）',
    decryptInputPlaceholder: '粘贴需要解密的内容',
    decryptKeyLabel: '密码（可选）',
    decryptKeyPlaceholder: '输入密码（如有）',
    btnZeroWidthDecrypt: '零宽字符解密',
    btnBinaryDecrypt: '二进制解密',
    decryptResultLabel: '解密结果',
    decryptResultPlaceholder: '解密结果将在此显示',
    btnCopyDecryptResult: '复制结果',
    decryptInfo: '<strong>说明：</strong>支持零宽字符和二进制两种加密内容的解密，密码留空即可。'
  },
  es: {
    tabLinkText: 'Generar Enlace',
    tabEncryptText: 'Cifrado de Caracteres',
    tabDecryptText: 'Descifrar',
    decryptTabTitle: 'Herramienta de Descifrado',
    decryptInputLabel: 'Contenido Cifrado (Ancho Cero o Binario)',
    decryptInputPlaceholder: 'Pegar contenido para descifrar',
    decryptKeyLabel: 'Contraseña (opcional)',
    decryptKeyPlaceholder: 'Ingrese contraseña (si hay alguna)',
    btnZeroWidthDecrypt: 'Descifrar Ancho Cero',
    btnBinaryDecrypt: 'Descifrar Binario',
    decryptResultLabel: 'Resultado del Descifrado',
    decryptResultPlaceholder: 'El resultado del descifrado aparecerá aquí',
    btnCopyDecryptResult: 'Copiar Resultado',
    decryptInfo: '<strong>Info:</strong> Admite descifrado de contenido cifrado tanto en ancho cero como binario. Deje la contraseña en blanco si no se estableció.'
  },
  fr: {
    tabLinkText: 'Générer un Lien',
    tabEncryptText: 'Chiffrement de Caractères',
    tabDecryptText: 'Déchiffrer',
    decryptTabTitle: 'Outil de Déchiffrement',
    decryptInputLabel: 'Contenu Chiffré (Largeur Zéro ou Binaire)',
    decryptInputPlaceholder: 'Collez le contenu à déchiffrer',
    decryptKeyLabel: 'Mot de passe (facultatif)',
    decryptKeyPlaceholder: 'Entrez le mot de passe (si nécessaire)',
    btnZeroWidthDecrypt: 'Déchiffrer Largeur Zéro',
    btnBinaryDecrypt: 'Déchiffrer Binaire',
    decryptResultLabel: 'Résultat du Déchiffrement',
    decryptResultPlaceholder: 'Le résultat du déchiffrement apparaîtra ici',
    btnCopyDecryptResult: 'Copier le Résultat',
    decryptInfo: '<strong>Info:</strong> Prend en charge le déchiffrement du contenu chiffré en largeur zéro et binaire. Laissez le mot de passe vide s\'il n\'est pas défini.'
  }
};

function applyTabLanguage(lang) {
  const tabStrings = languageTabStrings[lang] || languageTabStrings['en'];
  
  // Helper function to safely update element text content
  function safeUpdateElement(tabId, navId, text) {
    // Try tab ID first
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.textContent = text;
    }
    
    // Also try nav ID for compatibility
    const navElement = document.getElementById(navId);
    if (navElement) {
      navElement.textContent = text;
    }
  }
  
  // Tab标题 - Update both tab and nav element IDs for compatibility
  safeUpdateElement('tabLinkText', 'navLinkText', tabStrings.tabLinkText);
  safeUpdateElement('tabEncryptText', 'navEncryptText', tabStrings.tabEncryptText);
  safeUpdateElement('tabDecryptText', 'navDecryptText', tabStrings.tabDecryptText);
  
  // Decrypt Tab内容 - Safely update all elements
  const decryptTabTitle = document.getElementById('decryptTabTitle');
  if (decryptTabTitle) decryptTabTitle.textContent = tabStrings.decryptTabTitle;
  
  const decryptInputLabel = document.getElementById('decryptInputLabel');
  if (decryptInputLabel) decryptInputLabel.textContent = tabStrings.decryptInputLabel;
  
  const decryptInput = document.getElementById('decryptInput');
  if (decryptInput) decryptInput.placeholder = tabStrings.decryptInputPlaceholder;
  
  const decryptKeyLabel = document.getElementById('decryptKeyLabel');
  if (decryptKeyLabel) decryptKeyLabel.textContent = tabStrings.decryptKeyLabel;
  
  const decryptKey = document.getElementById('decryptKey');
  if (decryptKey) decryptKey.placeholder = tabStrings.decryptKeyPlaceholder;
  
  const btnZeroWidthDecrypt = document.getElementById('btnZeroWidthDecrypt');
  if (btnZeroWidthDecrypt) btnZeroWidthDecrypt.textContent = tabStrings.btnZeroWidthDecrypt;
  
  const btnBinaryDecrypt = document.getElementById('btnBinaryDecrypt');
  if (btnBinaryDecrypt) btnBinaryDecrypt.textContent = tabStrings.btnBinaryDecrypt;
  
  const decryptResultLabel = document.getElementById('decryptResultLabel');
  if (decryptResultLabel) decryptResultLabel.textContent = tabStrings.decryptResultLabel;
  
  const decryptResult = document.getElementById('decryptResult');
  if (decryptResult) decryptResult.placeholder = tabStrings.decryptResultPlaceholder;
  
  const btnCopyDecryptResult = document.getElementById('btnCopyDecryptResult');
  if (btnCopyDecryptResult) btnCopyDecryptResult.innerHTML = '<i class="fas fa-copy me-2"></i>' + tabStrings.btnCopyDecryptResult;
  
  const decryptInfo = document.getElementById('decryptInfo');
  if (decryptInfo) decryptInfo.innerHTML = tabStrings.decryptInfo;
}

window.applyTabLanguage = applyTabLanguage;
window.languageTabStrings = languageTabStrings;

// Function to apply decrypt page specific translations
function applyDecryptLanguage(lang) {
  const decryptStrings = languageDecryptStrings[lang] || languageDecryptStrings['en'];
  
  // Update decrypt page specific elements
  document.getElementById('decryptTabTitle').textContent = decryptStrings.decryptTabTitle;
  document.getElementById('decryptInputLabel').textContent = decryptStrings.decryptInputLabel;
  document.getElementById('decryptInput').placeholder = decryptStrings.decryptInputPlaceholder;
  document.getElementById('decryptKeyLabel').textContent = decryptStrings.decryptKeyLabel;
  document.getElementById('decryptKey').placeholder = decryptStrings.decryptKeyPlaceholder;
  document.getElementById('btnZeroWidthDecrypt').textContent = decryptStrings.btnZeroWidthDecrypt;
  document.getElementById('btnBinaryDecrypt').textContent = decryptStrings.btnBinaryDecrypt;
  document.getElementById('decryptResultLabel').textContent = decryptStrings.decryptResultLabel;
  document.getElementById('decryptResult').placeholder = decryptStrings.decryptResultPlaceholder;
  
  const btnCopyDecryptResult = document.getElementById('btnCopyDecryptResult');
  if (btnCopyDecryptResult) {
    btnCopyDecryptResult.innerHTML = '<i class="fas fa-copy me-2"></i>' + decryptStrings.btnCopyDecryptResult;
  }
  
  const decryptInfoText = document.getElementById('decryptInfoText');
  if (decryptInfoText) {
    decryptInfoText.textContent = decryptStrings.decryptInfoText;
  }
}

// Common function to switch language for navigation and header elements
function applyCommonLanguage(lang) {
  const commonStrings = languageCommonStrings[lang] || languageCommonStrings['en'];
  
  // Update language dropdown
  document.getElementById('currentLanguage').textContent = commonStrings.currentLanguage;
  
  // Update tagline if exists
  const taglineElement = document.getElementById('trans1');
  if (taglineElement) {
    taglineElement.textContent = commonStrings.tagline;
  }
  
  // Update navigation links if they exist
  const navLinkElement = document.getElementById('navLinkText');
  if (navLinkElement) {
    navLinkElement.textContent = commonStrings.navLinkText;
  }
  
  const navEncryptElement = document.getElementById('navEncryptText');
  if (navEncryptElement) {
    navEncryptElement.textContent = commonStrings.navEncryptText;
  }
  
  const navDecryptElement = document.getElementById('navDecryptText');
  if (navDecryptElement) {
    navDecryptElement.textContent = commonStrings.navDecryptText;
  }
}

// Function to apply index page specific translations
function applyIndexLanguage(lang) {
  const indexStrings = languageIndexStrings[lang] || languageIndexStrings['en'];
  
  // Update index page specific elements
  document.getElementById('trans2').textContent = indexStrings.trans2;
  document.getElementById('topbanner').textContent = indexStrings.topbanner;
  document.getElementById('myTextarea').placeholder = indexStrings.textareaPlaceholder;
  document.getElementById('tranmake').innerHTML = '<i class="fas fa-lock me-2"></i>' + indexStrings.tranmake;
  document.getElementById('tranoption').innerHTML = '<i class="fas fa-cog me-2"></i>' + indexStrings.tranoption;
  document.getElementById('decodemessage').innerHTML = '<i class="fas fa-unlock me-2"></i><a href="decrypt.html" class="text-decoration-none text-warning">' + indexStrings.decodemessage + '</a>';
  
  // Update result and other elements if they exist
  const tranliElement = document.getElementById('tranli');
  if (tranliElement) {
    tranliElement.textContent = indexStrings.tranli;
  }
  
  const trantouElement = document.getElementById('trantou');
  if (trantouElement) {
    trantouElement.textContent = indexStrings.trantou;
  }
  
  const tranafterElement = document.getElementById('tranafter');
  if (tranafterElement) {
    tranafterElement.textContent = indexStrings.tranafter;
  }
  
  const tranaElement = document.getElementById('trana');
  if (tranaElement) {
    tranaElement.innerHTML = '<i class="fas fa-chart-line me-2"></i>' + indexStrings.trana;
  }
  
  const tranbElement = document.getElementById('tranb');
  if (tranbElement) {
    tranbElement.innerHTML = '<i class="fas fa-question-circle me-2"></i>' + indexStrings.tranb;
  }
}

// Main switchLanguage function that will be used by all pages
function switchLanguage(lang) {
  currentLanguage = lang;
  
  // Save the selected language in localStorage
  if (isLocalStorageAvailable()) {
    localStorage.setItem('privnote_language', lang);
    console.log("Language saved to localStorage:", lang);
  }
  
  // Update language display in UI
  const currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    // Display language code in UI (uppercase for better visibility)
    if (lang === 'en') currentLanguageElement.textContent = 'English';
    else if (lang === 'zh') currentLanguageElement.textContent = '中文';
    else if (lang === 'es') currentLanguageElement.textContent = 'Español';
    else if (lang === 'fr') currentLanguageElement.textContent = 'Français';
  }
  
  // Add visual indication of selected language in dropdown
  document.querySelectorAll('.dropdown-item').forEach(item => {
    // Remove active class from all items
    item.classList.remove('active');
    
    // Add active class to the selected language
    if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(`'${lang}'`)) {
      item.classList.add('active');
    }
  });
  
  // Apply common language elements (header, navigation)
  applyCommonLanguage(lang);
  
  // Check which page we're on and apply appropriate translations
  
  // Check if current page is index.html
  const isIndexPage = document.getElementById('trans2') !== null;
  if (isIndexPage) {
    applyIndexLanguage(lang);
  }
  
  // Check if current page has tabs
  const hasTabElement = document.getElementById('tabLinkText') !== null || 
                        document.getElementById('navLinkText') !== null;
  if (hasTabElement) {
    applyTabLanguage(lang);
  }
    // Check if current page is decrypt.html
  const isDecryptPage = document.getElementById('decryptTabTitle') !== null && 
                        document.getElementById('decryptInput') !== null;
  if (isDecryptPage) {
    applyDecryptLanguage(lang);
  }
  
  // Blog pages don't need translation - intentionally removed
}

// Function to get localized string
function getLocalizedString(stringKey, category = 'common') {
  let stringObject;
  
  switch(category) {
    case 'index':
      stringObject = languageIndexStrings[currentLanguage] || languageIndexStrings['en'];
      break;
    case 'decrypt':
      stringObject = languageDecryptStrings[currentLanguage] || languageDecryptStrings['en'];
      break;
    case 'tab':
      stringObject = languageTabStrings[currentLanguage] || languageTabStrings['en'];
      break;
    case 'common':
    default:
      stringObject = languageCommonStrings[currentLanguage] || languageCommonStrings['en'];
      break;
  }
    return stringObject[stringKey] || stringKey;
}

// Export functions and variables for global use
window.switchLanguage = switchLanguage;
window.getLocalizedString = getLocalizedString;
window.languageCommonStrings = languageCommonStrings;
window.languageIndexStrings = languageIndexStrings;
window.languageDecryptStrings = languageDecryptStrings;

// Helper function to check if localStorage is available
function isLocalStorageAvailable() {
  try {
    const testKey = "__privnote_test__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    console.warn("localStorage not available. Language preferences won't be saved.");
    return false;
  }
}

// Add CSS for active language in dropdown
function addLanguageDropdownStyles() {
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .dropdown-item.active {
      background-color: #f8f9fa;
      color: #007bff;
      font-weight: bold;
    }
    .dropdown-item.active::before {
      content: "✓ ";
    }
  `;
  document.head.appendChild(styleEl);
}

// Call once when script loads
addLanguageDropdownStyles();

// Initialize the current language from localStorage or default to 'en'
let savedLanguage = 'en';
if (isLocalStorageAvailable()) {
  savedLanguage = localStorage.getItem('privnote_language') || 'en';
  console.log("Language loaded from localStorage:", savedLanguage);
}
window.currentLanguage = savedLanguage;

// Execute as soon as the script loads to ensure proper language display before DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Force update of the language display in the dropdown
  const currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    if (window.currentLanguage === 'en') currentLanguageElement.textContent = 'English';
    else if (window.currentLanguage === 'zh') currentLanguageElement.textContent = '中文';
    else if (window.currentLanguage === 'es') currentLanguageElement.textContent = 'Español';
    else if (window.currentLanguage === 'fr') currentLanguageElement.textContent = 'Français';
  }
});
