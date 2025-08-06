let cartascomputador = [];
let cartasjogador = [];
let cartacomputadorescolhida = {};
let cartajogadorescolhida = {};

const cartas = [
    {
        nome: "Família Urso",
        ataque: 50,
        defesa: 70,
        imagem: "/static/assets/carta_um.png"
    },
    {
        nome: "Animadinha",
        ataque: 10,
        defesa: 70,
        imagem: "/static/assets/carta_dois.png" 
    },
    { 
        nome: "Dorminhoco",
        ataque: 10,
        defesa: 70,
        imagem: "/static/assets/carta_tres.png" 
    },
    { 
        nome: "Sortudo",
        ataque: 50,
        defesa: 20,
        imagem: "/static/assets/carta_quatro.png" 
    },
    { 
        nome: "Estrelinha",
        ataque: 50,
        defesa: 30,
        imagem: "/static/assets/carta_cinco.png" 
    },
    { 
        nome: "Zangado",
        ataque: 20,
        defesa: 20,
        imagem: "/static/assets/carta_s.png" 
    },
    {
        nome: "Carinhosa",
        ataque: 10,
        defesa: 20,
        imagem: "/static/assets/carta_sete.png" 
    },
    {
        nome: "Solzinho",
        ataque: 30,
        defesa: 20,
        imagem: "/static/assets/carta_oito.png" 
    },
    { 
        nome: "Oopsy",
        ataque: 10,
        defesa: 30,
        imagem: "/static/assets/carta_nove.png" 
    }
];


function sortearcartas() {
    console.log("Função sortearcartas chamada!");
    const cartasembaralhadas = cartas.sort(() => Math.random() - 0.5);
    console.log("cartas embaralhadas:", cartasembaralhadas);

    cartasjogador = cartasembaralhadas.slice(0, 3);
    cartascomputador = cartasembaralhadas.slice(3, 6);
    console.log("Cartas do jogador:", cartasjogador);
    console.log("Cartas do computador:", cartascomputador);

    const divcartasjogador = document.querySelector(".cartasjogador");
    const divcartascomputador = document.querySelector(".cartascomputador");

    divcartasjogador.innerHTML = "";
    cartasjogador.forEach(carta => {
        divcartasjogador.innerHTML += `
            <div class="carta" onclick="escolhercartajogador(${JSON.stringify(carta).replace(/"/g, '&quot;')})">
                <img src="${carta.imagem}" alt="${carta.nome}" width="190px">
                <p>${carta.nome}</p>
            </div>
        `;
    });

    divcartascomputador.innerHTML = "";
    cartascomputador.forEach(carta => {
        divcartascomputador.innerHTML += `
            <div class="carta">
                <img src="${carta.imagem}" alt="${carta.nome}" width="190px" style="visibility: hidden;">
                <p style="visibility: hidden;">${carta.nome}</p>
            </div>`;
    });

    
}

// Função para clicar e escolher a carta
function escolhercartajogador(carta){
    cartajogadorescolhida = carta;
    console.log("Carta do jogador escolhida:", cartajogadorescolhida);

    const divcartaescolhida = document.querySelector(".cartajog");
    divcartaescolhida.innerHTML = `
        <div class="cartajog">
            <img src="${carta.imagem}" alt="${carta.nome}" width="190px">
        </div>
        <style>
            .cartajog{
                margin-left: 34%;
                position: absolute;
                top:27%;
            }
        </style>
    `;
    atributos();

}

function atributos(){
    const divpoderes = document.querySelector(".atributos")
    divpoderes.innerHTML = `
    <div class="poderes">
        <select name="poderes">
            <option value="ataque">Ataque: ${cartajogadorescolhida.ataque}</option>
            <option value="defesa" selected>Defesa: ${cartajogadorescolhida.defesa}</option>
        </select>
    </div>
    <style>
        .poderes{
            margin-left: 27%;
            position: absolute;
            top:45%;
        }
    `
}

function atributoselecionado() {
    const select = document.getElementsByName('poderes')[0];
    return select.value;
}

function jogar() {
    // Sorteia uma carta aleatória do computador
    cartacomputadorescolhida = cartascomputador[Math.floor(Math.random() * cartascomputador.length)];
    console.log("Carta do computador escolhida:", cartacomputadorescolhida);    


    // Mostra a carta do computador
    const divcartacomputador = document.querySelector(".cartacomp");
    divcartacomputador.innerHTML = `
        <div class="cartacomp">
            <img src="${cartacomputadorescolhida.imagem}" alt="${cartacomputadorescolhida.nome}" width="190px">
        </div>
        <style>
            .cartacomp{
                margin-left: 53%;
                position: absolute;
                top:27%;
            }
        </style>
    `;

    const atributoEscolhido = atributoselecionado();

    const valorJogador = cartajogadorescolhida[atributoEscolhido] || 0;
    const valorComputador = cartacomputadorescolhida[atributoEscolhido] || 0;

    let htmlResultado = "";
    if (valorJogador > valorComputador) {
        htmlResultado = '<p class="resultado-final">Você venceu!</p>'
    } else if (valorJogador < valorComputador) {
        htmlResultado = '<p class="resultado-final">Você perdeu!</p>';
    } else {
        htmlResultado = '<p class="resultado-final">Empate!</p>';
    }

    const divresultado = document.getElementById("resultado");
    divresultado.innerHTML = htmlResultado;
}


// Função para alternar o flip da carta
function flipCard(card) {
    // Se a carta já está focada, não faz flip
    if (!card.classList.contains('focused')) {
        card.classList.toggle('flipped');
    }
}



