const slides = [...document.querySelectorAll('.slide')];
const gotoButtons = [...document.querySelectorAll('[data-goto]')];
const dotsWrap = document.getElementById('dots');
const currentNum = document.getElementById('currentNum');
const sideCurrent = document.getElementById('sideCurrent');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sideLinks = [...document.querySelectorAll('.side-link')];
let current = 0;
let language = 'en';

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
  dot.addEventListener('click', () => showSlide(i));
  dotsWrap.appendChild(dot);
});

function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
  [...dotsWrap.children].forEach((dot, i) => dot.classList.toggle('active', i === current));
  currentNum.textContent = String(current + 1).padStart(2, '0');
  sideCurrent.textContent = String(current + 1).padStart(2, '0');
  navLinks.forEach(button => button.classList.toggle('active', Number(button.dataset.goto) === current));
  sideLinks.forEach(button => button.classList.toggle('active', Number(button.dataset.goto) === current));
}

gotoButtons.forEach(button => button.addEventListener('click', () => showSlide(Number(button.dataset.goto))));
document.getElementById('prevBtn').addEventListener('click', () => showSlide(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => showSlide(current + 1));

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.getElementById('cnBtn').classList.toggle('selected', language === 'zh');
  document.getElementById('enBtn').classList.toggle('selected', language === 'en');
  document.querySelectorAll('[data-zh][data-en]').forEach(element => {
    element.textContent = element.dataset[language];
  });
}
document.getElementById('cnBtn').addEventListener('click', () => setLanguage('zh'));
document.getElementById('enBtn').addEventListener('click', () => setLanguage('en'));

document.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') showSlide(current + 1);
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') showSlide(current - 1);
});
let touchStartX = 0;
document.addEventListener('touchstart', event => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
document.addEventListener('touchend', event => {
  const diff = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 70) showSlide(current + (diff < 0 ? 1 : -1));
}, { passive: true });
