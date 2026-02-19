"use client";

import { useState, useEffect } from "react";

export function useExperienceYears(start = "2022-07-01") {
    const [years, setYears] = useState<string | null>(null);

    useEffect(() => {
        const startDate = new Date(start);
        const now = new Date();

        const monthsDiff =
            (now.getFullYear() - startDate.getFullYear()) * 12 +
            now.getMonth() -
            startDate.getMonth();

        const calculatedYears = monthsDiff / 12;
        setYears(
            calculatedYears < 1
                ? "<1"
                : calculatedYears.toFixed(1).replace(/\.0$/, "")
        );
    }, [start]);

    return years;
}
