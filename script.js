const deletar = document.getElementById('ideletar');
const adicionar = document.getElementById('iadicionar');
const concluida = document.getElementById("iconcluida");
const tarefa = document.getElementById('itarefa');

adicionar.addEventListener('click' , adicionarTarefa);
concluida.addEventListener('click', concluirTarefa);

function deletarTarefa () {
    const seletor = document.querySelector('.item');
    if (seletor.classList.contains('selecionou')) {
        document.querySelector('.item').remove()
    }
};

function adicionarTarefa() {
    if (tarefa.value.length === 0) {
        alert('Digite sua tarefa!');
    } else {
        let item = document.createElement('p');
        const lista = document.getElementById('lista');
        item.setAttribute('class', 'item')
        lista.appendChild(item);
        let dever = String(tarefa.value);
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.719)';
        item.style.padding = '10px 30px';
        item.style.borderRadius = '5px';
        item.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.438)';
        item.style.cursor = 'pointer';
        item.innerHTML = dever;
        const itemClass = document.querySelector('.item');
        itemClass.addEventListener('click', seleçao);
        deletar.addEventListener('click',deletarTarefa);
    };
};

function seleçao() {
    const itemClass = document.querySelector('.item');
    itemClass.classList.toggle('selecionou');
    if (itemClass.classList.contains('selecionou')) {
        itemClass.style.boxShadow = '0 0 0 0.1em #D2B88E'
        itemClass.style.transition = '.3s'
    } else {
        itemClass.style.boxShadow = 'none'
    }
};

function concluirTarefa() {
    const itemClass = document.querySelector('.item');
    if (itemClass.classList.contains('selecionou')) {
        itemClass.style.textDecoration = 'line-through'
    } 
};