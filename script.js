document.addEventListener('DOMContentLoaded', function() {
    // Para el formulario GET
    document.getElementById('getForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre_get').value;
        const email = document.getElementById('email_get').value;
        
        // Construir la URL con parámetros GET
        const url = `procesar_get.php?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}`;
        
        // Realizar la solicitud GET
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('getResponseData').innerHTML = data;
                
                // Mostrar los parámetros enviados
                const parametrosGet = `
                    <div class="sent-params">
                        <p><strong>Parámetros enviados:</strong></p>
                        <p>Nombre: ${nombre}</p>
                        <p>Email: ${email}</p>
                        <p>URL: ${url}</p>
                    </div>
                `;
                document.getElementById('getResponseData').innerHTML += parametrosGet;
            })
            .catch(error => {
                document.getElementById('getResponseData').innerHTML = `Error: ${error.message}`;
            });
    });
    
    // Para el formulario POST
    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre_post').value;
        const email = document.getElementById('email_post').value;
        
        // Crear FormData para enviar datos POST
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('email', email);
        
        // Realizar la solicitud POST
        fetch('procesar_post.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('postResponseData').innerHTML = data;
            
            // Mostrar los parámetros enviados
            const parametrosPost = `
                <div class="sent-params">
                    <p><strong>Parámetros enviados:</strong></p>
                    <p>Nombre: ${nombre}</p>
                    <p>Email: ${email}</p>
                    <p>Método: POST</p>
                </div>
            `;
            document.getElementById('postResponseData').innerHTML += parametrosPost;
        })
        .catch(error => {
            document.getElementById('postResponseData').innerHTML = `Error: ${error.message}`;
        });
    });
});