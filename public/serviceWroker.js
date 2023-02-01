const CACHE_NAME = 'version-0.0.1';
const urlsCache = ['index.html', 'offline.html', 'manifest.json'];

const self = this;
// install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsCache);
    })
  );
});

// listing for request

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => caches.match('offline.html'))
      );
    })
  );
});

// active

self.addEventListener('active', (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheName) =>
      Promise.all(
        cacheName.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
