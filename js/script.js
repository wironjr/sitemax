/********** animação ********/
function reveal1() {
  var reveals = document.querySelectorAll(".reveal1");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal1);


function reveal2() {
  var reveals = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);


/********** alerta **************/

function aleta() {
            alert("\nGW SOFTWARE\nAinda vamos implementar esse botão!")
        }

/********** mensagem bom dia ***********/   
function msgbomdia() {
var hora = new Date().getHours()
  var saudacao

  if( hora < 12) {
      saudacao = "Bom Dia!"
  }else if( hora < 18){
      saudacao = "Boa Tarde!"
  }else{
      saudacao = "Boa Noite!"
  }

  document.getElementById("mensagem").innerHTML = saudacao}