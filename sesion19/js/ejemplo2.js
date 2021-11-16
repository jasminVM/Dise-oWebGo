/* function compara(){
    var a=2;
     var b=2;
     if(a==b)
     alert("a y b son iguales")
     
     else
     alert("a y b son diferentes")

}

function resta(x,y){
 var rest = x-y;
document.write("<h2>la resta es" + rest + "</h2>");
}

function suma(a,b){
    var  sum = a+b;
    document.getElementById("sumar").innerHTML="La suma es " + sum;
}

function escribir(){
    valor = document.getElementById('entrada').value;
    document.getElementById('contenido').innerHTML='' + valor;

} */


var i = 0;
while(i<=10){
    document.write(i);
    document.write("<br>");
    i++; 
}
for(var i=0; i<=100; i++){
	document.write(i);
	document.write("<br>");
}

let x = 0;
let z = 0;
document.write ("ejercicio con break" + "<br>" );

labelCancelLoops: while (true) {
  document.write('Bucles externos: ' + x);
  document.write("<br>");
  x += 1;
  z = 1;
  while (true) {
     document.write('Bucles internos: ' + z);
     document.write("<br>");
    z += 1;
    if (z === 5 && x === 5) {
      break labelCancelLoops;
    } else if (z === 5) {
      break;
    }
  }















  
}
