const CACHE_NAME = "voucher-app-v1.0.2";
const urlsToCache = [
    "/templet-1/",
    "/templet-1/index.html",
    "/templet-1/css/tailwind.css",
    "/templet-1/png/telegram.png",
    "/templet-1/png/facebook.png",
    "/templet-1/png/whatsapp.png",
    "/templet-1/png/dummy-user.png",
    "/templet-1/png/unlocked.png",
    "/templet-1/png/group.png",
    "/templet-1/png/sign-up.png",
    "/templet-1/png/qr-code.png",
    "/templet-1/png/welcome.png",
    "/templet-1/img/indihome-poin.png",
    "/templet-1/img/img_1.png",
    "/templet-1/img/img_2.png",
    "/templet-1/img/img_3.png",
    "/templet-1/img/icon-192.png",
    "/templet-1/img/icon-512.png",
    "/templet-1/manifest.json",
    "/templet-1/main-js/jam.js",
    "/templet-1/main-js/main.js"
];

// Install Service Worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Caching assets...");
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetching resources
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Activate Service Worker
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache...");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
