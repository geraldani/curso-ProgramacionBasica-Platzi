var d=document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var bolean=true, estaApretado=false;
var ancho=d.width, alto=d.height;
var xini, yini, xfin, yfin;
var color;
document.addEventListener("mousedown",function(){//detecta cuando se apreto el mouse
	estaApretado=true;
});
document.addEventListener("mouseup",function(){//detecta cuando se solto el mouse
	estaApretado=false;
	bolean=true;
});
document.addEventListener("mousemove",moviendo);

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
		dibujar (xini, yini, xfin, yfin,document.getElementById("colorID").value);
	}
}

//dibuja en el lienzo
function dibujar (xini, yini, xfin, yfin,color){
	lienzo.beginPath();//arranca el trazo
	lienzo.strokeStyle=color;//colorea el trazado
	lienzo.lineWidth=3;//modifica el grosor de la linea del trazo
	lienzo.moveTo(xini,yini);//mover el lapiz
	lienzo.lineTo(xfin,yfin);//traza una linea
	lienzo.stroke();//dibuja la linea
	lienzo.closePath();//cierra el trazo
}