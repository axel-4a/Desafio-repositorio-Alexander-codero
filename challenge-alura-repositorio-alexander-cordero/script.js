

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();


    const formData = new FormData(form);


    fetch('https://formspree.io/tu-formulario@ejemplo.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Mensaje enviado correctamente');
            form.reset();
        } else {
            alert('Error al enviar el mensaje');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});