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
    strings: ["Ciência de Dados", "Segurança da Informação"],
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
const enviarBtn = document.getElementById('enviarBtn');

// Adicionar um evento de clique ao botão
enviarBtn.addEventListener('click', function () {
    // Obter os valores dos campos do formulário
    const nome = document.querySelector('input[placeholder="Nome Completo"]').value;
    const email = document.querySelector('input[placeholder="Endereço de E-mail"]').value;
    const numero = document.querySelector('input[placeholder="Numero de Telefone"]').value;
    const assunto = document.querySelector('input[placeholder="Assunto do E-mail"]').value;
    const mensagem = document.querySelector('textarea').value;

    // Formatar a mensagem para o link do WhatsApp
    const mensagemFormatada = `Olá! Meu nome é ${nome}, meu email é ${email}, meu telefone é ${numero}, e meu assunto é ${assunto}. Minha mensagem é: ${mensagem}`;

    // Criar o link do WhatsApp com a mensagem formatada
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=+5519989078235&text=${encodeURIComponent(mensagemFormatada)}`;

    // Redirecionar para o WhatsApp
    window.location.href = linkWhatsApp;
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






