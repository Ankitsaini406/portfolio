
import { timelines } from "@/lib/data/timelines";

export default function Timeline() {

    return (
        <div className="w-full py-20 text-center bg-gray-900 text-white mix-blend-difference" id="timelineSection">
            <h1
                className="text-4xl md:text-5xl font-bold mb-10"
            >
                Working Experience
            </h1>
            <div className="relative max-w-6xl mx-auto">

                {timelines.length > 0 ? (
                    timelines.map((value, index) => (
                        <div
                            key={value.name}
                            className={`relative w-full md:w-1/2 px-4 py-6 ${index % 2 === 0 ? "md:left-0" : "md:left-1/2"}`}
                        >
                            <div
                                className={`relative border p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
                            >
                                <h2 className="text-xl font-semibold text-white uppercase">
                                    {value.name}
                                </h2>
                                <h4 className="text-md text-gray-400">{value.jobtitle}</h4>
                                <h6 className="text-sm text-gray-500">
                                    {value.joinDate} | {value.endDate}
                                </h6>
                                <p className="mt-2 text-gray-700 dark:text-gray-400">{value.work}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No data available</p>
                )}
            </div>
        </div>
    );
};
