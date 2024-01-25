"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8039],{5842:function(e,a,t){t.d(a,{Z:function(){return r}});var m=t(7294),l=t(9703);const i="inline-block text-lg py-3 px-12 no-underline rounded-xl",n={primary:"text-white bg-blue",secondary:"text-black bg-white"};function s(e,a){return void 0===a&&(a="primary"),`${i} ${n[a]} ${e}`}function r(e){let{children:a,style:t,...i}=e;return m.createElement(l.Link,Object.assign({},i,{className:s(i.className,t)}),a)}},8624:function(e,a,t){t.d(a,{Z:function(){return n}});var m=t(7294),l=t(1496),i=t(9703);function n(e){const a=(0,i.useIntl)(),{image:t,person:{id:n,defaultName:s,mediaLink:r}}=e;return m.createElement("div",{className:"flex flex-col text-left\t mx-auto mb-4 w-full"},m.createElement("a",{className:"w-full",target:"_blank",rel:"noreferrer",href:r},m.createElement(l.Z,{className:"mx-auto my-2 rounded-md overflow-hidden team-icons",imgStyle:{objectFit:"fill"},fluid:t}),m.createElement("h4",{className:"mt-4 text-center font-semibold text-black no-underline\t"},a.formatMessage({id:`OYW.ambassador.ambassador-list.${n}.name`,defaultMessage:s}))),m.createElement("div",{className:""}),m.createElement("p",{className:"font-medium text-center text-lg  "},a.formatMessage({id:`OYW.ambassador.ambassador-list.${n}.descriptionOYW`})),m.createElement("p",{className:"break-normal mt-6 leading-4 text-lg text-center xs:pb-8"},a.formatMessage({id:`OYW.ambassador.ambassador-list.${n}.descriptionVirufy`})))}},9089:function(e,a,t){t.d(a,{C:function(){return m}});const m={ambassadors:[{mediaLink:"https://www.linkedin.com/in/amilkhanzada/",id:"amil",defaultName:"Amil Khanzada",imageName:"amil"},{mediaLink:"https://www.linkedin.com/in/madhavdatt/",id:"madhav",defaultName:"Madhav Datt",imageName:"madhav"},{mediaLink:"https://www.linkedin.com/in/marcos-deza/",id:"marcos",defaultName:"Marcos Deza",imageName:"marcos"},{mediaLink:"https://www.linkedin.com/in/yulieq/",id:"yulie",defaultName:"Yulie Qiao",imageName:"yulie"},{mediaLink:"https://www.linkedin.com/in/ayomide-owoyemi/",id:"ayomide",defaultName:"Ayomide Owoyemi, MD",imageName:"ayomide"},{mediaLink:"https://www.linkedin.com/in/drshreyasreeram-537935182/",id:"shreya",defaultName:"Shreya Sreeram, MD",imageName:"shreya"},{mediaLink:"https://www.linkedin.com/in/lauravelasquezh/",id:"lauravelasquezh",defaultName:"Laura Velasquez",imageName:"lauravelasquezh"},{mediaLink:"https://www.linkedin.com/in/namathom/",id:"nathan",defaultName:"Nathan Thomas",imageName:"nathan"},{mediaLink:"https://www.linkedin.com/in/jasonpareja/",id:"jason",defaultName:"Jason Pareja Jauregui",imageName:"jason"},{mediaLink:"https://www.linkedin.com/in/katherine-thalia-ortiz-le%C3%B3n-bb7408a0/",id:"katherine",defaultName:"Katherine Thalia Ortiz León",imageName:"katherine"},{mediaLink:"https://www.linkedin.com/in/gonzalo-roiffe-62421592/",id:"gonzalo",defaultName:"Gonzalo Roiffe",imageName:"gonzalo"},{mediaLink:"https://www.linkedin.com/in/matd-bolivia/?originalSubdomain=bo",id:"annelisse",defaultName:"Annelisse Torrez Daza",imageName:"annelisse"},{mediaLink:"https://www.linkedin.com/in/ver%C3%B3nica-guzm%C3%A1n-quilaqueo-91220a34/",id:"veronica",defaultName:"Verónica Guzmán Quilaqueo",imageName:"veronica"},{mediaLink:"https://www.linkedin.com/in/jean-sebastian-pedraza-paez-02b8aa11a/",id:"sebastian",defaultName:"Sebastian Pedraza",imageName:"sebastian"},{mediaLink:"https://www.linkedin.com/in/kenmaru-suedomi-b871555b/",id:"kenmaru",defaultName:"Kenmaru Suedomi",imageName:"kenmaru"},{mediaLink:"https://www.linkedin.com/in/kapil-narain-382ab712b/",id:"kapil",defaultName:"Kapil Narain, MD",imageName:"kapil"},{mediaLink:"https://www.linkedin.com/in/leonard-buhrz/",id:"leonard",defaultName:"Leonard Burhz",imageName:"leonard"},{mediaLink:"https://www.linkedin.com/in/allana-doyle/",id:"allana",defaultName:"Allana Doyle",imageName:"allana"},{mediaLink:"https://www.linkedin.com/in/kavya-madhavan/",id:"kavya",defaultName:"Kavya Madhavan",imageName:"kavya"}],testimonials:[{id:"annelisse",defaultName:"Annelisse Torrez Daza",country:"Bolivia"},{id:"sebastian",defaultName:"Sebastian Pedraza",country:"Colombia"},{id:"gonzalo",defaultName:"Gonzalo Roiffe",country:"Argentina"},{id:"marcos",defaultName:"Marcos Deza",country:"Argentina"}]}},6233:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var m=t(7294),l=t(3976),i=t(9703),n=t(5444),s=t(4959),r=t(1496),d=t(9089);const o=e=>{let{testimonial:a,active:t}=e;const l=(0,i.useIntl)(),s=(0,n.useStaticQuery)("2654117148"),d={};return s.allFile.edges.forEach((e=>d[e.node.name]=e.node.childImageSharp.fluid)),m.createElement("div",{style:{display:""+(t?"block":"none")},className:"fade"},m.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-6 w-full h-auto rounded-2xl bg-blue-100 md:py-10 text-left"},m.createElement("div",{className:"w-auto mt-6 xs:pl-12"},m.createElement(r.Z,{className:"w-24 md:w-32 rounded-full ",imgStyle:{objectFit:"fill"},fluid:d[a.id],alt:"Annelisse Torrez Daza"})),m.createElement("div",{className:"md:ml-3 md:py-16  col-span-2"},m.createElement("p",{className:"font-bold text-xl"},a.defaultName),m.createElement("p",{className:"text-left xs:pl-2 "},a.country)),m.createElement("div",{className:"col-span-2 md:py-8 xs:py-2"},m.createElement("p",null,l.formatMessage({id:`OYW.testimonials.${a.id}`})))))};var c=e=>{let{images:a}=e;const t=(0,i.useIntl)(),{0:l,1:n}=(0,m.useState)(1);(0,m.useCallback)((e=>{let a=l+e;a<=0&&(a=d.C.testimonials.length),a>=d.C.testimonials.length+1&&(a=1),n(a)}),[l,n]);return m.createElement("section",{style:{maxWidth:"calc(100vw - 4rem)"},className:"w-full"},m.createElement("h2",{className:"md:mb-6 mt-2 xs:text-center"},t.formatMessage({id:"OYW.testimonials.title"})),m.createElement("div",{className:"mb-8  xs:mt-6"},m.createElement("p",null,t.formatMessage({id:"OYW.testimonials.intro"}))),m.createElement("div",{className:"slideshow-container"},d.C.testimonials.map(((e,t)=>m.createElement(o,{key:`testimonial-${t}`,images:a,testimonial:e,active:l===t+1})))),m.createElement("div",{style:{marginTop:"24px",textAlign:"center"}},d.C.testimonials.map(((e,a)=>m.createElement("span",{className:(l===a+1?" active ":"")+" dot",onClick:()=>n(a+1)})))))},u=t(6911),f=t(5842),g=t(8624),x={learMoreOYW:"https://www.oneyoungworld.com/",donateLink:"https://virufy.org/study/welcome",donate:"https://www.gofundme.com/f/virufy-covid19",learnMoreDisclaimerLink:"#",getInTouchLink:"mailto:info@virufy.org"};const p=e=>{const{id:a,source:t}=e;return m.createElement("div",{className:"w-full h-full"},m.createElement("iframe",{style:{width:"100%",height:"100%"},key:a,title:"YouTube video player",class:"video",src:t,"data-cookieconsent":"marketing",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))},h=[{id:"video1",source:"https://www.youtube.com/embed/hvJgwPNYnZo"}],w={supporters:"supporters",oyw:"one young world",teamLeads:"team Leads"};function b(e){let{data:a}=e;const t=(0,i.useIntl)(),{0:o,1:b}=(0,m.useState)(w.oyw),N={};a.allFile.edges.forEach((e=>N[e.node.name]=e.node));const y="font-semibold text-lg bg-white xs:text-2xl border-b-4 border-solid border-green focus:outline-none active:outline-none",E="bg-white text-gray-500 text-lg xs:text-2xl font-semibold xs:py-2.5";return m.createElement(l.Z,{className:"font-montserrat"},m.createElement(s.Z,{title:"OYW | Virufy"}),m.createElement("div",{className:"md:hidden"},m.createElement(u.Z,{fluid:N.oyw.childImageSharp.fluid,imgStyle:{objectFit:"contain"},className:" text-white "},m.createElement(r.Z,{className:"pt-16 ml-6 xs:w-14 xs:h-6 ",imgStyle:{objectFit:"contain"},fluid:N.logoOne.childImageSharp.fluid}),m.createElement("p",{className:"pb-24  xs:px-4 xs:text-sm"},t.formatMessage({id:"OYW.topbanner.title"}))),m.createElement("h3",{className:"text-center text-gray-500 pt-4 pb-12 mx-8"},t.formatMessage({id:"OYW.topbanner.description"}))),m.createElement(u.Z,{fluid:N.oyw.childImageSharp.fluid,imgStyle:{objectFit:"contain"},className:" text-white xs:hidden"},m.createElement(r.Z,{className:"mx-16 w-36 h-16",imgStyle:{objectFit:"contain"},fluid:N.logoOne.childImageSharp.fluid}),m.createElement("h3",{className:"md:mt-2 mx-16 pb-12"},t.formatMessage({id:"OYW.topbanner.title"})),m.createElement("h3",{className:"md:text-center pt-32 pb-12 m-12 px-12 font-medium"},t.formatMessage({id:"OYW.topbanner.description"}))),m.createElement("div",{className:"xs:flex xs:justify-between md:text-center xs:ml-4 md:ml-8"},m.createElement(n.Link,{to:"/oursupporters#"},m.createElement("button",{className:"bg-white text-gray-500 xs:text-2xl xs:mx-2 font-semibold"},t.formatMessage({id:"team.teamSection.supportersText"}))),m.createElement("button",{onClick:()=>b(w.oyw),className:`${o===w.oyw?y:E} md:mr-24  md:ml-24 xs:hidden`},t.formatMessage({id:"team.teamSection.oyw"})),m.createElement("button",{onClick:()=>b(w.oyw),className:`${o===w.oyw?y:E} md:mr-24 md:hidden xs:pt-6 xs:mx-4`},t.formatMessage({id:"team.teamSection.oyw-xs"})),m.createElement("button",{onClick:()=>b(w.teamLeads),className:`${o===w.teamLeads?y:E} mr-12 xs:mr-4`},t.formatMessage({id:"team.teamSection.teamLeadText"}))),m.createElement("div",{className:"mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4 pt-10 px-10"},o===w.teamLeads&&d.C.ambassadors.map(((e,a)=>{var t,l;return m.createElement(g.Z,{key:`ambs${a}`,role:"ambassadors",image:null===(t=N[e.imageName])||void 0===t||null===(l=t.childImageSharp)||void 0===l?void 0:l.fluid,person:e})}))),o===w.oyw&&m.createElement("section",{className:"mx-8"},m.createElement("h2",{className:"mb-12 xs:text-center"},t.formatMessage({id:"OYW.headers.header"})),m.createElement("div",{className:"h-auto grid gap-x-4 lg:grid-cols-2 "},m.createElement("div",{className:"flex flex-col justify-center w-full"},m.createElement("p",{className:"mt-6  md:text-sm",dangerouslySetInnerHTML:{__html:t.formatMessage({id:"OYW.headers.topbanner"})}}),m.createElement("p",{className:"md:mt-8 mb-4 xs:mt-8 md:text-sm",dangerouslySetInnerHTML:{__html:t.formatMessage({id:"OYW.headers.sub-header"})}}),m.createElement("div",{className:"flex flex-col text-center"},m.createElement(f.Z,{to:"/available-roles",className:"flex justify-center md:mx-28 my-4 px-6 py-2"},t.formatMessage({id:"OYW.headers.buttonJoinUs"})),m.createElement("a",{className:"no-underline text-center flex md:mx-28 my-4 px-6 py-2 justify-center  text-blue border-2 border-blue rounded-lg",target:"_blank",href:x.learMoreOYW},t.formatMessage({id:"index.section2.learnMoreLink"}))),m.createElement("div",{className:""})),m.createElement("div",{className:"w-full xs:pt-8"},h.map((e=>m.createElement(p,{id:e.id,source:e.source}))))),m.createElement("h2",{className:"font-heading text-left mt-16  xs:text-center mb-4 lg:mb-2 md:pt-24"},t.formatMessage({id:"OYW.section2.title"})),m.createElement("div",{className:"md:py-12  h-auto grid gap-10  md:grid-cols-2 grid-rows-2 xl:grid-cols-2 "},m.createElement("div",{className:"bg-white flex flex-col items-center md:py-10 rounded-2xl"},m.createElement("div",{className:"grid md:grid-cols-2 w-full md:w-10/12"},m.createElement(r.Z,{className:"mx-auto w-24 h-40",imgStyle:{objectFit:"contain"},fluid:N.ambassador.childImageSharp.fluid}),m.createElement("h3",{className:"md:mt-8 md:mb-4 text-gray-200 xs:text-center"},t.formatMessage({id:"OYW.section2.ambassador"}))),m.createElement("p",{className:"flex-col text-center xs:py-4 "},t.formatMessage({id:"OYW.section2.ambassador-des"}))),m.createElement("div",{className:"bg-white flex flex-col items-center md:py-10  rounded-2xl"},m.createElement("div",{className:" grid md:grid-cols-2 w-full md:w-10/12"},m.createElement(r.Z,{className:"mx-auto w-24 h-40",imgStyle:{objectFit:"contain"},fluid:N.youth.childImageSharp.fluid}),m.createElement("h3",{className:"md:mt-8 md:mr-28 mb-4 text-gray-200 xs:text-center"},t.formatMessage({id:"OYW.section2.youth"}))),m.createElement("p",{className:"flex-col text-center"},t.formatMessage({id:"OYW.section2.youth-des"}))),m.createElement("div",{className:"bg-white flex flex-col items-center md:py-10 rounded-2xl"},m.createElement("div",{className:"grid md:grid-cols-2 w-full md:w-10/12"},m.createElement(r.Z,{className:"mx-auto my-6 w-16 h-28",imgStyle:{objectFit:"contain"},fluid:N.globe.childImageSharp.fluid}),m.createElement("h3",{className:"md:mt-8 md:mr-18 md:mb-4 text-gray-200 xs:text-center"},t.formatMessage({id:"OYW.section2.header"}))),m.createElement("p",{className:"flex-col text-center"},t.formatMessage({id:"OYW.section2.sub-header"}))),m.createElement("div",{className:"bg-white flex flex-col items-center md:pt-10 pb-6 md:px-2 rounded-2xl"},m.createElement("div",{className:"grid md:grid-cols-2 w-full md:w-10/12"},m.createElement(r.Z,{className:"mx-auto w-24 h-40",imgStyle:{objectFit:"contain"},fluid:N.diverse.childImageSharp.fluid}),m.createElement("h3",{className:"md:my-8 text-gray-200 xs:text-center"},t.formatMessage({id:"OYW.section2.diverse"}))),m.createElement("p",{className:"flex-col text-center md:px-8"},t.formatMessage({id:"OYW.section2.diverse-des"})))),m.createElement("div",{className:"flex gap-0 xl:grid-cols-2 md:mb-12"},m.createElement("div",{className:"border-b pb-8 xl:border-r xl:pt-4 xl:border-b-0 xl:pr-12 border-gray-400 border-solid xs:text-center"},m.createElement(c,{images:N})))))}}}]);
//# sourceMappingURL=component---src-pages-oyw-jsx-6c82410a9c9a09c0ab8f.js.map