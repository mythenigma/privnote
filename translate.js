// Translation and language switching logic for Privnote
// Only translation logic, no business logic here

// Common language strings for main pages
const languageCommonStrings = {
  en: {
    tagline: 'Secure your words, vanish your trace',
    navLinkText: 'Generate Link',
    navEncryptText: 'Character Encryption',
    navDecryptText: 'Decrypt',
    currentLanguage: 'English'
  },
  zh: {
    tagline: '安全传信，隐匿无踪',
    navLinkText: '生成链接',
    navEncryptText: '字符加密',
    navDecryptText: '解密工具',
    currentLanguage: '中文'
  },
  es: {
    tagline: 'Asegura tus palabras, desvanece tu rastro',
    navLinkText: 'Generar Enlace',
    navEncryptText: 'Cifrado de Caracteres',
    navDecryptText: 'Descifrar',
    currentLanguage: 'Español'
  },
  fr: {
    tagline: 'Sécurisez vos mots, faites disparaître votre trace',
    navLinkText: 'Générer un Lien',
    navEncryptText: 'Chiffrement de Caractères',
    navDecryptText: 'Déchiffrer',
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

// Encryption page specific strings
const languageEncryptionStrings = {
  en: {
    encryptTabTitle: 'Character Encryption Tool',
    coverTextLabel: 'Cover Text (optional)',
    coverTextPlaceholder: 'Enter cover text, optional',
    hiddenTextLabel: 'Hidden Content (required, will be encrypted)',
    hiddenTextPlaceholder: 'Enter hidden content to encrypt',
    encryptKeyLabel: 'Password (optional)',
    encryptKeyPlaceholder: 'Enter password (if any)',
    pass1Placeholder: 'Enter Password',
    pass2Placeholder: 'Confirm Password',
    btnZeroWidthEncrypt: 'Zero-Width Encrypt',
    btnBinaryEncrypt: 'Binary Encrypt',
    encryptResultLabel: 'Combined Result',
    encryptResultPlaceholder: 'Encrypted result will appear here',
    textareaPlaceholder: 'Write Your Note Here...',
    tranmake: 'Encrypt Note',
    btnCopyEncryptResult: 'Copy Result',
    encryptInfo: '<strong>Info:</strong> Zero-width encryption hides the hidden content in the cover text. Binary encryption converts the hidden content to 0/1. You can set a custom password.',
    hiddenTextareaPlaceholder: 'Write Hidden Messages Here...',
    alertPasswordMismatch: 'Password does not match or clear password',
    alertContentTooLong: 'Too long.....',
    alertWriteSomething: 'Write something on note',
    mobileAlertShort: 'Encryption successful! Upper box: zero-width characters. Lower box: binary format.',
    mobileAlertMedium: 'Encryption complete. The top box contains zero-width character encryption, while the bottom shows binary encryption.'
  },  zh: {
    encryptTabTitle: '字符加密工具',
    coverTextLabel: '表面内容（可选）',
    coverTextPlaceholder: '输入表面内容，可留空',
    hiddenTextLabel: '隐藏内容（必填，将被加密）',
    hiddenTextPlaceholder: '输入需要加密的隐藏内容',
    encryptKeyLabel: '密码（可选）',
    encryptKeyPlaceholder: '输入密码（如有）',
    pass1Placeholder: '输入密码',
    pass2Placeholder: '确认密码',
    btnZeroWidthEncrypt: '零宽字符加密',
    btnBinaryEncrypt: '二进制加密',
    encryptResultLabel: '合成结果',
    encryptResultPlaceholder: '加密内容将在此显示',
    textareaPlaceholder: '在此输入便签内容...',
    tranmake: '加密便签',
    btnCopyEncryptResult: '复制结果',
    encryptInfo: '<strong>说明：</strong>零宽字符加密会将隐藏内容隐写进表面内容，二进制加密则将隐藏内容转为0/1字符串。可自定义密码。',
    hiddenTextareaPlaceholder: '在此输入隐藏内容...',
    alertPasswordMismatch: '密码不匹配或清除密码',
    alertContentTooLong: '内容过长.....',
    alertWriteSomething: '请在便签上写些内容',
    mobileAlertShort: '加密成功！上框：零宽字符。下框：二进制格式。',
    mobileAlertMedium: '加密完成。顶部框包含零宽字符加密，底部显示二进制加密。'
  },  es: {
    encryptTabTitle: 'Herramienta de Cifrado de Caracteres',
    coverTextLabel: 'Texto de Cobertura (opcional)',
    coverTextPlaceholder: 'Ingrese texto de cobertura, opcional',
    hiddenTextLabel: 'Contenido Oculto (requerido, será cifrado)',
    hiddenTextPlaceholder: 'Ingrese contenido oculto para cifrar',
    encryptKeyLabel: 'Contraseña (opcional)',
    encryptKeyPlaceholder: 'Ingrese contraseña (si hay alguna)',
    pass1Placeholder: 'Ingrese contraseña',
    pass2Placeholder: 'Confirme contraseña',
    btnZeroWidthEncrypt: 'Cifrado de Ancho Cero',
    btnBinaryEncrypt: 'Cifrado Binario',
    encryptResultLabel: 'Resultado Combinado',
    encryptResultPlaceholder: 'El contenido cifrado aparecerá aquí',
    textareaPlaceholder: 'Escriba su nota aquí...',
    tranmake: 'Cifrar Nota',
    btnCopyEncryptResult: 'Copiar Resultado',
    encryptInfo: '<strong>Info:</strong> El cifrado de ancho cero oculta el contenido en el texto de cobertura. El cifrado binario convierte el contenido oculto a 0/1. Puede establecer una contraseña personalizada.',
    hiddenTextareaPlaceholder: 'Escriba mensajes ocultos aquí...',
    alertPasswordMismatch: 'Contraseña no coincidente o borrar la contraseña',
    alertContentTooLong: 'Demasiado largo.....',    alertWriteSomething: 'Escriba algo en la nota',
    mobileAlertShort: '¡Cifrado exitoso! Cuadro superior: caracteres de ancho cero. Cuadro inferior: formato binario.',
    mobileAlertMedium: 'Cifrado completo. El cuadro superior contiene cifrado de caracteres de ancho cero, mientras que el inferior muestra cifrado binario.'
  },
  fr: {
    encryptTabTitle: 'Outil de Chiffrement de Caractères',
    coverTextLabel: 'Texte de Couverture (facultatif)',
    coverTextPlaceholder: 'Entrez le texte de couverture, facultatif',
    hiddenTextLabel: 'Contenu Caché (requis, sera chiffré)',
    hiddenTextPlaceholder: 'Entrez le contenu caché à chiffrer',
    encryptKeyLabel: 'Mot de passe (facultatif)',
    encryptKeyPlaceholder: 'Entrez le mot de passe (si nécessaire)',
    pass1Placeholder: 'Entrez le mot de passe',
    pass2Placeholder: 'Confirmez le mot de passe',
    btnZeroWidthEncrypt: 'Chiffrer en Largeur Zéro',
    btnBinaryEncrypt: 'Chiffrer en Binaire',
    encryptResultLabel: 'Résultat Combiné',
    encryptResultPlaceholder: 'Le résultat chiffré apparaîtra ici',
    textareaPlaceholder: 'Écrivez votre note ici...',
    tranmake: 'Chiffrer la Note',
    btnCopyEncryptResult: 'Copier le Résultat',
    encryptInfo: '<strong>Info:</strong> Le chiffrement à largeur zéro cache le contenu caché dans le texte de couverture. Le chiffrement binaire convertit le contenu caché en 0/1. Vous pouvez définir un mot de passe personnalisé.',
    hiddenTextareaPlaceholder: 'Écrivez les messages cachés ici...',
    alertPasswordMismatch: 'Le mot de passe ne correspond pas ou effacez le mot de passe',
    alertContentTooLong: 'Trop long.....',
    alertWriteSomething: 'Écrivez quelque chose sur la note',
    mobileAlertShort: 'Chiffrement réussi ! Boîte supérieure : caractères à largeur zéro. Boîte inférieure : format binaire.',
    mobileAlertMedium: 'Chiffrement terminé. La boîte supérieure contient le chiffrement à caractères de largeur zéro, tandis que celle du bas affiche le chiffrement binaire.'
  }
};

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
  },
  es: {
    tabLinkText: 'Generar Enlace',
    tabEncryptText: 'Cifrado de Caracteres',
    tabDecryptText: 'Descifrar',
    encryptTabTitle: 'Herramienta de Cifrado de Caracteres',
    coverTextLabel: 'Texto de Cobertura (opcional)',
    coverTextPlaceholder: 'Ingrese texto de cobertura, opcional',
    hiddenTextLabel: 'Contenido Oculto (requerido, será cifrado)',
    hiddenTextPlaceholder: 'Ingrese contenido oculto para cifrar',
    encryptKeyLabel: 'Contraseña (opcional)',
    encryptKeyPlaceholder: 'Ingrese contraseña (si hay alguna)',
    btnZeroWidthEncrypt: 'Cifrado de Ancho Cero',
    btnBinaryEncrypt: 'Cifrado Binario',
    encryptResultLabel: 'Resultado Combinado',
    encryptResultPlaceholder: 'El resultado cifrado aparecerá aquí',
    btnCopyEncryptResult: 'Copiar Resultado',
    encryptInfo: '<strong>Info:</strong> El cifrado de ancho cero oculta el contenido en el texto de cobertura. El cifrado binario convierte el contenido oculto a 0/1. Puede establecer una contraseña personalizada.',
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
    encryptTabTitle: 'Outil de Chiffrement de Caractères',
    coverTextLabel: 'Texte de Couverture (facultatif)',
    coverTextPlaceholder: 'Entrez le texte de couverture, facultatif',
    hiddenTextLabel: 'Contenu Caché (requis, sera chiffré)',
    hiddenTextPlaceholder: 'Entrez le contenu caché à chiffrer',
    encryptKeyLabel: 'Mot de passe (facultatif)',
    encryptKeyPlaceholder: 'Entrez le mot de passe (si nécessaire)',
    btnZeroWidthEncrypt: 'Chiffrer en Largeur Zéro',
    btnBinaryEncrypt: 'Chiffrer en Binaire',
    encryptResultLabel: 'Résultat Combiné',
    encryptResultPlaceholder: 'Le résultat chiffré apparaîtra ici',
    btnCopyEncryptResult: 'Copier le Résultat',
    encryptInfo: '<strong>Info:</strong> Le chiffrement à largeur zéro cache le contenu caché dans le texte de couverture. Le chiffrement binaire convertit le contenu caché en 0/1. Vous pouvez définir un mot de passe personnalisé.',
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
  
  // 添加安全的元素更新函数
  function safeUpdateText(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }
  
  function safeUpdatePlaceholder(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.placeholder = value;
    }
  }
  
  function safeUpdateHTML(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = value;
    }
  }
  
  // 安全地更新Tab标题
  safeUpdateText('tabLinkText', tabStrings.tabLinkText);
  safeUpdateText('tabEncryptText', tabStrings.tabEncryptText);
  safeUpdateText('tabDecryptText', tabStrings.tabDecryptText);
  
  // 安全地更新Character Encryption Tab内容
  safeUpdateText('encryptTabTitle', tabStrings.encryptTabTitle);
  safeUpdateText('coverTextLabel', tabStrings.coverTextLabel);
  safeUpdatePlaceholder('coverText', tabStrings.coverTextPlaceholder);
  safeUpdateText('hiddenTextLabel', tabStrings.hiddenTextLabel);
  safeUpdatePlaceholder('hiddenText', tabStrings.hiddenTextPlaceholder);
  safeUpdateText('encryptKeyLabel', tabStrings.encryptKeyLabel);
  safeUpdatePlaceholder('encryptKey', tabStrings.encryptKeyPlaceholder);
  safeUpdateText('btnZeroWidthEncrypt', tabStrings.btnZeroWidthEncrypt);
  safeUpdateText('btnBinaryEncrypt', tabStrings.btnBinaryEncrypt);
  safeUpdateText('encryptResultLabel', tabStrings.encryptResultLabel);
  safeUpdatePlaceholder('encryptResult', tabStrings.encryptResultPlaceholder);
  safeUpdateHTML('btnCopyEncryptResult', '<i class="fas fa-copy me-2"></i>' + tabStrings.btnCopyEncryptResult);
  safeUpdateHTML('encryptInfo', tabStrings.encryptInfo);
  
  // 安全地更新Decrypt Tab内容
  safeUpdateText('decryptTabTitle', tabStrings.decryptTabTitle);
  safeUpdateText('decryptInputLabel', tabStrings.decryptInputLabel);
  safeUpdatePlaceholder('decryptInput', tabStrings.decryptInputPlaceholder);
  safeUpdateText('decryptKeyLabel', tabStrings.decryptKeyLabel);
  safeUpdatePlaceholder('decryptKey', tabStrings.decryptKeyPlaceholder);
  safeUpdateText('btnZeroWidthDecrypt', tabStrings.btnZeroWidthDecrypt);
  safeUpdateText('btnBinaryDecrypt', tabStrings.btnBinaryDecrypt);
  safeUpdateText('decryptResultLabel', tabStrings.decryptResultLabel);
  safeUpdatePlaceholder('decryptResult', tabStrings.decryptResultPlaceholder);
  safeUpdateHTML('btnCopyDecryptResult', '<i class="fas fa-copy me-2"></i>' + tabStrings.btnCopyDecryptResult);
  safeUpdateHTML('decryptInfo', tabStrings.decryptInfo);
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

