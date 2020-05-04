'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "bf382ec1ee4cd518735269ef00bd1a34",
"/": "bf382ec1ee4cd518735269ef00bd1a34",
"icons/Icon-512.png": "d4585c8cbc478456d740e56771c33788",
"icons/Icon-192.png": "23e4bbebc20c26f23496004fd093b714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "cbbafe11733101c7a8e47d5e701ddba4",
"assets/assets/logo.png": "ae21dfe09b062bfbefa40307c138373d",
"assets/assets/google-play-badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/logo_white.png": "74511eb347bd297ca6772ea4e18a8436",
"assets/assets/logo_black.png": "e7a0f6ae3282eabaf8a8b2139a3ef7fb",
"assets/assets/text.png": "85162cbda7ab1fec72199c9ea6b0274e",
"assets/assets/splash.flr": "33150e22594473e606c0ee3297e02a6f",
"assets/FontManifest.json": "4ebca9af8e701913e09c984fd9c73bcc",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "fd9c0901254788d2f01619a6169719ec",
"assets/LICENSE": "3788dc6b00f3a08e5240849ff5e7c380",
"favicon.png": "e0216aa5e6b254b822599e803ee21275",
"main.dart.js": "1ea3c3f720389e8cf88c2d7c3e21ac34",
"manifest.json": "65f75cb0c96612e713a14d1513d744bf"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
