
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let lastnameInput = document.getElementById("lastnameInput");
let title = document.getElementById("title");


signIn.onclick = function (){
    nameInput.style.maxHeight = "0";
    lastnameInput.style.maxHeight ="0";
    title.innerHTML="Iniciar sesion";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");

}
signUp.onclick = function (){
    nameInput.style.maxHeight = "60px";
    lastnameInput.style.maxHeight = "60px";
    title.innerHTML="Registro";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");

}
