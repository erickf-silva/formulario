const formulario = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
const obrigatorio = document.getElementsByClassName("obrigatorio");

formulario.addEventListener('submit', function (event) {
    const nomeValido = verificarInputNome();
    const emailValido = verificarInputEmail();
    const telefoneValido = verificarInputTelefone();
    const mensagemValida = verificarInputMensagem();

    if (nomeValido && emailValido && telefoneValido && mensagemValida) {
        return;
    } else {
        event.preventDefault();
    }
});

formulario.addEventListener('change', function () {
    validarInputNome();
    validarInputEmail();
    validarInputTelefone();
    validarInputMensagem();
});

function verificarInputNome() {
    const valorNome = nome.value;

    if (valorNome === "") {
        nome.classList.add("campo-obrigatorio");
        obrigatorio[0].classList.add("ativo");
        return false;
    } else {
        nome.classList.remove("campo-obrigatorio");
        obrigatorio[0].classList.remove("ativo");
        return true;
    }
}

function validarInputNome() {
    const valorNome = nome.value;

    if (valorNome !== "") {
        nome.classList.add("campo-preenchido");
        obrigatorio[0].classList.remove("ativo");
    } else {
        nome.classList.remove("campo-preenchido");
    }
}

function verificarInputEmail() {
    const valorEmail = email.value;

    if (valorEmail === "") {
        email.classList.add("campo-obrigatorio");
        obrigatorio[1].classList.add("ativo");
        return false;
    } else {
        email.classList.remove("campo-obrigatorio");
        obrigatorio[1].classList.remove("ativo");
        return true;
    }
}

function validarInputEmail() {
    const valorEmail = email.value;

    if (valorEmail !== "") {
        email.classList.add("campo-preenchido");
        obrigatorio[1].classList.remove("ativo");
    } else {
        email.classList.remove("campo-preenchido");
    }
}

function verificarInputTelefone() {
    const valorTelefone = telefone.value;

    if (valorTelefone === "") {
        telefone.classList.add("campo-obrigatorio");
        obrigatorio[2].classList.add("ativo");
        return false;
    } else {
        telefone.classList.remove("campo-obrigatorio");
        obrigatorio[2].classList.remove("ativo");
        return true;
    }
}

function validarInputTelefone() {
    const valorTelefone = telefone.value;

    if (valorTelefone !== "") {
        telefone.classList.add("campo-preenchido");
        obrigatorio[2].classList.remove("ativo");
    } else {
        telefone.classList.remove("campo-preenchido");
    }
}

function verificarInputMensagem() {
    const valorMensagem = mensagem.value;

    if (valorMensagem === "") {
        mensagem.classList.add("campo-obrigatorio");
        obrigatorio[3].classList.add("ativo");
        return false;
    } else {
        mensagem.classList.remove("campo-obrigatorio");
        obrigatorio[3].classList.remove("ativo");
        return true;
    }
}

function validarInputMensagem() {
    const valorMensagem = mensagem.value;

    if (valorMensagem !== "") {
        mensagem.classList.add("campo-preenchido");
        obrigatorio[3].classList.remove("ativo");
    } else {
        mensagem.classList.remove("campo-preenchido");
    }
}