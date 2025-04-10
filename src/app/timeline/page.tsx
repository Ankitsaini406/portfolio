import { timelines } from "@/lib/data/timelines";

export default function Timeline() {

    return (
        <div className="w-full py-20 text-center mb-24" id="timelineSection">
            <h1 className="text-4xl md:text-5xl font-bold text-main mb-10">
                Working Experience
            </h1>
            <div className="relative max-w-6xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-full bg-main hidden md:block"></div>

                {timelines.length > 0 ? (
                    timelines.map((value, index) => (
                        <div
                            key={value.name}
                            className={`relative w-full md:w-1/2 px-4 py-6 ${index % 2 === 0 ? "md:left-0" : "md:left-1/2"
                                }`}
                        >
                            <div
                                className={`relative  p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                                    }`}
                            >
                                <h2 className="text-xl text-accent font-semibold text-gray-900 uppercase">
                                    {value.name}
                                </h2>
                                <h4 className="text-md text-gray-700">{value.jobtitle}</h4>
                                <h6 className="text-sm text-gray-500">
                                    {value.joinDate} | {value.endDate}
                                </h6>
                                <p className="mt-2 text-gray-700">{value.work}</p>

                                {/* Arrow Indicator */}
                                <div
                                    className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-solid border-transparent ${index % 2 === 0
                                            ? "md:border-l-[15px] md:border-l-main md:right-0"
                                            : "md:border-r-[15px] md:border-r-main md:left-0"
                                        }`}
                                ></div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No data available</p>
                )}
            </div>
        </div>
    );
};
