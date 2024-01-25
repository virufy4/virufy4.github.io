"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5631],{2656:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(7294),s=a(3976),r=a(9703),i=a(4959),o=a(1496);const l=[{mediaLink:"/barda-press-release",id:"section1",imageName:"Virufy-Award-article",country:" "},{mediaLink:"https://www.forbes.com.mx/emprendedores-app-diagnostico-covid-19-toser-telefono/",id:"section2",imageName:"forbes-article",country:" "},{mediaLink:"https://www.msn.com/es-pe/noticias/peru/covid-19-aplicativo-virufy-puede-diagnosticar-el-virus-mediante-el-an%C3%A1lisis-de-la-tos/ar-BB1ddBvf",id:"section3",imageName:"msn-article",country:" "},{mediaLink:"https://www.expreso.com.pe/actualidad/virufy-plataforma-que-permite-detectar-si-estamos-contagiados-con-covid-19/",id:"section4",imageName:"Expreso",country:"Peru"},{mediaLink:"https://oywj.org/ambassadors-in-action/2020/05/oywj-ambassador-targets-covid-19-using-ai/",id:"section5",imageName:"OYW Japan 2",country:"Japan"},{mediaLink:"https://www.oneyoungworld.com/north-american-ambassadors-frontlines-covid-19-response",id:"section6",imageName:"OYW_white_rgb",country:" "},{mediaLink:"https://www.oneyoungworld.com/news-item/july-2020-ambassadors-month",id:"section7",imageName:"OYW_white_rgb",country:" "},{mediaLink:"https://www.oneyoungworld.com/news-item/thousands-attend-oyws-global-digital-events-july-recap-what-youve-missed",id:"section8",imageName:"OYW_white_rgb",country:" "},{mediaLink:"https://www.oneyoungworld.com/event/one-young-world-tokyo-caucus-2020",id:"section9",imageName:"OYW_white_rgb",country:" "},{mediaLink:"https://youtu.be/UZU3rPTEPfU",id:"section10",imageName:"virufyPresentation",country:"Japan"},{mediaLink:"https://health-sounds.cl.cam.ac.uk/workshop20/short-talks.html",id:"section11",imageName:"soundsOfCovid",country:" "}],c=[{id:"video1",source:"https://www.youtube.com/embed/UZU3rPTEPfU"}];const m=e=>{const{id:t,source:a}=e;return n.createElement("div",{className:" wrapper md:flex"},n.createElement("iframe",{key:t,width:"560",height:"315",src:a,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",allowfullscreen:"allowfullscreen"}))},A=e=>{const{section:t,image:a,person:{id:s,mediaLink:i}}=e,l=(0,r.useIntl)();return n.createElement("section",{className:"wrapper md:flex"},n.createElement("div",{className:"lg:w-2/5"},n.createElement(o.Z,{className:"mx-auto w-1\\/2",fluid:a})),n.createElement("div",{className:"lg:w-2/3 mx-10"},n.createElement("p",{className:"mb-8"},l.formatMessage({id:`news.${t}.${s}.date`})),n.createElement("h3",{className:"mb-8 font-bold text-2xl"},l.formatMessage({id:`news.${t}.${s}.title`})),n.createElement("p",null,l.formatMessage({id:`news.${t}.${s}.name`})),n.createElement("p",{className:"mb-8"},l.formatMessage({id:`news.${t}.${s}.city`}),l.formatMessage({id:`news.${t}.${s}.country`})),n.createElement("a",{target:"_blank",rel:"noreferrer",href:i,className:"text-black"},n.createElement("u",null,l.formatMessage({id:`news.${t}.${s}.readMoreLink`})))))},d=e=>{const t=(0,r.useIntl)(),{0:a,1:s}=(0,n.useState)(!0);return n.createElement(n.Fragment,null,n.createElement("button",{onClick:()=>s(!a)},t.formatMessage({id:"news.headers.filter"})),n.createElement("div",{className:"flex flex-col "+(a?"hidden":"")},["Argentina ","Brazil","Colombia","Japan","Mexico","Peru"].map((t=>n.createElement("button",{onClick:()=>(t=>{s(!0),e.setCountry(t)})(t),key:t},t)))),n.createElement("p",null,e.country&&n.createElement("button",{className:"font-bold",onClick:()=>e.setCountry("")},e.country,n.createElement("img",{className:"inline-block",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAX1QTFRFAAAADAwMCgoKDAwMISEhCAgICAgIDw8PBAQEAwMDBwcHEhISCwsLBAQEAwMDCAgIICAgCQkJAQEBAAAAAwMDCAgIUFBQDAwMBQUFAAAAAgICDQ0NICAgCQkJBAQEAQEBBgYGDw8PGBgYAgICAAAAAgICBgYGERERBQUFAgICAQEBCQkJISEhAQEBBQUFDg4OBgYGAwMDAQEBAgICBQUFBwcHAwMDBQUFDAwMExMTFRUVBwcHAwMDAgICAwMDAgICDg4OGxsbExMTAgICAAAAERERbm5uBwcHBAQEAQEBCwsLAgICAAAAAgICDAwMJycnBwcHAgICAQEBBQUFDg4OGRkZEBAQBAQEBwcHEBAQBgYGAwMDLi4uAgICDAwMBQUFCAgIAwMDBQUFCwsLDg4OBQUFGhoaBgYGDw8PFxcXEBAQBAQEBQUFEBAQGxsbGBgYBAQEAQEBGBgYOjo6CwsLBwcHAgICBAQEGxsbFRUVFRUVFRUVBwcHDAwMGhoa+E4J8AAAAH90Uk5TAAo4GwNHXBVjsmQGLbvSXgIs7P/ofQE4rv32NwMMZPeiEgLg/t5/DUi9810C+MIuK4X635d2vMRiEgIop+rf8lsUDMv8dwEkg+4FtvXnYwOD6PnGKQYtvGU4ruAD20G3OoeVHUi9AsIuCz7hz1sMHcn0JAJhsLTPByMSASw7Ds1idg8AAAEhSURBVHicY2AgFzAyMcOYLKxs7EgyHJxcUC43Dy8fvwBcQlBIWERUDMwUl5AUlpKWgYjLygkJCwvLKygqMXCLK6sA2apq6mAZDU1hENDSZtfhkQBJCOvq6YNlDAyNwFLGJqZmkmCWuYUlWMbK2gYsIGlrJw+WsHdwhLnAydlFGAHsXd0Qrnb38FSBikuaOyBJMHhZe/tAJXz9HBmQgX9AIEQmKDgERSI0LFweqicwAjlwGCKjJOEOgIUGWEdkNNh+SYgLwaEBBjFhURCJwFgfWGhAZOLioT73S0iEhkZSMlgmJRXm8zRoaOimZ4BlMrOy4T6HhEZObh7UCfkFhTCfA0PDKKeoGO66klILR1holJXnIiQYKiqrYMzqmto6BnIBAGaCN8i0lTGeAAAAAElFTkSuQmCC"}))))};function w(e){let{data:t}=e;const a=t.allFile.edges,o=(0,r.useIntl)(),{0:w,1:g}=(0,n.useState)("");return n.createElement(s.Z,null,n.createElement(i.Z,{title:"News | Virufy"}),n.createElement("div",{className:"wrapper lg:flex items-center justify-between md:py-4"},n.createElement("h1",{classNmae:"font-bold text-4xl"},o.formatMessage({id:"news.headers.header"})),n.createElement("span",null,n.createElement(d,{setCountry:g,country:w}))),n.createElement("section",{className:"wrapper"},n.createElement("a",{target:"_blank",rel:"noreferrer",href:"/smartphone-detection",className:"text-black wrapper md:flex"},"Smartphone Detection Article"),n.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}},l.filter((e=>""===w||e.country===w)).map((e=>{const t=a.find((t=>{let{node:{name:a}}=t;return a===e.imageName})).node.childImageSharp.fluid;return n.createElement("div",{className:"lg:w-2/5"},n.createElement(A,{key:`${l}${e.id}`,section:"news",image:t,person:e}))}))),n.createElement("h2",null,"Videos"),n.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}},c.map((e=>n.createElement(m,{id:e.id,source:e.source}))))))}}}]);
//# sourceMappingURL=component---src-pages-news-jsx-bc7caae5f9f664d68fa9.js.map