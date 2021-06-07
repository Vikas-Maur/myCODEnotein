const staticCacheName = 'site-static-v1.1';
const assets = [
  'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha3/dist/css/bootstrap.min.css'
  ,'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js'
  ,'https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap'
  ,'/logo.png'
  ,'/logo-big.png'
  ,'/js/app.js'
  ,'/js/blog.js'
  ,'/js/teleporter.js'
  ,'/js/highlight.pack.js'
  ,'/index.html'
  ,'/css/style.css'
  ,'/css/home.css'
  ,'/css/highlight/stackoverflow-dark.css'
  ,'/fallback.html'
]

// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request)
    }).catch(() => {
      if(evt.request.url.includes('.html')){
        return caches.match('/fallback.html');
      } 
    })
  );
});