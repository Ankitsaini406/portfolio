'use client';

import { useEffect, useState } from 'react';
import SmoothScroll from '@/lib/SmoothScroll';

export default function ChildLayOut({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Don't render SmoothScroll during SSR
    if (!isClient) {
        return <>{children}</>;
    }

    return (
        <SmoothScroll>
            {children}
        </SmoothScroll>
    );
}