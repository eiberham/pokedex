(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{39:function(n,e,t){"use strict";var a=t(44),r=t.n(a);e.a=r.a.create({baseURL:"https://pokeapi.co/api/v2"})},87:function(n,e,t){"use strict";t.r(e);var a=t(42),r=t.n(a),c=t(43),i=t.n(c),o=t(34),s=t.n(o),l=t(32),u=t.n(l),f=t(0),m=t.n(f),p=t(1),d=t(39),g=t(33),y=t(41),v=t(7),h=t.n(v);function E(){var n=u()(["\n    display: flex;\n    flex-direction: column;\n    justify-content:  center;\n    align-items: center;\n    font-family: 'Lacquer', sans-serif;\n    img { transform: scale(1);}\n    figure {\n        margin: 0;\n        display: flex;\n        flex-direction:column;\n        align-items: center;\n        font-family: inherit;\n        font-size: 2rem;\n        color: black;\n    }\n    .details {\n        \n        font-size: 1.2rem;\n        font-weight: 700;\n        color: red;\n        span { display: flex; justify-content: center;}\n        h5 {\n            font-size: 1.2rem;\n            color: green;\n        }\n    }\n"]);return E=function(){return n},n}var x=g.a.div(E()),b=function(n){var e=n.pokemon;return e.sprites?m.a.createElement(x,null,m.a.createElement("figure",null,m.a.createElement("img",{src:e.sprites.front_shiny,alt:e.name}),m.a.createElement("figcaption",null,e.name)),m.a.createElement("section",{className:"details"},e.types.map((function(n){return m.a.createElement("span",null,n.type.name)})),m.a.createElement("h5",null,"Base Experience: ",e.base_experience))):m.a.createElement(x,null)};b.propTypes={children:h.a.node.isRequired};var w=b;function k(){var n=u()(["\n    margin: 0 auto;\n    width: 408px;\n    height: 385px;\n    background: transparent;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n"]);return k=function(){return n},n}var j=Object(g.a)(y.a.section)(k());e.default=Object(p.f)((function(n){var e=n.match,t=Object(y.b)({opacity:1,from:{opacity:0}}),a=Object(f.useState)({}),c=s()(a,2),o=c[0],l=c[1];return Object(f.useEffect)((function(){(function(){var n=i()(r.a.mark((function n(){var t,a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.get("/pokemon/".concat(e.params.name));case 2:t=n.sent,a=t.data,l(a);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e.params.name]),o?m.a.createElement(j,{style:t},m.a.createElement(m.a.Fragment,null,m.a.createElement(w,{pokemon:o}))):m.a.createElement("div",null,"Loading ...")}))}}]);
//# sourceMappingURL=7.bundle.js.map