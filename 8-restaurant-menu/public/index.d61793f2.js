!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};var i=function(e){var i=t[e];if(null==i)throw new Error("Could not resolve bundle with id "+e);return i};(function(e){for(var i=Object.keys(e),a=0;a<i.length;a++)t[i[a]]=e[i[a]]})(JSON.parse('{"5knb0":"index.d61793f2.js","4IPLO":"avocado-salad.158bf2ed.jpg","pQgvC":"house-salad.54097c92.jpg","3VMxA":"mediterranean-salad.6cbc62b5.jpg","2Sahu":"gnocchi.0c9746d7.jpg","6Ngcd":"lobster-ravioli.9a2bad06.jpg","7opNc":"pasta-bolognese.423fa179.jpg","3usPE":"pasta-with-shrimp.12662555.jpg","76XzN":"penne-alla-vodka.3a2705ab.jpg","1MWuC":"bbq-shrimp.8076ee45.jpg","22myR":"fish-fry.64d78326.jpg","30Tdw":"grilled-salmon.d6cc952b.jpg","2khjc":"sushi-platter.94057515.jpg","1r6xs":"filet-mignon.a45d8e2f.jpg","6BFxA":"chocolate-cake.2b9d1a43.jpg","eRK5n":"death-by-brownie.3903f039.jpg","49n9f":"tiramisu.319c98cc.jpg","gGLtZ":"very-berry-cheesecake.2f2c204f.jpg"}'));var a=null;var r,c=function(){return a||(a=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return(""+e[0]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}()),a},n=i;function s(e){if(""===e)return".";var t="/"===e[e.length-1]?e.slice(0,e.length-1):e,i=t.lastIndexOf("/");return-1===i?".":t.slice(0,i)}function d(e,t){if(e===t)return"";var i=e.split("/");"."===i[0]&&i.shift();var a,r,c=t.split("/");for("."===c[0]&&c.shift(),a=0;(a<c.length||a<i.length)&&null==r;a++)i[a]!==c[a]&&(r=a);var n=[];for(a=0;a<i.length-r;a++)n.push("..");return c.length>r&&n.push.apply(n,c.slice(r)),n.join("/")}(r=function(e,t){return d(s(n(e)),n(t))})._dirname=s,r._relative=d;const o=[{title:"Avocado Salad",price:"10.50",imgSrc:e(c()+r("5knb0","4IPLO")),type:"salad",description:"Spinach, tomato, and avocado salad."},{title:"House Salad",price:"9.50",imgSrc:e(c()+r("5knb0","pQgvC")),type:"salad",description:"Our signature salad, served with a side of bread."},{title:"Mediterranean Salad",price:"11.50",imgSrc:e(c()+r("5knb0","3VMxA")),type:"salad",description:"Leafy greens topped with tomatoes and feta cheese."},{title:"Gnocchi",price:"17.50",imgSrc:e(c()+r("5knb0","2Sahu")),type:"pasta",description:"Gnocchi with pesto sauce, topped with parmesean cheese."},{title:"Lobster Ravioli",price:"20",imgSrc:e(c()+r("5knb0","6Ngcd")),type:"pasta",description:"Ravioli filled with lobster, topped with creamy sauce and greens."},{title:"Pasta Bolognese",price:"18",imgSrc:e(c()+r("5knb0","7opNc")),type:"pasta",description:"Pasta with our signature bolognese sauce."},{title:"Pasta with Shrimp",price:"17.50",imgSrc:e(c()+r("5knb0","3usPE")),type:"pasta",description:"Pasta topped with shrimp and chopped tomatoes."},{title:"Penne alla Vodka",price:"17",imgSrc:e(c()+r("5knb0","76XzN")),type:"pasta",description:"Penne with creamy red sauce."},{title:"BBQ Shrimp",price:"17.50",imgSrc:e(c()+r("5knb0","1MWuC")),type:"seafood",description:"BBQ shrimp, served on a skewer."},{title:"Fish Fry",price:"16.50",imgSrc:e(c()+r("5knb0","22myR")),type:"seafood",description:"Fish fry, served with a side of chips and tartar sauce."},{title:"Grilled Salmon",price:"19.50",imgSrc:e(c()+r("5knb0","30Tdw")),type:"seafood",description:"Grilled salmon, served with a side of roasted vegetables."},{title:"Sushi Platter",price:"16",imgSrc:e(c()+r("5knb0","2khjc")),type:"seafood",description:"A platter of tuna, salmon, and shrimp sushi, served with wasabi and soy sauce."},{title:"Filet Mignon",price:"22",imgSrc:e(c()+r("5knb0","1r6xs")),type:"steak",description:"Our signature filet mignon, cooked to order."},{title:"Chocolate Cake",price:"9",imgSrc:e(c()+r("5knb0","6BFxA")),type:"dessert",description:"Multi-layered chocolate cake."},{title:"Death by Brownie",price:"8.50",imgSrc:e(c()+r("5knb0","eRK5n")),type:"dessert",description:"Decadent chocolate brownie."},{title:"Tiramisu",price:"10",imgSrc:e(c()+r("5knb0","49n9f")),type:"dessert",description:"Our signature tiramisu."},{title:"Very Berry Cheesecake",price:"9.50",imgSrc:e(c()+r("5knb0","gGLtZ")),type:"dessert",description:"Cheesecake served with a side of mixed berries."}],p=document.querySelector("#menu"),l=document.querySelectorAll(".buttons__list .btn");function f(e){const t=document.createElement("article");t.classList.add("item"),t.setAttribute("data-type",e.type),t.innerHTML=function(e){return`\n    <div class="item__image-wrap">\n      <img\n        class="item__image"\n        src="${e.imgSrc}"\n        alt="Picture of ${e.title}"\n      />\n    </div>\n    <section class="item__body">\n      <header class="item__header">\n        <h2 class="item__title">${e.title}</h2>\n        <span class="item__price">${e.price}</span>\n      </header>\n      <p class="item__description">\n      ${e.description}\n      </p>\n    </section>\n  `}(e),p.appendChild(t)}for(let e=0;e<o.length;e++)f(o[e]);l.forEach((e=>{e.addEventListener("click",(()=>{l.forEach((e=>e.classList.remove("btn--active"))),e.classList.add("btn--active");!function(e){const t=p.childNodes;"all"===e?t.forEach((e=>{e.classList.remove("item--inactive")})):t.forEach((t=>{t.dataset.type!=e?t.classList.add("item--inactive"):t.classList.remove("item--inactive")}))}(e.id)}))}))}();
//# sourceMappingURL=index.d61793f2.js.map
