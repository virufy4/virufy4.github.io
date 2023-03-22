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
      <script src="https://www.googletagmanager.com/gtag/js?id=G-7PW8HS67TW" />
      <script
        dangerouslySetInnerHTML={`if(true){window.dataLayer = window.dataLayer || [];function gtag(){window.dataLayer && window.dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7PW8HS67TW', {"send_page_view":false});gtag('config', 'G-8NL5MSXJPZ', {"send_page_view":false});}`}
      />

      <script
        dangerouslySetInnerHTML={`(function(h,o,t,j,a,r){h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };h._hjSettings={hjid:1878866,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      />
    </Helmet>
  );
};
