'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4ff2faf21476e52e7342991c612ec725",
"assets/AssetManifest.bin.json": "db97627f268601dadf3c6c39fd3e1342",
"assets/AssetManifest.json": "8094fd6e87d338f54ddbdc330f3350bb",
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
"assets/assets/DA_image.jpg": "8519b4e040c691d48f8e81ed758091b8",
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
"assets/assets/routes/menu_route_admin.json": "6904beb2952033309978013ef5746cfd",
"assets/assets/routes/menu_route_ar.json": "5d67589e80266cf615e3de9d70c5a378",
"assets/assets/routes/menu_route_es.json": "d2729e3ec0a48b052fbac885344627d3",
"assets/assets/routes/menu_route_farmer.json": "d4071f2e36f9932b0797377f31b627ad",
"assets/assets/routes/menu_route_fr.json": "47aa704bb6a9d8c7e9c50d7838223fc2",
"assets/assets/routes/menu_route_guest.json": "831729547d53d986ee1521cac489414e",
"assets/assets/routes/menu_route_id.json": "056e58dd84579c8969b91f59c69ad4a3",
"assets/assets/routes/menu_route_ja.json": "076e55e55145fde8ef98a50f6b08de05",
"assets/assets/routes/menu_route_ko.json": "0fc3418ad1056292e210202c92e5e937",
"assets/assets/routes/menu_route_officer.json": "831729547d53d986ee1521cac489414e",
"assets/assets/routes/menu_route_th.json": "674c9e8dcc783efb7580d56d69dc0800",
"assets/assets/routes/menu_route_vi.json": "da01146f7b38e1247b1b859b15e0fba1",
"assets/assets/routes/menu_route_zh.json": "afe5ce06e93c12542fce96d41875ad65",
"assets/assets/routes/tools_menu_route_en.json": "7a9ccef4bcbb2e1e87e6cc18ddec84a5",
"assets/assets/sidebar/AI.svg": "87dd9b60da790617f8a392b5960c0f0f",
"assets/assets/sidebar/auth.svg": "9524d73090e71ca5386406f52e52e08e",
"assets/assets/sidebar/calendar.svg": "65d24c7b0fbc719f7113eba7813b6410",
"assets/assets/sidebar/chart.svg": "7052ba5ddf4728fdefcf59946fafcebd",
"assets/assets/sidebar/dashboard.svg": "acd622e7a7d7363c0fbab805bde95cab",
"assets/assets/sidebar/dictionary.svg": "e89bb6fa7e6a8c4ef53b652dfb958f42",
"assets/assets/sidebar/farm.svg": "45fbc880bdf62d027c7860d202425e93",
"assets/assets/sidebar/farmer.png": "af73f2e055f08f546f8b92c74df86b68",
"assets/assets/sidebar/farmer.svg": "638148c4aa226ab9885f348518d2631e",
"assets/assets/sidebar/forms.svg": "26080bc6e532163655306906484c521a",
"assets/assets/sidebar/invoice.svg": "be5445ed36fa593bb2b4bca23f4adfa8",
"assets/assets/sidebar/map.svg": "297d7491857627eb87ddcbd9aab325f5",
"assets/assets/sidebar/page.svg": "2defe056beb5eaec2b895e369231f37a",
"assets/assets/sidebar/products.svg": "c325ad59e60f599c4acec699a9418f83",
"assets/assets/sidebar/profile.svg": "d597d10b478f01f2fbf529e87fe44b1b",
"assets/assets/sidebar/reports.svg": "aa2cae4c87ccb41834790343f65bad6f",
"assets/assets/sidebar/sector.svg": "4c0c255a940a5474880db6cb0c99bc78",
"assets/assets/sidebar/setting.svg": "1c84b34b46bb79982c673d0ed4619063",
"assets/assets/sidebar/table.svg": "c8649dfd8940ec690a0ee02726a8921e",
"assets/assets/sidebar/task.svg": "eb30121e95428353f48a30b5739ce221",
"assets/assets/sidebar/tools.svg": "b3258cf0e54adc61fc24080f0de81020",
"assets/assets/sidebar/ui.svg": "bd4240c78ede1540dbbc70d6c95c67e9",
"assets/assets/sidebar/user.svg": "b2827dd98b3f14d083862dc80c167974",
"assets/assets/sidebar/yield.svg": "a973973bac8421769b46d1a91078407d",
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
"assets/fonts/MaterialIcons-Regular.otf": "73927c48913b3fca42168757b053c922",
"assets/NOTICES": "8cf303850090b773859723c015147bf8",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
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
"main.dart.js": "a83cbe3dc491a3bffd31c22f84c7f464",
"main.dart.js_1.part.js": "93333de4eeae8fb5dd5e4f52ed6d8fc4",
"main.dart.js_10.part.js": "6f9f889701345e5ae8b02646b1ff7c60",
"main.dart.js_100.part.js": "12e24442462d43ab56a6a5f669764f34",
"main.dart.js_101.part.js": "f08ba343ea18bf8f14aeb004d553b97e",
"main.dart.js_102.part.js": "fab6d7aa2d5a899562db91c2f8566567",
"main.dart.js_103.part.js": "9fdbe467730dda2b2f80a9393227490c",
"main.dart.js_104.part.js": "9be4e133434fa8c1706c1736d5aeebd5",
"main.dart.js_105.part.js": "99e974a1879d46e1cf22311b383995e0",
"main.dart.js_108.part.js": "a45cb5441d9033fbf86768982a6e48ba",
"main.dart.js_109.part.js": "7cd4f0cf8176ec12f9e735e94d9287ff",
"main.dart.js_11.part.js": "624413ea34a1aeda2c7afb9f95e806a0",
"main.dart.js_110.part.js": "b207fd51449a8e5b5c577ea5fd80238d",
"main.dart.js_111.part.js": "e2ac0fdfe75c779d9dd70ab5758ccfdd",
"main.dart.js_12.part.js": "6e7934c5869220536547aff94fd75258",
"main.dart.js_13.part.js": "4c1dd151bc2abf293b76fe6432b32719",
"main.dart.js_16.part.js": "b7b23b6fe29b179bcdc457c92c75d0f9",
"main.dart.js_17.part.js": "057264a068702ae28b4760ff0df26ff6",
"main.dart.js_18.part.js": "f773e6ead383d0c60a6f994b4b9aeda6",
"main.dart.js_19.part.js": "10b9e5dda179bfa8d25bfc190a5b48f0",
"main.dart.js_20.part.js": "537dd40e56fbac2d609640583b7ea94d",
"main.dart.js_21.part.js": "78857a4954c1f0d09384445f28c8fd1f",
"main.dart.js_22.part.js": "3cccadd0bbfd097de7924af7ba67ec28",
"main.dart.js_24.part.js": "e00d10f75c9ead8ee70e5dd7f7716aef",
"main.dart.js_25.part.js": "b7b163f6245c29d65284db727e79f06e",
"main.dart.js_26.part.js": "a7ffce701a66eea73ac2e5ab6f9efa07",
"main.dart.js_27.part.js": "031394491871ff7f5179af31b8014187",
"main.dart.js_28.part.js": "60594c8576452c70f4f5d213d2d326d9",
"main.dart.js_30.part.js": "128685998fe067bf8e5f6ecb68a67674",
"main.dart.js_33.part.js": "6419c8882f00831b7b34884c0486d94d",
"main.dart.js_35.part.js": "14a0f3dcaf61ca1db989ebd0f7d749c9",
"main.dart.js_37.part.js": "633148fb753c97cb0fa254801033a255",
"main.dart.js_38.part.js": "6b7b7987ed9b8f3203cb12c3d1ae7bc8",
"main.dart.js_39.part.js": "061d2ef423f1d3381db2666e1727fabf",
"main.dart.js_40.part.js": "e02bf793b28b462722f284a95878ed10",
"main.dart.js_41.part.js": "eb458a97618cd79f966a04ae75899c9e",
"main.dart.js_42.part.js": "7f70291625c5ae33071d07de66d2801d",
"main.dart.js_44.part.js": "08616e9226665bad471b16d517392945",
"main.dart.js_45.part.js": "53b3a31e3d3ec6194a10b8167d968161",
"main.dart.js_46.part.js": "e706f6e11030cd1ca670ba34f715de2d",
"main.dart.js_47.part.js": "35656bfef67c8a1c5d7178bb353e8d78",
"main.dart.js_50.part.js": "6c25f9cb3d102395017320f9d11caf5c",
"main.dart.js_51.part.js": "4073ed25db16b05b6ff300f8b372a519",
"main.dart.js_52.part.js": "4c5a81fc47321abbcf394a992af8f9bf",
"main.dart.js_53.part.js": "01ed0e7d29161bdf5d07bb90f2d836b2",
"main.dart.js_55.part.js": "01c96ddaffba68145966222c05fb1e80",
"main.dart.js_56.part.js": "213807c39f8ccac35334e5457391a78b",
"main.dart.js_57.part.js": "3c37d96bb342f03cc0fc3f47d9556352",
"main.dart.js_58.part.js": "ce96a8cabbfd6cfae67bf84e5103a04f",
"main.dart.js_59.part.js": "339186f6cf1e37c36dd9e0ef9e350dd4",
"main.dart.js_60.part.js": "5c0d569513ad08b5149e1b249a8cdedc",
"main.dart.js_61.part.js": "e76de0da920137d1744ea190c1bf682d",
"main.dart.js_63.part.js": "e06e685303e6968c8754749133e5eeb4",
"main.dart.js_66.part.js": "6a2652e90643368bc35e3bad47ee7767",
"main.dart.js_68.part.js": "b5e109b949ca82af320bf82f79a27bcd",
"main.dart.js_7.part.js": "64c020e43f227e88bd988b18be739391",
"main.dart.js_71.part.js": "de7f4480240b88c9fd6d9fddf8bb1b77",
"main.dart.js_73.part.js": "f7dfc42db0bd0aad343ef3e479b04dd9",
"main.dart.js_74.part.js": "3458d02903a549fcb908ecdc0b08aa49",
"main.dart.js_75.part.js": "60c22e3bd5c7bdba0726bb80f9d4f401",
"main.dart.js_79.part.js": "258a7959597dcf32d6e22ce650d39ce8",
"main.dart.js_82.part.js": "a7bd16c1b185dbca6c75f0b4cd1263e0",
"main.dart.js_83.part.js": "192d08a21759bfa8074aefa7dfbbe1f3",
"main.dart.js_85.part.js": "46580b4f0da902f5e29c74ad3e0a00f8",
"main.dart.js_86.part.js": "6c8765f6da48d3bed9c90d3cdbea78d7",
"main.dart.js_87.part.js": "c97dfec305bf5d5a15fcf1c8d1cfa22b",
"main.dart.js_88.part.js": "31c5b1758b7971cea589f188081eff59",
"main.dart.js_89.part.js": "7a83221d87db63a6f19e39f74afdb2df",
"main.dart.js_9.part.js": "db3b672d5c89f002bbf35907793eec27",
"main.dart.js_90.part.js": "935c8d5f6c3917ed31203d0caf7643c6",
"main.dart.js_91.part.js": "e0a013295174612b3f9c9579889bf0b5",
"main.dart.js_94.part.js": "f60b0c2947fea90d4666fe6456554fec",
"main.dart.js_96.part.js": "19bd219a851bc66fca05eac5dfa91106",
"main.dart.js_97.part.js": "98441bb76ec88b937b72c3cb0f150f51",
"main.dart.js_98.part.js": "9a3e6b462378f21331e0cacd21059282",
"main.dart.js_99.part.js": "1f182741d5baea859eed1d6e4e245409",
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
