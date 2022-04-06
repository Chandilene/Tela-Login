var validar = document.getElementById("senha");
var minusc = document.getElementById("minus");
var maiusc = document.getElementById("maius");
var numero = document.getElementById("num");
var length = document.getElementById("length");

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
  var letraminus = /[a-z]/g;
  if (validar.value.match(letraminus)) {
    minusc.classList.remove("invalido");
    minusc.classList.add("valido");
  } else {
    minusc.classList.remove("valido");
    minusc.classList.add("invalido");
  }

  // validar a letra maiuscula
  var letramaius = /[A-Z]/g;
  if (validar.value.match(letramaius)) {
    maiusc.classList.remove("invalido");
    maiusc.classList.add("valido");
  } else {
    maiusc.classList.remove("valido");
    maiusc.classList.add("invalido");
  }

  // Validar o numero
  var numeros = /[0-9]/g;
  if (validar.value.match(numeros)) {
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
function ShowPass() {
  var inputCheck = document.getElementById("senha");
  if (inputCheck.type === "password") {
    inputCheck.type = "text";
  } else {
    inputCheck.type = "password";
  }
}
