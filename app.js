// Открытие/закрытие модального окна
const modal = document.getElementById('modal');
document.getElementById('openModalBtn').addEventListener('click', () => {
  modal.classList.add('show');
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  modal.classList.remove('show');
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('show'); // закрыть при клике вне окна
});

// Переключение темы (Light/Dark)
const root = document.documentElement;
const THEME_KEY = 'theme';
function applyTheme(theme) {
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}
const saved = localStorage.getItem(THEME_KEY) || 'light';
applyTheme(saved);
document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
});

// Генерация постов в виде компонентов
const postsData = [
  { title: 'Первый пост', text: 'Мы сделали лендинг и добавили модальное окно.' },
  { title: 'Кнопка темы', text: 'Переключение между Light/Dark.' },
  { title: 'Компоненты', text: 'С помощью JS создали карточки постов.' }
];

const postsEl = document.getElementById('posts');
function renderPosts(items) {
  postsEl.innerHTML = ''; // очистить
  items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'post';
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    `;
    postsEl.appendChild(card);
  });
}
renderPosts(postsData);
