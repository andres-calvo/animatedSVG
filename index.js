const canvas = document.getElementById("dibujo");
var ctx = canvas.getContext("2d");

var colores = {
  azul_oscuro: "#47209c",
  purpura: "#9c0336",
  morado: "#610580",
  rojo: "#f40704",
  verde: "#8ecd08",
  amarillo: "#f5c00d",
  azul_claro: "#10a4fb",
};
function dibujarTriangulo(move, lineas, color) {
  ctx.beginPath();
  ctx.moveTo(move[0], move[1]);

  ctx.lineTo(lineas[0], lineas[1]);
  ctx.lineTo(lineas[2], lineas[3]);

  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}
// Dibujado Empieza Aqui
const trianguloMoveTo = [
  [25, 65],
  [300, 170],
  [145, 305],
  [320, 225],
  [285, 315],
];
const trianguloColors = [colores.azul_oscuro, colores.rojo, colores.verde, colores.azul_claro, colores.amarillo];
// El formato es [x1,y1,x2,y2]
const trianguloLineTo = [
  [90, 105, 25, 145],
  [135, 170, 135, 305],
  [310, 305, 310, 170],
  [320, 305, 445, 305],
  [285, 385, 200, 385],
];
// dibujar todos los triangulos
for (let i = 0; i < trianguloMoveTo.length; i++) {
  let start = trianguloMoveTo[i];
  let color = trianguloColors[i];
  let lineas = trianguloLineTo[i];
  dibujarTriangulo(start, lineas, color);
}

// Trapecio
ctx.beginPath();
ctx.moveTo(35, 65);
ctx.lineTo(100, 105);
ctx.lineTo(220, 105);
ctx.lineTo(160, 65);
ctx.stroke();
ctx.fillStyle = colores.purpura;
ctx.fill();
ctx.closePath();

// Cuadrado
ctx.beginPath();
ctx.moveTo(135, 110);
ctx.lineTo(220, 110);
ctx.lineTo(220, 165);
ctx.lineTo(135, 165);
ctx.stroke();
ctx.fillStyle = colores.morado;
ctx.fill();
ctx.closePath();

// trianguloAzuloscuro

// ctx.beginPath();
// ctx.moveTo(25, 65);
// ctx.lineTo(90, 105);
// ctx.lineTo(25, 145);
// ctx.stroke();
// ctx.fillStyle = colores.azul_oscuro;
// ctx.fill();
// ctx.closePath();

// // trianguloRojo

// ctx.beginPath();
// ctx.moveTo(300, 170);
// ctx.lineTo(135, 170);
// ctx.lineTo(135, 305);
// ctx.stroke();
// ctx.fillStyle = colores.rojo;
// ctx.fill();
// ctx.closePath();

// // trianguloVerde
// ctx.beginPath();
// ctx.moveTo(145, 305);
// ctx.lineTo(310, 305);
// ctx.lineTo(310, 170);
// ctx.stroke();
// ctx.fillStyle = colores.verde;
// ctx.fill();
// ctx.closePath();

// // trianguloAzul
// ctx.beginPath();
// ctx.moveTo(320, 225);
// ctx.lineTo(320, 305);
// ctx.lineTo(445, 305);
// ctx.stroke();
// ctx.fillStyle = colores.azul_claro;
// ctx.fill();
// ctx.closePath();

// // trianguloAmarillo
// ctx.beginPath();
// ctx.moveTo(285, 315);
// ctx.lineTo(285, 385);
// ctx.lineTo(200, 385);
// ctx.stroke();
// ctx.fillStyle = colores.amarillo;
// ctx.fill();
// ctx.closePath();
