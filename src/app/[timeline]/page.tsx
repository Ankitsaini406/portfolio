"use client";

import React, { useEffect, useState } from "react";
import style from "@/styles/timeline.module.css";
import { GET } from "../api/timeline/route";
import { Gettimeline } from "./timeline";
import Timelinedetial from "@/lib/timeline";

const Timeline = () => {

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

    return (
        <div className={style.timelineBox}>
            <h1 className={style.heading}>Working Expirence</h1>
            <div className={style.timeline}>

                {
                    timelines instanceof Array ?
                    timelines.map((value) => {
                        return ( 
                        <div key={value.name} className={style.container}>
                                <div className={style.textBox}>
                                    <h2 className={style.name}>{value.name}</h2>
                                    <h4>{value.jobtitle}</h4>
                                    <h6>{value.joinDate} | {value.endDate}</h6>
                                    <p className={style.work}>
                                        {value.work}
                                    </p>
                                    <span className={style.timelineArrow}></span>
                                </div>
                            </div>
                        )
                    }): <p>NO data</p>
                } 

            </div>
        </div>
    )
}

export default Timeline;