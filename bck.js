let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('x-circle')
    navbar.classList.toggle('active')

}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    // navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remover icones
    menuIcon.classList.remove('bx-xx')
    navbar.classList.remove('active')

};




var typed = new Typed(".multiple-texto", {
    strings: ["Desenvolvemento Web", "Suporte Tecnico", "Frontend", "React.JS", "backend"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


document.addEventListener("DOMContentLoaded", function() {
    const openButtons = document.querySelectorAll(".button");
    const modals = document.querySelectorAll(".modal");
    const closeButton = document.querySelectorAll(".close-button");

    openButtons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            modals[index].style.display = "block";
        });

        closeButton[index].addEventListener("click", function() {
            modals[index].style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === modals[index]) {
                modals[index].style.display = "none";
            }
        });
    });
});

// Selecionar o botão de envio
// Script para enviar o conteudo de contato por e-mail
function enviarEmail() {
    // Capturar os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var fone = document.getElementById('fone').value;
    var assunto = document.getElementById('assunto').value;
    var mensagem = document.getElementById('mensagem').value;

    // Verificar se todos os campos estão preenchidos
    if (nome === "" || email === "" || fone === "" || assunto === "" || mensagem === "") {
        document.getElementById('mensagemErro').style.display = 'flex';
        setTimeout(() => {
        document.getElementById('mensagemErro').style.animation = 'none';}, 3000);
        return;
    } 
    else {
        document.getElementById('mensagemErro').style.display = 'none';
    }

    // Montar o link de e-mail com os dados preenchidos
    var linkEmail = "mailto:daviccarvalho11@hotmail.com" +
                    "?subject=" + encodeURIComponent(assunto) +
                    "&body=" + encodeURIComponent("Nome: " + nome + "\nE-mail: " + email + "\nTelefone: " + fone + "\n\n" + mensagem);

    // Abrir o cliente de e-mail padrão do usuário
    window.location.href = linkEmail;
}

document.addEventListener("DOMContentLoaded", function () {
    const errorBox = document.getElementById("mensagemErro");
    const closeButton = document.getElementById("fecharDiv");

    // Adiciona o evento de clique no botão para fechar a div error
    closeButton.addEventListener("click", function () {
        errorBox.style.display = "none";
    });
    });

//Resolvendo bug do Safari
function rotateCard(card) {
    // Obtenha a caixa que contém o conteúdo do cartão
    const box = card.querySelector(".Competencias-box");
  
    // Obtenha a direção atual da rotação
    const rotation = box.style.transform.split("(")[1].split(")")[0];
  
    // Se o cartão estiver virado para a frente, gire-o para trás
    if (rotation === "0deg") {
      box.style.transform = "rotateY(180deg)";
    } else {
      // Se o cartão estiver virado para trás, gire-o para frente
      box.style.transform = "rotateY(0deg)";
    }
  }
  
  // Adicione um ouvinte de clique a cada cartão
  
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", rotateCard);
  });






