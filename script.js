// Language selection functionality
document.getElementById('language').addEventListener('change', function() {
    var language = this.value;
    translateContent(language);
});

// Function to translate content based on selected language
function translateContent(language) {
    var translations = {
        'en': {
            'Home': 'Home',
            'Job Listings': 'Job Listings',
            'About Japan': 'About Japan',
            'Contact': 'Contact',
            'Language': 'Language',
            'Welcome to Work Opportunities in Japan': 'Welcome to Work Opportunities in Japan',
            'Explore job opportunities and learn about Japanese culture.': 'Explore job opportunities and learn about Japanese culture.',
            'Job Listings': 'Job Listings',
            'Discover the rich culture, lifestyle, and work etiquette in Japan.': 'Discover the rich culture, lifestyle, and work etiquette in Japan.',
            'Contact Us': 'Contact Us',
            'Name:': 'Name:',
            'Email:': 'Email:',
            'Message:': 'Message:',
            'Send Message': 'Send Message',
            '© 2024 Work Opportunities in Japan': '© 2024 Work Opportunities in Japan'
        },
        'ja': {
            'Home': 'ホーム',
            'Job Listings': '求人情報',
            'About Japan': '日本について',
            'Contact': 'お問い合わせ',
            'Language': '言語',
            'Welcome to Work Opportunities in Japan': '日本の仕事の機会へようこそ',
            'Explore job opportunities and learn about Japanese culture.': '仕事の機会を探し、日本の文化を学びましょう。',
            'Job Listings': '求人情報',
            'Discover the rich culture, lifestyle, and work etiquette in Japan.': '日本の豊かな文化、ライフスタイル、仕事のエチケットを発見してください。',
            'Contact Us': 'お問い合わせ',
            'Name:': '名前：',
            'Email:': 'メール：',
            'Message:': 'メッセージ：',
            'Send Message': 'メッセージを送信する',
            '© 2024 Work Opportunities in Japan': '© 2024 日本の仕事の機会'
        }
    };

    var elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(function(element) {
        var key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Initial translation based on default language
translateContent('en');

// Form submission functionality
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to handle form submission (e.g., send data to server)
    alert('Message sent successfully!');
});
