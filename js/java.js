 var img = document.getElementById("letras");
    var imgArray = [];
    for (i = 65; i < 91; i++) { 
      imgArray[i-65] = new Image();
		  imgArray[i-65].src = "https://raw.githubusercontent.com/NestorPlasencia/strangerthings/master/"+i+".gif";        
		}

	  document.addEventListener("keydown", teclado);
    document.addEventListener("keyup", reset);
    
    function teclado(evento)
	  { var codigo = evento.keyCode;
    	if (codigo > 64 && codigo < 91){
          img.src = imgArray[codigo-65].src;
      }
	  }

  	function reset(evento)
	  {	     
      img.src = "https://raw.githubusercontent.com/NestorPlasencia/strangerthings/master/vacio.gif";
	  }