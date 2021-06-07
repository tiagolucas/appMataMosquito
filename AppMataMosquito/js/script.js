var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 61;

var levelTempo = 2000;

var level = window.location.search;
level = level.replace('?', '');

if (level === 'easy') {

    // 2000.
    levelTempo = 2000;
} else if (level === 'normal') {

    // 1500.
    levelTempo = 1500;    
} else if (level === 'difficult') {

    // 1000.
    levelTempo = 1000;
} else if (level === 'hard') {

    // 750.
    levelTempo = 750;
};

function ajustaTamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    //document.write(altura + ' x ' + largura + ' <br> ');
};

ajustaTamanhoTela();

var cronometro = setInterval(function() {

    tempo -= 1;

    if (tempo < 0) {

        clearInterval(cronometro);
        clearInterval(criaMosquito);  

        window.location.href = 'vitoria.html';     
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    };        
}, 1000);

function posicaoRandomica() {

    // Revover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 3) {

            window.location.href = 'gamerOver.html';   
        } else {

            document.getElementById('vida' + vidas).src = "../image/coracao_vazio.png";
            vidas++;
        };
    };

    
    var posicaoX = Math.floor(Math.random() * largura) - 80;
    var posicaoY = Math.floor(Math.random() * altura) - 80;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    // Criar o Elemento HTML.
    var mosquito = document.createElement('img');
    mosquito.src = '../image/mosquito.png';
    mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    };

    document.body.appendChild(mosquito);
};

var criaMosquito = setInterval(function () {
    posicaoRandomica(); 
}, levelTempo);



function tamanhoMosquito() {
    var classe = Math.floor(Math.random() * 4);

    switch (classe) {
        case 0:
            
            return 'mosquito0';
        case 1:
            
            return 'mosquito1';
        case 2:

            return 'mosquito2';
        case 3:

            return 'mosquito3';
    };
};


function ladoMosquito() {
    var classe = Math.floor(Math.random() * 2);
    
    switch (classe) {
        case 0:
            
            return 'ladoA';
        case 1:
            
            return 'ladoB';
    };
};