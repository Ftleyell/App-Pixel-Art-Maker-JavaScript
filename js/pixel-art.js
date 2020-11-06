var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorSeleccionado = "white"
var colorPersonalizado = document.getElementById('color-personalizado');
var container = document.getElementById("container")
var grilla = document.getElementById("grilla-pixeles");
var pixel = document.getElementsByClassName("pixel")
var paleta = document.getElementById("paleta")
var indicadorDeColor = document.getElementById("indicador-de-color");
var estadoMouse = false;
document.body.onmousedown = function() { 
  estadoMouse = true;
}
document.body.onmouseup = function() {
  estadoMouse = false;
}

colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    indicadorDeColor.style.backgroundColor = colorActual
    colorSeleccionado = colorActual
  })
);
/* FUNCION RELLENAR PALETA */
var rellenarPaleta = function(){
  for (i = 0;i < nombreColores.length;i++){
    var nuevoDiv = document.createElement('div');
      nuevoDiv.style.backgroundColor = nombreColores[i];
      nuevoDiv.className = "color-paleta"
      nuevoDiv.addEventListener("click", cambiarColor(nombreColores[i]));
      paleta.appendChild(nuevoDiv);
      paleta.className
  }
}
/* FUNCION RELLENAR GRILLA CON PIXELES */
var rellenarGrilla = function(){
  for (i = 0;i < 1750;i++){
    var nuevoPixel = document.createElement('div');
      nuevoPixel.style.backgroundColor = "white";
      nuevoPixel.style.minWidth = "0.0571428571428571%"
      nuevoPixel.style.minHeight = "0.0571428571428571%"
      nuevoPixel.className = "pixel"
      nuevoPixel.addEventListener("click", pintar)
      nuevoPixel.addEventListener("mouseover", pintarLinea)
      grilla.appendChild(nuevoPixel)
  }
}
var vaciarGrilla = function(){
  $(grilla).fadeToggle(1000)
  setTimeout(function(){  for (i = 0;i < pixel.length;i++){
    pixel[i].style.backgroundColor = "white";
  }; }, 1000);
  $(grilla).fadeToggle(1000)
  }
/* FUNCION CAMBIAR COLOR SELLECIONADO */
var cambiarColor = function(color){
  return function() {colorSeleccionado = color
    indicadorDeColor.style.backgroundColor = color
  }
}
/* FUNCION PINTAR */
var pintar = function(e){
e.target.style.backgroundColor = colorSeleccionado;
}
/* FUNCION PINTAR */
var pintarLinea = function(e){
  if (estadoMouse == true){
  e.target.style.backgroundColor = colorSeleccionado;
  }
}
// FUNCION GUARDAR PIXEL ART
function guardarPixelArt() {
  html2canvas($("#grilla-pixeles") , {
    onrendered: function(canvas) {
      theCanvas = canvas;
      canvas.toBlob(function(blob) {
        saveAs(blob, "pixel-art.png");
      });
    }
  });
}

// Carga a un superheroe predefinido
function cargarSuperheroe(superheroe) {
  var $pixeles = $("#grilla-pixeles div");
  for (var i = 0; i < superheroe.length; i++) {
    $pixeles[i].style.backgroundColor = superheroe[i];
  }
}

rellenarGrilla();
rellenarPaleta();