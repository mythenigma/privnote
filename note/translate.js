// Translation and language switching logic for Privnote
// Only translation logic, no business logic here

const languageTabStrings = {
  en: {
    tabLinkText: 'Generate Link',
    tabEncryptText: 'Character Encryption',
    tabDecryptText: 'Decrypt',
    encryptTabTitle: 'Character Encryption Tool',
    coverTextLabel: 'Cover Text (optional)',
    coverTextPlaceholder: 'Enter cover text, optional',
    hiddenTextLabel: 'Hidden Content (required, will be encrypted)',
    hiddenTextPlaceholder: 'Enter hidden content to encrypt',
    encryptKeyLabel: 'Password (optional)',
    encryptKeyPlaceholder: 'Enter password (if any)',
    btnZeroWidthEncrypt: 'Zero-Width Encrypt',
    btnBinaryEncrypt: 'Binary Encrypt',
    encryptResultLabel: 'Combined Result',
    encryptResultPlaceholder: 'Encrypted result will appear here',
    btnCopyEncryptResult: 'Copy Result',
    encryptInfo: '<strong>Info:</strong> Zero-width encryption hides the hidden content in the cover text. Binary encryption converts the hidden content to 0/1. You can set a custom password.',
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
    encryptTabTitle: '字符加密工具',
    coverTextLabel: '表面内容（可选）',
    coverTextPlaceholder: '输入表面内容，可留空',
    hiddenTextLabel: '隐藏内容（必填，将被加密）',
    hiddenTextPlaceholder: '输入需要加密的隐藏内容',
    encryptKeyLabel: '密码（可选）',
    encryptKeyPlaceholder: '输入密码（如有）',
    btnZeroWidthEncrypt: '零宽字符加密',
    btnBinaryEncrypt: '二进制加密',
    encryptResultLabel: '合成结果',
    encryptResultPlaceholder: '加密结果将在此显示',
    btnCopyEncryptResult: '复制结果',
    encryptInfo: '<strong>说明：</strong>零宽字符加密会将隐藏内容隐写进表面内容，二进制加密则将隐藏内容转为0/1字符串。可自定义密码。',
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
  }
};

function applyTabLanguage(lang) {
  const tabStrings = languageTabStrings[lang] || languageTabStrings['en'];
  // Tab标题
  document.getElementById('tabLinkText').textContent = tabStrings.tabLinkText;
  document.getElementById('tabEncryptText').textContent = tabStrings.tabEncryptText;
  document.getElementById('tabDecryptText').textContent = tabStrings.tabDecryptText;
  // Character Encryption Tab内容
  document.getElementById('encryptTabTitle').textContent = tabStrings.encryptTabTitle;
  document.getElementById('coverTextLabel').textContent = tabStrings.coverTextLabel;
  document.getElementById('coverText').placeholder = tabStrings.coverTextPlaceholder;
  document.getElementById('hiddenTextLabel').textContent = tabStrings.hiddenTextLabel;
  document.getElementById('hiddenText').placeholder = tabStrings.hiddenTextPlaceholder;
  document.getElementById('encryptKeyLabel').textContent = tabStrings.encryptKeyLabel;
  document.getElementById('encryptKey').placeholder = tabStrings.encryptKeyPlaceholder;
  document.getElementById('btnZeroWidthEncrypt').textContent = tabStrings.btnZeroWidthEncrypt;
  document.getElementById('btnBinaryEncrypt').textContent = tabStrings.btnBinaryEncrypt;
  document.getElementById('encryptResultLabel').textContent = tabStrings.encryptResultLabel;
  document.getElementById('encryptResult').placeholder = tabStrings.encryptResultPlaceholder;
  document.getElementById('btnCopyEncryptResult').innerHTML = '<i class="fas fa-copy me-2"></i>' + tabStrings.btnCopyEncryptResult;
  document.getElementById('encryptInfo').innerHTML = tabStrings.encryptInfo;
  // Decrypt Tab内容
  document.getElementById('decryptTabTitle').textContent = tabStrings.decryptTabTitle;
  document.getElementById('decryptInputLabel').textContent = tabStrings.decryptInputLabel;
  document.getElementById('decryptInput').placeholder = tabStrings.decryptInputPlaceholder;
  document.getElementById('decryptKeyLabel').textContent = tabStrings.decryptKeyLabel;
  document.getElementById('decryptKey').placeholder = tabStrings.decryptKeyPlaceholder;
  document.getElementById('btnZeroWidthDecrypt').textContent = tabStrings.btnZeroWidthDecrypt;
  document.getElementById('btnBinaryDecrypt').textContent = tabStrings.btnBinaryDecrypt;
  document.getElementById('decryptResultLabel').textContent = tabStrings.decryptResultLabel;
  document.getElementById('decryptResult').placeholder = tabStrings.decryptResultPlaceholder;
  document.getElementById('btnCopyDecryptResult').innerHTML = '<i class="fas fa-copy me-2"></i>' + tabStrings.btnCopyDecryptResult;
  document.getElementById('decryptInfo').innerHTML = tabStrings.decryptInfo;
}

window.applyTabLanguage = applyTabLanguage;
window.languageTabStrings = languageTabStrings;
