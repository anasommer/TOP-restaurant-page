import './style.css';
import homepage from './home';
import menu from './menu';

homepage();

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');

homeBtn.addEventListener('click', () => {
  clearPage();
  homepage();
});

menuBtn.addEventListener('click', () => {
  clearPage();
  menu();
});

function clearPage() {
  document.querySelector('#content').innerHTML = '';
}
