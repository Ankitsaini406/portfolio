
import React from "react";
import style from "./timeline.module.css";
import { GET } from "../api/timeline/route";

const Timeline = async () => {

    const timelines = await GET();

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