function calcularPrecioFinal (cantidadTicket, tipoDescuento){
    let descuentoEstudiante = 0.8;
    let descuentoTrainee = 0.5; 
    let descuentoJunior = 0.15; 
    let precioBase = 200;
    let precioFinal = 0;


    if (tipoDescuento == "estudiante") {
        precioFinal =(cantidadTicket * precioBase)- (cantidadTicket * precioBase * descuentoEstudiante)
    }
    else if (tipoDescuento == "trainee") {
        precioFinal =(cantidadTicket * precioBase)- (cantidadTicket * precioBase * descuentoTrainee)       
    } 
    else {
        precioFinal =(cantidadTicket * precioBase)- (cantidadTicket * precioBase * descuentoJunior)
    }
    
    return precioFinal;
}
let form = document.getElementById("calcularPrecioFinal")
let resultado = document.getElementById("resultado")
let cantidadTicket = document.getElementById("cantidadTicket")
let categoria = document.getElementById("categoria")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    resultado.textContent = "Total a pagar: $ " + calcularPrecioFinal(parseFloat(cantidadTicket.value),categoria.value)
})
form.addEventListener("reset",()=>{
    resultado.textContent = ""
})