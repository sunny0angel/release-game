'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d0691c6a072732383e50aa70d89b0562",
"assets/assets/audio/attack_enemy.mp3": "95c6ab8e9515377506e4f88ed660fa14",
"assets/assets/audio/attack_fire_ball.wav": "0c0dcfa83680f2ad565f7f2e8509d9c0",
"assets/assets/audio/attack_player.mp3": "ecb761207d8dccc6ff5814906211d47c",
"assets/assets/audio/battle_boss.mp3": "5c10fe38fddf586c9d694d8a28aa8a57",
"assets/assets/audio/explosion.wav": "4ca7bc18a6487c7f43ddc9f739691c9a",
"assets/assets/audio/knight_die.m4a": "a42857d375d9859e1899068d4af75a5a",
"assets/assets/audio/menu_bg.mp3": "a61f3d61c335451b7270542de2fa83ca",
"assets/assets/audio/sound_bg.mp3": "603c391173ab8f849d737d0fa4fa0261",
"assets/assets/audio/sound_interaction.wav": "02583765123656547a68bcb7dc7ebcc3",
"assets/assets/game_over.png": "664f7f622ca4bcc7781ce556b3e95df8",
"assets/assets/images/bag_button1.png": "323940498aa9deaf391fde503c73fe3e",
"assets/assets/images/bag_button2.png": "424ffbf39468599ec5e0688dd27434ab",
"assets/assets/images/blue_button1.png": "c5ac9ffc08055cdbb731e6bfb0d2593a",
"assets/assets/images/blue_button2.png": "b2ac54312d3b566d324f461aa50b8f5b",
"assets/assets/images/button1.png": "52a19cdb4142f10785911b0f4af6fe72",
"assets/assets/images/button2.png": "1c096e4eb5ee8912b72ce2fd65a634d6",
"assets/assets/images/direction_attack.png": "04fa54924d587beff5005965f2caa4b8",
"assets/assets/images/enemy/atack_effect_bottom.png": "aaeb1a8e791a0f15ba911e1d2540ab32",
"assets/assets/images/enemy/atack_effect_left.png": "9c99ad913fcc75ce253f8db53faa846f",
"assets/assets/images/enemy/atack_effect_right.png": "15831f9ccee22a845e854ccb3d18f6e5",
"assets/assets/images/enemy/atack_effect_top.png": "df3eeb246450bf06de6dfc325d0bdbd0",
"assets/assets/images/enemy/ballista.png": "3687ffe72786482a889fa4e9e5620c3c",
"assets/assets/images/enemy/ballista_bolts.png": "2bd865931b346eb4fe32505c06e4a24e",
"assets/assets/images/enemy/goblin_idle.png": "8c97e935786b994c3cff4008212381b9",
"assets/assets/images/enemy/goblin_idle_left.png": "a7563675f85ed259b2d0aae50ded196b",
"assets/assets/images/enemy/goblin_run_left.png": "05863189b562610b17a062114c7849a9",
"assets/assets/images/enemy/goblin_run_right.png": "565c2f9a0bb01a9c56975664f8cd375c",
"assets/assets/images/game_pause_button1.png": "be483b1d5bcc5e52e55c2129c754d535",
"assets/assets/images/game_pause_button2.png": "872eb14dd36fcd64d65fb8ab5b3f1e05",
"assets/assets/images/health_ui.png": "219e39516312f2f6bc264357497b99cb",
"assets/assets/images/items/add_life.png": "5140c853131a1f0509cbddebd658141b",
"assets/assets/images/items/add_magic.png": "5ad496a0ac116d5a4a2ede6214f285ee",
"assets/assets/images/items/barrel.png": "dc4d5a9e456b6f1c6ec6fdcc66af7727",
"assets/assets/images/items/bookshelf.png": "ce2fc17cb8251da9966a3e91bb0b2272",
"assets/assets/images/items/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"assets/assets/images/items/flag_green.png": "1a5a7df4b10a84b0a722b3b6600198dd",
"assets/assets/images/items/flag_red.png": "6aca7b9e01f86f1b1a45e262e65821b8",
"assets/assets/images/items/item_frame.png": "9b0ea2f586653d23ad1e15d8923ee796",
"assets/assets/images/items/potion_life.png": "825b71a3532854e849d512683dba06b0",
"assets/assets/images/items/potion_magic.png": "30d1dd1456ce1847311f55bf8c3c9c47",
"assets/assets/images/items/prisoner.png": "45dcdd9a419bcd1f39cfd78024865578",
"assets/assets/images/items/spikes.png": "17b9e2041471cf40cc10cf4357e33bed",
"assets/assets/images/items/table.png": "5e22fb237c60943f46ba18d5e176c10c",
"assets/assets/images/items/torch_spritesheet.png": "858f57abd642f0303de50d719532f198",
"assets/assets/images/joystick_atack.png": "0f5325cb2ddcba703e4c9d7d2dd266df",
"assets/assets/images/joystick_atack_range.png": "8994f23fc67442c8361432f0cc9a2fa1",
"assets/assets/images/joystick_background.png": "8c9aa78348b48e03f06bb97f74b819c9",
"assets/assets/images/joystick_knob.png": "bb0811554c35e7d74df6d80fb5ff5cd5",
"assets/assets/images/menu_board.png": "2a6221aeb5b293dadc6578ffcbca944f",
"assets/assets/images/parchment_background.jpg": "0633c097990ba42cfedf6d84d04382f1",
"assets/assets/images/player/atack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"assets/assets/images/player/atack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"assets/assets/images/player/atack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"assets/assets/images/player/atack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"assets/assets/images/player/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/player/emote_exclamacao.png": "8b1897ae92f3a077e0aadaef2626d65a",
"assets/assets/images/player/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/player/fireball_bottom.png": "05522f950d8d60e15615ee9705ff2ef0",
"assets/assets/images/player/fireball_left.png": "cb3370c9039ec112af7bee6edf3e342d",
"assets/assets/images/player/fireball_right.png": "aaa2c18fe241c16e95be131619693b80",
"assets/assets/images/player/fireball_top.png": "e9a76f3ea950d6bc22f8f4cd3a22d7e3",
"assets/assets/images/player/knight_idle.png": "191737282656dd3c8851a2dd3dfc1c0c",
"assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"assets/assets/images/player/knight_run.png": "9cac5c91f943ba81915573bd93060d4d",
"assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"assets/assets/images/player_state_button1.png": "64cc0e891294ba26dd7be5542610a63c",
"assets/assets/images/player_state_button2.png": "7ed2807de5eff88e99236f6d1c2f703e",
"assets/assets/images/scroll_bar_downside.png": "64e1400a09fb8ab4be4bdb4923aa2a2e",
"assets/assets/images/scroll_bar_upside.png": "68c24cfe0ba1211b9f6742832423b07f",
"assets/assets/images/scroll_paper.png": "afa475ef18dc41734f0759d52bb4bec9",
"assets/assets/images/smoke_explosin.png": "555a8a42b72e662af232dc2092103c2a",
"assets/assets/images/tile/floor_1.png": "00c3bd0c3d76a954f3f0a648cb13c3b3",
"assets/assets/images/tile/floor_10.png": "baf86a2272c83bd904bc25b4af03aa29",
"assets/assets/images/tile/floor_2.png": "10968e74b671f14aab19e13a76da334d",
"assets/assets/images/tile/floor_3.png": "3fa52d5af2a38dede0142f5c3dcaab55",
"assets/assets/images/tile/floor_4.png": "2685b25c2471a762ff6f900b496c9e29",
"assets/assets/images/tile/floor_5.png": "6d63b1d77dcc35d4f7beb91125851e29",
"assets/assets/images/tile/floor_6.png": "d464c18724611d109498d4c4e57316c4",
"assets/assets/images/tile/floor_7.png": "7ba4503a62a1b242f05b5244e7b0dae4",
"assets/assets/images/tile/floor_8.png": "28692ad0c494efc5bc0f9669579006fe",
"assets/assets/images/tile/floor_9.png": "2b4e26d91d8f632bf4eaa5400cb7d748",
"assets/assets/images/tile/wall.png": "7a6ce85ad0ebd6694dd57e9fdca7535b",
"assets/assets/images/tile/wall_bottom.png": "31d2b04aca916c16bd31574d7134a853",
"assets/assets/images/tile/wall_bottom_left.png": "7e83621a422ddd0e7b4425abe8ac3ec8",
"assets/assets/images/tile/wall_bottom_right.png": "dd6772364441f0f2ea76c532fb4031dc",
"assets/assets/images/tile/wall_left.png": "b4ee6ba9d296a18fa532119ef8cb6157",
"assets/assets/images/tile/wall_left_and_bottom.png": "6583c02205abb0c84aef143379eb9bed",
"assets/assets/images/tile/wall_left_and_top.png": "5e7c81163a737dad7ed4a626d76a0b73",
"assets/assets/images/tile/wall_right.png": "aca869be30facbfd420754e870a78f58",
"assets/assets/images/tile/wall_right_and_bottom.png": "533d830adf7d86b810481118ed7aa2f9",
"assets/assets/images/tile/wall_top.png": "845ed35ef1482e21857c8bd70061c810",
"assets/assets/images/tile/wall_top_inner_left.png": "484e3c33e8559ff61f560e5f32791c5a",
"assets/assets/images/tile/wall_top_inner_right.png": "b26bd1cad50d0201d41ab18200976cfc",
"assets/assets/images/tile/wall_turn_left_top.png": "c9d8c9116dd5570fb87b6e1328cb0ee3",
"assets/assets/images/tiled/0x72_DungeonTilesetII_v1.3.png": "e569500a4e5ee213c821388a51c08765",
"assets/assets/images/tiled/0x72_DungeonTilesetII_v1.json": "d646e855c460e90a813f5e9d6bd3d739",
"assets/assets/images/tiled/mapa1.json": "7ed16e038ee77542b416555ae0af6e78",
"assets/assets/images/tiled/mapa2.json": "2a61ec080f3679548be927abbcd43506",
"assets/assets/play_again.png": "9f76b916b2f41060feb788b2f7deefb6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e6fa9dcc3ee1d7fe15097ef3985734db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/resources/lang/en.json": "0435abdf9627103bc2b6422dc9624916",
"assets/resources/lang/pt.json": "1c2a5e36b1dfb737145ccae355f2d9f0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8f9308618410cb44883eb91a7d36226e",
"/": "8f9308618410cb44883eb91a7d36226e",
"main.dart.js": "b33a1531284e5f7549f8df0edc8f9359",
"manifest.json": "061a2d0242575429623de22bc176de5a",
"sql.js": "882d362dfe673fc826db4e0a7647a19f",
"version.json": "383306d42535217964193ff6ce9e0d48"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
