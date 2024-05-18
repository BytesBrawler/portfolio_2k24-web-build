'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1a09cd30bc8e9c52ddf7bf6bd07af67e",
"favicon.ico": "a99b77e0e29addbe90cd4c821ddf46f9",
"index.html": "a2a5799a20af5d08ca43b29fe609b4c0",
"/": "a2a5799a20af5d08ca43b29fe609b4c0",
"main.dart.js": "a1723d2e71dfe7ea308905f252f822bc",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2de6c109bf5d471cd3529314634c188b",
"assets/AssetManifest.json": "023bdf05fd28b069fdc705e1a70cbfa1",
"assets/loading.gif": "a13d941afe00255c8bb30ec307f64822",
"assets/NOTICES": "08871211d5857b5d62298408a333fbd4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0adce9b3ca6b38b1b180d9fb8cb5bda5",
"assets/packages/metaballs/lib/metaballs_shader.frag": "2db6b9a1394da174e429ce75f1ac0773",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7bec3f7fa12bc2a4fe33dd26f467659f",
"assets/fonts/MaterialIcons-Regular.otf": "9b6bbe8f3d6fab7e271526a3ff0d25bd",
"assets/assets/riv/scroll_down.gif": "3046bb336b3a22e9ec4c236fd07be74d",
"assets/assets/riv/switch_theme.riv": "2f753c90c79a6887a77d53d6530ec40f",
"assets/assets/riv/scroll.json": "02c02874afa93375d0dc2bd1451c1ec9",
"assets/assets/riv/send.json": "3eccf3e6b33dfe1d3a9166b8c47d7d31",
"assets/assets/riv/light_dark_theme.riv": "68512c22073d40c8d1ddc26abb224de0",
"assets/assets/riv/vertical-scroll.gif": "cc1460e4071ccc424e5644ca135133eb",
"assets/assets/images/imran4.png": "3a11585a79735d2bd5b628f9ef243c07",
"assets/assets/images/imran3.jpeg": "027885f1844102225054dc94615f4e00",
"assets/assets/images/image.svg": "0e4ad429fc076629f7a8cf76531dc2a5",
"assets/assets/images/mobile.png": "c1e9d585a55628a6d8e016274c2eba66",
"assets/assets/images/imran2.jpeg": "665f10c98cd667622f546664ca4705d8",
"assets/assets/images/imran.png": "2796976120b6783fd4a4e699e9c63bbe",
"assets/assets/images/sad%2520dogesh.jpeg": "92fa175be170c6ab367cca63575e7503",
"assets/assets/appRelatedImages/BBPS%2520New%2520Logo_1-042.png": "9989bfa3556374f25586c7b661405c4b",
"assets/assets/appRelatedImages/contactapp.png": "a5c613b3994d27c0a7302ca8dde2870f",
"assets/assets/appRelatedImages/exchange%2520rates.png": "adf3905f4bb647c0d15a0c81466d3eaf",
"assets/assets/appRelatedImages/whetherapp.png": "36462230bf0e1a37d993838c3edea837",
"assets/assets/appRelatedImages/chatbot2.png": "8de4ad27ba6e612a9b8991871b909006",
"assets/assets/appRelatedImages/newsapp.png": "08b06424d5da7e3236a6c6d277bfd91a",
"assets/assets/appRelatedImages/moviesapp.png": "b9b643e0b36188e2b2b48f62153f526f",
"assets/assets/appRelatedImages/eccommerce.png": "cd28cd2076b788a2e3f3a1ca48e55712",
"assets/assets/appRelatedImages/hackitup.png": "c425ba033024743d2e78219d0bf990d6",
"assets/assets/appRelatedImages/many.png": "a338a7e28f4c176d6c596c6f16bdf536",
"assets/assets/appRelatedImages/memes.png": "8d7ac7476ce53e04746783d1ed693c85",
"assets/assets/appRelatedImages/currencyapp.png": "59bb58127e830bb8c3bcf15f44291779",
"assets/assets/appRelatedImages/eworld2.png": "c85ebb0b4042a83669665d018baab338",
"assets/assets/appRelatedImages/shorts.png": "96c8365bca310bfbbbe08064fee5ee1b",
"assets/assets/appRelatedImages/chatbot.png": "c8c798294e38e7d8da242010c407941d",
"assets/assets/icons/icons8-instagram-64.png": "3fbcdacad850c2fccdf91583936953cc",
"assets/assets/icons/icons8-linkedin-64.png": "6528b8736aba1fb884f3fa92bef507a6",
"assets/assets/icons/icons8-github-64.png": "97c100604e0c5a8d64731ede66b97b4e",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
