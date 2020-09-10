(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3aEe":function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return i})),t.d(a,"meta",(function(){return m})),t.d(a,"default",(function(){return j}));var c=t("Ff2n"),s=t("wx14"),n=t("q1tI"),p=t.n(n),b=t("7ljp"),o=t("CZVI"),l=t("iBhN"),r=t("k0vl"),i=(p.a.createElement,!0),m={title:"Utility-Friendly Transitions with @tailwindui/react",description:"Announcing the first release of @tailwindui/react, which introduces a <Transition> component for utility-first enter/leave transitions.",date:"2020-08-27T18:30:00.000Z",authors:[l.c],image:r.a,discussion:"https://github.com/tailwindlabs/tailwindcss/discussions/2262"},d={meta:m},N=function(e){return Object(b.b)(o.a,Object(s.a)({meta:m},e))};function j(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(b.b)(N,Object(s.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Back in February we released ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://tailwindui.com"}),"Tailwind UI"),", a directory of HTML component examples designed for you to copy and paste into your Tailwind projects as a starting point for your own designs."),Object(b.b)("p",null,"We built Tailwind UI as an HTML-only, bring-your-own-JS product to make it as universal as possible, but many designs are inherently interactive and porting those interactive behaviors between JavaScript frameworks is unfortunately not always very easy."),Object(b.b)("p",null,"One example of this is enter/leave transitions, like when you toggle a dropdown menu and see it fade in and out."),Object(b.b)("p",null,"Vue.js has a really neat ",Object(b.b)("inlineCode",{parentName:"p"},"<transition>")," component for enter/leave transitions with a very utility-friendly API:"),Object(b.b)("pre",{className:"language-html"},Object(b.b)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"<"),"transition"),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"enter-active-class"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"transition-opacity duration-75",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"enter-from-class"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"opacity-0",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"enter-to-class"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"opacity-100",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"leave-active-class"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"transition-opacity duration-150",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"leave-from-class"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"opacity-100",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"leave-to-class"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"opacity-0",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"<"),"div")," ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"v-show"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"isShowing",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),"\n    ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-gray-400 italic"}),"\x3c!-- Will fade in and out --\x3e"),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"</"),"div"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),"\n",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"</"),"transition"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),"\n")),Object(b.b)("p",null,"But replicating this in React turns out to be much more difficult, because until now there hasn't been a library designed to support utility-driven transition styling."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"So earlier this week, we released the very first version of ",Object(b.b)("a",Object(s.a)({parentName:"strong"},{href:"https://github.com/tailwindlabs/tailwindui-react"}),"@tailwindui/react"),", a library that provides low-level primitives for turning utility-first HTML into fully interactive UIs.")),Object(b.b)("p",null,"We'll be adding many more components in the coming months ",Object(b.b)("em",{parentName:"p"},"(like dropdowns, toggles, modals, and more, and for Vue too!)")," but thought we'd start with a ",Object(b.b)("inlineCode",{parentName:"p"},"<Transition>")," component to at least get the current Tailwind UI experience for React users up to par with what's possible in Vue and Alpine.js."),Object(b.b)("p",null,"Here's what it looks like to use:"),Object(b.b)("pre",{className:"language-jsx"},Object(b.b)("code",Object(s.a)({parentName:"pre"},{className:"language-jsx"}),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"import")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"{")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Transition")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"}")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"from")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-green"}),"'@tailwindui/react'"),"\n",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"import")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"{")," useState ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"}")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"from")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-green"}),"'react'"),"\n\n",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"function")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-blue"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),"MyComponent")),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"{"),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"const")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"["),"isOpen",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),",")," setIsOpen",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"]")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:""}),"=")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-blue"}),"useState"),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),"false"),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")"),"\n\n  ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-purple"}),"return")," ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"("),"\n    ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"<"),"div"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:""}),"\n      "),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"<"),"button")," ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"onClick"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"{"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"("),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),")")," ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),"=>")," ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-blue"}),"setIsOpen"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"("),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),"!"),"isOpen",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),")"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"}")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:""}),"Toggle"),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"</"),"button"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:""}),"\n      "),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"<"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),"Transition")),"\n        ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"show"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"{"),"isOpen",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"}")),"\n        ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"enter"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"transition-opacity duration-75",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n        ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"enterFrom"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"opacity-0",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n        ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"enterTo"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"opacity-100",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n        ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"leave"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"transition-opacity duration-150",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n        ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"leaveFrom"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"opacity-100",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n        ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-yellow"}),"leaveTo"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-green"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"="),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"'),"opacity-0",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),'"')),"\n      ",Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:""}),"\n        "),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"{"),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-gray-400 italic"}),"/* Will fade in and out */"),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"}"),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:""}),"\n      "),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"</"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:""}),"Transition")),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:""}),"\n    "),Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-red"}),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),"</"),"div"),Object(b.b)("span",Object(s.a)({parentName:"span"},{className:"text-code-white"}),">")),"\n  ",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),")"),"\n",Object(b.b)("span",Object(s.a)({parentName:"code"},{className:"text-code-white"}),"}"),"\n")),Object(b.b)("p",null,Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindui-react"}),"Read the documentation")," to learn more about advanced functionality, like:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Rendering without an extra DOM element"),Object(b.b)("li",{parentName:"ul"},"Co-ordinating related transitions"),Object(b.b)("li",{parentName:"ul"},"Transitioning on initial mount.")),Object(b.b)("p",null,"Check it out in action in this CodeSandbox demo:"),Object(b.b)("iframe",{src:"https://codesandbox.io/embed/dreamy-villani-1lz49?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&view=preview",style:{height:500},className:"w-full rounded-md overflow-hidden",title:"dreamy-villani-1lz49",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(b.b)("p",null,"Try it out on your projects, and if you run into any problems, ",Object(b.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindui-react"}),"report an issue on GitHub"),"."))}j.isMDXComponent=!0},CZVI:function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var c=t("wx14"),s=t("Ff2n"),n=t("q1tI"),p=t.n(n),b=t("8Kt/"),o=t.n(b),l=p.a.createElement;function r(e){var a=e.children;return l("h1",{className:"text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"},a)}var i=t("SYun"),m=t.n(i),d=t("YFqc"),N=t.n(d),j=t("nOHt"),O=t("7ljp"),x=p.a.createElement,w={pre:function(e){var a=e.className,t=Object(s.a)(e,["className"]);return x("pre",Object(c.a)({className:"".concat(a," rounded-md bg-gray-800 py-3 px-4 overflow-x-auto")},t))},"pre.code":function(e){var a=e.className,t=Object(s.a)(e,["className"]);return x("code",Object(c.a)({className:"".concat(a," text-gray-200")},t))}},u=m()("{dddd}, {MMMM} {DD}, {YYYY}");function h(e){var a=e.meta,t=e.children,c=e.posts,s=Object(j.useRouter)(),n=c.findIndex((function(e){return e.link===s.pathname})),p=c[n+1],b=c[n-1];return x("article",{className:"xl:divide-y xl:divide-gray-200"},x(o.a,null,x("title",null,a.title," \u2013 Tailwind CSS"),x("meta",{name:"twitter:card",content:"summary_large_image"}),x("meta",{name:"twitter:site",content:"@tailwindcss"}),x("meta",{name:"twitter:creator",content:"@tailwindcss"}),x("meta",{name:"twitter:title",content:"".concat(a.title," \u2013 Tailwind CSS")}),x("meta",{name:"twitter:description",content:a.description}),x("meta",{name:"twitter:image",content:"https://blog.tailwindcss.com".concat(a.image)}),x("meta",{property:"og:url",content:"https://blog.tailwindcss.com".concat(s.pathname)}),x("meta",{property:"og:type",content:"article"}),x("meta",{property:"og:title",content:"".concat(a.title," \u2013 Tailwind CSS")}),x("meta",{property:"og:description",content:a.description}),x("meta",{property:"og:image",content:"https://blog.tailwindcss.com".concat(a.image)}),x("meta",{name:"description",content:a.description})),x("header",{className:"pt-6 xl:pb-10"},x("div",{className:"space-y-1 text-center"},x("dl",{className:"space-y-10"},x("div",null,x("dt",{className:"sr-only"},"Published on"),x("dd",{className:"text-base leading-6 font-medium text-gray-500"},x("time",{dateTime:a.date},u.render(new Date(a.date)))))),x("div",null,x(r,null,a.title)))),x("div",{className:"divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:col-gap-6 pb-16 xl:pb-20",style:{gridTemplateRows:"auto 1fr"}},x("dl",{className:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200"},x("dt",{className:"sr-only"},"Authors"),x("dd",null,x("ul",{className:"flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8"},a.authors.map((function(e){return x("li",{key:e.twitter,className:"flex items-center space-x-2"},x("img",{src:e.avatar,alt:"",className:"w-10 h-10 rounded-full"}),x("dl",{className:"text-sm font-medium leading-5 whitespace-no-wrap"},x("dt",{className:"sr-only"},"Name"),x("dd",{className:"text-gray-900"},e.name),x("dt",{className:"sr-only"},"Twitter"),x("dd",null,x("a",{href:"https://twitter.com/".concat(e.twitter),className:"text-teal-500 hover:text-teal-600"},e.twitter))))}))))),x("div",{className:"divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2"},x("div",{className:"prose max-w-none pt-10 pb-8"},x(O.a,{components:w},t)),a.discussion&&x("div",{className:"pt-6 pb-16"},x("p",null,"Want to talk about this post?"," ",x("a",{href:a.discussion,className:"font-medium text-teal-500 hover:text-teal-600"},"Discuss this on GitHub \u2192")))),x("footer",{className:"text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2"},(b||p)&&x("div",{className:"space-y-8 py-8"},b&&x("div",null,x("h2",{className:"text-xs tracking-wide uppercase text-gray-500"},"Next Article"),x("div",{className:"text-teal-500 hover:text-teal-600"},x(N.a,{href:b.link},x("a",null,b.title)))),p&&x("div",null,x("h2",{className:"text-xs tracking-wide uppercase text-gray-500"},"Previous Article"),x("div",{className:"text-teal-500 hover:text-teal-600"},x(N.a,{href:p.link},x("a",null,p.title))))),x("div",{className:"pt-8"},x(N.a,{href:"/"},x("a",{className:"text-teal-500 hover:text-teal-600"},"\u2190 Back to the blog"))))))}},FTxL:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utility-friendly-transitions-with-tailwindui-react",function(){return t("3aEe")}])},k0vl:function(e,a,t){"use strict";a.a="/_next/static/media/card.816e75ac48ca1cba2b58b834a8df9063.jpg"}},[["FTxL",0,2,1,3]]]);