"use strict"
let vBola = document.getElementById("bola");
let posX = 150;
let posY = 0;
let intervalo 

vBola.style.left = posX + "px";
vBola.style.top = posY + "px";

let velocidadX = 1.5;
let velocidadY = 2
let aceleracion = 0.1;
let perdida = 0.8;

const mover  = () => {
    velocidadY += aceleracion;
    posY += velocidadY;
    posX += velocidadX
    if(posY >= window.innerHeight - vBola.offsetHeight){
        posY = window.innerHeight - vBola.offsetHeight
        velocidadY = perdida * velocidadY;
        if(velocidadY<0.1){
            clearInterval(intervalo)
        }
        velocidadY = -velocidadY
    }

    if(posX >= window.innerWidth- vBola.offsetWidth) {
        posX= window.innerWidth - vBola.offsetWidth
        velocidadX = -velocidadX;
    } 
    if(posX<=0 ){
        posX = 0;
        velocidadX= -velo
    }

    
    document.title = velocidadY
    vBola.style.top = posY + "px";
    vBola.style.left = posX + "px";

}


intervalo = setInterval(mover, 40);