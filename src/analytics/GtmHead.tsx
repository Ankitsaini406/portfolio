// "use client";
// import { useEffect } from "react";
// import Script from "next/script";

// const GTM_ID = process.env.GTM_KEY;

// const GoogleTagManagerHead = () => {
//     useEffect(() => {
//         if (process.env.NODE_ENV !== "production") {
//             return;
//         }

//         interface WindowWithDataLayer extends Window {
//             dataLayer: Array<Record<string, string | number | boolean>>;
//         }
//         const typedWindow = window as unknown as WindowWithDataLayer;
//         typedWindow.dataLayer = typedWindow.dataLayer || [];
//         function gtag(event: Record<string, string | number | boolean>) {
//             typedWindow.dataLayer.push(event);
//         }
//         gtag({ event: "js", timestamp: new Date().toISOString() });
//     }, []);

//     if (process.env.NODE_ENV !== "production") {
//         return null;
//     }

//     return (
//         <>
//             {/* Google Tag Manager Script */}
//             <Script
//                 id="gtm-script"
//                 strategy="afterInteractive"
//                 dangerouslySetInnerHTML={{
//                     __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','${GTM_ID}');
//           `,
//                 }}
//             />
//         </>
//     );
// };

// export default GoogleTagManagerHead;
