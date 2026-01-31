'use client';

import { useMemo } from "react";

export function useExperienceYears(start = "2022-07-01") {
    return useMemo(() => {
        const startDate = new Date(start);
        const now = new Date();

        const monthsDiff =
            (now.getFullYear() - startDate.getFullYear()) * 12 +
            now.getMonth() -
            startDate.getMonth();

        const years = monthsDiff / 12;
        return years < 1 ? "<1" : years.toFixed(1).replace(/\.0$/, "");
    }, [start]);
}