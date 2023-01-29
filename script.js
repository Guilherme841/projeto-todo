const deletar = document.getElementById('ideletar');
const adicionar = document.getElementById('iadicionar');
const concluida = document.getElementById("iconcluida");
const tarefa = document.getElementById('itarefa');

deletar.addEventListener('click' , deletarTarefa);
adicionar.addEventListener('click' , adicionarTarefa);
concluida.addEventListener('click', concluirTarefa);

function deletarTarefa () {

};

function adicionarTarefa() {
    if (tarefa.value.length === 0) {
        alert('Digite sua tarefa!');
    } else {
        let item = document.createElement('p');
        const lista = document.getElementById('lista');
        const itemDiv = document.querySelector('.item');
        item.setAttribute('class','item');
        lista.appendChild(item);
        let dever = String(tarefa.value);
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.719)';
        item.style.padding = '10px 30px';
        item.style.borderRadius = '5px';
        item.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.438)';
        item.style.cursor = 'pointer';
        item.innerHTML = dever;
        if (> 2) {
            alert('mais de 6')
        }
    };

};

function seleçao() {

};

function concluirTarefa() {
    
};