'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"1.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.bin": "fb021af59480262028ca5b02f6e14512",
"assets/AssetManifest.bin.json": "438a7190f022a41d2619ea0257b8374f",
"assets/assets/ai/Claude.png": "55e0a07cc3cba5734b01cea49bbef808",
"assets/assets/ai/GoogleBard.png": "9656ab6479bcd0a829a47c3ea82b5376",
"assets/assets/ai/openai.webp": "96445f27d919b61afc55a84346daa322",
"assets/assets/alert/icon_fail.png": "a718aec61aa7bb9c1d49cd232768dbc6",
"assets/assets/alert/icon_success.png": "6eff1af1c52abd5c88ae44acddcf190d",
"assets/assets/alert/icon_warn.png": "5027e2574515ade177b94588856ac129",
"assets/assets/api/channelTable.json": "622bc2960776e97b380a2a814cdf4e25",
"assets/assets/australia.json": "a8710e36ed3224e92175d9ddb7953a22",
"assets/assets/barangay.json": "d92b11fcdc8e531d78061b3a0716b586",
"assets/assets/barangays.json": "73584ff521ba025f375d7f77188f0b47",
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
"assets/assets/DA_image.svg": "c69048bce20be2c843f6b2c4c569edb8",
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
"assets/assets/notfound.png": "0f36e383d4afc6650d296f660628bb4a",
"assets/assets/product/product-01.png": "34be8cdb4dbf696fb0a39b39c5d94c4a",
"assets/assets/product/product-02.png": "1a4633cb19e391dd753743d62b4a790b",
"assets/assets/product/product-03.png": "2c213e5c10b79de985f7691ad21ca1e6",
"assets/assets/product/product-04.png": "f45c5f8c16c8db472e6b6d7c16cdae9b",
"assets/assets/product/product-thumb.png": "9cb86c53190c3026fb88dd00c232dd57",
"assets/assets/rice.svg": "fb4cb3b6757ac5cfd34f772094a5cda1",
"assets/assets/routes/menu_route_admin_en.json": "a01ee84de484473bc6ed4d0fe5a0b288",
"assets/assets/routes/menu_route_admin_fil.json": "8c18cae79abed3a935ce1cdcc42e7ef7",
"assets/assets/routes/menu_route_farmer_en.json": "239950c79c51217f3c77ac07e2341f1d",
"assets/assets/routes/menu_route_farmer_fil.json": "b283a9161aedfed0e63d4d10c1b0621d",
"assets/assets/routes/menu_route_guest_en.json": "4270f50c5ee446ea5954dd61e2c5be9c",
"assets/assets/routes/menu_route_officer_en.json": "70f0c96d0fc126d20fb581de72a9f17e",
"assets/assets/routes/menu_route_officer_fil.json": "36e682dc0d8de13928479744a0a17949",
"assets/assets/routes/tools_menu_route_en.json": "7a9ccef4bcbb2e1e87e6cc18ddec84a5",
"assets/assets/sidebar/AI.svg": "87dd9b60da790617f8a392b5960c0f0f",
"assets/assets/sidebar/assocs.svg": "595c306831f76864c3d450f2a63d1a31",
"assets/assets/sidebar/auth.svg": "9524d73090e71ca5386406f52e52e08e",
"assets/assets/sidebar/calendar.svg": "65d24c7b0fbc719f7113eba7813b6410",
"assets/assets/sidebar/chart.svg": "7052ba5ddf4728fdefcf59946fafcebd",
"assets/assets/sidebar/chatbot.svg": "da22b6e867453a3d9fbd4348587bcd47",
"assets/assets/sidebar/contact_us.svg": "9809b6d5a50fbb9a299bce6ac6f46e25",
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
"assets/assets/toolbar/dock_right.svg": "2f1abd751615bb0e33a86cd0dc018547",
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
"assets/FontManifest.json": "756ab6b38ef83c5637939e3c65c093ac",
"assets/fonts/MaterialIcons-Regular.otf": "0948ea3f9e278c4b90b22676213006cb",
"assets/NOTICES": "7b5aa5e3af8bc7969c600a84cc8b5e62",
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
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
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
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "9dd1d750ed1d1bdb53078c5d19646a36",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "98a31f0ded2833dfbd94547c91fa5dc8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3bf819934079fbee71f0ce64daf8744b",
"/": "3bf819934079fbee71f0ce64daf8744b",
"loading.gif": "b5302a7e6f55787961943f3c115f2480",
"main.dart.js": "381c9e0cac2f4deb52e1fc11778e3a56",
"main.dart.js_1.part.js": "43f9e8dc50ab90411ef75d76b2f509ed",
"main.dart.js_11.part.js": "aac341f5d7572df49e77976a57e1c132",
"main.dart.js_15.part.js": "8674b5296fe95f323279627d34774397",
"main.dart.js_17.part.js": "54d4560c1becac9ab2db551e6537e2b2",
"main.dart.js_18.part.js": "de09a7ce6e3ec143161c39eaca89e0ce",
"main.dart.js_19.part.js": "1190bdf8f1d61c63eaa0333afc325acc",
"main.dart.js_20.part.js": "abd54a44d3b6a71439290e03246f5164",
"main.dart.js_21.part.js": "9583b1e0154dd6056bfa4bd379fcd00e",
"main.dart.js_22.part.js": "d872a82ae5c5c026f48ad721150d4cac",
"main.dart.js_23.part.js": "92f7f8d53c9aad72c5e3f40baf6d1482",
"main.dart.js_24.part.js": "a09d92b9faf08bcb64576c25f0b2eebd",
"main.dart.js_25.part.js": "f6aab15ee1b49f075117d455af853243",
"main.dart.js_26.part.js": "17df67581651ac708d293c8f0e11af46",
"main.dart.js_27.part.js": "b09ec04821af595b2b196207653fc376",
"main.dart.js_28.part.js": "7f4af3163d34e4455fa5257b150aef34",
"main.dart.js_29.part.js": "3a8cd6b72646035468f646c51a4fbb8d",
"main.dart.js_3.part.js": "b1874ce234ab837e5a9f3c7478d06bc7",
"main.dart.js_31.part.js": "4e11e6bd05116552e9a8a7f4b96bb421",
"main.dart.js_32.part.js": "423416728e17fab375ff9d058aa99cba",
"main.dart.js_38.part.js": "fc567c5c1feb63f95b713b99a963375b",
"main.dart.js_39.part.js": "13aec5ca363e65b009d537952b6be7e2",
"main.dart.js_4.part.js": "49bd80d849d680efbd778845ce30f5ba",
"main.dart.js_41.part.js": "8d444ec004a88ec40b8fccd7ec5cc093",
"main.dart.js_46.part.js": "52f2610e22c0f5ad9799ac3ad532e74d",
"main.dart.js_47.part.js": "9075ffd66d3b393cb8b1bbd9b7a8d66b",
"main.dart.js_48.part.js": "0d4d8e64fc1b0e4fe33bbcbaff590e33",
"main.dart.js_5.part.js": "df93f686a7e00a9045ceadefd1670f62",
"main.dart.js_53.part.js": "c30daa3c779e69d6d1d7bfe0f084e7d3",
"main.dart.js_54.part.js": "61decdfcca561b659193eee0f2db8086",
"main.dart.js_55.part.js": "6ba6c69b68d79f10ba20b2d746620908",
"main.dart.js_56.part.js": "0c41932956771b62cc152a6ff2e9ee78",
"main.dart.js_57.part.js": "416c001504978078681677f52aeafc3e",
"main.dart.js_59.part.js": "96d4366ec7b24699baa5097e5201c0e1",
"main.dart.js_6.part.js": "31409de27864bcec6af0e3e5489db0b3",
"main.dart.js_60.part.js": "c9a3c13b098b14e91be56573e28ea21b",
"main.dart.js_61.part.js": "ad78124991cde962054945c7bea6297a",
"main.dart.js_62.part.js": "03288bd028f6ade5b1bdfa5adadb9010",
"main.dart.js_63.part.js": "9b58824d44cd2aea195cd7b1019b2cd2",
"main.dart.js_65.part.js": "22dff9fbe0f3458fd336599c715b1d8f",
"main.dart.js_67.part.js": "3425436d5a467326c61fffe846c946cb",
"main.dart.js_68.part.js": "c7dd5d7c61590a98402a94690c84c9cd",
"main.dart.js_69.part.js": "ceece56c91176f3f58023a151b959c05",
"main.dart.js_70.part.js": "8511c0cd1dc9ac33e8903e7761938e6f",
"main.dart.js_71.part.js": "7003b61b8acdeb64670b02b08313f788",
"main.dart.js_72.part.js": "42fb6c714424486818ef761cdb7a6ea0",
"main.dart.js_74.part.js": "7e3c629dc9a6dacb46e92ba784417cac",
"main.dart.js_75.part.js": "cae79bd2f3c30009dad9775087bfe412",
"main.dart.js_76.part.js": "ceaeddc0b3902c6d3a0e3bca897e0dbb",
"main.dart.js_77.part.js": "9db71eeb7908181cb3d5ffba972fca3c",
"main.dart.js_78.part.js": "65fe705e26d57e499fb8186c90c71977",
"main.dart.js_8.part.js": "4abe695225e59c326d117a2bdb734f93",
"manifest.json": "d0dfa3666d7004777c63d9b436003194",
"servuce.woerk.text": "975516e8ad5b7823a8809c7db1b23fd4",
"splash/img/dark-1x.png": "2b4fafb05dc84ed8514167aa29e3f7f6",
"splash/img/dark-2x.png": "0fd086e7a47c7c5064132566618573cb",
"splash/img/dark-3x.png": "7939e5b92516cd43d1608653bec250be",
"splash/img/dark-4x.png": "00a0fd093fe085dead4303174c6eb121",
"splash/img/light-1x.png": "2b4fafb05dc84ed8514167aa29e3f7f6",
"splash/img/light-2x.png": "0fd086e7a47c7c5064132566618573cb",
"splash/img/light-3x.png": "7939e5b92516cd43d1608653bec250be",
"splash/img/light-4x.png": "00a0fd093fe085dead4303174c6eb121",
"style.css": "7663a8a1153147436d7e3bccc47448fd",
"test.html": "9c1aa3d89aa606944928c98bf3d9590d",
"version.json": "4597e1375a4a79db74fc9c4148ed094a"};
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
