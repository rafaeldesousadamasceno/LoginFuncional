if(localStorage.getItem('token') != null) {
    window.location.href = 'https://damascenologin.netlify.app/inicio.html';
}

let btn = document.querySelector('.fa-eye');

function entrar() {
    let inputUsuario = document.getElementById('usuario');
    let lbUsuario = document.getElementById('lbUsuario');

    let inputSenha = document.getElementById('senha');
    let lbSenha = document.getElementById('lbSenha');

    let msgErro = document.getElementById('msgErro');

    let listaUsers = [];

    let userValido = {
        nome: '',
        usuario: '',
        senha: ''
    }

    listaUsers = JSON.parse(localStorage.getItem('listaUser'));

    listaUsers.forEach((item) => {
        if(inputUsuario.value == item.usuarioCad && inputSenha.value == item.senhaCad) {
            userValido = {
                nome: item.nomeCad,
                usuario: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    });

    if (inputUsuario.value == "" || inputSenha.value == "") {
        inputUsuario.style.borderColor = 'red';
        lbUsuario.setAttribute('style', 'color: red');
        inputSenha.style.borderColor = 'red';
        lbSenha.setAttribute('style', 'color: red');
    } else if(inputUsuario.value == userValido.usuario && inputSenha.value == userValido.senha) {
        inputUsuario.style.borderColor = '#4038A0';
        lbUsuario.setAttribute('style', 'color: #4038A0');
        inputSenha.style.borderColor = '#4038A0';
        lbSenha.setAttribute('style', 'color: #4038A0');
        msgErro.setAttribute('style', 'display: none');

        setTimeout(() => {
            window.location.href = "https://damascenologin.netlify.app/";
        }, 200);


        /**
         * Token é criado quando o login dar certo
         * Sempre que o usuário tentar entrar diretamente no site, ele só poderá acessar com token existente e não por apenas endereço do link
         */
        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);

        /**
         * Criar um objeto no LocalStorage com os dados do usuário Logado
         */
        localStorage.setItem('usuarioLogado', JSON.stringify(userValido));      

    } else {
        inputUsuario.style.borderColor = 'red';
        lbUsuario.setAttribute('style', 'color: red');
        inputSenha.style.borderColor = 'red';
        lbSenha.setAttribute('style', 'color: red');
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = "Usuário ou Senha inválido!";
        inputUsuario.focus();
    }
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});
