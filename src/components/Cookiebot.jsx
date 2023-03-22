import React from "react";
import { Helmet } from "react-helmet";

export default () => {
  return (
    <Helmet>
      <link
        rel="preconnect"
        key="preconnect-google-gtag"
        href="https://www.googletagmanager.com"
      />
      <link
        rel="dns-prefetch"
        key="dns-prefetch-google-gtag"
        href="https://www.googletagmanager.com"
      />
      <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="fb5fec28-28e3-45e9-baa6-51f9f62f936b"
        type="text/javascript"
        // data-blockingmode="auto"
        async
      ></script>
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/fb5fec28-28e3-45e9-baa6-51f9f62f936b/cd.js"
        type="text/javascript"
        async
      ></script>

      <script
        type="text/plain"
        data-cookieconsent="statistics"
        src="https://www.googletagmanager.com/gtag/js?id=G-7PW8HS67TW"
      />
      <script
        type="text/plain"
        data-cookieconsent="statistics"
        dangerouslySetInnerHTML={`if(true){window.dataLayer = window.dataLayer || [];function gtag(){window.dataLayer && window.dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7PW8HS67TW', {"send_page_view":false});gtag('config', 'G-8NL5MSXJPZ', {"send_page_view":false});}`}
      />

      <script
        type="text/plain"
        data-cookieconsent="statistics"
        dangerouslySetInnerHTML={`(function(h,o,t,j,a,r){h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };h._hjSettings={hjid:1878866,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      />
    </Helmet>
  );
};
