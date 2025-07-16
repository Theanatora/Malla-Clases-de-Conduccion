// Al instalar el service worker, se pueden cachear los recursos necesarios
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                'index.html',
                'style.css', // Si tienes un archivo CSS
                'script.js',  // Si tienes un archivo JavaScript
                'icon.png'    // Asegúrate de incluir tu ícono
            ]);
        })
    );
});

// Manejo de las solicitudes de red
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});