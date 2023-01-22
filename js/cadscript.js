let btnVerSenha = document.querySelector('#verSenha');
let btnVerConfirmaSenha = document.querySelector('#verConfirmaSenha');

btnVerSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});

btnVerConfirmaSenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirmasenha');
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
});
