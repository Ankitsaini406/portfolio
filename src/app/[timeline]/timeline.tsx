import Timelinedetial from "@/lib/timeline";
import style from "./timeline.module.css";
import React from "react";

const Timeline = () => {
    return (
        <div className={style.timelineBox}>
            <h1 className={style.heading}>Working Expirence</h1>
            <div className={style.timeline}>

                {
                    Timelinedetial.map((value) => {
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
                    })
                }

            </div>
        </div>
    );
};

export default Timeline;
