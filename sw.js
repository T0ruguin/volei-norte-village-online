self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  // Mantém a conexão online direta para sincronizar o Firebase em tempo real
  e.respondWith(fetch(e.request));
});
