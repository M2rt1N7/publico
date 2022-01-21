let divBola = document.querySelector(".bola"); //div de la roca


function printMousePos(event) {
  
  let y = event.clientY;
  let x = event.clientX;


  console.log(divBola.style.top);
  divBola.style.top = y + "px";
}

document.addEventListener("click", printMousePos);
