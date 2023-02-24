const $botonCalcular = document.querySelector(`#boton-calcular`);

    $botonCalcular.onclick = function() {
        const $salarioAnual = Number(document.querySelector(`#salario-anual`).value);
        let inputRespuesta = document.querySelector(`#salario-mensual`);
        inputRespuesta.value = `Tu salario mensual es de $${calcularSalarioMensual($salarioAnual)}`;
        inputRespuesta.style.background = `#fff`
    }

    function calcularSalarioMensual(salarioAnual) {
        cantidadMesesEnUnAnio = 12;
        return salarioAnual / cantidadMesesEnUnAnio;
    }