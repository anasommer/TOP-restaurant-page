import './style.css';
import homepage from './home';
import menu from './menu';
import contact from './contact';

homepage();

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', () => {
  clearPage();
  homepage();
});

menuBtn.addEventListener('click', () => {
  clearPage();
  menu();
});

contactBtn.addEventListener('click', () => {
  clearPage();
  contact();
});

function clearPage() {
  document.querySelector('#content').innerHTML = '';
}
