EnviarSaludo = ()=>{
const nombre = document.querySelector("#nombre").value;
const apellido = document.querySelector("#apellido").value;
const saludo = document.querySelector("#saludo");
const respuesta = `Hola ${nombre} ${apellido}`

saludo.innerHTML = respuesta;
}

