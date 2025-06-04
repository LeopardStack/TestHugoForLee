function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// 恢复保存的主题
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
});

// 自动语言检测
function detectUserLanguage() {
    const urlLang = window.location.pathname.split('/')[1];
    if (['en', 'zh', 'ru'].includes(urlLang)) return urlLang;

    const userLang = navigator.language.toLowerCase();
    
    if (userLang.includes('zh')) {
        return 'zh';
    } else if (userLang.includes('ru')) {
        return 'ru';
    } else {
        return 'en';
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const currentLang = document.documentElement.getAttribute('data-lang');
    const detectedLang = detectUserLanguage();
    
    if (currentLang !== detectedLang && !sessionStorage.getItem('language-selected')) {
        const newUrl = window.location.origin + '/' + detectedLang + '/';
        window.location.href = newUrl;
    }
});
