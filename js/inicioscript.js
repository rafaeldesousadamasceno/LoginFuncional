if(localStorage.getItem('token') == null || localStorage.getItem('usuarioLogado') == null) {
    alert('Você precisa estar logado para acessar essa página');
    sair();
} else {
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    let logado = document.getElementById('logado');
    logado.innerHTML = `Olá, ` + usuarioLogado.nome;
}



function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'https://damascenologin.netlify.app/';
}