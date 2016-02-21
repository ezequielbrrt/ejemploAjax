function nuevoAjax(){
	var xmlhttp=false;
 	try {
 		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 	} catch (e) {
 		try {
 			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 		} catch (E) {
 			xmlhttp = false;
 		}
  	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
 		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function cargarContenido(){
	var contenedor;
	contenedor = document.getElementById('contenedor');
	ajax=nuevoAjax();
	ajax.open("GET", "ejemplo.php",true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
	 ajax.send(null);
}

function cargarContenido(){
	var t1, t2, contenedor;
	contenedor = document.getElementById('contenedor');
	t1 = document.getElementById('texto1').value;
	t2 = document.getElementById('texto2').value;
	ajax=nuevoAjax();
	ajax.open("GET", "ejemploajax2.php?t1="+t1+"&t2="+t2,true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
		contenedor.innerHTML = ajax.responseText
	 	}
	}
	ajax.send(null)
}