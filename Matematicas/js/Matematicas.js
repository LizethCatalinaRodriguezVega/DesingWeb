function sumar ()
{
	var a = parseInt(document.getElementById("OperacionA").value);
	var b = parseInt(document.getElementById("OperacionB").value);

	var c = a +b;

	alert(c);
}
function restar ()
{
	var a = parseInt(document.getElementById("OperacionC").value);
	var b = parseInt(document.getElementById("OperacionD").value);

	var c = a -b;

	alert(c);
}
function multiplicar ()
{
	var a = parseInt(document.getElementById("OperacionE").value);
	var b = parseInt(document.getElementById("OperacionF").value);

	var c = a *b;

	alert(c);
}
function dividir ()
{
	var a = parseInt(document.getElementById("OperacionG").value);
	var b = parseInt(document.getElementById("OperacionH").value);

	var c = a /b;

	alert(c);
}
function AgregarFonfo()
{
	document.body.style.backgroundColor = "blue";
}	