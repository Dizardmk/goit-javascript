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
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  refs.themeToggle.checked = true;
}

refs.themeToggle.addEventListener('change', onThemeSwitcher);

function onThemeSwitcher() {
  if (event.target.checked) {
    if (refs.body.classList.contains(Theme.LIGHT)) {
      refs.body.classList.remove(Theme.LIGHT);
      localStorage.setItem('dark-theme', Theme.DARK);
    }
    return refs.body.classList.add(Theme.DARK);
  }
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    localStorage.removeItem('dark-theme');
  }
  return refs.body.classList.add(Theme.LIGHT);
}
