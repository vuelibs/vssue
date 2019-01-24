(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{222:function(t,e,s){"use strict";s.r(e);var a=s(24),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"bitbucket-oauth-consumer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitbucket-oauth-consumer","aria-hidden":"true"}},[t._v("#")]),t._v(" BitBucket OAuth Consumer")]),t._v(" "),s("h2",{attrs:{id:"创建一个新的-oauth-consumer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的-oauth-consumer","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个新的 OAuth Consumer")]),t._v(" "),s("ul",[s("li",[t._v("前往 "),s("strong",[t._v("Bitbucket settings - OAuth")])]),t._v(" "),s("li",[t._v("点击 "),s("strong",[t._v("Add consumer")])])]),t._v(" "),s("p"),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-01.png",alt:"配置 OAuth App - Bitbucket 01"}})]),t._v(" "),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-02.png",alt:"配置 OAuth App - Bitbucket 02"}})]),t._v(" "),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-03.png",alt:"配置 OAuth App - Bitbucket 03"}})]),s("p"),t._v(" "),s("ul",[s("li",[t._v("将 "),s("code",[t._v("Callback URL")]),t._v(" 设置为你的网站 URL（这里我们用 "),s("code",[t._v("localhost:8080")]),t._v(" 作为示例）")]),t._v(" "),s("li",[t._v("取消选择 "),s("code",[t._v("This is a private consumer")])]),t._v(" "),s("li",[t._v("勾选 "),s("code",[t._v("Account - Read")]),t._v(" 和 "),s("code",[t._v("Issues - Write")]),t._v(" 权限")])]),t._v(" "),s("p"),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-04.png",alt:"配置 OAuth App - Bitbucket 04"}})]),t._v(" "),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-05.png",alt:"配置 OAuth App - Bitbucket 05"}})]),s("p"),t._v(" "),s("h2",{attrs:{id:"获取-client-id-和-secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-client-id-和-secret","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取 Client ID 和 Secret")]),t._v(" "),s("p",[t._v("现在你已经创建了一个新的 OAuth Consumer，并得到了相应的  "),s("strong",[t._v("Key")]),t._v(" ("),s("code",[t._v("Client ID")]),t._v(") 和 "),s("strong",[t._v("Secret")]),t._v(" ("),s("code",[t._v("Client Secret")]),t._v(").")]),t._v(" "),s("p"),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-06.png",alt:"配置 OAuth App - Bitbucket 06"}})]),s("p"),t._v(" "),s("h2",{attrs:{id:"配置并启动你的-vssue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置并启动你的-vssue","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置并启动你的 Vssue")]),t._v(" "),s("p",[t._v("复制 "),s("code",[t._v("Client ID")]),t._v(" 和 "),s("code",[t._v("Client Secret")]),t._v("，并设置 "),s("code",[t._v("owner")]),t._v(" 和 "),s("code",[t._v("repo")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("Bitbucket repository 的 URL 模式为 "),s("code",[t._v("https://bitbucket.org/${owner}/${repo}")])])]),t._v(" "),s("p",[t._v("这里我们以 "),s("code",[t._v("https://bitbucket.org/meteorlxy/vssue-demo")]),t._v(" 为例，并把 issue 的 "),s("code",[t._v("title")]),t._v(" 设置为 "),s("code",[t._v("Vssue Demo")]),t._v("。")]),t._v(" "),s("p",[t._v("然后运行 "),s("code",[t._v("anywhere -h localhost 8080")]),t._v("，在 "),s("code",[t._v("localhost:8080")]),t._v(" 监听一个 http server 并返回 "),s("code",[t._v("index.html")]),t._v("。")]),t._v(" "),s("p"),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-07.png",alt:"配置 OAuth App - Bitbucket 07"}})]),s("p"),t._v(" "),s("h2",{attrs:{id:"在本地尝试-vssue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在本地尝试-vssue","aria-hidden":"true"}},[t._v("#")]),t._v(" 在本地尝试 Vssue")]),t._v(" "),s("p",[t._v("Vssue 已经成功运行。点击 "),s("code",[t._v("Login")]),t._v(" 使用 Bitbucket 帐号登录。")]),t._v(" "),s("p"),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-08.png",alt:"配置 OAuth App - Bitbucket 08"}})]),s("p"),t._v(" "),s("p",[t._v("重定向到 Bitbucket 授权页面。点击 "),s("code",[t._v("Grant access")]),t._v(" 来登录。")]),t._v(" "),s("p"),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-09.png",alt:"配置 OAuth App - Bitbucket 09"}})]),t._v(" "),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-10.png",alt:"配置 OAuth App - Bitbucket 10"}})]),s("p"),t._v(" "),s("p",[t._v("如果出现加载评论失败，你需要确认你的仓库是否开启了 "),s("strong",[t._v("Issue Tracker")]),t._v(" 功能。")]),t._v(" "),s("p"),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-11.png",alt:"配置 OAuth App - Bitbucket 11"}})]),s("p"),t._v(" "),s("p",[t._v("在当前页面写下评论吧 ~")]),t._v(" "),s("p"),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-12.png",alt:"配置 OAuth App - Bitbucket 12"}})]),t._v(" "),s("div",{staticClass:"text-align-center"},[s("img",{attrs:{src:"/assets/img/oauth-app-bitbucket-13.png",alt:"配置 OAuth App - Bitbucket 13"}})]),s("p"),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("你可以前往 "),s("a",{attrs:{href:"https://bitbucket.org/meteorlxy/vssue-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("meteorlxy/vssue-demo"),s("OutboundLink")],1),t._v(" 来获取 demo 代码。前往该仓库的 "),s("a",{attrs:{href:"https://bitbucket.org/meteorlxy/vssue-demo/issues/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("#1 issue"),s("OutboundLink")],1),t._v(" 看看发生了什么。")])])])},[],!1,null,null,null);i.options.__file="bitbucket.md";e.default=i.exports}}]);