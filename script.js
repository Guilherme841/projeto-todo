const deletar = document.getElementById('ideletar');
const adicionar = document.getElementById('iadicionar');
const concluida = document.getElementById("iconcluida");
const tarefa = document.getElementById('itarefa');
const sel = document.getElementById('sel')

deletar.addEventListener('click', deletarTarefa);
adicionar.addEventListener('click', adicionarTarefa);
concluida.addEventListener('click', concluirTarefa);


function deletarTarefa () {
    
};

function adicionarTarefa() {
    work = String(tarefa.value);
    sel.style.backgroundColor = 'rgba(255, 255, 255, 0.726)'
    sel.style.padding = '10px 30px'
    sel.style.borderRadius = '5px'
    sel.style.cursor = 'pointer'
    sel.style.textShadow = '1px 1px 1px rgba(0, 0, 0, 0.300)'
    sel.innerHTML = work;
    
};

// text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.363);
// background-color: rgba(255, 255, 255, 0.726);
// padding: 10px 30px;
// border-radius: 5px;
// cursor: pointer;


function concluirTarefa() {
    
};


