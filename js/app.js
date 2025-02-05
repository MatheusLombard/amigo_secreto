listaNomes = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let amigosIncluidos = document.getElementById('lista-amigos');

    listaNomes.push(nomeAmigo.value);

    amigosIncluidos.innerHTML = listaNomes.join(', ');
    nomeAmigo.value = '';
};

function sortear() {
    document.getElementById('lista-sorteio').innerHTML = '';
    let listaSorteio = document.getElementById('lista-sorteio');
    let lista = embaralharLista(listaNomes);
    for(let i = 0 ; i < lista.length; i++){ 
        if(i === lista.length - 1){
            listaSorteio.innerHTML += `${lista[i]} -> ${lista[0]}</br>`;
        }else{
            listaSorteio.innerHTML += `${lista[i]} -> ${lista[i+1]}</br>`;
        }
    }
};
function embaralharLista(lista) {
    let listaEmbaralhada = [];
    let tamanhoListaOriginal = lista.length
    let i = 1;
    while(i< tamanhoListaOriginal + 1){ 
        let sorteadorIndex = (Math.floor(Math.random() * ((lista.length + 1) - 1) + 1)) - 1;
        console.log( sorteadorIndex)
        if(!listaEmbaralhada.includes(lista[sorteadorIndex])){
            listaEmbaralhada.push(lista[sorteadorIndex])
            i++;
        }
    }
    return listaEmbaralhada;
}
function loopListaEmbaralhada(){
    
}


function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    listaNomes = [];

}
