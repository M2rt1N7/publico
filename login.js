function leerXML() {
          // lee desde GitHub.
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              miFuncion(this);
            }
          };
          xhr.open("GET", "https://M2rt1N7.github.io/publico/ProyectoFinalWeb/registrados.xml", true);
          xhr.send();
        }


        function miFuncion(xml) {
          var i;
          var xmlDoc = xml.responseXML;
          var x = xmlDoc.getElementsByTagName("usuario");
          var checkingData = false;
          var nombreUsuario = document.getElementById("usr").value;
          var passUsuario =document.getElementById("clv").value;
          for (i = 0; i < x.length; i++) {
              if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == nombreUsuario) {
                  if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == passUsuario) {
                      checkingData = true;
                      if (typeof(Storage) !== 'undefined') {
                        sessionStorage.setItem("usuario",nombreUsuario);
                        sessionStorage.setItem("clave",passUsuario);
                        location.reload();
                        break;
                    } else {
                        alert("El navegador no es compatible con SessionStorage.")
                    }
                  }
                }
              }
              if(checkingData==true){
                  alert("Bienvenido, "+ nombreUsuario)
                  location.reload();

              }
              }



		function logOut() {
			if (typeof (Storage) !== "undefined") {
        if(confirm("¿Estás seguro?")){
				sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("clave")
        location.reload();
			}
			return false;
		}
  }

    function checking(){
      if(sessionStorage.getItem("usuario").length>0){
        document.getElementById("loginHeader").style.display="none";
        document.getElementById("logoutHeader").style.display="block";
        document.getElementById("conexionUsuario").innerHTML = sessionStorage.getItem("usuario");
      }
    }


  window.onload = function launch(){
      checking();
    }
