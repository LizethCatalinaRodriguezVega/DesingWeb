var Reprobados = 0;
var Aprobados = 0;
var TotalEstudiantes = 0;

function AgregarEstudiante() 
{
	debugger;
	var NombresyApellidos = document.getElementById("NombresyApellidos").value;
	var Calificacion1 = parseFloat(document.getElementById("Calificacion1").value);
	var Calificacion2 = parseFloat(document.getElementById("Calificacion2").value);
	var Calificacion3 = parseFloat(document.getElementById("Calificacion3").value);	
	var NotaFinal = 0;
	var Estado = "";

	if (NombresyApellidos == "" || isNaN(Calificacion1) || isNaN(Calificacion2) || isNaN(Calificacion3) )
	{
		alert("Ingrese los datos completos Por Favor");
        return;
	}

	if (Calificacion1 > 5 || Calificacion1 < 0 || Calificacion2 < 0 || Calificacion2 > 5 || Calificacion3 < 0 || Calificacion3 > 5) 
	{
		alert("Las notas no deben superar la nota más alta 5.0 o ser menor que 0");
		return;
	}

	NotaFinal = ( Calificacion1 + Calificacion2 + Calificacion3 ) / 3;

	if (NotaFinal < 3.0)
	{
		Estado = "Reprobado";
		Reprobados++;

	}
	else{
		Estado = "Aprobado";
		Aprobados++;
	}

	TotalEstudiantes = Reprobados + Aprobados;

	var tabla = document.getElementById("TablaEstudiantes")

	var fila = tabla.insertRow(1);

	var celdaEstudiante = fila.insertCell(0);
	var celdaCalificacion1 = fila.insertCell(1);
	var celdaCalificacion2 = fila.insertCell(2);
	var celdaCalificacion3 = fila.insertCell(3);
	var celdaNotaFinal = fila.insertCell(4);
	var celdaEstado = fila.insertCell(5);

	if (Estado == "Reprobado") 
	{
		celdaEstado.style.color = "red";
	}
	else{
		celdaEstado.style.color = "orange";
	}

	celdaEstudiante.innerHTML = NombresyApellidos;
	celdaCalificacion1.innerHTML = Calificacion1;
	celdaCalificacion2.innerHTML = Calificacion2;
	celdaCalificacion3.innerHTML = Calificacion3;
	celdaNotaFinal.innerHTML = NotaFinal.toFixed(1);
	celdaEstado.innerHTML = Estado;

	document.getElementById("LabelAprobados").innerHTML = "Estudiantes Aprobados: " + Aprobados;
    document.getElementById("LabelReprobados").innerHTML = "Estudiantes Reprobados: " + Reprobados;
    document.getElementById("TotalEstudiantes").innerHTML = "Total Estudiantes: " + TotalEstudiantes;
}