"use client";
import Script from "next/script";

const GA_TRACKING_ID = "G-0PQLWEGNWL";

const GoogleAnalytics = () => {
    if (process.env.NODE_ENV !== "production") {
        return null;
    }

    return (
        <>
            {/* Load gtag.js script asynchronously */}
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />

            {/* Initialize gtag */}
            <Script
                id="google-analytics"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
                }}
            />
        </>
    );
};

export default GoogleAnalytics;
