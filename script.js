function login() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    var user = registeredUsers.find(function(u) {
        return u.email === email && u.password === password;
    });

    if (user) {
        alert("Login bem-sucedido!");
        redirectToVideoPage();
    } else {
        alert("E-mail ou senha incorretos. Por favor, tente novamente ou registre-se.");
    }
}

function register() {
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;

    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    var existingUser = registeredUsers.find(function(u) {
        return u.email === email;
    });

    if (existingUser) {
        alert("Este e-mail já está registrado. Por favor, faça login ou use outro e-mail.");
    } else {
        registeredUsers.push({ email: email, password: password });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        alert("Usuário registrado com sucesso!");
        showLoginForm();
    }
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function uploadVideo() {
    var videoFile = document.getElementById('videoFile').files[0];
    var videoPlayer = document.getElementById('videoPlayer');
    var playButton = document.getElementById('playButton');

    var videoURL = URL.createObjectURL(videoFile);
    videoPlayer.src = videoURL;
    videoPlayer.load();

    playButton.style.display = 'block';
}

function playVideo() {
    var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.play();
}

function redirectToVideoPage() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('videoPlayerContainer').style.display = 'block';
}
