const login = document.querySelector('.login');
const senha = document.querySelector('.senha');
const email = document.querySelector('.email');


function validation() {
  if (email.value === 'tryber@teste.com' && senha.value === "123456") {
    alert("Olá, Tryber!")
  } else {
    alert("Email ou senha inválidos.")
  }
}
login.addEventListener ("click", validation);