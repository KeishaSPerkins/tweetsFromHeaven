const signUp = document.getElementById("sign-up");

signUp.classList.remove('open');

setTimeout(function(){
	signUp.classList.add('open');
}, 15000);