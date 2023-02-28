const validar = document.getElementById("senha");
const minusc = document.getElementById("minus");
const maiusc = document.getElementById("maius");
const numero = document.getElementById("num");
const length = document.getElementById("length");

// quando o input da senha for clicado mostrará a div 'aviso'
validar.onfocus = function () {
  document.getElementById("aviso").style.display = "block";
};

// quando o input da senha nao estiver clicado não mostrará a div 'aviso'
validar.onblur = function () {
  document.getElementById("aviso").style.display = "none";
};

// quando a senha começar a ser escrita
validar.onkeyup = function () {
  // validar a letra minuscula
  const regexLetraminus = /[a-z]/g;
  if (validar.value.match(regexLetraminus)) {
    minusc.classList.remove("invalido");
    minusc.classList.add("valido");
  } else {
    minusc.classList.remove("valido");
    minusc.classList.add("invalido");
  }

  // validar a letra maiuscula
  const regexLetramaius = /[A-Z]/g;
  if (validar.value.match(regexLetramaius)) {
    maiusc.classList.remove("invalido");
    maiusc.classList.add("valido");
  } else {
    maiusc.classList.remove("valido");
    maiusc.classList.add("invalido");
  }

  // Validar o numero
  const regexNumeros = /[0-9]/g;
  if (validar.value.match(regexNumeros)) {
    numero.classList.remove("invalido");
    numero.classList.add("valido");
  } else {
    numero.classList.remove("valido");
    numero.classList.add("invalido");
  }

  // Validar o valor minimo de caracteres
  if (validar.value.length >= 8) {
    length.classList.remove("invalido");
    length.classList.add("valido");
  } else {
    length.classList.remove("valido");
    length.classList.add("invalido");
  }
};
//clicar o input checkbox e mostrar a senha
function ShowPassword() {
  const inputPassword = document.getElementById("senha");
  const iconHidePassword = document.getElementById("icon-esconder-senha");
  const iconShowPassword = document.getElementById("icon-mostrar-senha");

  iconHidePassword.classList.toggle("active");
  iconShowPassword.classList.toggle("active");

  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}
