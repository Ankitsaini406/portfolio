/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
    },
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
    },
];

const nextConfig = {
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
