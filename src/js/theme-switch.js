const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  themeToggle: document.querySelector('#theme-switch-toggle'),
};

refs.body.classList.add(Theme.LIGHT);
if (localStorage.getItem('dark-theme')) {
  refs.themeToggle.checked = true;
  refs.body.classList.add(Theme.DARK);
} else if (localStorage.getItem('light-theme')) {
  refs.body.classList.add(Theme.LIGHT);
}

refs.themeToggle.addEventListener('change', event => onThemeSwitcher());

function onThemeSwitcher() {
  if (event.target.checked) {
    if (refs.body.classList.contains(Theme.LIGHT)) {
      refs.body.classList.remove(Theme.LIGHT);
      localStorage.removeItem('light-theme');
      localStorage.setItem('dark-theme', Theme.DARK);
    }
    return refs.body.classList.add(Theme.DARK);
  }
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    localStorage.removeItem('dark-theme');
    localStorage.setItem('light-theme', Theme.LIGHT);
  }
  return refs.body.classList.add(Theme.LIGHT);
}
