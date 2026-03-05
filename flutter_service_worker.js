'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8f898b22d33b4ae6b360ec4725a2d646",
".git/config": "8994a961437b912ffd0a32ce051014c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "12e436393bdba0610d01a1a37b0c8ee8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d6c7ec7f6de2f4bf03a29abf1880061f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e595cb14f9c03b78b1a71027d3338777",
".git/logs/refs/heads/main": "6c868a69069c20c4ed9388b82fab7681",
".git/logs/refs/remotes/origin/main": "85a7af1f982a51ac0356bcb61a645558",
".git/objects/00/2bed398d9461d3bb064910805f8c82be816475": "d33a6387cde9a88387d653ea680e15f2",
".git/objects/00/8f51eaea04cf578c1eb3454f57fb10f8ad8b76": "46d9b11fd28dd6cbc69349f700f2f8a7",
".git/objects/02/061bc486c0568140450c1bb3829414d8ea778a": "9d9fb4019ff09c73d61d5ed04ef56fec",
".git/objects/04/424a46ca6bb83a5fa420d4706a5958cc39fc4c": "842ece0c0b1bfc598f83164a7aa5f495",
".git/objects/04/8c30bc81e621b7f889e55fd3081754401dbe24": "7e27db5a63b0a04666720e1fad54eb6e",
".git/objects/06/0127218b9c115fa87a778dd01bcdb470443115": "d9e6a83a1ec4b7283cc8cc0118240c56",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/729512581e25c964902de80a9a33a8ea632621": "90681d344cdfd667a5884b2c0a4f10fe",
".git/objects/07/20b4cd967f6db322181efed887a59fd9b16f68": "e7edad75e9bcaa130665b6a138447556",
".git/objects/07/b99a1b9ce1215a229dfa5308f04d4628ee4d56": "dfa4ae06e2570fcbd5cd52372ae62c61",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
".git/objects/08/a49d8dc4e38e63c1b46f439707cc625c8f6719": "4e6176b09008efd87e43baac31663614",
".git/objects/09/fee077ac5c18e84cdb1bf1da48a056a22c0eb9": "366b4cfdb7ef5354fc55058a9d4ebdb3",
".git/objects/0b/57094b54c42a1a7b299bad7fa86af67543c00a": "5376a283a549bb3aeba444c3921a44e9",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/0d/f2a41df8bb0bbcc3b93f41ce6a3619d9f041d5": "0ae97c36dc73019b1cd1dd06e0ca1001",
".git/objects/0e/8a31d915c79536c34bca930895e700a15232b5": "931ba4842591f87d9ec9322f2c366825",
".git/objects/0f/81f0d1cd60ca1b3f1746bc943715a3b13694a8": "45d5e883d4ebf500fd38f8162f440dd9",
".git/objects/10/d6368881b1b17fa2f4fd755c4baba253a10062": "772d0829c4069759223b1d9f87820483",
".git/objects/13/7e6a9e7940e526067d42a8ebcc92694f9848f8": "5d6a5245f61493a33e2ab09fbb2b2d46",
".git/objects/15/05c7ca2a11469954e925bd9db50f9c4b6d7c64": "454f75c8dfbe83f265bf245c78eeaa62",
".git/objects/15/48a80c1607249e4f4e43f9a5a8c8f34fd42261": "d13c09dfe6020122b158392a21d60b7d",
".git/objects/15/6641e9af825a4d163e1827487778307517dac1": "287b2a4bede3df60c8444f46e5c9df9a",
".git/objects/15/d09f6082d2190f541dc6b81f15800b4e631278": "c04b824ec66cac951286d177bd1e6846",
".git/objects/17/4a386c0d7a5b09aa53dc8cbcb62356eabef217": "3e8d89b030a7bc2f44ea1714f8649bd4",
".git/objects/18/41ad4635c078d11adc946ca0ab12718c5824a7": "ae6c3bc887ea63cbb2300e1a72b6b661",
".git/objects/19/b9815f01bd8604a8922fe822827a17b8df21c5": "88df336e1df9726c0290e421d3f838d4",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/1c/a395d0a9730dd4d2090c7deb07fa48f6ef205e": "6fbb8ea3f6c203aa96970b021d125445",
".git/objects/1c/be3bf16e4047c526ff2bcc5315898f9f48f2ea": "583fb41ddb4ac5ece4f46eba8e52d035",
".git/objects/1d/9c6ee0c66d786a8ce761f5711441db600ca5a9": "51a8aafa2a6c4017b7233dcfec7ef055",
".git/objects/1d/c2dba50349f1d65381a2944b73ff29fd9a5733": "fe5dcbe1702205e4679a09986e3b58f5",
".git/objects/1d/e9982b9b45df1597edeaeacd533100921315db": "fc1f9e0c74697f8238834ecadee42ade",
".git/objects/1f/0c770266912ef406066c872fa4feb07eeba2dc": "9df7b40ca5c53ab22202ec0d953315b9",
".git/objects/1f/269b2657c8ed28ae64b57bf18105a8d1a65b98": "d943ee98232e214c606ba355d0d1695d",
".git/objects/1f/962c14a2a3b6865de0f3f10ef3bc81a788f198": "2ac3870a5036ae5300c5e1ac25ac0c64",
".git/objects/1f/d6d42a8ae8d05375cda9edbd81dc05714d0f21": "688a7e40042e27a973bfaeaf2267f8b0",
".git/objects/22/5f31a2335890df3872df59ff79b70f0c178891": "f53c2f1aa88b9578666596c31ec7f0fc",
".git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
".git/objects/26/f1c73a6c0b2b06e2a0c6e99ab64571c5655b0f": "1d7b1c6182d692e1dc80cbd6c4c873bc",
".git/objects/27/d03632ca91fb50d3d42a28c22d25ceac67baa6": "5b99f62bda70693ac5763c79a2dc4c2c",
".git/objects/29/02cf70fec6557621805b72b4cfc7efe6d568f5": "ececeb6b5c07663788a03b2161248060",
".git/objects/29/6a80f42265a36657e8553c647502d95cfadf9a": "e6296758ee54074bac9101017d492deb",
".git/objects/29/8727a1293a1d8b5ed083452a18816a6cc94e7a": "752f963534bf87dff10a6c4b8e677d5f",
".git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
".git/objects/2a/8b1196e5055019f2e7d3dbbeba26a608cdb9fa": "3733871c0e30bb34e3efcef7034f1e06",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "1dcf24ae9b9349b9e1383910595d6a53",
".git/objects/2b/bd8942592bba7714166117aa262f0ed535a5e3": "bf04551e6b79004351c2253d4fc5e32a",
".git/objects/2c/058dc11ce52065c91a47f169172243a0a583d6": "14e19dccf370767a57f864f83ed6b3b7",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/337b3601da74af0fc471fe72a2bd8e03e24737": "822af629070cba3b918ca40b459be043",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/31/81ae53cd70de51d9ca9b87f6b8f2419b50b3e8": "8db54a9d3dbed242d6b30a1a9cbb44cd",
".git/objects/31/94d7fd869456440e43e17811385b594048eb54": "74e2aea68b555129ba359ff74a4d0d81",
".git/objects/37/8a9b68e55a571c5325a79efe26fa41632849a7": "6c94a1c18055410ed4a89b104dcce6b2",
".git/objects/37/e00f045f0e12ca51c220685031928c1a8baf1f": "9aab0eea68273e45b1ffb6fa55c76750",
".git/objects/37/eecce7010fe62b00ff7d0c3f782609d90795d9": "57e66c18bbbc93e30a7ad2bea1faf4d7",
".git/objects/38/1fe8d52fa7895c8843371224db1c53fb748654": "6ace31cf4283acd57f9ff29f160cf205",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/5a3012d99c7312d5631ecd3f556badbf182f21": "208f15c409ab77f67d7da52013fb06c9",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/1d3a3a86b609ec3fc1d20582a7033ce94529b8": "78be81724fdddf456ecc4996a7bf6dfd",
".git/objects/3e/5ea0992c5d68d23617a8d934ba7211bbca0b4e": "08c061885c4a7623eb057367f65421c7",
".git/objects/40/b6270d688f94c30abb34d21396342a840c42b1": "7a20ae1cdb71204f13f84d015859588e",
".git/objects/40/c82c08f64cec01b485ca77e5572e63b74561f8": "141bfa671d01be775d9de835542e8ae6",
".git/objects/41/d9a2efa3b4fb8c464597b05ea0537e424f534d": "3dd82fc2fe3463ab61ceefaff4cc4d3e",
".git/objects/43/711a12656d35a0d5dcf616152c32b0e1521433": "f6f8f784fb7931244b64ba55f895731f",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "05ffd75e6d2f5da18dfb3cd28fb33601",
".git/objects/44/c00085ca479e48f47d2459d1961db24573c95c": "24eeb51c5027682122096888fcc01ec7",
".git/objects/44/c1589e88cb690209f27133fc577d69b12a2ba1": "feab09e135749c95ec0ea43c738655b0",
".git/objects/45/07761dc4abb6cada76bfd5ad0e66d624ebbb9d": "bc119a18187b8afa7b3ab05d93d8e313",
".git/objects/45/24cde9fe83a5da98d4dcbd5cd6e2d0c16ef0a4": "687a71ef238e93c0f06a7e87bf0fa6c2",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
".git/objects/4e/0b50898dcc4ca30d9d2ec3f5e9efa666d253f4": "246aa7a1b08058501f974ccd3a2645b2",
".git/objects/4e/31335df34768e50d87c2c428f99efe95a53a37": "694f7fe62e1349286a2b30585ee1075b",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/50/de41c8315c248a4b380111aeb4d8faa5ac5a40": "b8583ff2d9af57a0745d7845cf867d55",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/54/158277db74df75793968ea419215d6a5ca3f4e": "9e6d61f737c6033eb495c29aec0aa8ef",
".git/objects/55/da0404a47019272f2762d630a3df52252d3829": "5f67830e49adcd65f7c5c533fa405ecb",
".git/objects/56/965b81b1b990a21f19abc4ed5bd503866af713": "08d06b24636f654f2b17466978c72414",
".git/objects/57/3949d84b3458cecde47664959099df3adc4269": "ccce5a0f4595d74f97356eaf8cb5daaf",
".git/objects/57/4e906c7d1181149882d1f31d6829203910fe5d": "3a0f1f7ffb85fcb182738573195be632",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/57/7489a7cb6a2991b65a67cf9292ab35229faf05": "85c7be7e70693c50159dc51cf26164fe",
".git/objects/57/f62d2242123b7aff2dc129f5d37ee660a511f0": "7efb4b900c807c6b085fd6432429deb4",
".git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
".git/objects/58/623b85b8a42c7e7c487236f170235dbb8566e4": "9dba820212bafa2fec5a4a3f261566a8",
".git/objects/58/b8347261a29b03adacecf2ccea55ae61726ecb": "1580c45dd27a4dcac4ee73e71d04d086",
".git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
".git/objects/5b/8013e8c7e25f88246f6564a45e0c9b93bc897f": "dab2a959ae5c7ae1b9a53b1f1d19dfb3",
".git/objects/5c/a878bab31cd33a5662cad4cd62ca2fecfa0d54": "4dc920e2a54bb9ae751fde2eb1d1b685",
".git/objects/5d/06454c4cefdd85031617773c38ea8d9056ece2": "cf552185b8c1b9b5cb6df1f1bd89044c",
".git/objects/5e/0f95c1a5a6bea7df1ce5bffd994211334d2e92": "a30eb3b59996254678ff7086e5c87767",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/5f/afea22f3c55d08b5f759b86c2dd3bea795098d": "f89d4d0f8f8ed63490985767a86df500",
".git/objects/60/2afb81a3e2f569339381d0d5281eff3e8c7e77": "3f6eb9829a22e7a2750449bfd8974d7c",
".git/objects/61/a95d6e26e2892ab1fdeb33f7315c450c3f046a": "ce60fe2c763072c5a21e84547d1c9d46",
".git/objects/63/7b2d89a7afffcc28de00926e83ec60c84da314": "5ab92dcddb32fa15a14f463406292c65",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/66/57efec0b2f12f7f3d14cfc7f0cbc8231bae865": "9835495a02dcd7fe01c740ffd5572546",
".git/objects/67/8f15017a44ad5cd64c0e4681bdfd7576961810": "b75eb0861114239b61ce48c684a0a58c",
".git/objects/68/093823bf35dd3d31adb9cfffe8fb56fcc38daf": "71ac5f9fc6e372e9cee4659ffea6ee7b",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/0f6849f7d39ef453d33937bba171900fd49a20": "aa6b4a0c6e0f228370c62ec9f0fc39b0",
".git/objects/6b/cf7e9013fbdc0e5e3f9f5a1ca361728d564a91": "5dbd04ba2a0731354e4b3a9803af344e",
".git/objects/6b/d9a63e5a834d23e554cd5a5b06f8aaf934db00": "710b6c151c49b8bd382cc9dee96bb75f",
".git/objects/6d/7f0a0b15b1b47694d7d016d53390ba35e41f87": "04b16bb665e6b4e3a4d9f50a30d71d99",
".git/objects/6d/adabf3fed3025fd16a3c6feb22887cb5942db4": "6c513c4c6b12dc65836cb8148a52c879",
".git/objects/6d/fc2d87bcb7d67ebb6d577d581b632d3deb2ccd": "90b86d329fba7a25e47ecf6d79f67409",
".git/objects/6e/4ac761225f50f3264e2d2e2c97c29dc60f6b9f": "8c05e7b42a33c6c1705b394f7e29fea3",
".git/objects/6f/14a1d0177f5d868d55aa3354b168dc41f6e522": "c17e3a20f2d9d739b1cdf621599cde67",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/6f/881466f2c678ecb072f6acc49eb6d52d29b7ec": "fdff6b23357decb2f4989c3cb9e6b05d",
".git/objects/6f/ee13b5814262c285d59ce320f88fd196b32054": "e6e5ef596df9393bf02f284cc3ca5048",
".git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
".git/objects/71/d4c3c0ecb526c9e79e4d5cfdce69ef2fc27ed1": "d5d043e80e6f6fe61a3ccdcf129df516",
".git/objects/72/8da0faf2820399dc6815434e93cfc8d7eaa620": "3fcf26ae364449191a3636ce08ee949c",
".git/objects/73/4305e0f7f597acf8cc1375dea2252a703e179e": "a965f1607b441874fdd534169ac63e55",
".git/objects/73/bb7fc8ee2e4e357089aef644d9300527c7b254": "c9bef9d3eeedd050f60cce65d4d3fb00",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/76/0807e03ea756c9318b8fc6c2e814e2c50174e3": "02b16031878ea2327570611c52991e20",
".git/objects/77/078a5ab06fcac067110a8acf2c6a4fbca0782d": "ab13351d0ca38c75e2d7e3bfc24cc2bb",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
".git/objects/79/41efefbdcbcc63867256828fd50b130963f1ed": "17db7f5cd7df41e960461094f8523de0",
".git/objects/79/597f0bc09db9d2016a743e2f42126217eacb9d": "557f8f9078336dcbc6378ef9a94a82ef",
".git/objects/7a/7cd37b4540d0bb662ac4a1286f26dd05fd987b": "efb7cc9e37b0fb902f020d16b1ceeef1",
".git/objects/7a/983181fa6c63671a1ffaedd81af3bcab55d3aa": "e168972a38e79732c8ecd8dea8fcd1e0",
".git/objects/7a/cadb922c4d6e9567dd6b1322af17e11976dc59": "ce1934510b9cb83915f71b3715c33893",
".git/objects/7b/2b9b1bae6df29f0e3ef5b1a51a6545ff658c7f": "edb84b0f48a2d67270a3a7b78e1826f5",
".git/objects/7b/84351fe6d481b9795982853c1437909d8bb164": "d2f8e844e88c7a0b39f1469aa85f95a7",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
".git/objects/7d/1a7b59c3304bf47348bbd9a5357a2f9c20ed0e": "0aafc85c293ba638285968836c9c45cc",
".git/objects/7f/333f409bb6762155590d79414687c18b3f7d20": "899ede67bee6b557841e6916dc37b785",
".git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/81/80a8df4b3faf26601a24fce7f2ec443d1ef0c3": "6c3506cba95be31188c5385babc95092",
".git/objects/81/de2e1859a448d862d727681492cceb8b296690": "d76e4ce6c016221369fe7de86ec7c877",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/82/e6eb1e58267742cb86ff17ec1674d482ffadf2": "45339e8e99deeaa539555589a62b5644",
".git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
".git/objects/86/cf2571926b91f79136f96a4d4fa9fe57c143a4": "b8b504cfd8844a20c48183542e9b7319",
".git/objects/88/357d197d59c361886e5f22ecae71bbc0c862cf": "172cf2e5dd8705eab2b40d6eb604cb64",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/59bf7631c81a7f203502b5cb220397745f5bfb": "34c704773420c9227612722cb85c37fe",
".git/objects/8a/73c5a932dd7bac4141a8f1c01d3dd75b59326a": "734176badc3220590f922949a4cd5cc4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ee17954c295c8dd0be93ca2344bead3b02774d": "7878f970c50733720d79aecaf281df5d",
".git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
".git/objects/8d/2720a631cd4754bc6d712cfa5c4a35b47987df": "eabdf95a436694d50de3956a329b94bf",
".git/objects/8d/a5bd35f7aa2df904eaf14ec2cbe84f74e89928": "3d2c77c13c0452096e0af8641c7a3a5c",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/36c46e77638a69ebc5aee3bd85e81087e2e83c": "a03e7ca2d179d68cffe4578c61d1088c",
".git/objects/90/70e8e88da73a58d142b4b96e406c99b2458be5": "e114ba57488f405086721fc45ff5fc3e",
".git/objects/90/c22e6de873cf4cb9e36506a753d077c7e5dda7": "2a54fd957d57867dbe08fcf483f015ea",
".git/objects/91/18b1d361703225781dd8e36b7e44d2d35c43a1": "ff538777b70b676534428dea573db599",
".git/objects/91/2196577ad54ac0b32343187250e4a3f0e461d3": "384ca083c188e6e388d6354b2ee9ba44",
".git/objects/92/1d3439364976316d46472731c39b01d515153f": "bec62458e236ad5beec8e3d6d97d23a6",
".git/objects/92/1f90e47f1abd39174ea311936338cfe37de9ce": "228c45c0349923f377b4250eb1b2b9a4",
".git/objects/92/37ce78056cb14d70fb8521b1bb771fd0a14b56": "4a3ee9d0aeda0bad431fe233705a68f8",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/93/c884921762ebf375cb2c6dbf46ee19ab25297f": "e9d3f8b4a2da82d624f2a3e950c561e8",
".git/objects/94/5651b6c81700b4d3fb77d5e7f66ad7c1f262ce": "ab1c98f7fac7214c341c06cb4e6aee85",
".git/objects/94/fca5bd5069f46a1553eb673bd4c3c5495b5a2f": "f1f8893b3d2c8e5e5c7ca2a789801797",
".git/objects/95/bdb782d84451c75a0f6e0c1886b43f75b04a53": "5c143f8d25dd9188ba0789e769f6dd20",
".git/objects/96/69f41253daadec722cf16934664070deb69fd7": "e74d935e739128e80841df6966e8c34b",
".git/objects/97/3d69163a5c582422d0ee003dd7bdde64bf28aa": "6ad3399f127d50cbf18e7942562c3088",
".git/objects/99/a92a9ec35735d461f0f1a94484b099f8410df6": "2c80f4aeb8ebaa87cb9e30f7963ea038",
".git/objects/99/e4ad7469c1a291a7a59a25ddbb78b7c01899fb": "c55b4c4004d2b749b29528d0cf927b1b",
".git/objects/99/f364e261a940fd48c2d0271fc04a38e07422b7": "7f16e4a12ddfc092b8eed6cc30cf7ab3",
".git/objects/9a/12d2aff8f619b71c89c194b4ca0d0ccb8085de": "55170ea8fa638ab170bbfde47a47614d",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/9b/89dea51dbccd3da43c17816bce1b269970341b": "5efd3e149e014a64e48540ea0dafab70",
".git/objects/9c/4554614a84264d1c89443ecba048d2316e8c7d": "f9781e6b259d9eeffb6b426079060914",
".git/objects/9d/58556a66eb31b343d58b2934e824756f7d1d30": "c62b804324fc15abacfb0bd65e7d5cd8",
".git/objects/9d/641876b17b4b8ba86a55baa78c2ddee71d9ed9": "bfadec7476119ba16a19ca5c66deb60f",
".git/objects/9f/d3cf5f57db3a491bf96050ed7239e38faa2ebf": "cb935a8690884c235a6dc4b9cf547fdf",
".git/objects/9f/fbff3cd2ad5941edefb5dcd13c13d081064c33": "c56235c9e00cedcbac621d29d7a54781",
".git/objects/a0/69a445ab5aaa94b52bb759623d6e66a1d1b5a9": "f97576b959988dd5f78abfa0243797af",
".git/objects/a1/7f11463c9fb7ab36398946fba8a75ad6f5788c": "f2d3759aad01795c495b551c388797b2",
".git/objects/a1/be42f96f152f613c54cea400684007e8ce9e5a": "904c4caebdb4b97912ffc226d3329ef0",
".git/objects/a2/0197a9db9d721eb213c1de7daf314dfaa02af1": "df2e4191064aa9679906ea55522d2e23",
".git/objects/a2/4be2ecc42a7c767a2f605f345d0eb3a6be4607": "cb232977a898c1c7ce17ac2a3f295032",
".git/objects/a4/3ceb6e745a5c030035293db26de8ed427789f2": "f3b7f7ecb223979b477c0c89e07203d5",
".git/objects/a4/8b4e52c1bb1fe894bd4e0da9a28338202b4277": "cd71f3cba883ef30136417de26132735",
".git/objects/a5/0424442ccb5e06dfb7a050aaf90f6ee545bfde": "6ffe5713d1dc89373ef1697b4ac535af",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/66d8947a446c69095cea40f3a1c8f59cba28c1": "4101b35981f13194d49a3eb17a60a981",
".git/objects/a7/e26e6e47018bdc69d2b9149386cd6fdd22c67b": "791edad8d06f834ee97dcc043b9e097b",
".git/objects/ab/36dc5ab9282817d5634fa5d866d6eac10f7420": "f220dbc9fbb5dd78792412d0321e9c9f",
".git/objects/ac/99d0c4c2091f79bad012178393e09bcac21046": "5d1e5455903f5ad4b19e9762b67a9d75",
".git/objects/ad/a5e7f9292c8c9ac1f46f04e92d82efea7f00e9": "f4559449238eee372ed0f9fc46ea2290",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/d887c4a2fcdb50dd27c196d588326916401656": "382886d075ef894fdcbabf06e7fadb1d",
".git/objects/af/e107dd37a916c8f2cb788d3b37a8fb3ac9592f": "c73b5d6d6be4230c44cb2716f9215997",
".git/objects/b0/05cf4b0903b188f64fed69d14195e7825e2e50": "1c562eb47b0183153c207eae361ebca0",
".git/objects/b0/5e27ccb2057f0a3eaf70d582b828722b8260d5": "92195911120e4aa069df9e38ba300fc8",
".git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
".git/objects/b3/d5c0eb88ceb1be75faaa3614c5a4ccadf74f1b": "f7ac6e8e6864aeecba6c60482443a16f",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "3080af10963ea38c151b75e2d931108c",
".git/objects/b5/5e68978a1d1ccd1ef8164c760f2548d38877fa": "08b75fc5634b1274b5da480de7298a01",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/33644fcae71552b8036dfe59ccd008255dab0d": "0000fbe8c54b3cad949ad78d58037ff0",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/5681a3f540c06151bb473b9fe0eb2280bc4c66": "f31c902b6d98117de08f51d16ef5b7bd",
".git/objects/bb/042c38b0a329117a26dc0cac477e44162a637f": "70c35265d834a9237b4418ff2c216e39",
".git/objects/bb/35010902313d8a9983eed3444cde0f620297ff": "b9f25f1a49e8e767251b2727da566823",
".git/objects/bb/679ab9726d3297df06b10f6b31976169c69957": "5a1374377c5b383c50d55be3382ad4c4",
".git/objects/bc/2455985469e259937958744c909f970cc6d459": "cbaf7b37a82d2f92d18c0918e834dd35",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "c565b2a2c5a664803c3087b32e8943a3",
".git/objects/bd/2268905213060987fa398d1d7cef12e943469d": "469224dc980bb4a7ce388ac8fe27abc8",
".git/objects/bf/01a0af669643737d914deb9668bc97ea4f9795": "3bbbe8f1269c799917298abbbc6e98aa",
".git/objects/c0/318cb80481d27f98279e536ef2d64a9c86b722": "d5f401ed025fcab6bfb2d17b8653dfe9",
".git/objects/c1/61cc329e9737498ea90977bc2b5ebf989de136": "74f92242075992cc3963206e40812e2f",
".git/objects/c3/b10e584f4d84b6f1f242b080417e167f477331": "2a1a42cf640053e6ead06435219c74ab",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/c3/d8d0e53aa0b6fa1cfd5210b4a32a1428eb8454": "4a5564f19676226490ea4f51fdda738f",
".git/objects/c4/aec8971e316c74e412296bc8f35b1218595bd2": "2fc8eef6a02f843e32076361b4bc67c1",
".git/objects/c5/4ba874d5ae5194ad6b67d01fc43daba53110e9": "adeeaf7812d7bb4a6b1837eeab731112",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/8dd6850c867bb4c65cea6ddff1f67786d3e76d": "1f684c205a1c7613fd1ce5c2e436a783",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/97f345b8040bd1727a561ada02996d6248b1da": "86375f6c7d8c3e2e399413d7da235686",
".git/objects/c9/d70b0499fe3e92c7e301faef812e1b246f3931": "442414c6b886c6e9fabfcd235be551a0",
".git/objects/ca/5960fc3047723dc8d6da33dead524537878a63": "6fe4468b16a1949e3bf84334988d0b5e",
".git/objects/cb/33b21aa9315771a1b2213f66abf6ff3b82083f": "71c8f327b0421e0a2737e53aa5e8a4d9",
".git/objects/cc/fd4362d16b2fa3a0dbcfb65ea63c97a8e30ab5": "b975d67eb0ef5993c35ac8f7430916a4",
".git/objects/cf/492b39d641082225cf4d871ed1047a8396bc45": "3e65dec7a8f5d7fd473f245124173201",
".git/objects/d0/38737f46be1cb4c00af806c7285d1904738c03": "884488a48fa37819a51e8336211d31c0",
".git/objects/d1/084dfc92357272b647dccb0daa315983895e62": "c999c5e227ff4a198d34a07c34bff7ca",
".git/objects/d2/5517dcad5ac2c6943865c868ef9446c9bb425e": "d57e55cce863e07c2b7ef37483ed644a",
".git/objects/d3/b8fae802329a4f6e8b93eb418f0185839a81c5": "fe61dfb8b7d28cd0e21fe95d4846bd4d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/58dc4deb5dcd43244f991cdfb4a985510e9dec": "4712ca08119098016100e6848d9235a6",
".git/objects/d5/32de06b167f07534a9b35456c6d22828cce6ef": "b1fa587b1ad6e6474c10b0ce9a4fdbc6",
".git/objects/d5/4cdfaefd5eda9f98c328d6890f2e59797ead68": "fc22776a3fb2c541732c49b70310853f",
".git/objects/d5/95e2806a069a8b6863d5e1755e5d37ebaeb538": "26999ce129cbca9064b7435a1331ee72",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d63b3d2fb0a9e9e6142b5724ec2b96c4480974": "eb3eb252d210331dba06f7c114aa4ec8",
".git/objects/d7/5d9937a575e74d6030eaf03d01094876481e99": "c3e77b9aeac7a0e42189412a5355236e",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/8b4ecabff6f58d70f315b43c528177a7dd145c": "f6336aef9a168ed9bf4f2fb4f440b901",
".git/objects/db/458b44e7d1ae03c2c44a1e594100ed275b3e9d": "01bcbbd80337b84d3627bf3d899b73c8",
".git/objects/db/6e8e438d3c8aaef8fcc0bd7a4adbf0bc9eb635": "c7561ee280d823c21de55b929e418061",
".git/objects/db/db03f67e6762784e45c6d556090e0325f062a2": "5aa9e76b3167407ee7fa6148fc93a489",
".git/objects/dc/2454a5554cbf0cd8b2dd4387ce5b4e921664c9": "5ad7324fa44aecf93f4ab0369310e375",
".git/objects/dd/4d16c7719c0c6aa690fefa9361f0497f1df66e": "7491346091e965c0d519842e7d2ca9bc",
".git/objects/de/ae9ddcc0c164ae3a80f5092b8859060c56bfd3": "5c54af76f7f9d0ac5ddf6753e68843dd",
".git/objects/df/f87528e49f93c087ff67e22be021522c06ab53": "9ce6deab079cf7f6567a720beab8ac9a",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/4796d812c4e5c97cec0783fb9c0f910c0fb591": "26e23fca776466bec9a26a9e48f8db5b",
".git/objects/e2/5c35753dcb0c1bdfee2b5c855664e11ff9998f": "cfcef3d29b7f71d72fb0078632f79b21",
".git/objects/e3/08b145276c9627d91ab8c8ded9452a277de7f7": "1912fb58da13f21f40facae10e2f6c3a",
".git/objects/e4/f896a585075a9ca1f7eb73991e7b13ddd51c2d": "5cfa47b63516e2d6107d3c79016900a8",
".git/objects/e5/efd654ad8c4c5e1abccc6687713c92bc517017": "abf4f6e04f958d97decbf8f7b5ee92aa",
".git/objects/e6/18651c906e16835e546eeecf0654149b70b559": "4d8b2c89d72b3c5bd680d06df5d96302",
".git/objects/e8/693722f74055ddcf078009d4dcfc7da11bc55d": "d8e458a9c1d0fcd008a9610220eaf378",
".git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "c1065f1df5759d7094e0bf053a6a9351",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/eb/463b78b5b5e6b7181b28fd7db0faf6c38c82f8": "29676ae5cd8015c623164cd145babb3e",
".git/objects/eb/709d6f3bc29bd4c96ad09587e718867635d79f": "45405e986c29953d28574d29d7992bbf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/eb6007fd5c62926f39c1a7e0fff0d97f2fa0ed": "df7bd96570dc60b0cc0de3f6030af9f6",
".git/objects/ec/044008819ab72ae1935e24352d3cea0f2ff1a1": "30334172c8ace3bb159c8188a605b0b7",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/ee/82aca006e4a7d46952e9cb47ad1acecd66e395": "45a9bb2775df123dbb0583bd220e496d",
".git/objects/ee/ce536987071853e2508d1441f80c01fddeafbe": "3c1da0f13ace4f247fe3aa919b695b60",
".git/objects/ef/022ee66d4b17aa9f1b6bd32bb395f2d7c6bbae": "be98de660bbff6b2669de12072021108",
".git/objects/ef/11ba7082d962ebc01b1168556a0514f2ad0b5a": "4864aedd4d2af32340e5d40f934bfe5d",
".git/objects/f0/6ac8af1a4a537c27638ffb7dd6f53bcf657b84": "257e95f43c694de98c62447f24e00d49",
".git/objects/f1/a3cead89e51fb411c1c97283293d46bb2de8e0": "ea02cea2bcbc1816eb2233f2cac84949",
".git/objects/f2/825e2dc2b147067184f2fba678a55631784224": "0b445e7320a701350407a1967f62f8a8",
".git/objects/f2/926e0cabd335ec4fdd327c2c954e363d82890b": "7d094339ba8b843e6b04bf887b9b0a42",
".git/objects/f3/294297f7b9eb72cd8ae25ec8058e6aea3bfc48": "63b96f309c1f4b3a92bec4a41edd11cf",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/c9cb1225da00b5d680230f6163de87792671c9": "22b074d5dfd8a29735c7f9b2d96758e8",
".git/objects/f5/82289cf4eaddfd501de51679c4fe2ae7b74919": "e55f755102afba8fd9c4a5bd0147ee37",
".git/objects/f5/fc82b56f0ae83aaf92a89e83cb89330db97629": "0d242f97a4b3e8d5ec1a07fb0fcffc51",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/f7/847a32c50d4cb6bab364200dfd4d525e2719ac": "a6b2fb2eb29164276d312d3baec666c4",
".git/objects/f7/b11e9e5bcc73dca40ad925395efaec0336ca88": "035529cfd20cb819bd0c502fcd7aae55",
".git/objects/f7/e4bb869a9fb455f4bcfb0a9b57a5119eab6967": "fddedb68f94432bad955510706a791c6",
".git/objects/f8/82c2a68852b41abbfc0789edb77e6d8498f8c9": "5ee924070a3eb9dddb77b4fcf27c0bb9",
".git/objects/f8/82fcdeeb062daa070318aef4ab68720a9fb9f2": "1e6ea461cc6e5d8595e225ef872b61ab",
".git/objects/f8/9378ffb926ad89f4f9d7fcfae5de7f2715831f": "783c61fcf888449c976276a9ed0a88f1",
".git/objects/f9/0c27c4fe6d9895bcd41d7d6118617ed82960e0": "06af4035291e0e7f0f539ab75bc3de95",
".git/objects/fb/ef636b7b6fe3069b81dbebdcb04e6df7614e7a": "9dfbe83a809e3b06673b26898b1bf758",
".git/objects/fb/fea5bbe819e490f5e8eb07f6507b648b7a3d87": "d8154f4f4ab02116f778b8e0773730c3",
".git/objects/fc/c022c28b2b34de7308abf220cc881069daf1e6": "176ee5efa0c0f46086f9fdea73a50f63",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/1ac7120b1e1249c6887dd40a61a1e57f233fe4": "671d407a0e38ae4c7a7dd884a469a9c9",
".git/objects/fd/8ffe3c591e3f48dddf96ea001590fad4e4a06f": "edcb1a4c8c59b8ddf1cb2bd11e83d09d",
".git/objects/fe/029cf0fd1c84a861e956f3fcb8e36c930e47f0": "f18ee5e0b7b6a3f457e1014418c90018",
".git/objects/ff/2f0ad900cbd98404664def9e905353a0a4aa91": "291b6a4415c9548d9bfe131cc8d62835",
".git/objects/pack/pack-9c025a65e52e651ea9dffda87a2bc23b2d7697a5.idx": "ce31e2421a48bffd7351e3d0ef258b94",
".git/objects/pack/pack-9c025a65e52e651ea9dffda87a2bc23b2d7697a5.pack": "e7fe03f620ae08b506944eba6265250b",
".git/objects/pack/pack-9c025a65e52e651ea9dffda87a2bc23b2d7697a5.rev": "0867014ff6ac9704966edea6b1953cca",
".git/refs/heads/main": "f1db57738821fbd660e59f972ce63b2e",
".git/refs/remotes/origin/main": "f1db57738821fbd660e59f972ce63b2e",
"1.png": "5dcef449791fa27946b3d35ad8803796",
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
"assets/fonts/MaterialIcons-Regular.otf": "bd38df368115f41f41d6d80a1ce7e3c3",
"assets/NOTICES": "1c84330e619eb243d6cffb93b219d490",
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
"icons/Icon-192.png": "0a0e2e40c36a9514f2af76a1d33e9f83",
"icons/Icon-512.png": "f11cb507188ebfe1f0a1168639287153",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15857c0e40cb1dc67ec24240e172b821",
"/": "15857c0e40cb1dc67ec24240e172b821",
"loading.gif": "b5302a7e6f55787961943f3c115f2480",
"main.dart.js": "6e6b5ba5ef7aa925c42c0d6a8095215b",
"main.dart.js_1.part.js": "bc70a10674ddeac0d52211a324673921",
"main.dart.js_11.part.js": "c884c827dab08752f8d5ffac858f48b8",
"main.dart.js_15.part.js": "76f58808eca603825fc1cb7634266d94",
"main.dart.js_17.part.js": "7e3168adb532d5ad43d88585bb6c6fee",
"main.dart.js_18.part.js": "b5936db53dc83d95df51e53b005e01cd",
"main.dart.js_19.part.js": "19ae53fb8ea35837f8fd1d18ed0e1e23",
"main.dart.js_20.part.js": "083ca46c037d774dbe22a4671c501c2b",
"main.dart.js_21.part.js": "a5eaef74bd2e7e0bf9ecf8a742b6f08e",
"main.dart.js_22.part.js": "fdd4608f9d996dabe8905cc37bdfb563",
"main.dart.js_23.part.js": "84e90458b91152cf59f2db4cd7ab2d26",
"main.dart.js_24.part.js": "68174e4f144139e5397c9c88a314dcc3",
"main.dart.js_25.part.js": "fbafd676b1d1d7e4ef2009c3d7e974b2",
"main.dart.js_26.part.js": "d4920024f4b01c13f9cb573714cea122",
"main.dart.js_27.part.js": "26b90f35342654712f8bfe84c6073564",
"main.dart.js_28.part.js": "6bd19bae63efa35cfe493ec0ab202d62",
"main.dart.js_29.part.js": "b17d05e8989d5e8b4729d50bba748ff2",
"main.dart.js_3.part.js": "528adbe0413628c356434dbb8dbed161",
"main.dart.js_31.part.js": "d52b284b696930ce42f09899fb2c0b42",
"main.dart.js_32.part.js": "d1c177f91635668670a9349aadfd1c84",
"main.dart.js_38.part.js": "5840e4e396bd15e55c11915fff23aa4c",
"main.dart.js_39.part.js": "c7140ce832cc90fb0d26663c9d027d6f",
"main.dart.js_4.part.js": "f220ada9ec28b240fc69bcfc37bed0bc",
"main.dart.js_41.part.js": "d83e8b22c62cdf2ec7aa4f784cbd81f6",
"main.dart.js_46.part.js": "2c30b80830c39ef84fb338bc131b7658",
"main.dart.js_47.part.js": "50348f834bc8d68edd68ba68d1233a07",
"main.dart.js_48.part.js": "a374bf41173aba927b05b6b2d4bb13cf",
"main.dart.js_5.part.js": "32f39fc2022b00a543f2d07eb199000c",
"main.dart.js_53.part.js": "400ad6ea57462cd3dc3f9553b053ca0b",
"main.dart.js_54.part.js": "ce607d086aa695095d5dc4a960709938",
"main.dart.js_55.part.js": "3178e31e5daf43cc663cd22521ec5279",
"main.dart.js_56.part.js": "fc2a7c8f793c16f7452c6e43915bd8f2",
"main.dart.js_57.part.js": "6979f83541963152d4b8e28b8d056890",
"main.dart.js_59.part.js": "5c26ffef0f48d7b387889e977e187ca0",
"main.dart.js_6.part.js": "9a09c93dbe3ec6e2c6c7eaf32334bc87",
"main.dart.js_60.part.js": "1d65929fd2cee2226934d7bbba59f833",
"main.dart.js_61.part.js": "fbdd60436db919a17d93e0dbd578fa9e",
"main.dart.js_62.part.js": "03288bd028f6ade5b1bdfa5adadb9010",
"main.dart.js_63.part.js": "9b58824d44cd2aea195cd7b1019b2cd2",
"main.dart.js_65.part.js": "49973d721030eb4401a29d6ab1fe316e",
"main.dart.js_67.part.js": "4cd783b159bcdda5c55e01654e4ac263",
"main.dart.js_68.part.js": "395ad0c69be20de027a0a76c611627f6",
"main.dart.js_69.part.js": "33ff88cb69236dca7c40d6d5d0dc9471",
"main.dart.js_70.part.js": "61ae5d4aad61c650b5a6fe0770fccc09",
"main.dart.js_71.part.js": "8a781076c33daa7c104bab216c23cfd4",
"main.dart.js_72.part.js": "575faf1b954372a2b3f74d7561289452",
"main.dart.js_74.part.js": "dfaab99668fc90b3eb3f2830e9de97a7",
"main.dart.js_75.part.js": "cae79bd2f3c30009dad9775087bfe412",
"main.dart.js_76.part.js": "57a55a88fd52b68904a631baaaa6b752",
"main.dart.js_77.part.js": "3099c4df8e484e507bafbc83daf997a3",
"main.dart.js_78.part.js": "c0c4767802d2e20d9e90c8effd749663",
"main.dart.js_8.part.js": "aff84e0460b12628e6ffa94053751d3e",
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
