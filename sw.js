const myfilename = "my-cache-v8";
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(myfilename).then((cache) => {
      return cache.addAll([
        '/SiloOfOuargla/',
        '/SiloOfOuargla/index.html',
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
/*PWA V:1.03*/
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If the network works, save the new version to cache and return it
        return caches.open(myfilename).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        // If the internet is DOWN, only then use the cache
        return caches.match(event.request);
      })
  );
});
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [myfilename]; // Only keep the newest cache
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); // Delete 'my-cache-v2', etc.
          }
        })
      );
    })
  );
});
