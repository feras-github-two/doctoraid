'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b84b1e410178c8f60a8fcdcb27b30818",
"assets/AssetManifest.bin.json": "d9dfff359d3aae43a9cab71ec4b59675",
"assets/AssetManifest.json": "559bc63794b49ed2c08214479e660b64",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0066079146e350be474ceeabe9625235",
"assets/images/Appointments.gif": "db5b7aa9c14929a97cc56bfd527f4a4c",
"assets/images/Appointments.png": "ea947dc6393db9d90c2d81e4b1b619de",
"assets/images/arrow.png": "18c470d487ad68cdf867e760257e1868",
"assets/images/bill.svg": "9325637421f844a17aa54d2283b731eb",
"assets/images/delete.png": "636130effe8611c651ad22bf6a9f2af5",
"assets/images/dental-clinic.gif": "c28e7f5071e7e1f73324d0f7e788469b",
"assets/images/dental-clinic.png": "0fae719ef05381e7d8b2b81cf100978d",
"assets/images/dental_logo.svg": "edce9152dc7dcc8205ea9cf62d1748e5",
"assets/images/dental_logo1.png": "30cb823dd6252938a9e69e908458a4b8",
"assets/images/dentistry.gif": "1210dc3a8c11c3e9ad47234c0f488f05",
"assets/images/dentistry.png": "9e9e39a2c52f952226ff963e1630275d",
"assets/images/dentistry1.gif": "c2568d8b4bfcfabe169909dec4019c84",
"assets/images/dr.png": "5447d221549ae5069b2f5d51bb42db44",
"assets/images/edit1.png": "d4f1e507d7da6dc49e42d99f8478157d",
"assets/images/finance.gif": "77746eb0f1f2c573540acd104ad7c8e4",
"assets/images/finance.png": "b5e10af596cab7189b59fa486340e1b1",
"assets/images/logo.gif": "479c8e5652fcdc60b744295d6008ae2a",
"assets/images/logo.jpg": "83e74c8ac2a1e025585d3afcb4869d11",
"assets/images/logo.svg": "3043a8d28e60f4508514b9c88fdc6e69",
"assets/images/message.svg": "991e9e956130bf8169954b66ebafaf1c",
"assets/images/money.gif": "88050bc52bc7209f5dd81724ea960522",
"assets/images/money.png": "9cf93d026a1c60c7704b97e12ef535df",
"assets/images/paitent.svg": "e9071bf7709886a44c6a19502f145158",
"assets/images/patient.png": "9d49d3a3d0484ba604c0a6cb065806a4",
"assets/images/pdf_image.svg": "830b06cd643607059b8525345e313e4a",
"assets/images/person.svg": "9e46a9dc8bd4ec9413a2e78641cb7439",
"assets/images/photo.jpg": "331597d6820379b36e21a4efa476c940",
"assets/images/pic.jpeg": "e13a9090311d62cb2002e9dec899575b",
"assets/images/report.png": "b68c9d5bcb39145750b012322bd69bad",
"assets/images/report.svg": "1e56a23bfad86af293c05b91aa6169ec",
"assets/images/teeth.svg": "ea7f6f259ecae7181194149b5b55698b",
"assets/images/token.png": "9a63fdda7810902d33ca7d3373b7ea47",
"assets/images/tooth-drill.gif": "cefc1268b4842604111b3c07ce5f6a6f",
"assets/images/tooth-drill.png": "79fa5b76cbbddceaacbd3e722e35d6b3",
"assets/images/tooth_chart.svg": "0c43a72cdc9078d2670bc524d991255a",
"assets/images/tooth_icon.svg": "5ec14388fd7d83a0405f5b4d5fb66329",
"assets/images/vector.svg": "6ddff104f6c478c1f9659a9c99d67847",
"assets/NOTICES": "7bb3fae03d079f6cd4aa67f90a7fa7f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/videos/Dentist%2520Location.mp4": "3c0c2d0b148ceab793a1f6ffb51ab167",
"assets/videos/Dentist%2520Tools.mp4": "c0b4365a3f4cd540dab0e0552adea4cf",
"assets/videos/Dentist_Chair.mp4": "5028a72eaac911005012bbf1cadf4b72",
"assets/videos/Male%2520Patient.mp4": "1358ceec80b21ce76c9fa183d456ec79",
"assets/videos/Tooth%2520Protected.mp4": "d77f3d832ac59809af62adc86d059ee5",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9f6a40b304b2e0c2ce3d798e009a940d",
"/": "9f6a40b304b2e0c2ce3d798e009a940d",
"main.dart.js": "cb0780ab5db43fd7a68b802953d772ec",
"manifest.json": "b8534ee716302b7ddbec5df005d5c2aa",
"version.json": "2b1dd6b671e932063c2c61b6e6900de9"};
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
