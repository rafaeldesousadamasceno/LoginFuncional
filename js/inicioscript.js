let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
let logado = document.getElementById('logado');

logado.innerHTML = `Olá, ` + usuarioLogado.nome;

if(localStorage.getItem('token') == null || localStorage.getItem('usuarioLogado') == null) {
    alert('Você precisa estar logado para acessar essa página');
    window.location.href = 'https://damascenologin.netlify.app/';
}

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'https://damascenologin.netlify.app/';
}