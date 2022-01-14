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

const subject = () => {
  const subjects = document.querySelectorAll('input[name="tech"]:checked');
  const print = [];
  for (let i = 0; i < subjects.length; i += 1) {
    print.push(subjects[i].value);
  }
  return print.join(', ');
};

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.getElementById('input-name');
  const lastName = document.getElementById('input-lastname');
  const inputEmail = document.getElementById('input-email');
  const house = document.getElementById('house');
  const textArea = document.getElementById('textarea');
  const form = document.getElementById('evaluation-form');

  form.innerHTML = `<p>Nome: ${name.value} ${lastName.value} 
   Email: ${inputEmail.value} Casa: ${house.value} 
   Família: ${document.querySelector('input[name="family"]:checked').value} Matérias: ${subject()} 
   Avaliação: ${document.querySelector('input[name="rate"]:checked').value}; 
   Observações: ${textArea.value}</p>`;
});

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

const counterF = (el) => {
  counter.innerText = 500 - el.value.split('').length;
};

// https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
textArea.addEventListener('input', () => counterF(textArea));

window.onload = function loading() {
  rateValue();
};
