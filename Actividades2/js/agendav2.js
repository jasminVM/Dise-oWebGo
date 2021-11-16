
function guardarDatos(){ /*Guardar datos */
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var movil = document.getElementById("movil").value;
    var direccion=document.getElementById("direccion").value;
    var email = document.getElementById("email").value;

    const datos = {
        'movil':movil,
        'email':email,
        'apellido':apellido,
        'direccion':direccion,
    }
    localStorage.setItem(nombre,JSON.stringify(datos)); /*Concatenamos Datos */
    /*Limpio las cajas de texto*/
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("movil").value="";
    document.getElementById("direccion").value="";
    document.getElementById("email").value="";
    actualizarDatos();
}

function recuperarDato(){
    var nombre = document.getElementById("nombre").value;
    let datos = localStorage.getItem(nombre); /*obtengo datos unidos y los almacenos en la variabledatos*/
   
    datos= JSON.parse(datos);  /*separamos datos*/ 
    document.getElementById("apellido").value = datos.apellido;
    document.getElementById("movil").value = datos.movil;
    document.getElementById("direccion").value = datos.direccion;
    document.getElementById("email").value = datos.email;
}

function eliminarDato(){
    var nombre= document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}
function eliminartodo(){
    localStorage.clear();
    actualizarDatos();  
}

function actualizarDatos(){   /*averiguamos la longitud*/ 
    var registro = "";
    if (localStorage.length===0){
        registro+= '<li> vacio </li>';

    }else{
        for(var i = 0; i<=localStorage.length -1 ; i++){
            var key = localStorage.key(i);
            let datos = localStorage.getItem(key);
            datos = JSON.parse(datos);
            registro+=`<li> <span class="nom">${key} </span>
                            <span class="nomapellido"> ${datos.apellido} </span>
                            <span class="nom"> ${datos.movil} </span> 
                            <span class="nomdireccion"> ${datos.direccion} </span>
                            <span class="nomemail"> ${datos.email} </span>
                            </li><br>`;
        }
    }
    document.getElementById("contactos").innerHTML=registro;
}

//codigo para validar que solo se ingrese letras//;
function soloLetras(evt){
    var charCode = (evt.charCode);

    if((charCode>=65 && charCode <= 90) || (charCode>=97 && charCode<=122)){
        document.getElementById('aviso').innerHTML=""
        return true;

    }else{
        document.getElementById('aviso').innerHTML="Ingrese solo letras"
        return false;
        }
     
}
