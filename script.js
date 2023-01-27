const deletar = document.getElementById('ideletar');
const adicionar = document.getElementById('iadicionar');
const concluida = document.getElementById("iconcluida");
const tarefa = document.getElementById('itarefa');
const texto = document.getElementById('lista')

deletar.addEventListener('click', deletarTarefa);
adicionar.addEventListener('click', adicionarTarefa);
concluida.addEventListener('click', concluirTarefa);

function deletarTarefa () {
    
};

function adicionarTarefa() {
    work = String(tarefa.value);
    texto.innerHTML = work;
};

function concluirTarefa() {
    
};