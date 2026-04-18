// Service Worker para Sistema MAAH
// Versión mínima: solo habilita la instalación como app

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

// Pasa las peticiones a la red normalmente (sin caché)
// Esto evita problemas con Firebase y el clima en tiempo real
self.addEventListener('fetch', (e) => {
  // No interceptar — dejar que el navegador maneje todo
});
