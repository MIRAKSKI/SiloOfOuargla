self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/SiloOfOuargla/index.html',
        '/SiloOfOuargla/css/main.css',
        '/SiloOfOuargla/css/main.css',
        '/SiloOfOuargla/css/masterials.css',
        '/SiloOfOuargla/css/phone.css',
        '/SiloOfOuargla/css/styles.css',
        '/SiloOfOuargla/js/1.0.21.jquery.scrollify.min.js',
        '/SiloOfOuargla/js/3.3.1.jquery.min.js',
        '/SiloOfOuargla/js/main.js'
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
