var cacheName = 'GamesV1.0.5'; //Unique cache ID. If you change your games, you need to change this ID so it can be updated in user device.
var appShellFiles = [
    'index.html',
    'manifest.json',
	//Games asset & script added below.
    'js/preloader.js',
    'js/games.js',
    'js/phaser.js',
    'assets/bg_games.png',
    'assets/ball.png',
    'assets/bg.png'
  ];
  
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
	  //Cache all the file in appShellFiles array above
      return cache.addAll(appShellFiles);
    }).then(function() {
	  //Replace old service-worker (if exist) right away!
	  return self.skipWaiting();
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
	  //Fetch offline/cached resources first before attempting online/remote resources.
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheKey) {
      return Promise.all(
        cacheKey.filter(function(cacheKey) {
			//Remove old cache file if it's cache ID different with the current cache ID. 
			return cacheKey != cacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    }).then(function() {
	  return self.clients.claim();
    })
  );
});