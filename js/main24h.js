"use strict"
const vlienzo = document.getElementById("lienzo");
vlienzo.width = "700";
vlienzo.height = "500";
const areaCanvas = vlienzo.getBoundingClientRect();

const context = vlienzo.getContext("2d")
let dibujando = false;

const vColor = document.getElementById("color");
const vGrosor = document.getElementById("grosor")
const btnBorrar = document.getElementById("borrar")

let colorTrazo =vColor.value;
let grosorTrazo= vGrosor.value

const empezarDibujar = () => {
    const x = event.clientX - areaCanvas.left;
    const Y = event.clientY - areaCanvas.top;   
    context.moveTo(x, Y);
    dibujando = true
}

const terminarDibujar = () => {
    dibujando = false
}

const dibujar = () => {
    if (dibujando) {
        //console.log((event.clientX - areaCanvas.left) + " . " + (event.clientY - areaCanvas.top))
        const x = event.clientX - areaCanvas.left;
        const Y = event.clientY - areaCanvas.top;
        
        context.lineWidth = grosorTrazo
        context.strokeStyle = colorTrazo

        context.lineTo(x,Y);
        context.stroke();
        context.beginPath();
        context.moveTo(x, Y);

    }
}

const borrarLienzo = ()=>{
    context.clearRect(0, 0, vlienzo.width, vlienzo.height)
}

vlienzo.addEventListener("mousedown", empezarDibujar);
vlienzo.addEventListener("mouseup", terminarDibujar);
vlienzo.addEventListener("mousemove", dibujar);

vColor.addEventListener("input", (event) => {
    colorTrazo = event.target.value
})

vGrosor.addEventListener("input", (event) => {
    grosorTrazo = event.target.value
})

btnBorrar.addEventListener("click", borrarLienzo)


