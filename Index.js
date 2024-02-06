
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
    
function guardarInformacion(){
    let nombre = document.getElementById('nombre').value
    let apellido=document.getElementById('apellido').value
    let email=document.getElementById("email").value

    if(nombre==""){
        alert ("Campo obligatorio")
        document.getElementById("nombre")
    } else{ 
        if(apellido==""){ 
            alert ("Campo obligatorio")
            document.getElementById("apellido")
        }else{  console.log( nombre+""+ apellido)
    
        }
        }

    let usuario= {
        nombre: nombre,
        apellido: apellido,
        email: email, 
    };
  let usuarioJSON = JSON.stringify(usuario);
  console.log(usuarioJSON);


}
DatosDueñaMDeModa =[{
   nombreC: "CIELMAR CHAVEZ",
   DNI:96024016,

}
]

localStorage.setItem("DatosDueña", JSON.stringify(DatosDueñaMDeModa))

