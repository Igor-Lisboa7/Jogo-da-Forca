// window.alert("Este é o meu primeiro projeto foi bem difícil, mas eu finalmente terminei. Quis fazer um pouco diferente de outras forcas que vejo por aí, ficou bem legal. AHHH LEIAM AS REGRAS NO PERGAMINHO ABAIXO DO TECLADO. Espero que gostem!")//

let jogarNovamente = true
let tentativas = 6
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSortiada;
let dicaSecreta;
let livroRegras;




const regras = [
    regras001={
        regra:"Você terá 06 tentativas para acertar a palavra secreta."
    },
    regras002={
        regra:"Voce terá uma dica clicando sobre a tecla: '!?'"
    },
    regras003={
        regra:"ATENÇÃO!!! Caso aceite ajuda da 'dica' você perdera 2 tentativas no proximo erro."
    },
    regras004={
        regra:"Ao perder as 06 tentativas você perdeu."
    },
    regras005={
        regra:"Ao acertar a palavra secreta clique na tecla que estará piscando para o proximo desafio."
    },
    regras006={
        regra:"Espero que tenham um bom Jogo!"
    },

]



const palavras = [

    palavra001={
        nome: "ESPANHA",
        categoria:"País",
        dica:"DICA: Colonisou nossos Hermanos"
    },
    palavra002={
        nome:"AFRICA DO SUL",
        categoria:"País",
        dica:"DICA: A copa do mundo de 2010 foi aqui!"    
    },
    palavra003={
        nome:"CANADA",
        categoria:"País",
        dica:"DICA: Ottawa é a capital do meu país!"
    },
    palavra004={
        nome:"AUSTRALIA",
        categoria:"País",
        dica:"DICA: Sou o país dos Cangurus."
    },
    palavra005={
        nome:"CAMAROES",
        categoria:"País",
        dica:"DICA: Tenho nome de fruto do Mar."
    },
    palavra006={
        nome:"PERU",
        categoria:"País",
        dica:"DICA: A civilização Inca surgiu no meu territorio!"
    },
    palavra007={
        nome:"JAPAO",
        categoria:"País",
        dica:"DICA: Dizem que sou a terra do sol nascente!"
    },
    palavra008={
        nome:"PARAGUAI",
        categoria:"País",
        dica:"DICA: Argentina, Brasil e Uruguai se uniram para me derrotar."
    },
    palavra009={
        nome:"PORTUGAL",
        categoria:"País",
        dica:"DICA: Metade do 'antigo' novo mundo já me pertenceu, e fui o Primeiro imperio global da historia."
    },
    palavra010={
        nome:"CHILE",
        categoria:"País",
        dica:"DICA: Sou o País com mais vulcões no mundo, e também tenho o deserto mais seco do mundo."
    },
    palavra011={
        nome:"BOLIVIA",
        categoria:"País",
        dica:"DICA: Eu tenho mais de 30 línguas oficiais, e tenho o maior deserto de Sal do mundo."

    },
    palavra012={
        nome:"BRASIL",
        categoria:"País",
        dica:"DICA: Sou Penta Campeão Mundial e berço do MELHOR jogador de todos os tempos."
    },
    palavra013={
        nome:"ARGELIA",
        categoria:"País",
        dica:"DICA: Minha capital se chama Algiers."
    },
    palavra014={
        nome:"RUSSIA",
        categoria:"País",
        dica:"DICA: Sou o maior país do mundo!"
    },
    palavra015={
        nome:"UCRANIA",
        categoria:"País",
        dica:"DICA: Fui uma república soviética até 1991, onde conquistei minha idependência."
    },
    palavra016={
        nome:"BORRACHA",
        categoria:"Uso Escolar",
        dica:"DICA: Você com certeza queria me ter em sua vida, para concertar seus erros!"
    },
    palavra017={
        nome:"LAPIS",
        categoria:"Uso Escolar",
        dica:"DICA: Fui inventado em 1564 na inglaterra."
    },
    palavra018={
        nome:"CANETA",
        categoria:"Uso Escolar",
        dica:"DICA: Deixo rastro impagável por onde passo."
    },
    palavra019={
        nome:"REGUA",
        categoria:"Uso Escolar",
        dica:"DICA: Sou muito boa com medidas!"
    },
    palavra020={
        nome:"CADERNO",
        categoria:"Uso Escolar",
        dica:"DICA: Eu guardo segredo, conhecimento e até pensamento, eu guardo tudo o que você quiser."
    },
    palavra021={
        nome:"CORRETIVO",
        categoria:"Uso Escolar",
        dica:"DICA: Eu não apago completamente o seu passado, mas te ajudo a não errar novamente."
    },
    palavra022={
        nome:"TESOURA",
        categoria:"Uso Escolar",
        dica:"DICA: Não gosto da união..."
    },
    palavra023={
        nome:"COLA",
        categoria:"Uso Escolar",
        dica:"DICA: Eu gosto da união, minha especialidade é unir as coisas!"
    },
    palavra024={
        nome:"LAPISEIRA",
        categoria:"Uso Escolar",
        dica:"DICA: Sou a evolução daquilo que precisa ser apontado."
    },
    palavra025={
        nome:"MOCHILA",
        categoria:"Uso Escolar",
        dica:"DICA: Junto todos os seus pesos e coloco em suas costas!"
    },
    palavra026={
        nome:"BOLSA",
        categoria:"Uso Escolar",
        dica:"DICA: Sou usada para pequenos itens."
    },
    palavra027={
        nome:"GIZ",
        categoria:"Uso Escolar",
        dica:"DICA: Item esquecido e velho conhecido dos professores."
    },
    palavra028={
        nome:"APAGADOR",
        categoria:"Uso Escolar",
        dica:"DICA: Não terminei de copiar ainda!"
    },
    palavra029={
        nome:"QUADRO NEGRO",
        categoria:"Uso Escolar",
        dica:"DICA: Normalmente só professores usam, mas não é exclusivo deles."
    },
    palavra030={
        nome:"PAPEL",
        categoria:"Uso Escolar",
        dica:"DICA: Sou muito frágil mas se bem usado sou muito valioso, eu posso guardar tudo que está na sua cabeça."
    },
    palavra031={
        nome:"CACHORRO",
        categoria:"Animais",
        dica:"DICA: Quando pequeno me acham fofo, mas quando cresço de mais me jogam fora!"
    },
    palavra032={
        nome:"GATO",
        categoria:"Animais",
        dica:"DICA: Não importa a sua opinião HUMANO!"
    },
    palavra033={
        nome:"CAVALO",
        categoria:"Animais",
        dica:"DICA: Sou referencia usada em motores quando o assunto é velocidade!"
    },
    palavra034={
        nome:"GIRAFA",
        categoria:"Animais",
        dica:"DICA: Quando ficamos apaixonadas cruzamos os pescoços."
    },
    palavra035={
        nome:"BODE",
        categoria:"Animais",
        dica:"DICA: Não sou demoniaco."
    },
    palavra036={
        nome:"GALO",
        categoria:"Animais",
        dica:"DICA: Se tacar meu nome no google aparece um time de futebol Brasileiro!"
    },
    palavra037={
        nome:"BUFALO",
        categoria:"Animais",
        dica:"DICA: Tenho queijo mussarela e até musica!"
    },
    palavra038={
        nome:"CORUJA",
        categoria:"Animais",
        dica:"DICA: Simboliso os professores e mães amorosas!"
    },
    palavra039={
        nome:"SAPO",
        categoria:"Animais",
        dica:"DICA: Tenho sangue frio existo no mundo todo, menos na antartida! (Ironico não?)"
    },
    palavra040={
        nome:"COBRA",
        categoria:"Animais",
        dica:"DICA: Eu sinto cheiro pela língua e não tenho palpebras."
    },
    paçavra041={
        nome:"ATLETICO MG",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Tenho o maior numeros de titulo estadual do meu estado!"
    },
    paçavra042={
        nome:"AMERICA MG",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Fui o primeiro Decacampeão da historia."
    },
    paçavra043={
        nome:"CRUZEIRO",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Sou especialista em Copa do Brasil!"
    },
    paçavra044={
        nome:"BOTAFOGO",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Estrela Solitária!"
    },
    paçavra045={
        nome:"FLAMENGO",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Meu legado começou na água."
    },
   
    paçavra048={
        nome:"GREMIO",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Fui o primeiro campeão da copa do Brasil!"
    },
    paçavra049={
        nome:"SANTOS",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Revelei o melhor jogador de todos os tempos!"
    },
    paçavra051={
        nome:"SAO PAULO",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Sou o time brasileiro com mais titulos mundiais!"
    },
    paçavra052={
        nome:"Vitoria",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Apesar do nome, nem sempre ganho!"
    },
    paçavra053={
        nome:"VASCO",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Tenho nome de navegador explorador!"
    },
    paçavra054={
        nome:"BAHIA",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Carrego o nome do meu estado!"
    },
    paçavra055={
        nome:"BRAGANTINO",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Energetico!"
    },
    paçavra056={
        nome:"CORINTHIANS",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Tenho apelido de personagem do Rei Leão..."
    },
    paçavra057={
        nome:"CUIABA",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Fui fundado no ano de 2001."
    },
    paçavra058={
        nome:"GOIAS",
        categoria:"Clube de Futebol BR",
        dica:"DICA: No meu estado tem muito sertanejo!"
    },
    paçavra059={
        nome:"CORITIBA",
        categoria:"Clube de Futebol BR",
        dica:"DICA: Tenho nome da capital do meu estado."
    },
    paçavra060={
        nome:"HOMEM ARANHA",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Sou o heroi mais amado de todos os tempos."
    },
    paçavra061={
        nome:"BATMAN",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Meu poder é ser rico."
    },
    paçavra062={
        nome:"LIGA DA JUSTIÇA",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Você sangra? Vai Sangrar!"
    },
    paçavra063={
        nome:"MULHER MARAVILHA",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Não suporto a magia de Ares o Deus da Guerra."
    },
    paçavra064={
        nome:"PINOQUIO",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Todo mundo sabe quando estou falando mentira..."
    },
    palavra065={
        nome:"O PODEROSO CHEFAO",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Máfia"
    },
    palavra066={
        nome:"O MAGICO DE OZ",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Todos temos coração..."
    },
    palavra067={
        nome:"O SILENCIO",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Não diga nada, nem faça barulho."
    },
    palavra068={
        nome:"CASSABLANCA",
        categoria:"Filmes/Cinemas",
        dica:"DICA: E se fosse de outra cor?"
    },
    palavra069={
        nome:"IT A COISA",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Balão que flutua!"
    },
    palavra070={
        nome:"TITANIC",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Já tem 84 anos..."
    },
    palavra071={
        nome:"O SENHOR DOS ANEIS",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Meu precioso."
    },
    palavra072={
        nome:"GENIO INDOMAVEL",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Você gasta milhares de dolares por conhecimento que pode obter numa biblioteca de esquina."
    },
    palavra073={
        nome:"SHREK",
        categoria:"Filmes/Cinemas",
        dica:"DICA: A gente já chegou? A gente já chegou? A gente já chegou?!"
    },
    palavra074={
        nome:"NAO NAO OLHE",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Melhor fechar os olhos!"
    },
    palavra075={
        nome:"O REI LEAO",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Fita verde."
    },
    palavra076={
        nome:"O VELHO E O MAR",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Sou um romance que trada da solidão, e de como o mar pode ser agressivo."
    },
    palavra077={
        nome:"OS MOSQUETEIROS",
        categoria:"Filmes/Cinemas",
        dica:"DICA: 1 por..."
    },
    palavra078={
        nome:"GLADIADOR",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Ganhei mais de 15 premiações dentra o qual são 6 Oscars."
    },
    palavra079={
        nome:"CORINGA",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Sou perfeito para ganhar Oscar de melhor ator!"
    },
    palavra080={
        nome:"CLUBE DA LUTA",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Meu personagem principal não tem nome!"
    },
    palavra081={
        nome:"O ILUMINADO",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Sou excelente, mas meu escritor não gostou de mim como filme..."
    },
    palavra082={
        nome:"MATRIX",
        categoria:"Filmes/Cinemas",
        dica:"DICA: Já pensou que você pode ser um personagem de um jogo de simulação?"
    },
    palavra083={
        nome:"BLEACH",
        categoria:"Animes",
        dica:"DICA: Ninguém começa no todo do mundo, nem eu, nem você, nem mesmo os Deuses, mas o insurpotável vazio no trono dos céus acabou, de agora em diante Eu estarei sentado nele."
    },
    palavra084={
        nome:"ONE PIECE",
        categoria:"Animes",
        dica:"DICA: Muitos dizem que sou infinito."
    },
    palavra085={
        nome:"DRAGON BALL Z",
        categoria:"Animes",
        dica:"DICA: Tenho um filme Live Action que os fans odeiam do fundo da alma."
    },
    palavra086={
        nome:"NARUTO",
        categoria:"Animes",
        dica:"DICA: Nunca volto atrás nas minhas palavras."
    },
    palavra087={
        nome:"VIOLET EVERGARDEN",
        categoria:"Animes",
        dica:"DICA: Descobrir o significado de 'Eu te Amo'."
    },
    palavra088={
        nome:"DEATH NOTE",
        categoria:"Animes",
        dica:"DICA: Dependendo dos meus olhos, posso enxergar a sua vida."
    },
    palavra089={
        nome:"SAMURAI X",
        categoria:"Animes",
        dica:"DICA: Meu live action é perfeito!"
    },
    palavra090={
        nome:"HARRY POTTER",
        categoria:"Animes",
        dica:"DICA: Não importa se você é um Trouxa..."
    },
    palavra091={
        nome:"NORAGAMI",
        categoria:"Animes",
        dica:"DICA: Até os deuses precisam de dinheiro..."
    },
    palavra092={
        nome:"POKEMON",
        categoria:"Animes",
        dica:"DICA: Ele não envelece não?"
    },
    palavra093={
        nome:"HUNTER X HUNTER",
        categoria:"Animes",
        dica:"DICA: Vai ter um final?"
    },
    palavra094={
        nome:"SWORD ART ONLINE",
        categoria:"Animes",
        dica:"DICA: Todos queriam viver em meu Mundo!"
    },
    palavra095={
        nome:"FAIRY TAIL",
        categoria:"Animes",
        dica:"DICA: Dragões!"
    },
    palavra096={
        nome:"SAILOR MOON",
        categoria:"Animes",
        dica:"DICA: Fui baseado nos Power Rangers, mas poucos sabem."
    },
    palavra097={
        nome:"YUYU HAKUSHO",
        categoria:"Animes",
        dica:"DICA: Rapadura é doce, mas não é mole não!"
    },
    palavra098={
        nome:"INUYASHA",
        categoria:"Animes",
        dica:"DICA: Na lua cheia viro Humano."
    },
    palavra099={
        nome:"MONSTER",
        categoria:"Animes",
        dica:"DICA: Critico a vida, vocês não estão preparados para me assistir."
    },
    palavra100={
        nome:"COWBOY BEBOP",
        categoria:"Animes",
        dica:"DICA: existe um café meu na vida real!"
        
    },
    palavra101={
        nome:"OWARI NO SERAPH",
        categoria:"Animes",
        dica: "Autor não quis renovar para outra temporada de Anime!"
    },
    palavra102={
        nome:"DORORO",
        categoria:"Animes",
        dica:"DICA: Fui publicado em mangá no ano  de 1967, e meu autor é o Deus do mangá."
    },
    palavra102={
        nome:"FORREST GUMP",
        categoria:"Fimle/Cinema",
        dica:"DICA: Correr é o sentido da vida!"
    },



];

