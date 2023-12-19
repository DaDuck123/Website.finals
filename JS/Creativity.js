
var registerBtn = document.getElementById('reg_btn');
var loginbox = document.getElementById('login_box');
var registerbox = document.getElementById('register_box');
var loginBtn = document.getElementById('log_btn');

registerBtn.addEventListener('click', function(){
    loginbox.style.display="none";
    registerbox.style.display="flex";
});

loginBtn.addEventListener('click', function(){
    loginbox.style.display="flex";
    registerbox.style.display="none";
});