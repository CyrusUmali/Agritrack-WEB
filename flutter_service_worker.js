'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0d0f5fe64d24034cd79b3d0b2b489217",
"assets/AssetManifest.bin.json": "8139e6d6e899538e924f6527e7c05232",
"assets/AssetManifest.json": "8315beaf392bb98c9bd34db76b5a82a2",
"assets/assets/ai/Claude.png": "55e0a07cc3cba5734b01cea49bbef808",
"assets/assets/ai/GoogleBard.png": "9656ab6479bcd0a829a47c3ea82b5376",
"assets/assets/ai/openai.webp": "96445f27d919b61afc55a84346daa322",
"assets/assets/alert/icon_fail.png": "a718aec61aa7bb9c1d49cd232768dbc6",
"assets/assets/alert/icon_success.png": "6eff1af1c52abd5c88ae44acddcf190d",
"assets/assets/alert/icon_warn.png": "5027e2574515ade177b94588856ac129",
"assets/assets/api/channelTable.json": "622bc2960776e97b380a2a814cdf4e25",
"assets/assets/australia.json": "a8710e36ed3224e92175d9ddb7953a22",
"assets/assets/barangay.json": "d92b11fcdc8e531d78061b3a0716b586",
"assets/assets/barangays.json": "984a4c3297f99fe446e0f7e137f802f5",
"assets/assets/brand/brand-01.svg": "2dd59410e0a65ce7183c0edb82d51cec",
"assets/assets/brand/brand-02.svg": "1cd9b0680cbfb78805420659bc1e077d",
"assets/assets/brand/brand-03.svg": "0eca25adef3e8225d50860ec9e935082",
"assets/assets/brand/brand-04.svg": "7dc6ac3b2da4adea0f941e472486a4bc",
"assets/assets/brand/brand-05.svg": "3ebe4ebf55a7faa2aa74ce775c7340fb",
"assets/assets/cards/cards-01.png": "bee503d28d650dc258b6376511f5facd",
"assets/assets/cards/cards-02.png": "704f58c328ebb8c091643b238bd1c62b",
"assets/assets/cards/cards-03.png": "36a3fa394039239a716caf01970174ca",
"assets/assets/cards/cards-04.png": "4443f6a85e3b7e775afc640584f866da",
"assets/assets/cards/cards-05.png": "2d0223d89e31b56459d147647db3a7f0",
"assets/assets/cards/cards-06.png": "080a048d0d862ef60ae4e67db3caf930",
"assets/assets/country/country-01.svg": "59c5ae713308034a1e0a8f138682b2a3",
"assets/assets/country/country-02.svg": "d5f66a93a4ade95ad2a72eb195f85028",
"assets/assets/country/country-03.svg": "8bd9f1d0cdad554fbb6551e0e2316493",
"assets/assets/country/country-04.svg": "47978f51b9a5e565cdf220612aaa4170",
"assets/assets/country/country-05.svg": "b5a8a2f9422c1b8846dabbcf149a673e",
"assets/assets/country/country-06.svg": "f39891596b6c5eeee69d2a02df9f4142",
"assets/assets/cover/cover-01.png": "972c64bf2ce84e837c5b3a2094281e16",
"assets/assets/crm/crm.png": "0c0806c464de6af08315cfb1a5d9d61c",
"assets/assets/DA2.jpg": "b80c683e6de4fe307c00cc4b89538fef",
"assets/assets/DA3.jpg": "37265d45e3019ff873957d7f687ef9f1",
"assets/assets/DA_image.jpg": "3c1029159c129856a805e56a4925a267",
"assets/assets/icon/ai.png": "09e41b7f2e484029ef106886e052d0c5",
"assets/assets/icon/bg-word.svg": "5ccdd1e957e3b7af92b858c86a292fbe",
"assets/assets/icon/edit.svg": "e07e092f6705928126f9dc5aea8a62de",
"assets/assets/icon/firebase.png": "f1c4ff8b380764d209f4fc5d2377bb96",
"assets/assets/icon/icon-arrow-down.svg": "ab3cd915ffa427d34a5e89d864631b04",
"assets/assets/icon/icon-calendar.svg": "b0baecc0aa9c16ead9a856fe58647914",
"assets/assets/icon/icon-copy-alt.svg": "ccc6b1e6fd056d7d25978a064d6b68de",
"assets/assets/icon/icon-moon.svg": "f0c56a1b9282024a7c210588a79dc8a3",
"assets/assets/icon/icon-sun.svg": "99bd84f8192219382166d3264cf6bf8d",
"assets/assets/icon/user.svg": "e4790d0b53a6769df1a4dda0f3a79f26",
"assets/assets/loginBG.jpg": "47e877eb4c86851a114c00984e099129",
"assets/assets/loginBG2.jpg": "6789e3752514ec2bb5dfc857665054a4",
"assets/assets/logo/logo_dark.svg": "d1bb863b23262a859b5eb5aebac9babb",
"assets/assets/logo/logo_white.svg": "d1bb863b23262a859b5eb5aebac9babb",
"assets/assets/map/barangays.geojson": "bbc9ef4830ad527d9e7970b11b5fd178",
"assets/assets/map.html": "95929eb3c1e0557792625d43f0a06ca5",
"assets/assets/product/product-01.png": "34be8cdb4dbf696fb0a39b39c5d94c4a",
"assets/assets/product/product-02.png": "1a4633cb19e391dd753743d62b4a790b",
"assets/assets/product/product-03.png": "2c213e5c10b79de985f7691ad21ca1e6",
"assets/assets/product/product-04.png": "f45c5f8c16c8db472e6b6d7c16cdae9b",
"assets/assets/product/product-thumb.png": "9cb86c53190c3026fb88dd00c232dd57",
"assets/assets/rice.svg": "fb4cb3b6757ac5cfd34f772094a5cda1",
"assets/assets/routes/menu_route_admin.json": "c8a07929aefe1179b808fdeaf16cfd83",
"assets/assets/routes/menu_route_ar.json": "5d67589e80266cf615e3de9d70c5a378",
"assets/assets/routes/menu_route_es.json": "d2729e3ec0a48b052fbac885344627d3",
"assets/assets/routes/menu_route_farmer.json": "c5f934277d626364c1365943cbf13ebf",
"assets/assets/routes/menu_route_fr.json": "47aa704bb6a9d8c7e9c50d7838223fc2",
"assets/assets/routes/menu_route_guest.json": "18543a7d93a41a30e87ca686c05ba227",
"assets/assets/routes/menu_route_id.json": "056e58dd84579c8969b91f59c69ad4a3",
"assets/assets/routes/menu_route_ja.json": "076e55e55145fde8ef98a50f6b08de05",
"assets/assets/routes/menu_route_ko.json": "0fc3418ad1056292e210202c92e5e937",
"assets/assets/routes/menu_route_officer.json": "d0da6a2ca65a8fd79003b449b001cd67",
"assets/assets/routes/menu_route_th.json": "674c9e8dcc783efb7580d56d69dc0800",
"assets/assets/routes/menu_route_vi.json": "da01146f7b38e1247b1b859b15e0fba1",
"assets/assets/routes/menu_route_zh.json": "afe5ce06e93c12542fce96d41875ad65",
"assets/assets/routes/tools_menu_route_en.json": "7a9ccef4bcbb2e1e87e6cc18ddec84a5",
"assets/assets/sidebar/AI.svg": "87dd9b60da790617f8a392b5960c0f0f",
"assets/assets/sidebar/assocs.svg": "595c306831f76864c3d450f2a63d1a31",
"assets/assets/sidebar/auth.svg": "9524d73090e71ca5386406f52e52e08e",
"assets/assets/sidebar/calendar.svg": "65d24c7b0fbc719f7113eba7813b6410",
"assets/assets/sidebar/chart.svg": "7052ba5ddf4728fdefcf59946fafcebd",
"assets/assets/sidebar/dashboard.svg": "acd622e7a7d7363c0fbab805bde95cab",
"assets/assets/sidebar/dictionary.svg": "e89bb6fa7e6a8c4ef53b652dfb958f42",
"assets/assets/sidebar/farm.svg": "45fbc880bdf62d027c7860d202425e93",
"assets/assets/sidebar/farmer.png": "af73f2e055f08f546f8b92c74df86b68",
"assets/assets/sidebar/farmer.svg": "ebc7f4d6618bbf4b9a7bb762ba0ef2ee",
"assets/assets/sidebar/forms.svg": "26080bc6e532163655306906484c521a",
"assets/assets/sidebar/invoice.svg": "be5445ed36fa593bb2b4bca23f4adfa8",
"assets/assets/sidebar/map.svg": "297d7491857627eb87ddcbd9aab325f5",
"assets/assets/sidebar/page.svg": "2defe056beb5eaec2b895e369231f37a",
"assets/assets/sidebar/products.svg": "888303d4b89a1242f1116099c816074c",
"assets/assets/sidebar/profile.svg": "d597d10b478f01f2fbf529e87fe44b1b",
"assets/assets/sidebar/reports.svg": "aa2cae4c87ccb41834790343f65bad6f",
"assets/assets/sidebar/sector.svg": "4c0c255a940a5474880db6cb0c99bc78",
"assets/assets/sidebar/setting.svg": "1c84b34b46bb79982c673d0ed4619063",
"assets/assets/sidebar/table.svg": "c8649dfd8940ec690a0ee02726a8921e",
"assets/assets/sidebar/task.svg": "eb30121e95428353f48a30b5739ce221",
"assets/assets/sidebar/tools.svg": "b3258cf0e54adc61fc24080f0de81020",
"assets/assets/sidebar/ui.svg": "bd4240c78ede1540dbbc70d6c95c67e9",
"assets/assets/sidebar/user.svg": "b2827dd98b3f14d083862dc80c167974",
"assets/assets/sidebar/yield.svg": "9f86bc1549c678cd2bdf1e0cacdf81f4",
"assets/assets/signin/email.svg": "5e43e6afdbd3ea78b763a53054bce79f",
"assets/assets/signin/lock.svg": "3ad8a7c59c0398b00c91eb9b32aea729",
"assets/assets/signin/main.svg": "6773ba3c7b3754d799a96115f4531cd2",
"assets/assets/signin/signup.svg": "a53eaa0dc9565ee40c6f7a4a12b1eec9",
"assets/assets/task/task-01.jpg": "557544c08de1aba4220b710b03d999b0",
"assets/assets/toolbar/alarm.svg": "c182e6a14eb5104f4e252a78bd467775",
"assets/assets/toolbar/arrow_bottom.svg": "bbe9b4cd5363997caa4f4640a4aef955",
"assets/assets/toolbar/message.svg": "52894902fba62ce40c7de5d7b1bea499",
"assets/assets/toolbar/moon.png": "3537a6d32a3fdbbde188fac8376c64a2",
"assets/assets/toolbar/moon.svg": "db479c83c6a269c0ce10839b14861190",
"assets/assets/toolbar/sun.png": "15f2e60867947d7ac1c8d91a7372fe41",
"assets/assets/toolbar/sun.svg": "09049d4bb2abba08cfd63891a7fb5ff4",
"assets/assets/toolbar/toggle.svg": "cd17bbf814d52381a6138c6c539fe245",
"assets/assets/user/user-01.png": "c8ed34fe5094d3b127bb9c94633d6371",
"assets/assets/user/user-02.png": "de3bd868997d3f445348922df73d8226",
"assets/assets/user/user-03.png": "93b7c0c394b231732ebe8806448a95a8",
"assets/assets/user/user-04.png": "118e66657a14921a61abc7d21261188b",
"assets/assets/user/user-05.png": "d74bb3c54d3e3c32c73829d652d0d6f4",
"assets/assets/user/user-06.png": "975408d09dc079b97f4ae46480af7ef5",
"assets/assets/user/user-07.png": "e3058df7afaaf5b2dedd732445cfea5b",
"assets/assets/user/user-08.png": "960cd052c95c75462fae0c9930a202db",
"assets/assets/user/user-09.png": "15693dc3edc4775c384585aa757f2421",
"assets/assets/user/user-10.png": "8bbed9cfd9a9e8a7d5ab3e1a43737380",
"assets/assets/user/user-11.png": "11f4a43c10ec710e5e41f261a629ca82",
"assets/assets/user/user-12.png": "8530b9ec54e0b67cb52b44bcbae5482c",
"assets/assets/user/user-13.png": "cdb3cc59c44f18a8029a032a3952663d",
"assets/FontManifest.json": "0f9181c525c30a97b7cc6cf839dbbe04",
"assets/fonts/MaterialIcons-Regular.otf": "9e58864b4ff85ddf35627ef826375cf8",
"assets/NOTICES": "5986b85de5332145563964251f706de1",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9c3408e75fdc3a5970aeca52fded6be2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ad9dd29794f7d06b111e5e782f575ea3",
"/": "ad9dd29794f7d06b111e5e782f575ea3",
"loading.gif": "b5302a7e6f55787961943f3c115f2480",
"main.dart.js": "f56512da5c28b9e1dbdca32c6390c041",
"main.dart.js_1.part.js": "c809b7e1e2664e256e65d7fba2a0513f",
"main.dart.js_10.part.js": "321a632bd9f68a3503246e0381792131",
"main.dart.js_100.part.js": "15a5be048c80fa6c14dcb061c51ba94f",
"main.dart.js_101.part.js": "579c5516ef34ba55e74e0c8df6da826e",
"main.dart.js_102.part.js": "b7e0fe92643c38300b427bff96fdab3a",
"main.dart.js_103.part.js": "5f33c6a8c1f155699cae8e9d843261e5",
"main.dart.js_104.part.js": "bb770c7a6ea412fa918bf4b6b883df6f",
"main.dart.js_105.part.js": "bc0bcd178fed177f79faca19b10c350d",
"main.dart.js_106.part.js": "807ba20bfea24554eb4ef08d572a4481",
"main.dart.js_107.part.js": "12d3d93635d078921c128592dacad9c9",
"main.dart.js_108.part.js": "806a46979f0b19e162ead6b8dbecaaeb",
"main.dart.js_109.part.js": "017ebe30d22c5e414b24e98005293c3f",
"main.dart.js_11.part.js": "358cf5795d8acf523fe7ddc61e7afc0b",
"main.dart.js_110.part.js": "eeb29c88869ebdd5dead71cbf117940e",
"main.dart.js_111.part.js": "ff3fb129c6857b77dafdb2904e78de65",
"main.dart.js_112.part.js": "89cee844ec2a63f98d339843fd3aaefd",
"main.dart.js_113.part.js": "c27e3f2fd7cdec14577e3980d363687a",
"main.dart.js_114.part.js": "9523cc1ecf791e78713ffb5a4e73be08",
"main.dart.js_115.part.js": "a87f4692e4fcf9474f45043dcce5bc4c",
"main.dart.js_116.part.js": "095758f689f97ba7c81f05310e0bc028",
"main.dart.js_117.part.js": "41c75d153c2b1fa29ae54db01320c761",
"main.dart.js_118.part.js": "3c2e596ecc6fad7130d45f4995be2e4c",
"main.dart.js_119.part.js": "8262b3ee489df7815f88a5837bbd338c",
"main.dart.js_12.part.js": "4726875c15a3f5d294a8e04b2258b68c",
"main.dart.js_120.part.js": "69a43452a48e0e0fe228c836cf368d2b",
"main.dart.js_13.part.js": "026e7ce52904300da30bb2a13fc211f2",
"main.dart.js_14.part.js": "513f2f9dbed6d631eeeba83b8ef44951",
"main.dart.js_15.part.js": "6dba037a1d69d6c0f6d99bfb201f5e30",
"main.dart.js_16.part.js": "863a3c3892207adecb52a11bf780e5ad",
"main.dart.js_17.part.js": "0530a2e3b71b9f83721f4dd623912ad9",
"main.dart.js_18.part.js": "dbbb7512481efa34d4a12fba0e74e231",
"main.dart.js_19.part.js": "a93561f5ac95a6f140398e1bc8472e37",
"main.dart.js_20.part.js": "7e857bd97d2ea3d1a2945b7ba62a113b",
"main.dart.js_21.part.js": "c249bcdaef18e7d8e35f2bb0660a8a4b",
"main.dart.js_22.part.js": "8c384d0ead244afacac869ae7b0038b8",
"main.dart.js_23.part.js": "81857c1b709fb02b995eadb67c4a8101",
"main.dart.js_24.part.js": "4a77cf7293edda7b1295ec16c38be210",
"main.dart.js_25.part.js": "9bf402e1f4ede51a55fbeb623a77f097",
"main.dart.js_26.part.js": "47e956d13bb7214ebeb6a71402e06ce0",
"main.dart.js_27.part.js": "4c4564f7f673b7c87684e2781b5d7eac",
"main.dart.js_28.part.js": "e0a8681ca58acab97fa9f9619023d1f6",
"main.dart.js_29.part.js": "77bc9fc2f7712feed0cc0a5fd6bbe164",
"main.dart.js_30.part.js": "f37f92278b841f296eb8a24834b081b1",
"main.dart.js_31.part.js": "ec32d68036847e3b05f6b9fd2445a32e",
"main.dart.js_32.part.js": "192d3e3e5fa5bd542d39e8d3b18ba0e3",
"main.dart.js_33.part.js": "c685ba7911d1818104de322972714f87",
"main.dart.js_34.part.js": "1b5ce524809980e8a65628ae8523c49c",
"main.dart.js_35.part.js": "f75e92ab225f2297e1b65a1862bc24a7",
"main.dart.js_36.part.js": "69c4709cd7958a899fd2b3f397b60ae5",
"main.dart.js_37.part.js": "57034b5da48985b77cddf42463dc500c",
"main.dart.js_38.part.js": "6208e4a43b299095bea9253f4724a0f7",
"main.dart.js_39.part.js": "658d6daa11409f194091e9239f0e5dc0",
"main.dart.js_40.part.js": "c376b9ee8fa361268556aeeaddadde40",
"main.dart.js_41.part.js": "d1897f12bf374aad325ec18ccb35f8fd",
"main.dart.js_42.part.js": "703a8029569f48079c4bfe73a22893f7",
"main.dart.js_43.part.js": "cdf1eef1ae268b20c9e3c07594a44470",
"main.dart.js_44.part.js": "dc823347ee357fbb5abcd30616368367",
"main.dart.js_45.part.js": "6f4bb5cae398c8ab0597949f1fbbeb69",
"main.dart.js_46.part.js": "1654bbeac61d9986acad479dc30689f6",
"main.dart.js_47.part.js": "12f255c0718d7467e4f0afcf505910b6",
"main.dart.js_48.part.js": "7326a211da70a3f892c6b0558c9d5dfd",
"main.dart.js_49.part.js": "454e334db09591c6a40eebe334bb9c25",
"main.dart.js_50.part.js": "0012438af9a0a84773ba224cd3f3d7e7",
"main.dart.js_51.part.js": "27a2cc02027ef9b8147e795ee8c24e0f",
"main.dart.js_52.part.js": "de4d5d69aa6b3594b447b0eeb74ca841",
"main.dart.js_53.part.js": "53bd61914d3b6730275bef03e857b365",
"main.dart.js_54.part.js": "6871609411208c53a9f5b26a37cb8d57",
"main.dart.js_55.part.js": "16279a8038a3cbb4d0d45b53bd5595a5",
"main.dart.js_56.part.js": "cdffcc4c19bd9590a99dd07442a91d45",
"main.dart.js_57.part.js": "ba982a07c77216950a5cebea8c2d0dd3",
"main.dart.js_58.part.js": "e0e1c1d1999da91d7ad2ca05e114c765",
"main.dart.js_59.part.js": "fa98ca662540f098f35d8599941db24f",
"main.dart.js_60.part.js": "6e217bedd4bddb6b1f7bfff0ac88621a",
"main.dart.js_61.part.js": "5035825c3e4b49e2ec20462a4e424a28",
"main.dart.js_62.part.js": "f46c90e433908e70b1544cd339701f23",
"main.dart.js_63.part.js": "6f82ebddee035e1a239f15d60b8ee336",
"main.dart.js_64.part.js": "804745a52c8d2075d79a1ab777ba36b3",
"main.dart.js_65.part.js": "d6aecf851a27b44584148df39194acd5",
"main.dart.js_66.part.js": "51fb0eaeb460a166d8f83040ce0705ef",
"main.dart.js_67.part.js": "2050ed4a0e39d21628ec9a9feb3e71f2",
"main.dart.js_68.part.js": "1eed6e9cdc9c08af4fec36a1f0a05500",
"main.dart.js_69.part.js": "3d565272ba02d41ddf525272b43061b7",
"main.dart.js_7.part.js": "64c020e43f227e88bd988b18be739391",
"main.dart.js_70.part.js": "303b43b6e26d2575afdf911c55495fb8",
"main.dart.js_71.part.js": "7cbddfb62dd84043369dcc5e19e11efb",
"main.dart.js_73.part.js": "488ad826a36202f68a82e2f21beb53c1",
"main.dart.js_74.part.js": "7a2cc955233b4a445fa6eb437d0dc290",
"main.dart.js_75.part.js": "5c952a181777b0db0f8ac6ff936542de",
"main.dart.js_76.part.js": "db0ef658bdf54f4d064dd6d3a295daee",
"main.dart.js_77.part.js": "276dfefa20a977a510721f88a7229886",
"main.dart.js_78.part.js": "d05106bfbc66d2bbf5988806c248fcf0",
"main.dart.js_79.part.js": "ed52d4aea387bd0cf3913ddf16329e4b",
"main.dart.js_80.part.js": "156d079656d3f56c7b6c76a467a2e69a",
"main.dart.js_81.part.js": "8dd16b5ebf231cf37b0f238207b4c656",
"main.dart.js_82.part.js": "230a60e3357c0aa0748a65cf66d1afb3",
"main.dart.js_83.part.js": "6867bded03b953d64abedf6982ee6661",
"main.dart.js_84.part.js": "263ef7f0b7c5fa19ea9a5c304c9cf086",
"main.dart.js_85.part.js": "46580b4f0da902f5e29c74ad3e0a00f8",
"main.dart.js_86.part.js": "23c818e6484510b5fa0de98820daa14e",
"main.dart.js_87.part.js": "e0c36db0bb2192f14d9b258010b70cd0",
"main.dart.js_88.part.js": "1a436d97e9326cdfd7978cb37c4aad73",
"main.dart.js_89.part.js": "22244540f7f039b9fe68b924f6bdc219",
"main.dart.js_9.part.js": "0cdff131dde2fa11ab1974fee4ae57d0",
"main.dart.js_90.part.js": "216e0937bf588e41261ce4171dc07d8d",
"main.dart.js_91.part.js": "f3d691d99f6b8de02f785f7f575d0c09",
"main.dart.js_92.part.js": "57a72d74fb4a1dd48692149cdd1579a7",
"main.dart.js_93.part.js": "3d1aace80bbacaa17d469b44101917c9",
"main.dart.js_94.part.js": "adce673acde932d751b2b52a34e759c6",
"main.dart.js_95.part.js": "bca37eb1ceafe3d0afc7332edd78bb81",
"main.dart.js_96.part.js": "3b0406b12edebd5a8a069e4a763abd8c",
"main.dart.js_97.part.js": "8e92bd1f5c174f578ee4be617e297cd9",
"main.dart.js_98.part.js": "3710b3c60d557dff55efdeb53b156844",
"main.dart.js_99.part.js": "3215cd232ad3af52d87fa64dd0f5dbb3",
"manifest.json": "d7e4500053251d1c78695d0f3171fbbb",
"version.json": "8a188b0a6525cc674e864d60f363070a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
