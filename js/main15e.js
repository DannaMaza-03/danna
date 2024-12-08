"use strick"
let vtxtNombre  = document.getElementById("txtNombre")
let vtxtMarca = document.getElementById("txtMarca")
let vtxtPrecio = document.getElementById("txtPrecio")
let vtxtCantidad  = document.getElementById("txtCantidad")
let vbtnAgregar  = document.getElementById("btnAgregar")
let vtbodyProductos = document.getElementById("tbody-productos")
let vcajaTotal = document.getElementById("caja-total")
let contenidoTabla = "";
let total = 0;


vbtnAgregar.addEventListener("click", () => {
    let nombre = vtxtNombre.value
    let marca = vtxtMarca.value
    let precio = vtxtPrecio.value
    let cantidad = vtxtCantidad.value
    let subtotal = precio * cantidad
    total += subtotal //se acumula el valor de los subtotales y luego se suman con += 
    vcajaTotal.innerText = "total: " + total;

   let fila = "<tr> <td>" + nombre + 
              "</td> <td>" + marca + 
              "</td> <td>"+ precio + 
              "</td> <td>" + cantidad + 
              "</td> <td>" + subtotal + 
              "</td><td> <button class= 'btnEliminar'>Eliminar</button></td></tr>";
        contenidoTabla += fila;
        vtbodyProductos.innerHTML = contenidoTabla;

        let botonesEliminar = document.querySelectorAll("#tbody-productos .btnEliminar")

        for (let i=0; i<botonesEliminar.length; i++ ){
            botonesEliminar[i].addEventListener("click", (event) => {
                console.log (event.target.parentNode.parentNode.rowIndex);
                let posicionFila =event.target.parentNode.parentNode.rowIndex;  

                let subtotalQuitar = (vtbodyProductos.getElementsByTagName("tr")[posicionFila-1]
                         .getElementsByTagName("td") [4].innerText)
                total -= subtotalQuitar;
                vcajaTotal.innerText = "total: " + total;

                vtbodyProductos.getElementsByTagName("tr")[posicionFila-1].remove();
                contenidoTabla = vtbodyProductos.innerHTML;
                
            })
        }
})