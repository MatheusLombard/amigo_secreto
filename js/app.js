let listaNomes = [];
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
    let qtdItemsLista = listaNomes.length;
    let i = 1;
    let j = 1;
    let indexAuxEntregar = [];
    let indexAuxReceber = [];
    let indexAux = [];
    let nomeEntregar;
    let nomeReceber;
    if (qtdItemsLista === 0) {
        alert('Lista de Nomes Vazia');
    } else if (qtdItemsLista % 2 === 1) {
        alert('Para um amigo secreto tem que ter uma quantidade par de pessoas')
    }else{
        while (i <= qtdItemsLista) {
            console.log('Numero i: ' + i)
            while (j < 3) {
                let listaSorteador = (Math.floor(Math.random() * ((qtdItemsLista + 1) - 1) + 1)) - 1;
                if (j == 1 && !indexAuxEntregar.includes(listaSorteador)) {
                    console.log('entrou no primero if: ', indexAux, listaSorteador)
                    indexAuxEntregar.push(listaSorteador);
                    indexAux.push(listaSorteador);
                    nomeEntregar = listaNomes[indexAuxEntregar.at(-1)];
                } else if (j == 2 && !indexAuxReceber.includes(listaSorteador) && !indexAux.includes(listaSorteador)) {
                    console.log('entrou no segundo if: ', indexAux, listaSorteador)
                    indexAuxReceber.push(listaSorteador);
                    nomeReceber = listaNomes[indexAuxReceber.at(-1)];
                } else {
                    j--
                }

                j++;

            }
            listaSorteio.innerHTML += `<p>${nomeEntregar} -> ${nomeReceber} </p>`;
            indexAux = [];
            j = 1;
            i++;

        }
    }
};

function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    listaNomes = [];

}
