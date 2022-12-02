
function validar() {
    let nombre = document.getElementById("txbNombre").value
    let edad = document.getElementById("txbEdad").value
    let profesion = document.getElementById("txbProfesion").value

    if (edad >= 18) {
        document.getElementById("divResultado").innerHTML = '<div class="alert alert-success" role="alert"> El sujeto No es mayor de edad</div>'

    }
    else {
        document.getElementById("divResultado").innerHTML = '<div class="alert alert-danger" role="alert"> El sujeto No es mayor de edad</div>'

    }



}