// Função para salvar as informações do usuário no localStorage
function saveAccount() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificando se o usuário já existe
    if (localStorage.getItem(username)) {
        alert("Usuário já existe!");
        return;
    }

    // Criando o objeto de conta
    const userAccount = {
        username: username,
        email: email,
        password: password
    };

    // Salvando a conta no localStorage
    localStorage.setItem(username, JSON.stringify(userAccount));
    alert("Conta criada com sucesso!");

    // Redireciona para a página de login após 2 segundos
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Captura o formulário de criação de conta
const form = document.querySelector('form');

// Evento de submissão do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    saveAccount(); // Chama a função para salvar a conta
});