// Function to apply encryption page specific translations
function applyEncryptionLanguage(lang) {
  const encryptionStrings = languageEncryptionStrings[lang] || languageEncryptionStrings['en'];
  
  // Update encryption page elements
  document.getElementById('encryptTabTitle').textContent = encryptionStrings.encryptTabTitle;
  
  // Update placeholders
  document.getElementById('myTextarea').placeholder = encryptionStrings.textareaPlaceholder;
  
  const hiddenTextarea = document.getElementById('HiddenTextarea');
  if (hiddenTextarea) {
    hiddenTextarea.placeholder = encryptionStrings.hiddenTextareaPlaceholder;
  }
  
  const pass1 = document.getElementById('pass1');
  if (pass1) {
    pass1.placeholder = encryptionStrings.pass1Placeholder;
  }
  
  const pass2 = document.getElementById('pass2');
  if (pass2) {
    pass2.placeholder = encryptionStrings.pass2Placeholder;
  }
  
  const coverCopy = document.getElementById('coverCopy');
  if (coverCopy) {
    coverCopy.placeholder = encryptionStrings.encryptResultPlaceholder;
  }
    // Update button text
  const tranmake = document.getElementById('tranmake');
  if (tranmake) {
    tranmake.innerHTML = '<i class="fas fa-lock me-2"></i>' + encryptionStrings.tranmake;
  }
  
  // Update other text elements if they exist
  const tranli = document.getElementById('tranli');
  if (tranli) {
    tranli.textContent = encryptionStrings.tranli;
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
  
  // Check if current page has character encryption tab
  const hasEncryptTabTitle = document.getElementById('encryptTabTitle') !== null;
  if (hasEncryptTabTitle) {
    if (window.location.href.includes('encryption.html')) {
      applyEncryptionLanguage(lang);
    } else {
      applyTabLanguage(lang);
    }
  }
  
  // Check if current page is decrypt.html
  const isDecryptPage = document.getElementById('decryptTabTitle') !== null && 
                        document.getElementById('decryptInput') !== null;
  if (isDecryptPage) {
    applyDecryptLanguage(lang);
  }
}

// Helper function to get text based on current language
function getLocalizedString(stringKey, category = 'common') {
  let stringObject;
  
  switch(category) {
    case 'index':
      stringObject = languageIndexStrings[currentLanguage] || languageIndexStrings['en'];
      break;
    case 'decrypt':
      stringObject = languageDecryptStrings[currentLanguage] || languageDecryptStrings['en'];
      break;
    case 'encryption':
      stringObject = languageEncryptionStrings[currentLanguage] || languageEncryptionStrings['en'];
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
window.languageEncryptionStrings = languageEncryptionStrings;

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
