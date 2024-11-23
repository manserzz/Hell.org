document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está logado
    const loggedUser = localStorage.getItem('loggedUser');

    if (loggedUser) {
        const user = JSON.parse(loggedUser); // Pega o usuário logado
        const welcomeMessage = document.getElementById('welcome-message');
        const loginSignup = document.getElementById('login-signup');

        // Exibe o nome do usuário e oculta os links de login/criar conta
        welcomeMessage.textContent = `Olá, ${user.username}`; // Exibe o nome do usuário
        welcomeMessage.style.display = 'inline'; // Torna visível a saudação

        // Oculta os links de login/criar conta
        loginSignup.querySelector('#login-link').style.display = 'none';
        loginSignup.querySelector('#create-link').style.display = 'none';
    }

    // Carregar e exibir os posts salvos
    const postsContainer = document.querySelector('.main-content'); // Onde os posts serão exibidos
    const posts = JSON.parse(localStorage.getItem('posts')) || []; // Pega os posts do localStorage

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <div class="post-header">
                <span class="post-author">${post.author}</span>
                <span class="post-time">${post.time}</span>
            </div>
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </div>
            <div class="post-footer">
                <button>Comentar</button>
                <button>Curtir</button>
            </div>
        `;

        postsContainer.appendChild(postElement); // Adiciona o post à página
    });
});
