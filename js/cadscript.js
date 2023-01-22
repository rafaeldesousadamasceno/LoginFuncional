let btnVerSenha = document.querySelector('#verSenha');
let btnVerConfirmaSenha = document.querySelector('#verConfirmarSenha');
let msgErro = document.getElementById('msgErro');
let msgSucesso = document.getElementById('msgSucesso');

let inputNome = document.getElementById('nome');
let labelNome = document.getElementById('lbNome');
let nomeValido = 0;

let inputUsuario = document.getElementById('usuario');
let labelUsuario = document.getElementById('lbUsuario');
let usuarioValido = 0;

let inputSenha = document.getElementById('senha');
let labelSenha = document.getElementById('lbSenha');
let senhaValida = 0;

let inputConfirmarSenha = document.getElementById('confirmarsenha');
let labelConfirmarSenha = document.getElementById('lbConfirmarSenha');
let confirmarSenhaValida = 0;

inputNome.addEventListener('keyup', () => {
    if (inputNome.value.length < 3) {
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome * (É necessário pelo ao menos 3 caracteres)';
        inputNome.setAttribute('style', 'border-color: red');
        nomeValido = 0;
    } else {
        labelNome.setAttribute('style', 'color: #4038A0');
        labelNome.innerHTML = 'Nome';
        inputNome.setAttribute('style', 'border-color: green');
        nomeValido = 1;
    }
});

inputUsuario.addEventListener('keyup', () => {
    if (inputUsuario.value.length < 6) {
        labelUsuario.setAttribute('style', 'color: red');
        labelUsuario.innerHTML = 'Usuário * (É necessário pelo ao menos 5 caracteres)';
        inputUsuario.setAttribute('style', 'border-color: red');
        usuarioValido = 0;
    } else {
        labelUsuario.setAttribute('style', 'color: #4038A0');
        labelUsuario.innerHTML = 'Usuário';
        inputUsuario.setAttribute('style', 'border-color: green');
        usuarioValido = 1;
    }
});

inputSenha.addEventListener('keyup', () => {
    if (inputSenha.value.length < 8) {
        labelSenha.setAttribute('style', 'color: red');
        labelSenha.innerHTML = 'Senha * (É necessário pelo ao menos 8 caracteres)';
        inputSenha.setAttribute('style', 'border-color: red');
        senhaValida = 0;
    } else {
        labelSenha.setAttribute('style', 'color: #4038A0');
        labelSenha.innerHTML = 'Senha';
        inputSenha.setAttribute('style', 'border-color: green');
        senhaValida = 1;
    }
});

inputConfirmarSenha.addEventListener('keyup', () => {
    if (inputSenha.value != inputConfirmarSenha.value) {
        labelConfirmarSenha.setAttribute('style', 'color: red');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha * (Senhas Diferentes)';
        inputConfirmarSenha.setAttribute('style', 'border-color: red');
        confirmarSenhaValida = 0;
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: #4038A0');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha';
        inputConfirmarSenha.setAttribute('style', 'border-color: green');
        confirmarSenhaValida = 1;
    }
});

function cadastrar() {
    if (nomeValido && usuarioValido && senhaValida && confirmarSenhaValida) {
        /**
         * Ou adiciona para a variável o valor que tem no localStorage ou cria um array vazio
         */
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
        let novoUsuario = {
            nomeCad: inputNome.value,
            usuarioCad: inputUsuario.value,
            senhaCad: inputSenha.value,
        }

        listaUser.push(novoUsuario);

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSucesso.style.display = 'block';
        msgErro.style.display = 'none';
        msgSucesso.innerHTML = '<strong>Cadastrando com sucesso...</strong>';

        setTimeout(() => {
            window.location.href = 'https://damascenologin.netlify.app';
        }, 3000);
        
    } else {
        msgSucesso.style.display = 'none';
        msgErro.style.display = 'block';
        msgErro.innerHTML = '<strong>Preencha corretamente os campos</strong>';
    }
}

btnVerSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});

btnVerConfirmaSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirmarsenha');
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});
