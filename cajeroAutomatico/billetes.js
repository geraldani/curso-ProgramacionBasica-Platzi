//creando los vectores que contendran los billetes
var billetesDisp = new Array(2);
var billetesDados = new Array(2);

var ii=0,i;

//creando la matriz
for(i=0;i<billetesDisp.length;i++){
	billetesDisp[i] = new Array(2);
	billetesDados[i] = new Array(2);
}

function calcularSaldo(){
	//calcula el saldo disponible del cajero
	var total=0;
	for( var j in billetesDisp[0]){
			total=total+(billetesDisp[0][j]*billetesDisp[1][j]);
		}
		return total;
}

function agregar(denom,cant){
	billetesDisp[0][ii]=denom;
	billetesDisp[1][ii]=cant;
	ii++;//ii es el contador que lleva la longutud de la matriz o mas especificamente la cantidad de billetes agregados
}

//agregando los billetes y cantidades a la matriz
agregar(100,3);
agregar(50,5);
agregar(20,2);
agregar(10,3);
agregar(5,4);
agregar(2,5);

function entregar(){
  	var billetesReq = parseInt(document.getElementById("dinero").value);
	var nroBilletes, condicionSalida=true;
	var resto=billetesReq, k=1,j;
	var totalDinero=calcularSaldo();
	j=0;
	console.log("Antes de sacar tengo: " + calcularSaldo());
	while(k<=ii && condicionSalida){
		billetesDados[0][j]=billetesDisp[0][j];
		if(billetesReq <= totalDinero){
			billetesDados[1][j]=parseInt(resto/billetesDisp[0][j]);
			resto = resto%billetesDisp[0][j];
			if(billetesDados[1][j]>billetesDisp[1][j]){
				resto=resto+(billetesDados[1][j]-billetesDisp[1][j])*billetesDisp[0][j];
				billetesDados[1][j]=billetesDisp[1][j];
			}
			j++;
		}else{
			imprime.innerHTML += "Imposible dar esa canidad de dinero<br>Saldo disponile: <strong>" + totalDinero + "</strong><br />";
			condicionSalida=false;
		}
		k++;
	}
	if(resto==0){
		imprime.innerHTML+= '<strong>El cajero te esta dando:</strong><br>';
		for(i in billetesDados[0]){
			billetesDisp[1][i]-=billetesDados[1][i];
			if (billetesDados[1][i]!=0){
				imprime.innerHTML+=`${billetesDados[1][i]} billetes de $${billetesDados[0][i]} <br>`;
			}
		}
	}else if (condicionSalida){
		imprime.innerHTML += "No es posible entregarte esa cantidad porque no cuento con esa combinación de billetes<br />Por favor, intenta otra<br />";
	}
	//console.log("Despues de sacar tengo: " + calcularSaldo());
}

var imprime = document.getElementById("resultado");
document.getElementById("extraer").addEventListener("click", entregar);