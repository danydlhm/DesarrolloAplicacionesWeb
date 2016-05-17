function limpiar(){
	document.getElementById("CentroDeportivo").options.length=0;
	document.getElementById("Actividad").options.length=0;

	document.getElementById("CentroDeportivo").options[0]=new Option("--Seleccione un Centro Deportivo--", "0");
	document.getElementById("Actividad").options[0]=new Option("--Seleccione una actividad--", "0");
}