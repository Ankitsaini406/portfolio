"use client";

import { timelines } from "@/lib/data/timelines";
import { motion } from "framer-motion";

export default function Timeline() {

    return (
        <div className="w-full py-20 text-center mb-24 bg-gray-900 text-white mix-blend-difference" id="timelineSection">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-10"
            >
                Working Experience
            </motion.h1>
            <div className="relative max-w-6xl mx-auto">

                {timelines.length > 0 ? (
                    timelines.map((value, index) => (
                        <motion.div
                            key={value.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                            className={`relative w-full md:w-1/2 px-4 py-6 ${index % 2 === 0 ? "md:left-0" : "md:left-1/2"}`}
                        >
                            <motion.div
                                className={`relative border p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h2 className="text-xl font-semibold text-white uppercase">
                                    {value.name}
                                </h2>
                                <h4 className="text-md text-gray-400">{value.jobtitle}</h4>
                                <h6 className="text-sm text-gray-500">
                                    {value.joinDate} | {value.endDate}
                                </h6>
                                <p className="mt-2 text-gray-700 dark:text-gray-400">{value.work}</p>
                            </motion.div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-gray-400">No data available</p>
                )}
            </div>
        </div>
    );
};
