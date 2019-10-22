




	
	var habitacion;


function multiroom(x){

	var habitaprecio = x.id;
	
	
	switch(habitaprecio){
		case "norm": habitacion = 50;
		break;

		case "high": habitacion = 135;
		break;

		case "pretty": habitacion = 105;
		break;

		case "deluxe": habitacion = 190;
		break;
	}

	switch(habitaprecio){
		case "norm": document.getElementById("uno").style.marginTop = "275px";
		document.getElementById("dos").style.marginTop = "350px";
		document.getElementById("tres").style.marginTop = "350px";
		document.getElementById("cuatro").style.marginTop = "350px";
		break;

		case "high": document.getElementById("uno").style.marginTop = "350px";
		document.getElementById("tres").style.marginTop = "275px";
		document.getElementById("dos").style.marginTop = "350px";
		document.getElementById("cuatro").style.marginTop = "350px";
		break;

		case "pretty": document.getElementById("uno").style.marginTop = "350px";
		document.getElementById("tres").style.marginTop = "350px";
		document.getElementById("dos").style.marginTop = "275px";
		document.getElementById("cuatro").style.marginTop = "350px";
		break;

		case "deluxe": document.getElementById("uno").style.marginTop = "350px";
		document.getElementById("dos").style.marginTop = "350px";
		document.getElementById("tres").style.marginTop = "350px";
		document.getElementById("cuatro").style.marginTop = "275px";
		break;
	}

	
}






function move(){
	document.getElementById("eso").style.marginLeft = "-950px";
	document.getElementById("back").style.opacity = 1;
	document.getElementById("next").style.opacity = 0;
}
function moveback(){
	document.getElementById("eso").style.marginLeft = "0px";
	document.getElementById("back").style.opacity = 0;
	document.getElementById("next").style.opacity = 1;
}




function precio(){

	var dias;
	var total;
	var people;
	var descuento = 0;


//CÁLCULO DE PERSONAS
	
	people = document.getElementById("personas").value;



//CÁLCULO DE DÍAS


	var fecha1 = document.getElementById("fecentrada").value;
	var fecha2 = document.getElementById("fecsalida").value;

	var fechaEn = new Date(fecha1);
	var fechaSa = new Date(fecha2);

	var unDia = 24*60*60*1000;

	var fechaEnMili = fechaEn.getTime();
	var fechaSaMili = fechaSa.getTime();

	var dias = Math.ceil((fechaSaMili - fechaEnMili) / unDia);

	
	
	subTotalUno = dias*habitacion*people;
	





	if(people>3){
		descuento = descuento + (subTotalUno/10);
		total = subTotalUno-descuento;
	}
	else if(people<1 || people>5){
		alert("Tienes que seleccionar un número válido de personas.");
		return false;
	}
	else if(people>0 || people<=3){
		total = subTotalUno-descuento;
	}
	



	if(document.getElementById("si").checked){
		descuento = descuento + (subTotalUno/10);
		total = subTotalUno-descuento;
	}
	else if(document.getElementById("si").checked==false && document.getElementById("no").checked==false){
		alert("Tienes que seleccionar una de las dos opciones en la sección JUBILADO / MINUSVALÍA.");
		return false;
	}
	else if(document.getElementById("no").checked){
		total = subTotalUno-descuento;
	}
	



	if(document.getElementById("visa").checked){
		descuento = descuento + (subTotalUno*0.02);
		total = subTotalUno-descuento;
	}
	else if(document.getElementById("payp").checked){
		descuento = descuento - (subTotalUno*0.02);
		total = subTotalUno-descuento;
	}
	else if(document.getElementById("payp").checked==false && document.getElementById("visa").checked==false && document.getElementById("efe").checked==false){
		alert("Tienes que seleccionar una de las tres opciones en la sección FORMA DE PAGO.");
		return false;
	}
	else if(document.getElementById("efe").checked){
		total = subTotalUno-descuento;
	}
	



	if(document.getElementById("soc").checked){
		descuento = descuento + (subTotalUno*0.05);
		total = subTotalUno-descuento;
	}
	else if(document.getElementById("nosoc").checked==false && document.getElementById("soc").checked==false){
		alert("Tienes que seleccionar una de las dos opciones en la sección SOCIO.");
		return false;
	}
	else if(document.getElementById("nosoc").checked){
		total = subTotalUno-descuento;
	}
	


	document.getElementById("gris").style.display = "block";
	document.getElementById("lamodal").style.display = "block";

	document.getElementById("lamodal").innerHTML = "<h3>Bienvenido, gracias por seleccionar nuestro hotel.</h3><p>El precio total de su habitación es de "+total+" euros después de aplicarle los descuentos seleccionados. Gracias por hacer la reserva, nos vemos el "+fecha1+"</p><a href='index.html'><input type='button' value='Confirmar'/></a>";



	function close(){
		document.getElementById("gris").style.display = "none";
		document.getElementById("lamodal").style.display = "none";
	}

}
