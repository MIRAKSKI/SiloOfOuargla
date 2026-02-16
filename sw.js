const myfilename = "my-cache-v3";
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
/*PWA V:1.02*/
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'daily-check') {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    // 6:15 PM is hour 18 and minute 15
    // We check a small range (15-20) because sync timing isn't always perfect
    if (hour === 18 && (minutes >= 25 && minutes <= 30)) {
      event.waitUntil(
        self.registration.showNotification('Evening Update', {
          body: 'It is 6:15 PM. Time for your evening check-in!',
          icon: '/SiloOfOuargla/lib/akn-192-v3.png'
        })
      );
    }
  }
});
