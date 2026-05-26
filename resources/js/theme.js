// Theme toggle with localStorage persistence + system-pref fallback.
(function () {
  const STORAGE_KEY = 'mv-theme';
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');

  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  if (!btn) return;
  btn.setAttribute('aria-pressed', String(theme === 'dark'));
  btn.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
  });
})();
