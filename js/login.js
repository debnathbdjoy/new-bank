document.getElementById('btn-submit').addEventListener('click', function () {
    const emailFIde = document.getElementById('user-email');
    const email = emailFIde.value;
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    
    if (email === 'joydebnath@gmail.com' && password === 'nath') {
        window.location.href = 'bank.html';
    }
    else{
        alert('Input your valid email or password.');
    }
})
