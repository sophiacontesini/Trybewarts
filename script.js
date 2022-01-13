const rate = document.querySelector('.rate');

function rateValue() {
  for (let i = 1; i <= 10; i += 1) {
    const radio = document.createElement('input');
    const span = document.createElement('span');
    span.innerText = i;
    radio.setAttribute('type', 'radio');
    radio.value = i;
    radio.name = 'rate';

    rate.appendChild(radio);
    rate.appendChild(span);
  }
}

const email = document.querySelector('.email');
const login = document.querySelector('.login');
const senha = document.querySelector('.senha');

function validation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

login.addEventListener('click', validation);

const check = document.getElementById('agreement');
const btn = document.getElementById('submit-btn');

function agree() {
  if (check.checked === true) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', 'disabled');
  }
}
check.addEventListener('click', agree);

const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
counter.innerText = 500;

const counterF = () => {
  const count = textArea.value.split('').length;
  counter.innerText = 500 - count;
};

textArea.addEventListener('keydown', counterF);

window.onload = function loading() {
  rateValue();
};
