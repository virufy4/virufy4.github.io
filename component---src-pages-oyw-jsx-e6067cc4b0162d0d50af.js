"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8039],{5842:function(e,a,t){t.d(a,{Z:function(){return d}});var i=t(8644),m=t(7294),l=t(9703),n=["children","style"],s={primary:"text-white bg-blue",secondary:"text-black bg-white"};function r(e,a){return void 0===a&&(a="primary"),"inline-block text-lg py-3 px-12 no-underline rounded-xl "+s[a]+" "+e}function d(e){var a=e.children,t=e.style,s=(0,i.Z)(e,n);return m.createElement(l.Link,Object.assign({},s,{className:r(s.className,t)}),a)}},8624:function(e,a,t){t.d(a,{Z:function(){return n}});var i=t(7294),m=t(1496),l=t(9703);function n(e){var a=(0,l.useIntl)(),t=e.image,n=e.person,s=n.id,r=n.defaultName,d=n.mediaLink;return i.createElement("div",{className:"flex flex-col text-left\t mx-auto mb-4 w-full"},i.createElement("a",{className:"w-full",target:"_blank",rel:"noreferrer",href:d},i.createElement(m.Z,{className:"mx-auto my-2 rounded-md overflow-hidden team-icons",imgStyle:{objectFit:"fill"},fluid:t}),i.createElement("h4",{className:"mt-4 text-center font-semibold text-black no-underline\t"},a.formatMessage({id:"OYW.ambassador.ambassador-list."+s+".name",defaultMessage:r}))),i.createElement("div",{className:""}),i.createElement("p",{className:"font-medium text-center text-lg  "},a.formatMessage({id:"OYW.ambassador.ambassador-list."+s+".descriptionOYW"})),i.createElement("p",{className:"break-normal mt-6 leading-4 text-lg text-center xs:pb-8"},a.formatMessage({id:"OYW.ambassador.ambassador-list."+s+".descriptionVirufy"})))}},9089:function(e,a,t){t.d(a,{C:function(){return i}});var i={ambassadors:[{mediaLink:"https://www.linkedin.com/in/amilkhanzada/",id:"amil",defaultName:"Amil Khanzada",imageName:"amil"},{mediaLink:"https://www.linkedin.com/in/madhavdatt/",id:"madhav",defaultName:"Madhav Datt",imageName:"madhav"},{mediaLink:"https://www.linkedin.com/in/marcos-deza/",id:"marcos",defaultName:"Marcos Deza",imageName:"marcos"},{mediaLink:"https://www.linkedin.com/in/yulieq/",id:"yulie",defaultName:"Yulie Qiao",imageName:"yulie"},{mediaLink:"https://www.linkedin.com/in/ayomide-owoyemi/",id:"ayomide",defaultName:"Ayomide Owoyemi, MD",imageName:"ayomide"},{mediaLink:"https://www.linkedin.com/in/drshreyasreeram-537935182/",id:"shreya",defaultName:"Shreya Sreeram, MD",imageName:"shreya"},{mediaLink:"https://www.linkedin.com/in/lauravelasquezh/",id:"lauravelasquezh",defaultName:"Laura Velasquez",imageName:"lauravelasquezh"},{mediaLink:"https://www.linkedin.com/in/namathom/",id:"nathan",defaultName:"Nathan Thomas",imageName:"nathan"},{mediaLink:"https://www.linkedin.com/in/jasonpareja/",id:"jason",defaultName:"Jason Pareja Jauregui",imageName:"jason"},{mediaLink:"https://www.linkedin.com/in/katherine-thalia-ortiz-le%C3%B3n-bb7408a0/",id:"katherine",defaultName:"Katherine Thalia Ortiz León",imageName:"katherine"},{mediaLink:"https://www.linkedin.com/in/gonzalo-roiffe-62421592/",id:"gonzalo",defaultName:"Gonzalo Roiffe",imageName:"gonzalo"},{mediaLink:"https://www.linkedin.com/in/matd-bolivia/?originalSubdomain=bo",id:"annelisse",defaultName:"Annelisse Torrez Daza",imageName:"annelisse"},{mediaLink:"https://www.linkedin.com/in/ver%C3%B3nica-guzm%C3%A1n-quilaqueo-91220a34/",id:"veronica",defaultName:"Verónica Guzmán Quilaqueo",imageName:"veronica"},{mediaLink:"https://www.linkedin.com/in/jean-sebastian-pedraza-paez-02b8aa11a/",id:"sebastian",defaultName:"Sebastian Pedraza",imageName:"sebastian"},{mediaLink:"https://www.linkedin.com/in/kenmaru-suedomi-b871555b/",id:"kenmaru",defaultName:"Kenmaru Suedomi",imageName:"kenmaru"},{mediaLink:"https://www.linkedin.com/in/kapil-narain-382ab712b/",id:"kapil",defaultName:"Kapil Narain, MD",imageName:"kapil"},{mediaLink:"https://www.linkedin.com/in/leonard-buhrz/",id:"leonard",defaultName:"Leonard Burhz",imageName:"leonard"},{mediaLink:"https://www.linkedin.com/in/allana-doyle/",id:"allana",defaultName:"Allana Doyle",imageName:"allana"},{mediaLink:"https://www.linkedin.com/in/kavya-madhavan/",id:"kavya",defaultName:"Kavya Madhavan",imageName:"kavya"}],testimonials:[{id:"annelisse",defaultName:"Annelisse Torrez Daza",country:"Bolivia"},{id:"sebastian",defaultName:"Sebastian Pedraza",country:"Colombia"},{id:"gonzalo",defaultName:"Gonzalo Roiffe",country:"Argentina"},{id:"marcos",defaultName:"Marcos Deza",country:"Argentina"}]}},6233:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var i=t(7294),m=t(9270),l=t(9703),n=t(5444),s=t(4959),r=t(1496),d=t(9089),o=function(e){var a=e.testimonial,t=e.active,m=(0,l.useIntl)(),s=(0,n.useStaticQuery)("2654117148"),d={};return s.allFile.edges.forEach((function(e){return d[e.node.name]=e.node.childImageSharp.fluid})),i.createElement("div",{style:{display:t?"block":"none"},className:"fade"},i.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-6 w-full h-auto rounded-2xl bg-blue-100 md:py-10 text-left"},i.createElement("div",{className:"w-auto mt-6 xs:pl-12"},i.createElement(r.Z,{className:"w-24 md:w-32 rounded-full ",imgStyle:{objectFit:"fill"},fluid:d[a.id],alt:"Annelisse Torrez Daza"})),i.createElement("div",{className:"md:ml-3 md:py-16  col-span-2"},i.createElement("p",{className:"font-bold text-xl"},a.defaultName),i.createElement("p",{className:"text-left xs:pl-2 "},a.country)),i.createElement("div",{className:"col-span-2 md:py-8 xs:py-2"},i.createElement("p",null,m.formatMessage({id:"OYW.testimonials."+a.id})))))},c=function(e){var a=e.images,t=(0,l.useIntl)(),m=(0,i.useState)(1),n=m[0],s=m[1];(0,i.useCallback)((function(e){var a=n+e;a<=0&&(a=d.C.testimonials.length),a>=d.C.testimonials.length+1&&(a=1),s(a)}),[n,s]);return i.createElement("section",{style:{maxWidth:"calc(100vw - 4rem)"},className:"w-full"},i.createElement("h2",{className:"md:mb-6 mt-2 xs:text-center"},t.formatMessage({id:"OYW.testimonials.title"})),i.createElement("div",{className:"mb-8  xs:mt-6"},i.createElement("p",null,t.formatMessage({id:"OYW.testimonials.intro"}))),i.createElement("div",{className:"slideshow-container"},d.C.testimonials.map((function(e,t){return i.createElement(o,{key:"testimonial-"+t,images:a,testimonial:e,active:n===t+1})}))),i.createElement("div",{style:{marginTop:"24px",textAlign:"center"}},d.C.testimonials.map((function(e,a){return i.createElement("span",{className:(n===a+1?" active ":"")+" dot",onClick:function(){return s(a+1)}})}))))},u=t(6911),f=t(5842),g=t(8624),x="https://www.oneyoungworld.com/",h=function(e){var a=e.id,t=e.source;return i.createElement("div",{className:"w-full h-full"},i.createElement("iframe",{style:{width:"100%",height:"100%"},key:a,title:"YouTube video player",class:"video",src:t,"data-cookieconsent":"marketing",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))},p=[{id:"video1",source:"https://www.youtube.com/embed/hvJgwPNYnZo"}],b="one young world",N="team Leads";function w(e){var a=e.data,t=(0,l.useIntl)(),o=(0,i.useState)(b),w=o[0],y=o[1],E={};a.allFile.edges.forEach((function(e){return E[e.node.name]=e.node}));var v="font-semibold text-lg bg-white xs:text-2xl border-b-4 border-solid border-green focus:outline-none active:outline-none",k="bg-white text-gray-500 text-lg xs:text-2xl font-semibold xs:py-2.5";return i.createElement(m.Z,{className:"font-montserrat"},i.createElement(s.Z,{title:"OYW | Virufy"}),i.createElement("div",{className:"md:hidden"},i.createElement(u.Z,{fluid:E.oyw.childImageSharp.fluid,imgStyle:{objectFit:"contain"},className:" text-white "},i.createElement(r.Z,{className:"pt-16 ml-6 xs:w-14 xs:h-6 ",imgStyle:{objectFit:"contain"},fluid:E.logoOne.childImageSharp.fluid}),i.createElement("p",{className:"pb-24  xs:px-4 xs:text-sm"},t.formatMessage({id:"OYW.topbanner.title"}))),i.createElement("h3",{className:"text-center text-gray-500 pt-4 pb-12 mx-8"},t.formatMessage({id:"OYW.topbanner.description"}))),i.createElement(u.Z,{fluid:E.oyw.childImageSharp.fluid,imgStyle:{objectFit:"contain"},className:" text-white xs:hidden"},i.createElement(r.Z,{className:"mx-16 w-36 h-16",imgStyle:{objectFit:"contain"},fluid:E.logoOne.childImageSharp.fluid}),i.createElement("h3",{className:"md:mt-2 mx-16 pb-12"},t.formatMessage({id:"OYW.topbanner.title"})),i.createElement("h3",{className:"md:text-center pt-32 pb-12 m-12 px-12 font-medium"},t.formatMessage({id:"OYW.topbanner.description"}))),i.createElement("div",{className:"xs:flex xs:justify-between md:text-center xs:ml-4 md:ml-8"},i.createElement(n.Link,{to:"/oursupporters#"},i.createElement("button",{className:"bg-white text-gray-500 xs:text-2xl xs:mx-2 font-semibold"},t.formatMessage({id:"team.teamSection.supportersText"}))),i.createElement("button",{onClick:function(){return y(b)},className:(w===b?v:k)+" md:mr-24  md:ml-24 xs:hidden"},t.formatMessage({id:"team.teamSection.oyw"})),i.createElement("button",{onClick:function(){return y(b)},className:(w===b?v:k)+" md:mr-24 md:hidden xs:pt-6 xs:mx-4"},t.formatMessage({id:"team.teamSection.oyw-xs"})),i.createElement("button",{onClick:function(){return y(N)},className:(w===N?v:k)+" mr-12 xs:mr-4"},t.formatMessage({id:"team.teamSection.teamLeadText"}))),i.createElement("div",{className:"mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4 pt-10 px-10"},w===N&&d.C.ambassadors.map((function(e,a){var t,m;return i.createElement(g.Z,{key:"ambs"+a,role:"ambassadors",image:null===(t=E[e.imageName])||void 0===t||null===(m=t.childImageSharp)||void 0===m?void 0:m.fluid,person:e})}))),w===b&&i.createElement("section",{className:"mx-8"},i.createElement("h2",{className:"mb-12 xs:text-center"},t.formatMessage({id:"OYW.headers.header"})),i.createElement("div",{className:"h-auto grid gap-x-4 lg:grid-cols-2 "},i.createElement("div",{className:"flex flex-col justify-center w-full"},i.createElement("p",{className:"mt-6  md:text-sm",dangerouslySetInnerHTML:{__html:t.formatMessage({id:"OYW.headers.topbanner"})}}),i.createElement("p",{className:"md:mt-8 mb-4 xs:mt-8 md:text-sm",dangerouslySetInnerHTML:{__html:t.formatMessage({id:"OYW.headers.sub-header"})}}),i.createElement("div",{className:"flex flex-col text-center"},i.createElement(f.Z,{to:"/available-roles",className:"flex justify-center md:mx-28 my-4 px-6 py-2"},t.formatMessage({id:"OYW.headers.buttonJoinUs"})),i.createElement("a",{className:"no-underline text-center flex md:mx-28 my-4 px-6 py-2 justify-center  text-blue border-2 border-blue rounded-lg",target:"_blank",href:x},t.formatMessage({id:"index.section2.learnMoreLink"}))),i.createElement("div",{className:""})),i.createElement("div",{className:"w-full xs:pt-8"},p.map((function(e){return i.createElement(h,{id:e.id,source:e.source})})))),i.createElement("h2",{className:"font-heading text-left mt-16  xs:text-center mb-4 lg:mb-2 md:pt-24"},t.formatMessage({id:"OYW.section2.title"})),i.createElement("div",{className:"md:py-12  h-auto grid gap-10  md:grid-cols-2 grid-rows-2 xl:grid-cols-2 "},i.createElement("div",{className:"bg-white flex flex-col items-center md:py-10 rounded-2xl"},i.createElement("div",{className:"grid md:grid-cols-2 w-full md:w-10/12"},i.createElement(r.Z,{className:"mx-auto w-24 h-40",imgStyle:{objectFit:"contain"},fluid:E.ambassador.childImageSharp.fluid}),i.createElement("h3",{className:"md:mt-8 md:mb-4 text-gray-200 xs:text-center"},t.formatMessage({id:"OYW.section2.ambassador"}))),i.createElement("p",{className:"flex-col text-center xs:py-4 "},t.formatMessage({id:"OYW.section2.ambassador-des"}))),i.createElement("div",{className:"bg-white flex flex-col items-center md:py-10  rounded-2xl"},i.createElement("div",{className:" grid md:grid-cols-2 w-full md:w-10/12"},i.createElement(r.Z,{className:"mx-auto w-24 h-40",imgStyle:{objectFit:"contain"},fluid:E.youth.childImageSharp.fluid}),i.createElement("h3",{className:"md:mt-8 md:mr-28 mb-4 text-gray-200 xs:text-center"},t.formatMessage({id:"OYW.section2.youth"}))),i.createElement("p",{className:"flex-col text-center"},t.formatMessage({id:"OYW.section2.youth-des"}))),i.createElement("div",{className:"bg-white flex flex-col items-center md:py-10 rounded-2xl"},i.createElement("div",{className:"grid md:grid-cols-2 w-full md:w-10/12"},i.createElement(r.Z,{className:"mx-auto my-6 w-16 h-28",imgStyle:{objectFit:"contain"},fluid:E.globe.childImageSharp.fluid}),i.createElement("h3",{className:"md:mt-8 md:mr-18 md:mb-4 text-gray-200 xs:text-center"},t.formatMessage({id:"OYW.section2.header"}))),i.createElement("p",{className:"flex-col text-center"},t.formatMessage({id:"OYW.section2.sub-header"}))),i.createElement("div",{className:"bg-white flex flex-col items-center md:pt-10 pb-6 md:px-2 rounded-2xl"},i.createElement("div",{className:"grid md:grid-cols-2 w-full md:w-10/12"},i.createElement(r.Z,{className:"mx-auto w-24 h-40",imgStyle:{objectFit:"contain"},fluid:E.diverse.childImageSharp.fluid}),i.createElement("h3",{className:"md:my-8 text-gray-200 xs:text-center"},t.formatMessage({id:"OYW.section2.diverse"}))),i.createElement("p",{className:"flex-col text-center md:px-8"},t.formatMessage({id:"OYW.section2.diverse-des"})))),i.createElement("div",{className:"flex gap-0 xl:grid-cols-2 md:mb-12"},i.createElement("div",{className:"border-b pb-8 xl:border-r xl:pt-4 xl:border-b-0 xl:pr-12 border-gray-400 border-solid xs:text-center"},i.createElement(c,{images:E})))))}}}]);
//# sourceMappingURL=component---src-pages-oyw-jsx-e6067cc4b0162d0d50af.js.map