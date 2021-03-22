const CACHE_NAME = 'chat-cache-v1';

self.addEventListener('activate', (event) => {
    const chacheWhiteList = [CACHE_NAME];
    event.waitUntil(
        caches
            .keys()
            .then((keyList) =>
                Promise.all(
                    keyList.map((key) => {
                        if (!chacheWhiteList.includes(key)) {
                            return caches.delete(key);
                        }
                    })
                )
            )
            .catch(console.error)
    );
});

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) =>
                fetch('/manifest.json')
                    .then((res) => res.json())
                    .then((assets) => {
                        cache.addAll(['', '/chat/*', '/static/build/bundle.js']);
                        console.log('cached');
                    })
                    .catch(console.error)
            )
            .catch(console.error)
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches
            .match(event.request)
            .then((result) => result || fetch(event.request))
            .catch(console.error)
    );
});
