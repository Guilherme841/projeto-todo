const deletar = document.getElementById('ideletar');
const adicionar = document.getElementById('iadicionar');
const concluida = document.getElementById("iconcluida");
const tarefa = document.getElementById('itarefa');


adicionar.addEventListener('click' , adicionarTarefa);
concluida.addEventListener('click', concluirTarefa);

function deletarTarefa () {
    const seletor = document.querySelector('p.item');
    if (seletor.classList.contains('selecionou')) {
        document.querySelector('p.item').remove()
    }
};

function adicionarTarefa() {
    if (tarefa.value.length === 0) {
        alert('Digite sua tarefa!');
    } else {
        let item = document.createElement('p');
        const lista = document.getElementById('lista');
        item.classList.add('item');
        lista.appendChild(item);
        let dever = String(tarefa.value);
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.719)';
        item.style.padding = '10px 30px';
        item.style.borderRadius = '5px';
        item.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.438)';
        item.style.cursor = 'pointer';
        item.innerHTML = dever;
        const seletor = document.querySelectorAll('.item');
        seletor.forEach((item) =>
        seletor.addEventListener('click', (seleçao) => {
            seleçao()
        })
        );
        deletar.addEventListener('click',deletarTarefa);
    };

};

function seleçao() {
    const seletor = document.querySelector('p.item');
    seletor.classList.toggle('selecionou');
    if (seletor.classList.contains('selecionou')) {
        seletor.style.boxShadow = '0 0 0 0.1em #D2B88E'
        seletor.style.transition = '.3s'
    } else {
        seletor.style.boxShadow = 'none'
    }
};

function concluirTarefa() {
    
};