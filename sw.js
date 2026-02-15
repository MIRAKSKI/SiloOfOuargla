self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/main.css',
        '/css/main.css',
        '/css/masterials.css',
        '/css/phone.css',
        '/css/styles.css',
        '/js/1.0.21.jquery.scrollify.min.js',
        '/js/3.3.1.jquery.min.js',
        '/js/main.js'
      ]);
    })
  );
});
/*PWA V:1.01*/
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
