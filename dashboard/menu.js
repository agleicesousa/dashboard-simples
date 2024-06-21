//qunado o botão "menu-btn" for clicado exibir o setar o display do aside como block
    document.getElementById('menu-btn').addEventListener('click', () => {
        const menu = document.getElementById('aside')
        menu.style.display = menu.style.display === 'block'? 'none' : 'block';
        menu.style.height = '100%'; 
    });

    document.getElementById('close-btn').addEventListener('click', () => {
        const menu = document.getElementById('aside')
        menu.style.display = 'none';
        menu.style.height = '0'; 
    });

    document.getElementById('logoutButton').addEventListener('click', function() {
        window.location.href = '../index.html';
    });    
