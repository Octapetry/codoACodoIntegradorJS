// valor del ticket
const ticket = 200;

// descuentos

let descEstudiante = 0.80;
let descTrainee = 0.50;
let descJunior = 0.15;

// obtenemos los elementos
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');
const btnBorrar = document.getElementById('borrar');
const btnToggleMode = document.getElementById('dark-mode');

function completar() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");

    if (nombre.value === "") {
        nombre.placeholder = 'Completá el nombre!';
    }
    if (apellido.value === "") {
        apellido.placeholder = 'Completá el apellido!';
    }
    if (email.value === "") {
        email.placeholder = 'Completá el email!';
    }
};

function calcularPago() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;

    // Verificar que los campos estén completos
    if (nombre === "" || apellido === "" || email === "") {
        completar();
        alert("Completa todos los campos de nombre, apellido y email antes de calcular el pago.");
        return;
    }

    let total = cantidad.value * ticket;
    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
        case "trainee":
            total = total - (total * descTrainee);
            break;
        case "junior":
            total = total - (total * descJunior);
            break;
        default:
            break;
    }

    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}

btnResumen.addEventListener('click',(e)=> {
e.preventDefault();
calcularPago();
});

btnBorrar.addEventListener('click',(e)=>{
    location.reload();
});

function toggleDarkMode() {
    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
};
btnToggleMode.addEventListener('click',(e)=>{
    toggleDarkMode();
})
