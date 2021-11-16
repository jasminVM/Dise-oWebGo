function guardardatos(){  /*Guardar datos */
  localStorage.nombre = document.getElementById("nombre").value;
  localStorage.movil = document.getElementById("movil").value;
}

function recuperarDatos(){  /*Recuperar datos */
   if((localStorage.nombre != undefined) && (localStorage.movil !=undefined)){
           document.getElementById("datos").innerHTML = "Nombre: "+ localStorage.nombre + "<br> N Celular: "+ localStorage.movil;
   }else{
    document.getElementById("datos").innerHTML = "No has ingresado datos en la agenda"
   }
}