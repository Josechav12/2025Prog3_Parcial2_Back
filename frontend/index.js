alert("ANDA JS!");

let btnTraerUsuarios = document.getElementById("traer-usuarios");

btnTraerUsuarios.addEventListener("click", async () => {

    console.log("VOY A BUSCAR LOS USUARIOS A MI BACKEND -> INDEX.JS -> RUTAS -> CONTROLLER -> SERVICE -> DB <- <- <- <- <-");

    let response = await fetch("http://localhost:3102/api/usuarios/get-users", {method: "GET"});

    console.log("TERMINO LA REQQUEST!! TENGO A MIS USUARIOS");
    console.log(response);
});