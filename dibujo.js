var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 60;
var l = 0;
var yi, xf;
// var colorcito = "#ffaaaa";

while(l < lineas)
{
    yi = 10 * l;
    xf= 10 * (l + 1);
    dibujarLinea("#ffaaaa", 0, yi, xf, 500);
    console.log("Linea " + l);
    l = l + 1;
}

dibujarLinea("colorcito", 1,1,1,499);
dibujarLinea("colorcito", 1,499,499,499);

// dibujarLinea("", 300, 150, 500, 0);
// dibujarLinea("blue", 500, 10, 10, 300);
// dibujarLinea("green", 50, 500, 220, 10);
// dibujarLinea("red", 10, 500, 220, 10);


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}