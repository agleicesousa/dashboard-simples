const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

document.getElementById('enter').addEventListener('click', function() {
    pass = document.getElementById('pass').value;
    email = document.getElementById('email').value;

    if(email.length == 0 || pass.length == 0) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    if(email == 'admin@example.com' && pass == '123456') {
        return window.location.href = './dashboard/main.html';
    } else {
        alert('Email ou senha inválidos.');
        return false;
    }
});