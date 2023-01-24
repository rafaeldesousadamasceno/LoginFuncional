let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
let logado = document.getElementById('logado');

if(localStorage.getItem('token')) {
    alert('Você precisa estar logado para acessar essa página');
    window.location.href = 'https://damascenologin.netlify.app/';
}

logado.innerHTML = `Olá, ` + usuarioLogado.nome;

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'https://damascenologin.netlify.app/';
}