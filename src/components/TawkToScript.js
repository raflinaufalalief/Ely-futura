// TawkToScript.js
import Script from "next/script";

const TawkToScript = () => (
  <Script strategy="lazyOnload">
    {`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/654fddcfcec6a912820ef85f/1hevvktje';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `}
  </Script>
);

export default TawkToScript;
