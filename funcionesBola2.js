
let divBola = document.querySelector(".bola");//div de la roca
let body = document.querySelector("#body");





function printMousePos() {


  document.onclick = function(event) {


        y = event.clientY
        x = event.clientX;

        if (event.clientY <= 100) {
          divBola.style.top = `0`;
          } else {
            divBola.style.top = `calc(${event.clientY}px - 50px)`;
          }

      



      console.log(divBola.style.top);

   
  }         

}




 