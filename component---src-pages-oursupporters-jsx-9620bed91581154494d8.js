"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4084],{4455:function(e,a,t){var l=t(7294),n=t(2340),m=t(9748);function i(e,a){var t=e.current;if(null===t)return[0,0,0,0];var l=t.getBoundingClientRect(),n=l.x,m=l.y,i=l.width,r=l.height,o=window,s=o.innerWidth,c=o.innerHeight,d=Math.min(s-64,i*a),u=Math.min(c-96,r*a),f=n-(i*a-i)/2,h=m-(r*a-r)/2,g=Math.max(Math.min(f,s-32-d),32);return[Math.max(Math.min(h,c-48-u),48),g,d,u]}a.Z=function(e){var a=e.triggerRef,t=e.scale,r=e.children,o=e.show,s=e.onClose;if(!a||!t)throw new Error("Trigger ref and scale props must be set");var c=function(e,a,t){var n=i(e,a),r=n[0],o=n[1],s=n[2],c=n[3],d=(0,m.Do)(r),u=d[0],f=d[1],h=(0,m.Do)(o),g=h[0],p=h[1],w=(0,m.Do)(s),b=w[0],x=w[1],N=(0,m.Do)(c),E=N[0],v=N[1];return(0,l.useEffect)((function(){function t(){var t=i(e,a),l=t[0],n=t[1],m=t[2],r=t[3];f(l),p(n),x(m),v(r)}return window.addEventListener("scroll",t),window.addEventListener("resize",t),function(){window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[e,a,f,p,x,v]),(0,l.useEffect)((function(){var t=i(e,a),l=t[0],n=t[1],m=t[2],r=t[3];f(l),p(n),x(m),v(r)}),[e,a,f,p,x,v,t]),[u,g,b,E]}(a,t,o);c[0],c[1],c[2],c[3],(0,m.Pr)(o),(0,m.Y5)(o,s);var d=(0,l.useRef)(null);return l.createElement(n.Z,{active:o,onClick:function(e){var a=d.current;e.target===a||a.contains(e.target)||s()}},l.createElement("div",{className:"md:mx-72 md:px-8 py-20"},l.createElement("div",{className:"fixed xs:absolute bg-white p-6 shadow-2xl overflow-y-auto rounded-2xl  md:w-2/4 md:h-4/5",ref:d},l.createElement("div",{className:"flex flex-row-reverse "},l.createElement("button",{className:"black text-black ",onClick:s},"✕")),r)))}},8624:function(e,a,t){t.d(a,{Z:function(){return i}});var l=t(7294),n=t(1496),m=t(9703);function i(e){var a=(0,m.useIntl)(),t=e.image,i=e.person,r=i.id,o=i.defaultName,s=i.mediaLink;return l.createElement("div",{className:"flex flex-col text-left\t mx-auto mb-4 w-full"},l.createElement("a",{className:"w-full",target:"_blank",rel:"noreferrer",href:s},l.createElement(n.Z,{className:"mx-auto my-2 rounded-md overflow-hidden team-icons",imgStyle:{objectFit:"fill"},fluid:t}),l.createElement("h4",{className:"mt-4 text-center font-semibold text-black no-underline\t"},a.formatMessage({id:"OYW.ambassador.ambassador-list."+r+".name",defaultMessage:o}))),l.createElement("div",{className:""}),l.createElement("p",{className:"font-medium text-center text-lg  "},a.formatMessage({id:"OYW.ambassador.ambassador-list."+r+".descriptionOYW"})),l.createElement("p",{className:"break-normal mt-6 leading-4 text-lg text-center xs:pb-8"},a.formatMessage({id:"OYW.ambassador.ambassador-list."+r+".descriptionVirufy"})))}},9427:function(e,a){a.Z={donateLink:"https://virufy.org/study/welcome"}},9089:function(e,a,t){t.d(a,{C:function(){return l}});var l={ambassadors:[{mediaLink:"https://www.linkedin.com/in/amilkhanzada/",id:"amil",defaultName:"Amil Khanzada",imageName:"amil"},{mediaLink:"https://www.linkedin.com/in/madhavdatt/",id:"madhav",defaultName:"Madhav Datt",imageName:"madhav"},{mediaLink:"https://www.linkedin.com/in/marcos-deza/",id:"marcos",defaultName:"Marcos Deza",imageName:"marcos"},{mediaLink:"https://www.linkedin.com/in/yulieq/",id:"yulie",defaultName:"Yulie Qiao",imageName:"yulie"},{mediaLink:"https://www.linkedin.com/in/ayomide-owoyemi/",id:"ayomide",defaultName:"Ayomide Owoyemi, MD",imageName:"ayomide"},{mediaLink:"https://www.linkedin.com/in/drshreyasreeram-537935182/",id:"shreya",defaultName:"Shreya Sreeram, MD",imageName:"shreya"},{mediaLink:"https://www.linkedin.com/in/lauravelasquezh/",id:"lauravelasquezh",defaultName:"Laura Velasquez",imageName:"lauravelasquezh"},{mediaLink:"https://www.linkedin.com/in/namathom/",id:"nathan",defaultName:"Nathan Thomas",imageName:"nathan"},{mediaLink:"https://www.linkedin.com/in/jasonpareja/",id:"jason",defaultName:"Jason Pareja Jauregui",imageName:"jason"},{mediaLink:"https://www.linkedin.com/in/katherine-thalia-ortiz-le%C3%B3n-bb7408a0/",id:"katherine",defaultName:"Katherine Thalia Ortiz León",imageName:"katherine"},{mediaLink:"https://www.linkedin.com/in/gonzalo-roiffe-62421592/",id:"gonzalo",defaultName:"Gonzalo Roiffe",imageName:"gonzalo"},{mediaLink:"https://www.linkedin.com/in/matd-bolivia/?originalSubdomain=bo",id:"annelisse",defaultName:"Annelisse Torrez Daza",imageName:"annelisse"},{mediaLink:"https://www.linkedin.com/in/ver%C3%B3nica-guzm%C3%A1n-quilaqueo-91220a34/",id:"veronica",defaultName:"Verónica Guzmán Quilaqueo",imageName:"veronica"},{mediaLink:"https://www.linkedin.com/in/jean-sebastian-pedraza-paez-02b8aa11a/",id:"sebastian",defaultName:"Sebastian Pedraza",imageName:"sebastian"},{mediaLink:"https://www.linkedin.com/in/kenmaru-suedomi-b871555b/",id:"kenmaru",defaultName:"Kenmaru Suedomi",imageName:"kenmaru"},{mediaLink:"https://www.linkedin.com/in/kapil-narain-382ab712b/",id:"kapil",defaultName:"Kapil Narain, MD",imageName:"kapil"},{mediaLink:"https://www.linkedin.com/in/leonard-buhrz/",id:"leonard",defaultName:"Leonard Burhz",imageName:"leonard"},{mediaLink:"https://www.linkedin.com/in/allana-doyle/",id:"allana",defaultName:"Allana Doyle",imageName:"allana"},{mediaLink:"https://www.linkedin.com/in/kavya-madhavan/",id:"kavya",defaultName:"Kavya Madhavan",imageName:"kavya"}],testimonials:[{id:"annelisse",defaultName:"Annelisse Torrez Daza",country:"Bolivia"},{id:"sebastian",defaultName:"Sebastian Pedraza",country:"Colombia"},{id:"gonzalo",defaultName:"Gonzalo Roiffe",country:"Argentina"},{id:"marcos",defaultName:"Marcos Deza",country:"Argentina"}]}},9621:function(e,a){a.Z={responseLab:"https://responselab.stanford.edu/",oneYoungWorld:"https://www.oneyoungworld.com/counsellors",xoor:"https://xoor.io/en/",sherlock:"https://www.sherlockcomms.com/",stanford:"http://h4r.stanford.edu/",siena:"https://sienacompany.com/",cccadv:"http://cccadv.com.br/site/theoffice/?lang=en",curative:"https://curative.com/",fenwick:"https://www.fenwick.com/",nuvu:"https://www.nuvu.cc/",parrolabs:"https://www.parrolabs.com/",devlights:"https://www.devlights.com/",arkangel:"https://arkangel.ai/en",pillsbury:"https://www.pillsburylaw.com/en/",aws:"https://aws.amazon.com/",aws2:"https://aws.amazon.com/government-education/nonprofits/disaster-response/diagnostic-dev-initiative/",littler:"https://www.littler.com/",nuevaEPS:"https://www.nuevaeps.com.co/",spi:"https://spiamericas.com/en/home/",idimi:"https://idime.com.co/",cj:"https://www.cj-partners.com/",serviceBots:"https://www.servicebots.net/sas.html",lockedJar:"https://www.lockedjar.com/",Cleveland:"https://clevelandibnsina.com/",drive:"https://drive.hhs.gov/",dgaAbogados:"https://col-law.com/home-2/",olartemoure:"https://www.olartemoure.com/",lswInstitute:"https://www.lswinstitute.org/",barda:"https://www.medicalcountermeasures.gov/barda",stanfordMed:"https://med.stanford.edu/",jigJP:"https://www.jig.jp/",shil:"https://innovations.stanford.edu/home",kvgmedical:"https://www.kvgmch.org/",compensar:"https://corporativo.compensar.com/"}},4182:function(e,a,t){t.r(a);var l=t(5861),n=t(7757),m=t.n(n),i=t(7294),r=t(9703),o=t(4455);a.default=function(){var e=(0,i.useState)(!1),a=e[0],t=e[1],n=(0,i.useState)(""),s=(n[0],n[1],(0,i.useState)("")),c=(s[0],s[1],(0,i.useState)("")),d=(c[0],c[1],(0,i.useState)("")),u=(d[0],d[1],(0,i.useState)(!1)),f=u[0],h=u[1],g=(0,i.useState)(""),p=(g[0],g[1]),w=i.useRef(null),b=(0,r.useIntl)(),x=(0,i.useState)({name:"",email:"",company:"",message:""}),N=x[0],E=x[1],v=function(e){var a;console.log(e.target.name),console.log(e.target.value),E(Object.assign({},N,((a={})[e.target.name]=e.target.value,a)))};function y(e){return k.apply(this,arguments)}function k(){return(k=(0,l.Z)(m().mark((function e(a){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),p(""),h(!0);try{p("There was an error"),h(!1)}catch(t){p("There was an error "),h(!1)}case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.createElement(i.Fragment,null,i.createElement("button",{className:"flex flex-col md:px-8 rounded-2xl cursor-pointer transition-shadow  text-lg  xs:text-sm",onClick:function(){t(!0)},ref:w},b.formatMessage({id:"team.supportersSection.buttonSupporter"})),i.createElement(o.Z,{show:a,triggerRef:w,scale:2,onClose:function(){t(!1)}},i.createElement("div",{className:"text-center pt-4 text-black"},i.createElement("h1",{className:"md:pb-4 xs:text-lg"},b.formatMessage({id:"becomeaSupporter.title-BecomeaSuporter"})),i.createElement("p",null,b.formatMessage({id:"becomeaSupporter.sub-header"}))),i.createElement("div",{className:"flex flex-col items-center justify-center text-center text-black"},i.createElement("form",{className:"m-8 md:px-6",onSubmit:function(e){e.preventDefault(),console.log("enviando datos..."+N.name+" "+N.email+" "+N.company+" "+N.message)},autoComplete:"off"},i.createElement("input",{className:"mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue",required:!0,type:"text",name:"name",placeholder:b.formatMessage({id:"becomeaSupporter.inputname"}),id:"name",onChange:v}),i.createElement("input",{className:"mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue",required:!0,type:"email",name:"email",id:"email",placeholder:b.formatMessage({id:"becomeaSupporter.inputemail"}),onChange:v}),i.createElement("input",{className:"mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue",required:!0,type:"text",name:"company",id:"company",placeholder:b.formatMessage({id:"becomeaSupporter.inputcompany"}),onChange:v}),i.createElement("textarea",{className:"mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue h-48",required:!0,type:"text",name:"message",id:"message",placeholder:b.formatMessage({id:"becomeaSupporter.inputmessage"}),onChange:v}),i.createElement("button",{className:"\n                bg-blue border-2 rounded-xl text-white px-6 my-4 py-2 mt-10\n                "+(f?"bg-blue  animate-pulse":"")+"\n              ",disabled:f,onClick:function(){console.log("Click")},type:"submit"},b.formatMessage({id:"becomeaSupporter.button"})),i.createElement("p",{className:"text-blue"},y)))))}},8647:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var l=t(7294),n=t(4959),m=t(1177),i=t(5444),r=t(1496),o=t(9703),s=t(9621),c=t(6911),d=t(4182),u=t(8624),f=t(9089),h=t(9427),g="Our supporters",p="team leads";function w(){var e=(0,o.useIntl)(),a=(0,i.useStaticQuery)("1250014322"),t={};a.allFile.edges.forEach((function(e){return t[e.node.name]=e.node.childImageSharp.fluid}));var n=(0,l.useState)(g),m=n[0],w=n[1],b="font-medium font-semibold text-lg  xs:text-2xl bg-white border-b-4 border-solid border-green focus:outline-none active:outline-none",x="bg-white text-gray-500 text-lg  xs:text-2xl font-semibold xs:py-2.5";return l.createElement(l.Fragment,null,l.createElement("section",null,l.createElement("div",{className:"md:hidden"},l.createElement(r.Z,{imgStyle:{objectFit:""},className:"h-full",fluid:t["background-supporters"]}),l.createElement("h3",{className:"flex-1 pt-4 px-6 text-center m-4 text-gray-600"},e.formatMessage({id:"team.supportersSection.description"}))),l.createElement(c.Z,{fluid:t["background-supporters"],imgStyle:{objectFit:"contain"},className:"text-white xs:hidden"},l.createElement("div",{className:"flex-container"},l.createElement("h1",{className:"flex text-center font-normal px-12 py-44"},e.formatMessage({id:"team.supportersSection.description"})))),l.createElement("section",{id:"our-supporters",className:"flex flex-col md:items-center py-10 md:px-14"},l.createElement("div",{className:"flex justify-between md:text-center  xs:px-2"},l.createElement("button",{onClick:function(){return w(g)},className:(m===g?b:x)+" md:mr-24"},e.formatMessage({id:"team.teamSection.supportersText"})),l.createElement(i.Link,{to:"/oyw",className:"xs:hidden"},l.createElement("button",{className:"bg-white text-gray-500 text-lg font-semibold  md:mr-24"},e.formatMessage({id:"team.teamSection.oyw"}))),l.createElement(i.Link,{to:"/oyw",className:"md:hidden"},l.createElement("button",{className:"bg-white text-gray-500 xs:text-2xl xs:mx-2 font-semibold "},e.formatMessage({id:"team.teamSection.oyw-xs"}))),l.createElement("button",{onClick:function(){return w(p)},className:(m===p?b:x)+" "},e.formatMessage({id:"team.teamSection.teamLeadText"}))),l.createElement("div",{className:"mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4 pt-10 px-10"},m===p&&f.C.ambassadors.map((function(e,a){return l.createElement(u.Z,{key:"ambs"+a,role:"ambassadors",image:t[e.imageName],person:e})}))),m===g&&l.createElement(l.Fragment,null,l.createElement("div",{className:"grid grid-cols-5 xs:grid-cols-2 pt-4 gap-10 items-center mx-6"},l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-2 max-w-full "},l.createElement("a",{href:s.Z.stanford,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["stanford-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250  md:2 max-w-full"},l.createElement("a",{href:s.Z.lswInstitute,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t.lswinstitute}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250  md:2 max-w-full"},l.createElement("a",{href:s.Z.aws,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["aws-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-14 max-w-full"},l.createElement("a",{href:s.Z.drive,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["drive-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-14 max-w-full"},l.createElement("a",{href:s.Z.oneYoungWorld,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["oneyoungworld-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-14 max-w-full"},l.createElement("a",{href:s.Z.pillsbury,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["pillsbury-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-14 max-w-full"},l.createElement("a",{href:s.Z.idimi,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["idimi-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-14 max-w-full"},l.createElement("a",{href:s.Z.cj,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["cj-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-14 max-w-full"},l.createElement("a",{href:s.Z.littler,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["littler-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-14 max-w-full"},l.createElement("a",{href:s.Z.xoor,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["xoor-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.serviceBots,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["serviceBots-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.sherlock,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["sherlock-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-12 max-w-full"},l.createElement("a",{href:s.Z.nuvu,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["nuvu-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-12 max-w-full"},l.createElement("a",{href:s.Z.spi,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["spi-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-10 max-w-full"},l.createElement("a",{href:s.Z.devlights,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["devlights-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.fenwick,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["fenwick-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.dgaAbogados,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-4/6 max-h-16",fluid:t["dg&a-logo"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.olartemoure,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-4/6 max-h-16",fluid:t.olartemoure}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.cccadv,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["cccadv-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.arkangel,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["arkangel-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.lockedJar,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["lockedJar-logo-color"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.Cleveland,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["Cleveland-color-logo"]}))),l.createElement("div",{style:{flex:"0 1 20%"},className:"md:min-w-250 md:p-8 max-w-full"},l.createElement("a",{href:s.Z.responseLab,target:"_blank"},l.createElement(r.Z,{imgStyle:{objectFit:"contain"},className:"h-full max-h-24",fluid:t["responselab-logo-color"]})))),l.createElement("div",{className:"flex justify-center md:mx-12"},l.createElement("a",{className:"no-underline rounded-lg  text-white bg-blue px-6 my-4 border-2 border-blue py-2 mt-24",target:"_blank"},l.createElement(d.default,null))))),l.createElement("div",{className:"relative h-auto lg:h-80 xs:hidden"},l.createElement(c.Z,{className:"bg-gradient-to-r w-full h-64 lg:h-full",fluid:t.HERO_DONATING_01,style:{backgroundPosition:"right"}}),l.createElement("div",{className:"flex flex-col justify-center items-center w-full h-full text-center p-5 md:bg-transparent md:absolute md:top-0"},l.createElement("p",{className:"w-80 mb-10 font-semibold"},e.formatMessage({id:"index.section5.messagehero"})),l.createElement(i.Link,{className:"vf-btn-primary  mx-auto my-4 px-6 py-2 border-2 border-blue",target:"_blank",href:h.Z.donateLink},e.formatMessage({id:"index.section5.donatebuttonhero"}))))))}function b(){return l.createElement(m.Z,null,l.createElement(n.Z,{title:"Our Supporters | Virufy"}),l.createElement(w,null))}}}]);
//# sourceMappingURL=component---src-pages-oursupporters-jsx-9620bed91581154494d8.js.map