const myForm = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
// const info = document.getElementById('info');
const infoBtn = document.getElementById('info-btn');
const submitBtn = document.getElementById('submit-btn');
const errors = document.getElementById('errors');

let errorList = [];

const showInfo = () => {
    info.forEach(info =>
        info.checked ? alert('¿Desea que se realice la reserva?') : null
    )
}

const validateForm = e =>{
    e.preventDefault();

    errorList = [];

    // Validaciones
    // Validar nombre:
    name.value.trim() === 0 && errorList.push('El nombre no puede estar vacío');
    !/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(name.value.trim()) && errorList.push('El nombre debe tener caracteres válidos.')
    // Validar email:
    email.value.trim() === 0 && errorList.push('El email no puede estar vacío')
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && errorList.push('El email no es válido');

    if(errorList.length === 0 && confirm('¿Desea enviar el formulario?')){
        myForm.submit();
        myForm.reset();
    } else if (errorList > 0){
        errors.forEach(error => {
            errorList.innerHTML += `<li>${error}</li>`;
        });
    }
}

infoBtn.addEventListener('click', showInfo);
myForm.addEventListener('submit', validateForm)

