// Função para realizar o login
function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificando se o usuário existe
    const user = localStorage.getItem(username);
    
    if (user) {
        // Convertendo os dados salvos de volta para objeto
        const parsedUser = JSON.parse(user);

        // Verificando se a senha está correta
        if (parsedUser.password === password) {
            alert("Login realizado com sucesso!");
            
            // Armazenando o usuário logado no localStorage
            localStorage.setItem('loggedUser', JSON.stringify(parsedUser));
            
            // Redirecionando para a página home
            setTimeout(() => {
                window.location.href = 'home.html'; // Redirecionamento após login
            }, 2000);

        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    } else {
        alert("Usuário não encontrado.");
    }
}

// Captura o formulário de login
const form = document.querySelector('form');

// Evento de submissão do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    loginUser(); // Chama a função para fazer o login
});
