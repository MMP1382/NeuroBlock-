const CACHE = 'neuroblock-v1';

const FILES = [
    '/',
    '/index.html',
    '/css/global.css',
    '/js/router.js',
    '/js/pages/home.js',
    '/js/pages/neuroanatomy.js',
    '/assets/background.jpg',
    '/assets/visual-field-defects.jpg',
    '/assets/vagus.jpg',
    '/assets/hypoglossal.jpg',
    '/assets/accessory-nerve.jpg'
];

// Install: cache all files
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(FILES))
    );
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
