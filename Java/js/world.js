function OcultarTitulo()
{
	document.getElementById('title').style.display = "none";
}
function MostrarTitulo()
{
	document.getElementById('title').style.display = "block";
}	
function CambiarTitulo()
{
	document.getElementById('title').innerHTML = "Welcome";
}
function AgregarFondo()
{
	document.body.style.backgroundColor = "blue";
}	
function MostrarAlerta ()
{
	alert("Hellooooo!!");
}
function AgregarUsuario()
{
	var tabla = document.getElementById("TablaUsuarios")
	
	var fila = tabla.insertRow(1);

	var celdaUsuario = fila.insertCell(0);
	var celdaCorreo = fila.insertCell(1);
	var celdaEdad = fila.insertCell(2);

	var Usuario = document.getElementById("Usuario").value;
	var Correo = document.getElementById("Correo").value;
	var Edad = document.getElementById("Edad").value;

	celdaUsuario.innerHTML = Usuario;
	celdaCorreo.innerHTML = Correo;
	celdaEdad.innerHTML = Edad;

}	