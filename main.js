function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');


//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento} `;//template string

    //console.log(idAudio);

    tecla.onclick = function () {
        
        tocaSom(idAudio);
    }

    //console.log(contador);

    tecla.onkeydown = function (evento) {

        // console.log(event.code === 'Space');
       

        if(evento.code === 'Space' || evento.code === 'Enter' ){
            tecla.classList.add('ativa');
        }

        // if(event.code === 'Enter'){
        //     tecla.classList.add('ativa');

        // }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}

/* ##### modelo while #####


let contador = 0; // essa variavel é para while pois no for nao necessita declarar a variavel fora
// while(contador < listaDeTeclas.length){

//     const tecla =  listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     //template string
//     const idAudio = `#som_${instrumento} `;

//     // console.log(idAudio);

//     tecla.onclick = function(){
//         tocaSom(idAudio);
//     }
//     contador = contador +1;

// console.log(contador);
// }

*/