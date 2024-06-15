//Seleccionando elementos individuales y por grupo
//getElementById getElementsByTagName
/* var myElement = document.getElementById("menu");
console.log(myElement);

var x = document.getElementsByTagName("p");
console.log(x); //muestra el array de objetos 
console.log(x[0].innerHTML); 
console.log(x[1].innerText);
 */
//seleccionado los parrafos que estan dentro del ID contenido
/* var x = document.getElementById("contenido");
var y = x.getElementsByTagName("p");
console.log(y); */ 
//Recorrer el grupo de objetos seleccionados
/* function detectar(){
  elemento = document. getElementsByTagName("p");
  for (i = 0; i < elemento.length; i++){
    alert(elemento[i].innerHTML);
    console.log(elemento[i].innerText);
  }
}

detectar();   */
//  getElementsByClassName grupo de elementos
/* var x = document.getElementsByClassName("contenedor");
console.log(x);
console.log(x[0]);  */
//Recorrer elementos
/* function detectar(){
  elemento = document.getElementsByClassName("navegacion");
  console.log(elemento);
    for (i = 0; i < elemento.length; i++){
      //alert(elemento[i].innerHTML);
      //console.log(elemento[i].innerHTML);
      console.log(elemento[i].innerText);
    }
}
detectar();  */

//////////////////////QUERYSELECTOR/////////////////// 0,1
/* var el = document.querySelector(".navegacion");
  console.log(el);  
 */
/*   function detectar(){
    elemento = document.querySelector("div + p"); //selecciona un p despues de div al mismo nivel
    //alert(elemento.innerHTML);
    console.log(elemento);
    console.log(elemento.innerHTML);
  }
  detectar();   */

///////////////////QUERYSELECTORALL/////////////////// 0,1,..N
/* var x = document.querySelectorAll("p.parrafo"); //todos los p con class parrafo
console.log(x)
console.log(x[0].innerText);
console.log(x[1].innerText); */


function myFunction() {
   var x = document.forms["frm1"];
   var text = "";
   var i;
   for (i = 0; i < x.length ;i++) {
     text += x.elements[i].name + "<br>";
   }
   
   text+="El formulario tiene "+x.length+" elementos";
   document.getElementById("demo").innerHTML = text;
 }
 //myFunction();  

/* var navegacion = document.getElementById('navegacion');
navegacion.style.display ="none";  */

/*  var navegacion = document.getElementsByClassName('navegacion');
console.log(navegacion);
console.log(navegacion[0].innerText); */
 
/* var contenido = document.getElementsByClassName('contenido');
contenido[0].style.display = 'none'; */

/* var enlaces = document.getElementsByTagName('a');        
for(var i =0; i < enlaces.length;i++){
          enlaces[i].setAttribute('target', '_blank');
}   */
/* var enlace = document.querySelectorAll('a');
      for(var i = 0; i< enlace.length;i++){
          console.log(enlace[i].innerText);
        }


 */
