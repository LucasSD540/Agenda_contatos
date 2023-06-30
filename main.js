const form = document.getElementById('form-contact');
const nome = [];
const numero = [];

let linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('contact-name');
    const inputNumeroContato = document.getElementById('contact-number');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputNumeroContato.value}</td>`

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}