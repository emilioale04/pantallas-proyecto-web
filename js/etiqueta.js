function mostrarFormularioEtiqueta() {
    const etiquetaSelect = document.getElementById('etiqueta');
    const formularioEtiqueta = document.getElementById('formulario-agregar-etiqueta');
    const botonRegistrarContainer = document.getElementById('boton-registrar-container');
    
    if (etiquetaSelect.value === 'agregar') {
        formularioEtiqueta.classList.remove('hidden');
        botonRegistrarContainer.classList.add('hidden');
    } else {
        formularioEtiqueta.classList.add('hidden');
        botonRegistrarContainer.classList.remove('hidden');
    }
}

function agregarEtiqueta() {
    const nuevaEtiquetaInput = document.getElementById('nueva-etiqueta');
    const etiquetaSelect = document.getElementById('etiqueta');
    
    const nuevaEtiqueta = nuevaEtiquetaInput.value.trim();
    if (nuevaEtiqueta) {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = nuevaEtiqueta.toLowerCase();
        nuevaOpcion.textContent = nuevaEtiqueta;
        etiquetaSelect.appendChild(nuevaOpcion);

        // Selecciona automáticamente la nueva etiqueta
        etiquetaSelect.value = nuevaEtiqueta.toLowerCase();

        // Limpia el formulario y oculta el formulario de agregar etiqueta
        nuevaEtiquetaInput.value = '';
        document.getElementById('formulario-agregar-etiqueta').classList.add('hidden');

        // Muestra el botón de registrar ingreso
        document.getElementById('boton-registrar-container').classList.remove('hidden');
    }
}