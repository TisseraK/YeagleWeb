'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "61e36d662790b624b14e691f1a214f5e",
"index.html": "847c01b30e4b8dffb700b09ad5d1f999",
"/": "847c01b30e4b8dffb700b09ad5d1f999",
"main.dart.js": "10d6e7f6afa161bab3c3948142706759",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"README.md": "f8ea46c3afbf317d07a3c261ad5f8530",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c6302980ca2429957650cb02d8fe4b03",
".git/ORIG_HEAD": "1184332bdcc2441004c62b75d53bf3c0",
".git/config": "4980d5893cac81375dc3725b7acb0dc1",
".git/objects/3e/c72b75ad99d9629509009e893903d382eb3008": "40ed941798ce04e902ec2e00e6f62428",
".git/objects/57/c4bb1e61c41010278238f7a29309e35f6841d8": "a4a0b14d7cd9957e30e28a85e8efa835",
".git/objects/04/5d18586d74cbf73917697ed0054a5048d3db29": "b1b6dc89ebe90df2b557f21f05197be1",
".git/objects/69/46d515899dc389b3d24b453ed47c3be707cafa": "e91bf8a33fd17777279f262ae8ae6491",
".git/objects/3c/5063a2a49c4808aa499f95de6eed65d88428f7": "86a44da28e6060793f4fa189f5ef72b2",
".git/objects/5f/c741d46ab384b235c2a36d13fc55cd37b72cdb": "41b06d7933749062d170b7fcd1564427",
".git/objects/9d/4a7740ec8a29cf84e61a063a763061693ff4a1": "1621fdf0ed2615e724c6d0d4f7c7d24d",
".git/objects/9c/10639a89f28d78859dec66d27a0e4fa5b5449e": "90f42986cbb85af27f9c89fdec329474",
".git/objects/a4/d495602e8ea91441f7829a27219669aac0a152": "c52bb81a6236602705d6bbdf02289fa8",
".git/objects/ac/1cba5dbd2cac014ba502fb4a3c6c84b74ab8cf": "ee6ab704ee8887348515611c1b5a71c9",
".git/objects/df/07d6e2bd306001afebc689cc7475f6ed6e6eec": "fdb76e87d875b625c9663811fe19d0d2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/2b384e4d4c21bf9ad2ee29ad73e51454f160a7": "e5516259713f8c594e93c4649f76db19",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/7f7b3ace510bdf24857eee70fa450170517d59": "6ed4c59465ceed751a0a87df1aabcc12",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f5bd427d39fe7e9f815982d311f5092ee34470": "c37ac155e9b4f550d067fa318b0b356e",
".git/objects/c8/ed8291d3934e7a4ae8b7d7472f8bb7e9f59fd8": "fa86f0fedea1969b2f10f724937c9dfc",
".git/objects/fb/bad4446806ce75b014069d08597923932b7542": "399ce9420b1dd2fe5690a2d7a26ecf3c",
".git/objects/ec/32ea898d10fc2fab18814e067a07fe6a34065d": "a04ef57e73b44a6a57542b809cb9e895",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1f/b258bbc729c335e4970424fe1467c42f951936": "659008038338b010547ed61a8e32e433",
".git/objects/87/9097e58d16eabf02782f6871523dd961fc5bed": "06e34b23118d03adca02983bd15201a1",
".git/objects/74/5f08745ef65e29f20f03beaf82ba78b135fe68": "477a02be341dd4e8d22ba7ee2a1ffa0a",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/6a95eed5b5e88af468bd59e0eca2c221654ffb": "af809fe238f9e4b712862545e0762e04",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/846dbbd9378227788ace85efc95d8a697d71d5": "a326a7e61cefdc1f6622c110f014be76",
".git/objects/19/fe5e0d2e9fcb42ad8fc6c4c4595f04ab28b48d": "6858cea57dc255fa5f8aee83a48dfad8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/494aa0aff817096a751a0779cbc73c517325f6": "25b8972e82943eb04e2ef53296b7528f",
".git/objects/6e/0cbc7df584cf0a427dbb6be7de18f570c4c95c": "88cfc22a3bef07b10e07eebb5a92413a",
".git/objects/5c/69103259ab91bdf8790167c82aa953bb1f813c": "42bf1288a38da7f2281e35af1b3639e7",
".git/objects/5d/d4918eecf74fcb5b7200341cbf4f075c345276": "b57e2fca36807227990af705ef67d9da",
".git/objects/62/95dd542ef0c04e52877434e29001634315b6c5": "69bb7b03333d2263f0f1fa21627a87b9",
".git/objects/98/b0ac2f7b28a6829508b98c4faa15497a1a5574": "2fa8f0f10e2e9e94fd9dec11b2433867",
".git/objects/98/3821fc6afe2063455e4c82b074c8c736ab3064": "e1dba7c567d295ea6f45648fe595ae60",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/40e18fbf01f74f8623df90a4046706522b3ed3": "344d6b46a1b26b1a75251ed57e5194ea",
".git/objects/39/facefa0b91886d03fa76325cd4455bf7bbfe0d": "69efbc1524bc387bbbcafb58610da0da",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d4/f7506414f693a5c599ae4765870683719d9d82": "e045ddd8448da49c5b0e6e0ffc8d90a1",
".git/objects/aa/ffc8df2976321987cd3e970add00b02e58cbb8": "5ac0a570f646dc97a0046d76462843e5",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b22bc90845facb11204647a5f158c17db14ab4": "2b26fc86d1dc5529326c5609116c1766",
".git/objects/db/685aa986193fa5a46694c7685a53c294fdc802": "7ad8ea2ad32a582e8d2f18c9386421ec",
".git/objects/a8/507420842d4b82efe347eee43bd658c24da84d": "1fa5b702cb9040f7870aecbb4ab87276",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/f09ed38b58ef6505ea3270b381bab1224f8bc4": "b6d2edcdc6c86951596f212c6231f7c2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/f15165875f480b63c95b74a7b2736388b1f934": "f68a219dcd17d8e17d1c1a1331632245",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/8c1e9362f2d797d53ef54af542dfc37b3bcf2b": "5e988f54e38626846790c5808297e077",
".git/objects/c5/639c2862d524fa1cdbd4edc767542b23b5993d": "21846492f7da9b916d10cf481c5ebb3e",
".git/objects/f1/9b1d0f8c3cefcf578eea5a4419dec61ae61a73": "44b25e229464e6c91bb7f800cb044b5b",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/79dd68d70060e4780b79c3e381e7811736aa53": "0297e449c09e06a0b18f79043f78982b",
".git/objects/84/e402084c90f43c6407e0ab900ffa20f12d1b3e": "9c199c77b15c2a0a5ce6a1f03402804b",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/49/559e080c43304a4a37ba232bf547ffcf560d8d": "9fe98e2e5e669ad0ee7348584cfb49ae",
".git/objects/2b/792b6c90ccda4c37b9a895c4db89318dae03a1": "91d2d35213cf0d6c18dee58034aef386",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/78/a2fc4205da97e768641a764c1a08095833876d": "354fb8dabedf471b051312519936db02",
".git/objects/8b/8bb671e0ace1b31a0e4d8ef3fd367163c6955c": "0ec8938ce540e5a2e341a60093ea154e",
".git/objects/22/a4c91fb5adc3fd5e681f7bc701d2614c2af1f8": "9500ca46e4e0fc14741641f82b1222fd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2f6eeff876e7940b431e3e3b9f843b69",
".git/logs/refs/heads/main": "4a86f51972db57c18cc2839c797d4730",
".git/logs/refs/remotes/origin/main": "25e879c721129c80965c587115c3ffec",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1184332bdcc2441004c62b75d53bf3c0",
".git/refs/remotes/origin/main": "1184332bdcc2441004c62b75d53bf3c0",
".git/index": "d1c83ac19606a95a42ed1d08ddfde6a3",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "179aa7055dadfd2bef58ee8b82bb5029",
"assets/asset/soif.png": "23a6c334f59b3a07d69978b4ca119732",
"assets/asset/heart.png": "1d47533b5503c608b16665027e0dbdee",
"assets/asset/quoi.png": "9ee88f748478f6e8df2a6fbf513d90bf",
"assets/asset/logo.png": "12f9c0dbf9ae9aa9f98617f25d320c7c",
"assets/asset/ping.png": "b13f1938066d3adc7d23448951a88273",
"assets/asset/fond.png": "4949a405aea1d7cb731b4bd535eecd92",
"assets/asset/Montserrat/static/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/asset/ping2.png": "29d46e1c5d37bbb32c4cc38932df825e",
"assets/asset/faim.png": "dd867f81bfc6859bf1d4fe5e4772425e",
"assets/asset/setting.png": "8790bbf520a6b055d8515f2017263225",
"assets/AssetManifest.json": "643cdb0d8f194913ebaf9d104cdfed4c",
"assets/NOTICES": "d3671bad43ac90a3a92be5666b062183",
"assets/FontManifest.json": "be069f013db50398e24ad4e0510367da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/shaders/ink_sparkle.frag": "bd34fbb3c86e3c453409ad4ab4f957da",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
