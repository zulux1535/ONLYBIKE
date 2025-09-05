
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-bs-theme', theme);

  
  document.getElementById('iconLight').classList.toggle('d-none', theme === 'light' ? false : true);
  document.getElementById('iconDark').classList.toggle('d-none', theme === 'dark' ? false : true);
})();

document.getElementById('themeToggle').addEventListener('click', function () {
  const html = document.documentElement;
  const next = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', next);
  localStorage.setItem('theme', next);

 
  document.getElementById('iconLight').classList.toggle('d-none', next !== 'light');
  document.getElementById('iconDark').classList.toggle('d-none', next !== 'dark');
});






