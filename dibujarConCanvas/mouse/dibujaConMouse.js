var d=document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var bolean=true, estaApretado=false;
var ancho=d.width, alto=d.height;
var xini, yini, xfin, yfin;
document.addEventListener("mousedown",apretar);
document.addEventListener("mousemove",moviendo);
document.addEventListener("mouseup",soltar);

lienzo.strokeStyle="brown";
lienzo.strokeRect(ancho-ancho+1,alto-alto+1,ancho-2,alto-2);//para dibujar cuadrado/borde

//si esta apretado el mouse (se hizo click pero no se solto), es cuando dibujara
function moviendo (evento){
	if(estaApretado){
		if(bolean){//esta sentencia es solo para dibujar un primer punto, y a partir de ahi dibujar el resto
			xini=evento.layerX-1;
			yini=evento.layerY-1;
			xfin=evento.layerX+1;
			yfin=evento.layerY+1;
			bolean=false;
		}else{
			xini=xfin;
			yini=yfin;
			xfin=evento.layerX;
			yfin=evento.layerY;
		}
		dibujar (xini, yini, xfin, yfin);
	}
}

//detecta cuando se apreto el mouse
function apretar (evento){
	estaApretado=true;
}

//detecta cuando se solto el mouse
function soltar (evento){
	estaApretado=false;
}

//dibuja en el lienzo
function dibujar (xini, yini, xfin, yfin){
	lienzo.beginPath();//arranca el trazo
	lienzo.strokeStyle="brown";//colorea el trazado
	lienzo.lineWidth=3;//modifica el grosor de la linea del trazo
	lienzo.moveTo(xini,yini);//mover el lapiz
	lienzo.lineTo(xfin,yfin);//traza una linea
	lienzo.stroke();//dibuja la linea
	lienzo.closePath();//cierra el trazo
}