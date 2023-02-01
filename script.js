const deletar = document.getElementById('ideletar');
const adicionar = document.getElementById('iadicionar');
const concluida = document.getElementById("iconcluida");
const tarefa = document.getElementById('itarefa');

adicionar.addEventListener('click' , adicionarTarefa);
concluida.addEventListener('click', concluirTarefa);

function deletarTarefa () {
    const nodeItens = document.querySelectorAll('.item');
    const arrItens = Array.from(nodeItens)
    for (const elemento of arrItens) {
        if (elemento.classList.contains("selecionou")) {
            elemento.remove()
        }
    }
};

function adicionarTarefa() {
    if (tarefa.value.length === 0) {
        alert('Digite sua tarefa!');
    } else {
        const item = document.createElement('p');
        const lista = document.getElementById('lista');
        item.setAttribute('class', 'item')
        lista.appendChild(item);
        const dever = String(tarefa.value);
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.719)';
        item.style.padding = '10px 30px';
        item.style.borderRadius = '5px';
        item.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.438)';
        item.style.cursor = 'pointer';
        item.textContent = dever;
        deletar.addEventListener('click', deletarTarefa)
        const nodeItens = document.querySelectorAll('.item');
        const arrItens = Array.from(nodeItens)
        for (const elemento of arrItens) {
           elemento.addEventListener('click', seleçao)
        }
    };
}

function seleçao() {
    const nodeItens = document.querySelectorAll('.item');
    const arrItens = Array.from(nodeItens)
    for (const elemento of arrItens) {
        elemento.addEventListener("click", function() {
            for (const b of arrItens) {
                b.classList.remove('selecionou')
                b.style.boxShadow = 'none'
            }
            this.classList.add('selecionou')
            this.style.boxShadow = '0 0 0 0.1em #D2B88E'
            this.style.transition = '.3s'
        })
    }
};

function concluirTarefa() {
    const nodeItens = document.querySelectorAll('.item');
    const arrItens = Array.from(nodeItens)
    for (const elemento of arrItens) {
        if (elemento.classList.contains("selecionou")) {
            elemento.style.textDecoration = 'line-through'
        }
    }
}