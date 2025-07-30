document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.style.display = 'inline-block';

    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let theme = saved || (prefersDark ? 'dark' : 'light');
    setTheme(theme);

    btn.addEventListener('click', function() {
        theme = (theme === 'dark') ? 'light' : 'dark';
        setTheme(theme);
        localStorage.setItem('theme', theme);
    });

    function setTheme(t) {
        document.documentElement.setAttribute('data-theme', t);
        btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
});