var d=document.getElementById("dibujo");
var lienzo = d.getContext("2d");

var ancho=d.width, alto=d.height;
var teclas={UP:38, DOWN:40, LEFT: 37, RIGHT:39};
var xini,yini,xfin,yfin;
xini =  xfin = ancho/2;
yini =  yfin = alto/2;
document.addEventListener("keydown",saberTecla);

lienzo.strokeStyle="green";
lienzo.strokeRect(ancho-ancho+1,alto-alto+1,ancho-2,alto-2);
function dibujar (xini, yini, xfin, yfin){
	lienzo.beginPath();
	lienzo.strokeStyle="green";
	lienzo.moveTo(xini,yini);
	lienzo.lineTo(xfin,yfin);
	lienzo.stroke();
//	lienzo.lineWidth=4;
	lienzo.closePath();

}

function saberTecla (evento){
	switch(evento.keyCode){
		case teclas.UP:
			yfin-=10;
			dibujar(xini,yini,xfin,yfin);
		break;
		case teclas.DOWN:
			yfin+=10;
			dibujar(xini,yini,xfin,yfin);
		break;
		case teclas.LEFT:
			xfin-=10;
			dibujar(xini,yini,xfin,yfin);
		break;
		case teclas.RIGHT:
			xfin+=10;
			dibujar(xini,yini,xfin,yfin);
		break;
		default:
			dibujar(xini,yini,xfin,yfin);
		break;
	}
	xini=xfin;
	yini=yfin;
}