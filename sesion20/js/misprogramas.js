/*  para todos los programas*/

$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has pulsado el enlace. Ahora serás enviado a la paginad e la usat");
    });

});

$("#cb1").click(function(){
    $("#cont1").toggle(1500); /*determina si esta a la vista u oculto*/
},function(){
    $("#cont1").toggle(1500);
}
);


