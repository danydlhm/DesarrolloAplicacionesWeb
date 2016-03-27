function Cambiar(valor){
	
	var centroDeporte = [];
	centroDeporte[0] = "Centro deportivo municipal Escuelas de San Antón";
	centroDeporte[1] = "Centro deportivo municipal Arganzuela";
	centroDeporte[2] = "Centro deportivo municipal Centro Integrado Arganzuela";	
	centroDeporte[3] = "Centro deportivo municiapl Circuito BMX";
	centroDeporte[4] = "Centro deportivo municipal Marqués de Samarach";
	centroDeporte[5] = "Centro deportivo municipal Peñuelas";
	centroDeporte[6] = "Centro deportivo municipal Daoíz y Velarde I";
	centroDeporte[7] = "Centro deportivo municipal Daoíz y Velarde II";
	centroDeporte[8] = "Centro deportivo municipal Estanque del Retiro";
	centroDeporte[9] = "Centro deportivo municipal La Chopera";
	centroDeporte[10] = "Centro deportivo municipal Fuente del Berro";
	centroDeporte[11] = "Centro deportivo municipal Gimnasio Moscardó";
	
	var arrayValores = new Array(
		new Array("centro","centro",centroDeporte[0]),
		new Array("arganzuela","arganzuela0",centroDeporte[1]),
		new Array("arganzuela","arganzuela1",centroDeporte[2]),
		new Array("arganzuela","arganzuela2",centroDeporte[3]),
		new Array("arganzuela","arganzuela3",centroDeporte[4]),
		new Array("arganzuela","arganzuela4",centroDeporte[5]),
		new Array("retiro","retiro0",centroDeporte[6]),
		new Array("retiro","retiro1",centroDeporte[7]),
		new Array("retiro","retiro2",centroDeporte[8]),
		new Array("retiro","retiro3",centroDeporte[9]),
		new Array("salamanca","salamanca0",centroDeporte[10]),
		new Array("salamanca","salamanca1",centroDeporte[11])
	);
	// eliminamos todos los posibles valores que contenga el CentroDeportivo
	// eliminamos todos los posibles valores que contenga la Actividad
	document.getElementById("CentroDeportivo").options.length=0;
	document.getElementById("Actividad").options.length=0;
	// añadimos los nuevos valores al CentroDeportivo
	document.getElementById("CentroDeportivo").options[0]=new Option("--Seleccione un Centro Deportivo--", "0");
	// inicializamos la Actividad
	document.getElementById("Actividad").options[0]=new Option("--Seleccione una actividad--", "0");
    for(i=0;i<arrayValores.length;i++){
        // unicamente añadimos las opciones que pertenecen al id seleccionado
        // del primer select
        if(arrayValores[i][0]==valor){
            document.getElementById("CentroDeportivo").options[document.getElementById("CentroDeportivo").options.length]=new Option(arrayValores[i][2], arrayValores[i][1]);
        }
    }	
}

function Cambiar1(valor){
	
	var actividad = [];
	actividad[0] = "Atletismo";
	actividad[1] = "Bádminton";
	
	var arrayValores = new Array(
		new Array("centro","atletismo",actividad[0]),
		new Array("arganzuela0","atletismo1",actividad[0])
	);
	// eliminamos todos los posibles valores que contenga la Actividad
	document.getElementById("Actividad").options.length=0;
	// añadimos los nuevos valores a la Actividad
	document.getElementById("Actividad").options[0]=new Option("--Seleccione una actividad--", "0");
    for(i=0;i<arrayValores.length;i++){
        // unicamente añadimos las opciones que pertenecen al id seleccionado
        // del primer select
        if(arrayValores[i][0]==valor){
            document.getElementById("Actividad").options[document.getElementById("Actividad").options.length]=new Option(arrayValores[i][2], arrayValores[i][1]);
        }
    }	
	
	
}
