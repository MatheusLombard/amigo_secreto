listaNomes = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let amigosIncluidos = document.getElementById('lista-amigos');

    if (listaNomes.includes(nomeAmigo.value)) {
        alert('Digite um Sobrenome, esse nome já foi adicionado!')
    } else if (nomeAmigo.value === '') {
        alert('Nenhum nome para adicionar')
    } else {
        listaNomes.push(nomeAmigo.value);
        if (listaNomes.length == 1) {
            amigosIncluidos.innerHTML += `<p onclick="excluirAmigos(${listaNomes.length - 1})">${nomeAmigo.value}</p>`;
        } else {
            amigosIncluidos.innerHTML += `<p  onclick="excluirAmigos(${listaNomes.length - 1})">, ${nomeAmigo.value}</p>`;
        }
        nomeAmigo.value = '';
    }
};

function sortear() {
    if (listaNomes.length >= 4) {
        document.getElementById('lista-sorteio').innerHTML = '';
        let listaSorteio = document.getElementById('lista-sorteio');
        let lista = embaralharLista(listaNomes);
        for (let i = 0; i < lista.length; i++) {
            if (i === lista.length - 1) {
                listaSorteio.innerHTML += `${lista[i]} -> ${lista[0]}</br>`;
            } else {
                listaSorteio.innerHTML += `${lista[i]} -> ${lista[i + 1]}</br>`;
            }
        }
    } else {
        alert('Coloque no minimo 4 pessoas para o amigo secreto')
    }

};
function embaralharLista(lista) {
    let listaEmbaralhada = [];
    let tamanhoLista = lista.length
    let i = 1;
    while (i < tamanhoLista + 1) {
        let sorteadorIndex = (Math.floor(Math.random() * ((tamanhoLista + 1) - 1) + 1)) - 1;
        if (!listaEmbaralhada.includes(lista[sorteadorIndex])) {
            listaEmbaralhada.push(lista[sorteadorIndex])
            i++;
        }
    }
    return listaEmbaralhada;
}

function excluirAmigos(indice) {
    listaNomes.splice(indice, 1)
    let amigosIncluidosExcluir = document.getElementById('lista-amigos');
    amigosIncluidosExcluir.innerHTML = '';
    console.log(listaNomes)
    for(let i = 0; i<=listaNomes.length-1; i++){
        console.log(i)
        if(i == 0){
            amigosIncluidosExcluir.innerHTML += `<p onclick="excluirAmigos(${listaNomes.length - 1})">${listaNomes[i]}</p>`;
        }else{
            amigosIncluidosExcluir.innerHTML += `<p onclick="excluirAmigos(${listaNomes.length - 1})">, ${listaNomes[i]}</p>`;
        }

    }
}


function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    listaNomes = [];
}
