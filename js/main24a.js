"use strick";
let vPaises = document.getElementById("paises");
let vElegidos = document.getElementById("elegidos");
let vbtnDerecha = document.getElementById("btnDerecha");
let vbtnIzquierda = document.getElementById("btnIzquierda");
let vbtnDerechaTodos = document.getElementById("btnDerechaTodos");
let vbtnIzquierdaTodos = document.getElementById("btnIzquierdaTodos");



vbtnDerecha.addEventListener("click", () => {
    if(vPaises.selectedIndex !== -1){ //vPaises.selectedIndex es -1 no se ha seleccionado elemento de la lista
    console.log(vPaises.selectedIndex); //posicion del elemento seleccionado
    console.log(vPaises.options[vPaises.selectedIndex].text);
    //vPaises.opcions[0] El primer elemento de la lista
    //vPaises.opcions [0].text Es el elemento texto del primer elemto de la lista
    let paisSeleccionado = vPaises.options[vPaises.selectedIndex].text;
    vPaises.options[vPaises.selectedIndex].remove(); //elimina un texto de la lista

    let nuevoOption = document.createElement("option");
    nuevoOption.textContent = paisSeleccionado;
    vElegidos.appendChild(nuevoOption);
   }
})

vbtnIzquierda.addEventListener("click", () =>{
    if(vElegidos.selectedIndex !== -1){
    let paisSeleccionado = vElegidos.options[vElegidos.selectedIndex].text;
    vElegidos.options[vElegidos.selectedIndex].remove();

    let nuevoOption = document.createElement("option");
    nuevoOption.textContent = paisSeleccionado;
    vPaises.appendChild(nuevoOption);
   }
});

vbtnDerechaTodos.addEventListener("click", ()=>{
    for(let i=0; i<vPaises.children.length; i++){
        let paisSeleccionado = vPaises.options[i].text;
        let nuevoOption = document.createElement("option");
        nuevoOption.textContent = paisSeleccionado;
        vElegidos.appendChild(nuevoOption);
    }
    vPaises.innerHTML ="";

})

vbtnIzquierdaTodos.addEventListener("click", ()=>{
    for(let i=0; i<vElegidos.children.length; i++){
        let paisSeleccionado = vElegidos.options[i].text;
        let nuevoOption = document.createElement("option");
        nuevoOption.textContent = paisSeleccionado;
        vPaises.appendChild(nuevoOption);
    }
    vElegidos.innerHTML ="";

})