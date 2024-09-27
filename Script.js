/*var btn = document.querySelector(".no");
var position

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btn.addEventListener("touchstart", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
      
      btn.addEventListener("touchend", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
  } else {
    btn.addEventListener("mouseover", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
        });
  }

function tanks() {
    alert("Eu também te amo e aceito casar com você! :)");
    
    // Mostrar mensagem de celebração
    var message = document.querySelector(".message");
    message.style.display = "block"; // Mostrar a mensagem
    setTimeout(() => {
        message.style.opacity = 1; // Fade-in
    }, 100);

    // Disparar confete
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Esconder a mensagem após 3 segundos
    setTimeout(() => {
        message.style.opacity = 0; // Fade-out
        setTimeout(() => {
            message.style.display = "none"; // Esconder completamente
        }, 500);
    }, 3000);
    
    
}  

function not() {
alert("Você nem ta maluca de não aceitar, volte lá e clique no sim! :/")
}  */

var btnNo = document.querySelector(".no");
var btnYes = document.querySelector(".yes");
var container = document.querySelector(".container");

// Função para mover o botão dentro do contêiner
function moveButtonRandomly() {
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;

    // Garantir que o botão não saia do contêiner
    var randomX = Math.random() * (containerWidth - btnNo.offsetWidth);
    var randomY = Math.random() * (containerHeight - btnNo.offsetHeight);

    // Aplicar a transformação de movimentação
    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
    btnNo.style.transition = "all 0.3s ease";
}

// Verificar se o dispositivo é móvel ou desktop
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btnNo.addEventListener("touchstart", function() {
        moveButtonRandomly(btnNo);
    });
    btnYes.addEventListener("touchstart", function() {
        moveButtonRandomly(btnYes);
    });
} else {
    btnNo.addEventListener("mouseover", function() {
        moveButtonRandomly(btnNo);
    });
    btnYes.addEventListener("mouseover", function() {
        moveButtonRandomly(btnYes);
    });
}

// Função para disparar confete
function showConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Mostrar mensagem de celebração
    var message = document.querySelector(".message");
    message.style.display = "block"; // Mostrar a mensagem
    setTimeout(() => {
        message.style.opacity = 1; // Fade-in
    }, 100);

    // Esconder a mensagem após 3 segundos
    setTimeout(() => {
        message.style.opacity = 0; // Fade-out
        setTimeout(() => {
            message.style.display = "none"; // Esconder completamente
        }, 500);
    }, 3000);
}

// Adicionar evento de clique para o botão "sim"
btnYes.addEventListener("click", function() {
    showConfetti(); // Chama a função para mostrar o confete
});

// Adicionar evento de clique para o botão "não"
btnNo.addEventListener("click", function() {
    alert("Você nem tá maluco de não aceitar, volte lá e clique no sim! :/");
});

