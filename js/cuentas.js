document.addEventListener('DOMContentLoaded', function() {
    cargarCuentas();
});

function cargarCuentas() {
    var cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
    var lista = document.querySelector('tbody');
    lista.innerHTML = '';

    cuentas.forEach(function(cuenta, index) {
        var row = document.createElement('tr');

        var nroTd = document.createElement('td');
        nroTd.classList.add('pd-8');
        nroTd.textContent = index + 1;

        var nombreTd = document.createElement('td');
        nombreTd.classList.add('pd-8');
        nombreTd.textContent = cuenta.nombre;

        var accionesTd = document.createElement('td');
        accionesTd.classList.add('pd-8');

        var editarBtn = document.createElement('button');
        editarBtn.textContent = 'Editar';
        editarBtn.classList.add('button', 'bg-primary', 'text-white');
        editarBtn.onclick = function() {
            editarCuenta(index);
        };

        var eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('button', 'bg-danger', 'text-white');
        eliminarBtn.onclick = function() {
            eliminarCuenta(index);
        };

        accionesTd.appendChild(editarBtn);
        accionesTd.appendChild(eliminarBtn);

        row.appendChild(nroTd);
        row.appendChild(nombreTd);
        row.appendChild(accionesTd);

        lista.appendChild(row);
    });
}

function editarCuenta(index) {
    var cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
    var nombre = prompt('Ingrese el nuevo nombre de la cuenta:', cuentas[index].nombre);
    if (nombre) {
        cuentas[index].nombre = nombre;
        localStorage.setItem('cuentas', JSON.stringify(cuentas));
        cargarCuentas();
    }
}

function eliminarCuenta(index) {
    var cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
    if (confirm('¿Está seguro de eliminar esta cuenta?')) {
        cuentas.splice(index, 1);
        localStorage.setItem('cuentas', JSON.stringify(cuentas));
        cargarCuentas();
    }
}

function crearCuenta(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const balance = parseFloat(document.getElementById('balance').value);
    const nuevaCuenta = {
        nombre: nombre,
        descripcion: descripcion,
        balance: balance
    };
 
    let cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
    cuentas.push(nuevaCuenta);
    localStorage.setItem('cuentas', JSON.stringify(cuentas));
    document.getElementById('crear-cuenta-form').reset();
    cargarCuentas();
}
document.getElementById('crear-cuenta-form').addEventListener('submit', handleFormSubmit);