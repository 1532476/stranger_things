/*Funcion autoinvocada*/
(function(){
		var img = document.getElementById("letras");

		/*La importancia de precargar imágenes es que estas estén disponibles inmediatamente cuando las necesitemos. Si cargamos la imagen directamente en el evento, se nos generará un retardo de visualización dependiendo de la velocidad de conexión a internet, es por ello que se recomienda cagar todas las imágenes en una primera instancia, con el objetivo de mejorar la experiencia para usuarios que cuentan con una velocidad de conexión baja.
		var imgArray = [];
		*/

		/* Las imagenes van desde el 65 al 90
		donde 65 es A y 90 es Z*/
		
		var imgArray = [];
		for(i = 65; i<91;i++){
			imgArray[i-65] = new Image();
			imgArray[i-65].src = "img/"+i+".gif"; 
	}

		document.addEventListener("keydown", teclado);
		document.addEventListener("keyup", reset);

		function teclado(evento){
			//Con .keyCode extra el valor numerico de la tecla presionada
			var codigo = evento.keyCode;
			if(codigo>64 && codigo<91){
				img.src = imgArray[codigo-65].src;
			}
		}

		function reset (evento){
		img.src = "img/vacio.gif";		
		}
		_

		function sedipro (){
		img.src	= imgArray[83];
		img.src = imgArray[69];
		img.src = imgArray[68];
		img.src = imgArray[73];
		img.src	= imgArray[80];
		img.src = imgArray[82];
		img.src = imgArray[79];
		}

}())