cirarPalavraSecreta()
function cirarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    palavraSecretaSortiada = palavras[indexPalavra].nome
    palavraSecretaCategoria = palavras[indexPalavra].categoria
    dicaSecreta = palavras[indexPalavra].dica
    console.log(dicaSecreta)   
    console.log(palavraSecretaSortiada)
    console.log(palavraSecretaCategoria)

}

montarPalavraNaTela()
function montarPalavraNaTela(){
   
   
    const categoria = document.getElementById("categoria")
    categoria.innerHTML = palavraSecretaCategoria; 

    const palavraTela = document.getElementById("palavra-secreta")
    palavraTela.innerHTML = ""; 

    for(i = 0; i < palavraSecretaSortiada.length; i++){
        if(listaDinamica[i] == undefined){
            if(palavraSecretaSortiada[i] == " "){
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"    
            }
            
        }
        else {
            if(palavraSecretaSortiada[i] == " "){
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"

            }
            
        }
        
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true
    
    if(tentativas > 0){
    
        mudarStyleLetra("tecla-" + letra, false);
        compararlistas(letra) 
        montarPalavraNaTela();
    }
    

}

function mudarStyleLetra(tecla, condicao){
    if(condicao == false){

    document.getElementById(tecla).style.background = "#ad0000";
    document.getElementById(tecla).style.color = "#ffffff"
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
    document.getElementById(tecla).style.color = "#ffffff"
    }

}

async function compararlistas(letra){
    const pos = palavraSecretaSortiada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();
        if(tentativas == 0){
            abreModal("OPS! Eu disse que você erraria!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSortiada);
            while (jogarNovamente == true) {
                document.getElementById("btnReiniciar").style.background = 'red'
                document.getElementById("btnReiniciar").style.scale = 1.3
                await atraso(400) 
                document.getElementById("btnReiniciar").style.background = 'yellow'
                document.getElementById("btnReiniciar").style.scale = 1
                await atraso(400) 
            }
        };
        
        //verificar se tem tentativas // mensagem
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0; i < palavraSecretaSortiada.length; i++)
        {
            if(palavraSecretaSortiada[i] == letra){
                listaDinamica[i] = letra

            }
        }
    }

    let vitoria = true
    for(i = 0; i < palavraSecretaSortiada.length; i++){
        if(palavraSecretaSortiada[i] != listaDinamica[i]){
        vitoria= false
        
        }
    }
    if(vitoria == true)
    {
        abreModal("PARABÉNS", "Você acertou, mas aposto que erra a proxima!")
        tentativas = 0

        while (jogarNovamente == true) {
            document.getElementById("btnReiniciar").style.background = 'red'
            document.getElementById("btnReiniciar").style.scale = 1.5
            await atraso(200) 
            document.getElementById("btnReiniciar").style.background = 'yellow'
            document.getElementById("btnReiniciar").style.scale = 1
            await atraso(200) 
        }
    }  

}
async function atraso(tempo){
    return new Promise(x => setTimeout(x, tempo))
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
        document.getElementById("imagem").style.background = "url('https://raw.githubusercontent.com/agnaldoguima/jogoDaForca/master/img/forca01.png')";
        break;
    case 4:
        document.getElementById("imagem").style.background = "url('https://raw.githubusercontent.com/agnaldoguima/jogoDaForca/master/img/forca02.png')";
        break;
    case 3:
        document.getElementById("imagem").style.background = "url('https://raw.githubusercontent.com/agnaldoguima/jogoDaForca/master/img/forca03.png')";
        break;
    case 2:
        document.getElementById("imagem").style.background = "url('https://raw.githubusercontent.com/agnaldoguima/jogoDaForca/master/img/forca04.png')";
        break;
    case 1:
        document.getElementById("imagem").style.background = "url('https://raw.githubusercontent.com/agnaldoguima/jogoDaForca/master/img/forca05.png')";
        break;
    case 0:
        document.getElementById("imagem").style.background = "url('https://raw.githubusercontent.com/agnaldoguima/jogoDaForca/master/img/forca06.png')";
        break;
    default:
        document.getElementById("imagem").style.background = "url('https://raw.githubusercontent.com/agnaldoguima/jogoDaForca/master/img/forca.png')";

    }
    
        
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem

    $("#myModal").modal({
       
        show: true
    });
}

let bntDica = document.querySelector("#btnDica")
bntDica.addEventListener("click", function(){

    
    let dialog = confirm("Ao Clicar sobre a Dica você terá perda dupla no proximo erro, você concorda?")
    if(dialog){ 
        const dica = document.getElementById("dicas")
        dicas.innerHTML = dicaSecreta
        tentativas--
        document.getElementById("btnDica").style.background = 'gray'
    }
    else{

    }

    
});

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
 location.reload();
});






const bntAbreModal = document.getElementById("abreModalLeiaRegras");
bntAbreModal.onclick = function(){
    const modal = document.getElementById("modal-alerta");
    modal.style.display = "block"
}

const bntFechaModal = document.getElementById("fechaModal");
bntFechaModal.onclick = function(){
    const modal = document.getElementById("modal-alerta");
    modal.style.display = "none"
   
}


