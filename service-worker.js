/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "960f5a0b84506f29c06d8f258f85373d"
  },
  {
    "url": "assets/css/0.styles.109c41d4.css",
    "revision": "63d8e6b6431a48405a3447ed5afa2afc"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-01.png",
    "revision": "576c6b900ab79602f4cd8c47c50db404"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-02.png",
    "revision": "a9fe2ba62a2b34db1140d56d21fa3546"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-03.png",
    "revision": "c9da5f77ec458112c064a546733e092a"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-04.png",
    "revision": "63df8a7a43b8845606777b5116f0e73d"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-05.png",
    "revision": "24b5cdf3ebe4a521bfc3c86201034996"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-06.png",
    "revision": "d806b3051a7575e2df85dd8ec8bbc768"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-07.png",
    "revision": "b018cb668c17e787b905c5cf3d30933b"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-08.png",
    "revision": "79be608595142e614b4569b3c21807c3"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-09.png",
    "revision": "0613c5adafa7c3f566a777dac4f80a71"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-10.png",
    "revision": "43e82ee6c47ac6d1cb116fe077dde7b1"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-11.png",
    "revision": "4c349a521c0a071a83577989f5ed5476"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-12.png",
    "revision": "5c42636278a80eb5179146fe8de1ab0a"
  },
  {
    "url": "assets/img/oauth-app-bitbucket-13.png",
    "revision": "f3f1ee31b623d8b44852866403b15a17"
  },
  {
    "url": "assets/img/oauth-app-github-01.png",
    "revision": "b230da47f5b38638ec6abf553d82035f"
  },
  {
    "url": "assets/img/oauth-app-github-02.png",
    "revision": "b99a2e857496c04c22e7df539994d4d9"
  },
  {
    "url": "assets/img/oauth-app-github-03.png",
    "revision": "94c83f124d252f1c37a2b124c2bbdc0c"
  },
  {
    "url": "assets/img/oauth-app-github-04.png",
    "revision": "5374318990b0f727e7f299e4c72d5d56"
  },
  {
    "url": "assets/img/oauth-app-github-05.png",
    "revision": "3be9b5c35e2ba851200d51c2c36df057"
  },
  {
    "url": "assets/img/oauth-app-github-06.png",
    "revision": "e41fe05a816429389a581e061cc6b401"
  },
  {
    "url": "assets/img/oauth-app-github-07.png",
    "revision": "953564d04d90eeee7d0c2122c08768e6"
  },
  {
    "url": "assets/img/oauth-app-github-08.png",
    "revision": "02e81e28e30713265f2fd7995b02568f"
  },
  {
    "url": "assets/img/oauth-app-github-09.png",
    "revision": "90295ceb88265faa5b3ce78f75b9b997"
  },
  {
    "url": "assets/img/oauth-app-github-10.png",
    "revision": "4dbc4b1f4c4bc72bb3f8fdbe1433f035"
  },
  {
    "url": "assets/img/oauth-app-gitlab-01.png",
    "revision": "7ade14c1132b63da17fc73c447d779db"
  },
  {
    "url": "assets/img/oauth-app-gitlab-02.png",
    "revision": "7cac26bca5c54787fbbeb0a0af572be5"
  },
  {
    "url": "assets/img/oauth-app-gitlab-03.png",
    "revision": "77825dd1bb18d7b749473c68810a44a5"
  },
  {
    "url": "assets/img/oauth-app-gitlab-04.png",
    "revision": "3e023d30aa09c675a0035e2f24907765"
  },
  {
    "url": "assets/img/oauth-app-gitlab-05.png",
    "revision": "cf29103f1156dc478404e774a58ca99d"
  },
  {
    "url": "assets/img/oauth-app-gitlab-06.png",
    "revision": "4e07ddc0cd94495bf87fbce34a2c6ffc"
  },
  {
    "url": "assets/img/oauth-app-gitlab-07.png",
    "revision": "5aa55235bf3ec1f628b7b3d77dfbdad3"
  },
  {
    "url": "assets/img/oauth-app-gitlab-08.png",
    "revision": "c65fe25a05438d6ef34f2590d9cbaba3"
  },
  {
    "url": "assets/img/oauth-app-gitlab-09.png",
    "revision": "db8e925cd6028965e664f6c485c4d8eb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eeda1ee8.js",
    "revision": "115dbddb9214361d1ba51d6c15c23571"
  },
  {
    "url": "assets/js/11.15908701.js",
    "revision": "382f452430eda4eafba5d161e0058d23"
  },
  {
    "url": "assets/js/12.63c8eae2.js",
    "revision": "9391537f84dc20a7ebf71040a1d7280b"
  },
  {
    "url": "assets/js/13.1209ae0d.js",
    "revision": "cfd51440c5c88a4d4be0b52121a2f1dc"
  },
  {
    "url": "assets/js/14.d23c5177.js",
    "revision": "6b3d4ea99427cc28bfa705488e71f345"
  },
  {
    "url": "assets/js/15.4f35faca.js",
    "revision": "ed204fa034e4c8191f4d9516a0f12b64"
  },
  {
    "url": "assets/js/16.bd2254cd.js",
    "revision": "c86b0fc3ab62606db08c3023a31e2ee5"
  },
  {
    "url": "assets/js/17.511a5c5a.js",
    "revision": "cd5ddfc60248c5258c2a1113803de5a6"
  },
  {
    "url": "assets/js/18.36ee0a30.js",
    "revision": "9aa4a253f1caf1c1e7de36b3eea213ea"
  },
  {
    "url": "assets/js/19.6d688f76.js",
    "revision": "1c3b2e9c4a7e3ee9f15d87cc8d06dda0"
  },
  {
    "url": "assets/js/2.958d7863.js",
    "revision": "dc6b2424a6436a5cd8f72beb3a3ab4f0"
  },
  {
    "url": "assets/js/20.534e8146.js",
    "revision": "a07b6d0d7a0b262fbbf210d5a8751340"
  },
  {
    "url": "assets/js/21.1e0af99c.js",
    "revision": "6acd9159306225be293914867d3b90c8"
  },
  {
    "url": "assets/js/22.1bbe151d.js",
    "revision": "a0eac1cead8ba431adea3b22009081c1"
  },
  {
    "url": "assets/js/23.ca117dc6.js",
    "revision": "035ff1228301d379fb84befcd020536f"
  },
  {
    "url": "assets/js/24.4d689ce8.js",
    "revision": "52da23558249774d4d6d1d9c9ea80300"
  },
  {
    "url": "assets/js/25.cc48833e.js",
    "revision": "6a36a9e6035a26711691c0eeb53f9d7a"
  },
  {
    "url": "assets/js/26.8c088362.js",
    "revision": "45204dfedcd2215463ca4cb152766091"
  },
  {
    "url": "assets/js/3.89a2961b.js",
    "revision": "fc26d53c9eba41f3a739b8c2d5e055ad"
  },
  {
    "url": "assets/js/4.d1618250.js",
    "revision": "45cd1b516068dbf788d55b0a81334844"
  },
  {
    "url": "assets/js/5.36bbc32a.js",
    "revision": "906968c0045daf808aa29ff7cced9a95"
  },
  {
    "url": "assets/js/6.37703340.js",
    "revision": "81f6b178c92de2c6aaf64be1305fe945"
  },
  {
    "url": "assets/js/7.707e2503.js",
    "revision": "03f80596c5ab6461685a90e31e0a2c66"
  },
  {
    "url": "assets/js/8.b7de61b8.js",
    "revision": "5a2aa5f992fbde40633c51b9157b7ebc"
  },
  {
    "url": "assets/js/9.d77d6cc4.js",
    "revision": "389bc58c5e18002b4c081f12f3ea6270"
  },
  {
    "url": "assets/js/app.85f94f99.js",
    "revision": "7b2d617fbf2caec2e10218c7f226ba4a"
  },
  {
    "url": "guide/bitbucket.html",
    "revision": "57c1d556b4b393ff62a9e1f224b2b43d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ea8d627707102d1933d7e7ca682b5cc5"
  },
  {
    "url": "guide/github.html",
    "revision": "8a32ccd03e6e06f5404c05a4c49cc11a"
  },
  {
    "url": "guide/gitlab.html",
    "revision": "56d843284ff3894db7243a44dc1752a2"
  },
  {
    "url": "guide/index.html",
    "revision": "423e8aed5b0445f5951229ae428bf5f0"
  },
  {
    "url": "guide/styles.html",
    "revision": "9f21ee551815b23921d3afdbfaf645d5"
  },
  {
    "url": "guide/supported-platforms.html",
    "revision": "64b56d4ee3c6538acb79a1e8ca6c5968"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "67a8a87a4ff8ce12f1c0bacefcff30bb"
  },
  {
    "url": "index.html",
    "revision": "0a3fcd19ed888bceee7a9ae9df8cd9d6"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "options/index.html",
    "revision": "224523af89227b347c7f830109e42557"
  },
  {
    "url": "zh/guide/bitbucket.html",
    "revision": "ff03ebfcdc951202a62b81b56a6aff15"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "023b3b404b997fd5ec555816536c3f9b"
  },
  {
    "url": "zh/guide/github.html",
    "revision": "ce015a815173bc78558a2ad0ffcb592a"
  },
  {
    "url": "zh/guide/gitlab.html",
    "revision": "8bfb3f5f840a2d7847ca47f0d60e0399"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "08d56bf8b1194d5694caa4853545c928"
  },
  {
    "url": "zh/guide/styles.html",
    "revision": "c15e27cdafe74922ac7665193180f788"
  },
  {
    "url": "zh/guide/supported-platforms.html",
    "revision": "4e92b63b14fb315c075ee6b4d79724ee"
  },
  {
    "url": "zh/guide/vuepress.html",
    "revision": "a72c5f893c39527b43c9c0a577f29abe"
  },
  {
    "url": "zh/index.html",
    "revision": "300614c9d55614f3d86b015a8bac4b22"
  },
  {
    "url": "zh/options/index.html",
    "revision": "3d4ca0534b1f67d5a4e13af2c4343eca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
