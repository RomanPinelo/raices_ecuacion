/**********************************************************************

    TOMAR LOS DATOS DE LOS INPUT Y CALCULAR LAS RAÍCES.

**********************************************************************/
/* Datos de a, b y c */
var valora = document.getElementById("valorA");
var valorb = document.getElementById("valorB");
var valorc = document.getElementById("valorC");


/* Botón de calcular */
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcularRaices );

function calcularRaices() {
  var a = valora.value;
  var b = valorb.value;
  var c = valorc.value;

  var ecuacion = "";
  
  var x1,x2; //Raíces
  
  var xi, yi, xf, yf; //Coordenadas
  var i; //Ciclo for
  
  var radicando = (Math.pow(b, 2)) - (4 * a * c);
  
  // Pintando en el DOM la ecuación
  if (a == 1) {
    ecuacion = `x<sup>2</sup>`;
  } else if (a == -1) {
    ecuacion = `-x<sup>2</sup>`;
  } else {
    ecuacion = `${a}x<sup>2</sup>`;
  }

  if (b == 1) {
    ecuacion += ` + x`;
  } else if (b == -1) {
    ecuacion += ` - x`;
  } else if (b > 0) {
    ecuacion += ` + ${b}x`;
  } else {
    ecuacion += ` - ${Math.abs(b)}x`;
  }

  if (c > 0) {
    ecuacion += ` + ${c} = 0`;
  } else {
    ecuacion += ` - ${Math.abs(c)} = 0`;
  }

  document.getElementById('ecuacion').innerHTML = ecuacion;
  
  //Borrando el canvas
  lienzo.clearRect(0, 0, d.width, d.height);
  
  //Dibujando ejes y divisiones.
  dibujarLinea("red", 149, 1, 149, 299); //Eje x
  dibujarLinea("red", 1, 149, 299, 149); //Eje y
  
  for(i=0; i <= 30; i++){ //Divisiones eje x
    xi = 10 * (i);
    yi = 144;
    xf = xi;
    yf = 154;
    dibujarLinea("red", xi, yi, xf, yf);
  }
  
  for(i=0; i <= 30; i++){  //Divisiones eje y
    xi = 144;
    yi = 10 * (i);
    xf = 154;
    yf = yi;
    dibujarLinea("red", xi, yi, xf, yf);
  }
  
  
  if(radicando == 0){
    x1 = (-1 * b) / (2 * a);
    
    document.getElementById('valorx1').innerHTML = "El valor de ambas raíces es: " + x1;
    document.getElementById('valorx2').innerHTML = "";
    
    xi = 150 + (x1 * 10);
    yi = 0;
    xf = xi;
    yf = 300;
    dibujarLinea("#2196f3", xi, yi, xf, yf);
  }
  
  else if(radicando > 0){
    x1 = ((-1 * b) + Math.sqrt(radicando)) / (2 * a);
    x2 = ((-1 * b) - Math.sqrt(radicando)) / (2 * a);
    
    document.getElementById('valorx1').innerHTML = "El valor de x1 es: " + x1.toFixed(2);
    document.getElementById('valorx2').innerHTML = "<br>El valor de x2 es: " + x2.toFixed(2);
    
    xi = 150 + (x1 * 10);
    yi = 0;
    xf = xi;
    yf = 300;
    dibujarLinea("#2196f3", xi, yi, xf, yf);
    
    xi = 150 + (x2 * 10);
    yi = 0;
    xf = xi;
    yf = 300;
    dibujarLinea("cyan", xi, yi, xf, yf);
  }
  
  else {
    //Borrando el canvas
    lienzo.clearRect(0, 0, d.width, d.height);
    //Escribinedo texto
    lienzo.font="bold 15px arial";
    lienzo.fillStyle="#FFF";
    lienzo.fillText("En realidad el radicando daba: " + radicando + ", ", 10, 20);
    lienzo.font="bold 15px arial";
    lienzo.fillStyle="#FFF";
    lienzo.fillText("pero se convirtió a positivo. Disculpe ", 10, 40);
    lienzo.font="bold 15px arial";
    lienzo.fillStyle="#FFF";
    lienzo.fillText("las molestias.", 10, 60);
    
    radicando = -1 * radicando;
    x1 = ((-1 * b) + Math.sqrt(radicando)) / (2 * a);
    x2 = ((-1 * b) - Math.sqrt(radicando)) / (2 * a);
    
    document.getElementById('valorx1').innerHTML = "El valor de x1 es: " + x1.toFixed(2);
    document.getElementById('valorx2').innerHTML = "<br>El valor de x2 es: " + x2.toFixed(2);
  }
}



/*************************************************************************************

    BORRAR LOS DATOS DE LOS INPUTS Y LOS PÁRRAFOS DONDE SE IMPRIMEN LOS RESULTADOS.

*************************************************************************************/
/* Botón de borrar */
var boton = document.getElementById("botonBorrar");
boton.addEventListener("click", borrarDatos);

function borrarDatos() {
  lienzo.clearRect(0, 0, d.width, d.height);
  document.getElementById('ecuacion').innerHTML = "";
  document.getElementById('valorx1').innerHTML = "";
  document.getElementById('valorx2').innerHTML = "";
  document.getElementById('valorA').value = "";
  document.getElementById('valorB').value = "";
  document.getElementById('valorC').value = "";
}


/**********************************************************************************

    DIBUJAR EN EL CANVAS

**********************************************************************************/
/* Datos del canvas */
var d = document.getElementById("plano");
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}