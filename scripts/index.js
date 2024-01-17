const myForm = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const infoBtn = document.getElementById('info-btn');
const submitBtn = document.getElementById('submit-btn');
const errors = document.getElementById('errors');

let errorList = [];

// Funciones
const validateForm = e => {

    e.preventDefault();
    errorList = [];

    // Validar nombre (campo obligatorio y formato):
    name.value.trim().length === 0 && errorList.push('El nombre es un campo obligatorio');
    !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(name.value.trim()) && errorList.push('El nombre no tiene caracteres válidos');
    // Validar correo:
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && errorList.push('Introduce un correo electrónico válido');
    // Validar mensaje
    message.value.trim().length < 10 && errorList.push('Mensaje demasiado corto');

    // Envío formulario
    if(errorList.length === 0 && confirm("¿Desea enviar el formulario?")){
        myForm.submit();
        myForm.reset();
    } else if(errorList.length > 0){
        errors.textContent = "";
        console.log(errorList);
        errorList.forEach(error => {
            errors.innerHTML += `<li>${error}</li>`;
        });
    }
}

const showInfo = () => {
    infoRadio.forEach(info =>
        info.checked ? alert('¿Desea recibir información adicional?') : null
    )

}

infoBtn.addEventListener('click', showInfo);
myForm.addEventListener('submit', validateForm);

    



