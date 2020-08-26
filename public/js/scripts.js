const formulario = document.querySelector('#agregar-url');
formulario.addEventListener('submit', async e => {
    e.preventDefault();
    const urlOriginal_v = document.querySelector('#urlOriginal').value;
    console.log(e.target)
    const respuesta = await fetch(e.target.action, {
        method: e.target.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ urlOriginal: urlOriginal_v })
    });


    
    const resultado = await respuesta.json();
    console.log(resultado)


    //ELiminar los mensaje anteriores
    const alertas = document.querySelector('.mensaje-url');
    if (alertas) {
        document.querySelector('.mensaje-url').remove();
    }


    //verificar que todo este bien 
    if (resultado.codigo === 201) {

        const msj = document.createElement('div');
        msj.classList.add('mensaje-url');
        msj.innerHTML = `<p>Se ha acortado correctamente la Url, visita <a target="_blank" rel="noopener noreferrer" href="/${resultado.url}">El enlace aqui </a></p>`

        const contenedor = document.querySelector('main');
        contenedor.appendChild(msj);
    } else {
        //construir mensaje de error
        const mensaje = document.createElement('div');
        mensaje.classList.add('mensaje-url', 'error')
        mensaje.innerHTML = `<p>${resultado.error}</p>`;

        const contenedor = document.querySelector('main');
        contenedor.appendChild(mensaje)
    }


})

const urlParams = new URLSearchParams(window.location.search);

// console.log(urlParams.has('error')) 
if (urlParams.has('error')) {
    const mensaje = document.createElement('div');
    mensaje.classList.add('mensaje-url', 'error')
    mensaje.innerHTML = `<p>URL NO VÁLIDA </p>`;

    const contenedor = document.querySelector('main');
    contenedor.appendChild(mensaje)
}














/* const formulario = document.querySelector('#agregar-url');

formulario.addEventListener('submit', async e => {
e.preventDefault();
const urlOriginal_v = document.querySelector('#urlOriginal').Value;
console.log(e.target)
const respuesta = await fetch(e.target.action, {
    method: e.target.method,
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({urlOriginal: urlOriginal_v})
}); */
