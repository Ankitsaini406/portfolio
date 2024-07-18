"use client"

import { Timelinedetial } from "@/lib/types/allTypes";
import React, { useEffect, useState } from "react";

export async function Gettimeline() {
    const [timelines, setTimelines] = useState<Timelinedetial[]>([]);

    useEffect(() => {
        const fetchTimelines = async () => {
            const res = await fetch('/api/timeline');
            const data = await res.json();
            if (data.success) {
                setTimelines(data.data);
            } else {
                console.error(data.error);
            }
        };
        fetchTimelines();
    }, []);
    
    return timelines;
};

export async function wait(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
}