const deletar = document.getElementById('ideletar');
const adicionar = document.getElementById('iadicionar');
const concluida = document.getElementById("iconcluida");
const tarefa = document.getElementById('itarefa');
const sel = document.getElementById('sel')

deletar.addEventListener('click', deletarTarefa);
adicionar.addEventListener('click', adicionarTarefa);
concluida.addEventListener('click', concluirTarefa);
sel.addEventListener('click', seleçao);

function deletarTarefa () {
    if (sel.classList.contains('selecionou')) {
        document.getElementById('sel').remove();
    }
};

function adicionarTarefa() {
    let work = String(tarefa.value)
    sel.style.backgroundColor = 'rgba(255, 255, 255, 0.726)'
    sel.style.padding = '10px 30px'
    sel.style.borderRadius = '5px'
    sel.style.cursor = 'pointer'
    sel.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.300)'
    sel.innerHTML = work
};

function seleçao() {
    sel.classList.toggle('selecionou')
    if (sel.classList.contains('selecionou')) {
        sel.style.boxShadow = '0 0 0 0.1em #D2B88E'
        sel.style.transition = '.2s'
    } else {
        sel.style.boxShadow = 'none'
    }
    
};

function concluirTarefa() {
    
};


