'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1a09cd30bc8e9c52ddf7bf6bd07af67e",
"favicon.ico": "a99b77e0e29addbe90cd4c821ddf46f9",
"index.html": "ed036b11aa487bb67c33196945744b59",
"/": "ed036b11aa487bb67c33196945744b59",
"main.dart.js": "eb9b79b7a3d4019e7db32084e3f2c6f0",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2de6c109bf5d471cd3529314634c188b",
".git/config": "a811ee2a43a821cadbd8ce66dfcf51d9",
".git/objects/61/5336d7037a0b0c6ebf96e9ae9823406a7f94f6": "35dd5239fb3db5d0d3dde26d031b398f",
".git/objects/0d/8f70b35f55a7366a93dfce15382ebdfc3a1028": "6d86b041f2d6a0daa9ca9837238aabd0",
".git/objects/59/722a29329acaeb4f2e5d645a2163fb6c5c4459": "ac7ef2c8aad4b5aa9123228145a28e7f",
".git/objects/0c/fcebfc7782f3bfed4d7ada4ab7e83f0a8bcb0a": "586080b572d64d5d73a173b612ea177b",
".git/objects/3e/9ce3513ddeda35257b0d820788a91020047bb0": "99cc163b1a5612d0218874465811ec9c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/3d/0ca5782f91c3d20f250993600e49f4ed25c913": "1d3db0db922d3b248dfbced58cb997f3",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/34/d786a5a46f8f8e961aafb666b6fac678aa3d15": "8d8cda163408709551fccd7a01b04747",
".git/objects/5f/5b631dbedcbe225eaac8d46152b6c9931c3ffb": "bfcb579917f5c93c6d1581b17729fd1c",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d9/90112ced691b1e72870ff50418a98e2df6a615": "c66c7394854f59c369c7eb3ea6120948",
".git/objects/da/d7c8224b435b9618f48b6416a313902b967161": "6cb3284e25f177f1af48178a68c4bd69",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/15bff4d71793a15bc1a9c9eb50715cd4a236b1": "05a7b9c2af98bf89ea797d4a4f63b42b",
".git/objects/e5/31d2745c7b07bbb4f2a1c2b0b3fbaf33c8b94b": "9ce2a05f8cfb8ed548459fdeebc625f7",
".git/objects/e2/116c2558f36403f70ccf2f37fd5209bf938147": "19bdf261e5d59ad79c89c86a83aefa75",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/dc245b0318bd54ef18590bed81af966446eafd": "daab1a3a8823cbeaeb1b412bfa67e3a9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ed/554e5d7bd9614c0405113068f855aacd38a15c": "46bd66860b47aacf4e1e7fcd6a2835b3",
".git/objects/ed/f9a7feef1682df583d9d51bd43ec95e3daf7a5": "0f4fc7627f3b7ee7b61096c77057875b",
".git/objects/c1/43fcc44fe3d7bc1e0696629c1517b04c937ac2": "736ceab60bb2d47a5b109e6c0bde5f4d",
".git/objects/4e/513627a45c715f44fbf835bfb260d6c1983699": "cdd4f8e4ecabe8fa1f577517173b1a9f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/fa7e1f95542a668a590104013ffc4272760fa9": "4b373cff3f7bd7f4b3be3a435d2a5fe5",
".git/objects/27/f1890f6baabe537e158f0f90704055211db264": "3a0dbc0f29d75a9ec98711b2c9d1e3dd",
".git/objects/27/590f9a45ae3caa24624ce4d7dab4cd104809f4": "d65afc0b42cff6004a9d441376909b0e",
".git/objects/4b/a0e1cfcc9b9adc3014e018e4ad2e4fdc8b1731": "f54affa8768a1159d1e94334b11f5a69",
".git/objects/11/de23e06de0c917ff9c44b086fd4012856eb482": "9e53b7e57b0c52dfffe7b685cab12e85",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/6665e94847f50277d9f6ab72c41d5f50d861a1": "eef0b11cdfa5337c188c380960204259",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/c6022b08f936f6c61af013a19365369804819d": "87ae487f043d863813a333b3e18db9dd",
".git/objects/17/6ffb42533310aaf570d73f21485e4d0f5d7a17": "ecc8b767b7a74f5788b5ee16e74cf893",
".git/objects/8f/63be91aca7a49b7e61cd3ccd8fe0e8cae7f19a": "4d3bf89e88cd19f78e9bb63e96ddcb02",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/af583ba42c3bc94ea81dbd1d1c0eb1a84ade82": "f986dd61e0f48811a19c9bf671843404",
".git/objects/19/da188c755f5730344bc4b890c12883e7a5c5d7": "9f65ca44f3753867a9a913b1df71493d",
".git/objects/21/d7e65177d0d843fdaf471f815c2359495cc69c": "3e73d87bf246d0d29cb18aee182cab45",
".git/objects/75/a954ea8dc4ac0f8f503618680d7b316446b044": "1948e2ebba055055a4354099696d9caa",
".git/objects/86/5a62681aa8cf0b0a2f3f442de5c137e3e4cc6d": "e76ee7b8e90bd8a74c1357066f264293",
".git/objects/86/c802abae43ddeff5373cf44d3c265f81b5c86b": "84681656ed21f40959897dc0f35aab6d",
".git/objects/72/cf5d738d5036a3faa6a04a502f8acf8792c3d8": "a07725ff88cf74d2b4946640bade0401",
".git/objects/2a/15eab70f591c925c8df0e68accf6912774b3ab": "129c6555fc997c0837163059dfdd2156",
".git/objects/2f/3ae2003234b7588af1069181e964425d7baad7": "b47ff5eb4a51513e6cc6d500346d1bca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/9c8dedba592870bf3403d35af4c769ac2c121b": "bce2095588bb5cc3fd212c794c8990ab",
".git/objects/00/6cb097efe220f0691f6a48f61cb652825b969b": "3f9c884353824fb3061e152b29035126",
".git/objects/36/58ef674ce8c731083dd836e77c58cabca20882": "9c3ea6d088de29d7e85fed6b345756eb",
".git/objects/5c/88f0dc4ce5a5e4b2877f7fa84937c6b892c5af": "28a3ca8fd4d1b6ff3fba0487cb53f567",
".git/objects/5d/e5ab5b29994600bd0fe6a9778fb174e3e799d7": "38a9e49e8c3746eb7745ab386af95294",
".git/objects/54/b2666b0e477c3b7b579c9f6018cf2c0b452e7e": "cb5ce4943e3ecf4dc1fda2bf3ba060e9",
".git/objects/98/53223f6b999488a2387ef296cdb1c7ac6526fd": "1c7dbd3ff40e5c81aa589da8f3b97221",
".git/objects/3f/37a7aa58fd5ce2ddefe988238b494c8001852e": "b6c820cd6df487d8c1b5f818a3f86cef",
".git/objects/5b/1e3c0204c1fb2853b95a70b730d31badc33098": "fed428de5a5d46f1292855c02646f82c",
".git/objects/6d/83314ff9e686072422644dd8af1b0917e7bd6a": "ed7c87172f195cf8cbba99c426ffd57f",
".git/objects/55/82c911ffb4b2a94974ad0f5718716c47bdc533": "b9a56d94ad6937025c2afd62f30307e1",
".git/objects/0a/3c330df520cc0dcab86e1bcfa2a5bd1d048f68": "04ee6b795224faa20c3cb42ba0a0d935",
".git/objects/90/888990026acc461b78b4aed6a1d74b7c67c9ef": "1b966a5e4b9177741c2c92c407364f52",
".git/objects/bf/540506d771c06dd8a8fe797a2c7c9db4d2d88e": "7d84cb9ff0854d8b61b7fe451380e9f2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/a4833c717f0b13b9c16530f51081e145ee5139": "aed9c171277677a6256b3140579b1f63",
".git/objects/b8/e4388abc52f52762ff26f652cc2a0ed65ca7ff": "bd859c8f964d3055b86fcebc1e7866bb",
".git/objects/dc/5fad75bc5c4971e3ee980322e0c3e4d1b51c36": "34a64613ec0bb478afaa802a068c1eec",
".git/objects/b6/1c25df3f56684d95443d99b4d42caf967a279b": "2d869cd57ad681e29d08cf5913b10ac6",
".git/objects/a9/12be453957129e196e941ed934142ffb5637b0": "2725a7156f13ded32b4fa90482705581",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f7183dc4a1d6bbeb134a4d450e83caacb5ec0f": "41f55c27eedcac57e241bdf42c05e99b",
".git/objects/a8/9204f1ecd31b0726bee11d71ceb1e92cfcdb69": "8aa2c70ab599b755652c6c8ae176301a",
".git/objects/b0/3e948672ee60a80990666a4287bc6aef8f3432": "617d46ec283340fc131c4488f82dc57d",
".git/objects/a6/bc147ac6da33a3ce22d85fdb127a4a4d05b84f": "ed9dd6f0cd2597ac899cd755588fb47a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e9a1a068549f72157a5bd699111c6de8a15387": "79b3c5d4145b574847b0524f6ffa9784",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/d71ee53702f1f966ce2b8883fafa4d4efcb394": "cab88a38083f469e0bd9a51dff9b44bb",
".git/objects/f0/c880e0f5597e598efa49bcdcb1cf0fd8459260": "f4c7ba7ecd3bb87faf9e44ec44d013ba",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/1ebe1ef6a912dff729f0e391c8a9ef0cfef507": "c00d0a95186c610a8429cfd900595d9d",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f6/514319d0d948799121a1c1a85b30984528c6a0": "a37b47a20af70a201079146ceb1cf50b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/44b3d7d20b70458c6b9639527073c0e47da69c": "d60de5208645cd40800b2316359660f5",
".git/objects/48/897153ed0ae63a374e9e3db15cff61fa21d494": "655fa232f23b192a15c2de5445d51d21",
".git/objects/4a/e10c04d1ffb060c05bc8311f7568a86f5d5352": "d0776bf97531bd78c7722e3aa279ef18",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/8d/7a4a07a7f26a9f8af3b8aaed24669ba267f8de": "e629b7e2dfa8eed1006416207af1b5d0",
".git/objects/15/4c19ce044c3811cbb3516e488113a562b2096d": "87a369920a2d65a395cf2ff1c6a76476",
".git/objects/12/15eb672912a204a12b77d1b6ff47a49f3293d9": "e3952b1f65d5a6c70c892e2717260821",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/40/40eedee0eef74f564b094c0bba0b38fa7ff254": "c624b96894a28231bc0f70923e4489ba",
".git/objects/40/c5de6430fbcee0a44077a33c3e1f178f5e6f20": "a8814a4d5041753a5cead5011de39f28",
".git/objects/7f/8a27d40ef4dccbb563393a95abc6b8d0711e87": "782807ae41e28e414e97bdccabe0861a",
".git/objects/7f/e4f61de1ae65464d620c3f5805d398a5da053f": "d23f9ed9578e51fe3a18e41b6bead73e",
".git/objects/7a/ab11d9d3bae693a3220abf978fe84ccfb8c115": "6b7d5370a93107462bd56ed6f9f31e68",
".git/objects/8e/5034567d7c249988e026b537ca9cc6cb197cfe": "6d0535cbc734cf59eced86c0106b9b5c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "30d527ca726708d5fccc9e826967420c",
".git/logs/refs/heads/main": "30d527ca726708d5fccc9e826967420c",
".git/logs/refs/remotes/origin/main": "0aa878ca1e29fd329ea3e564a5e734bd",
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
".git/refs/heads/main": "abe46765ef03ab4d05f45eeb3b839ea8",
".git/refs/remotes/origin/main": "abe46765ef03ab4d05f45eeb3b839ea8",
".git/index": "1dd6e5aba005afce9c1ac136d28355b3",
".git/COMMIT_EDITMSG": "a290d1e3187a53595a35212155baf6da",
".git/FETCH_HEAD": "d9bc7e5186d9bafba6b72be5386c20e7",
"assets/AssetManifest.json": "023bdf05fd28b069fdc705e1a70cbfa1",
"assets/loading.gif": "a13d941afe00255c8bb30ec307f64822",
"assets/NOTICES": "08871211d5857b5d62298408a333fbd4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0adce9b3ca6b38b1b180d9fb8cb5bda5",
"assets/packages/metaballs/lib/metaballs_shader.frag": "2db6b9a1394da174e429ce75f1ac0773",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7bec3f7fa12bc2a4fe33dd26f467659f",
"assets/fonts/MaterialIcons-Regular.otf": "5d31d9a48a514fed2f685f549a7e65a1",
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
