(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(t,e,s){"use strict";s.r(e);var o=s(24),n=Object(o.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("Vssue is a "),s("strong",[t._v("Vue")]),t._v(" component / plugin, which can enable comments for your static pages.")]),t._v(" "),s("p",[t._v('As your pages are "static", you don\'t have database nor backend APIs, but you still want users to login and post comments. With the help of OAuth API of the code hosting platforms (e.g. Github, Gitlab, Bitbucket, Coding, etc.), Vssue can help users to login with account of those platforms, store the comments in their '),s("strong",[t._v("Issue")]),t._v(" System, and display the comments on current page.")]),t._v(" "),s("p",[t._v("This is how "),s("strong",[t._v("Vssue")]),t._v(" get its name : "),s("strong",[t._v("Vue")]),t._v("-powered and "),s("strong",[t._v("Issue")]),t._v("-based.")]),t._v(" "),s("h2",{attrs:{id:"how-vssue-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-vssue-works","aria-hidden":"true"}},[t._v("#")]),t._v(" How Vssue works")]),t._v(" "),s("p",[t._v("Following the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6749",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth 2 spec"),s("OutboundLink")],1),t._v(", platforms provide OAuth API. With the help of them, users can login to Vssue with accounts of the platform and access comments.")]),t._v(" "),s("p",[t._v("Here is the brief process about how Vssue works:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("           Vssue                                             Platform\n  ┌──────────────────────┐                            ┌────────────────────┐\n  │     Click Login      ├───────── redirect ────────>│ Authorization Page │\n  └──────────────────────┘                            └──────────┬─────────┘\n  ┌──────────────────────┐                                       │\n  │                      │<─── redirect with code ───────────────┘\n  │ Handle Authorization │                            ┌────────────────────┐\n  │                      │<───── request token ──────>│                    │\n  └──────────────────────┘                            │                    │\n  ┌──────────────────────┐                            │                    │\n  │     Get Comments     │<─── request with token ───>│    Platform  API   │\n  └──────────────────────┘                            │                    │\n  ┌──────────────────────┐                            │                    │\n  │     Post Comments    ├──── request with token ───>│                    │\n  └──────────────────────┘                            └────────────────────┘\n          ......\n")])])]),s("p",[t._v("After Vssue is authorized by users for the platform in the Authorization Page, the platform will redirect back to Vssue with "),s("code",[t._v("code")]),t._v(".")]),t._v(" "),s("p",[t._v("Vssue will request the platform for users' "),s("code",[t._v("token")]),t._v(" with "),s("code",[t._v("code")]),t._v(", and store "),s("code",[t._v("token")]),t._v(' in localstorage, which means that users have "logined" to Vssue with the account of the platform.')]),t._v(" "),s("p",[t._v("Then Vssue could get the user's info and get the comments of this page. And users could post comments, too.")]),t._v(" "),s("h2",{attrs:{id:"comparison-with-similar-projects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparison-with-similar-projects","aria-hidden":"true"}},[t._v("#")]),t._v(" Comparison with similar projects")]),t._v(" "),s("p",[s("strong",[t._v("Vssue")]),t._v(" is inspired by "),s("a",{attrs:{href:"https://github.com/imsun/gitment",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Gitment")]),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Gitalk")]),s("OutboundLink")],1),t._v(", with some differences:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Vssue")]),t._v(" supports Github, Gitlab and Bitbucket, and can be extended to other platform easily. "),s("strong",[t._v("Gitment")]),t._v(" and "),s("strong",[t._v("Gitalk")]),t._v(" only support Github.")]),t._v(" "),s("li",[s("strong",[t._v("Vssue")]),t._v(" can post, edit and delete comments. "),s("strong",[t._v("Gitment")]),t._v(" and "),s("strong",[t._v("Gitalk")]),t._v(" can only post comments.")]),t._v(" "),s("li",[s("strong",[t._v("Vssue")]),t._v(" is based on "),s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),s("OutboundLink")],1),t._v(" so can be integrated into Vue projects, and provides a "),s("router-link",{attrs:{to:"./vuepress.html"}},[t._v("Vuepress Plugin")]),t._v(". "),s("strong",[t._v("Gitment")]),t._v(" is based on vanilla javascript, and "),s("strong",[t._v("Gitalk")]),t._v(" is based on "),s("a",{attrs:{href:"https://github.com/developit/preact",target:"_blank",rel:"noopener noreferrer"}},[t._v("Preact"),s("OutboundLink")],1),t._v(".")],1)])])},[],!1,null,null,null);n.options.__file="index.md";e.default=n.exports}}]);