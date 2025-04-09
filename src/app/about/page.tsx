
import Image from 'next/image';
import { FaCode } from "react-icons/fa6";

export default function About() {
    return (
        <div className="flex max-w-[1200px] mx-auto py-20 gap-8 justify-start px-4 flex-wrap md:justify-evenly" id="about">
            {/* Image Container */}
            <div className="relative min-w-[200px] w-[300px] h-[490px] overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer sm:w-[250px] sm:h-[400px] md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[490px]">
                <div className="absolute inset-0 rounded-lg">
                    <Image 
                        className="w-full h-full object-cover rounded-lg"
                        width={1000} height={1000} 
                        src='/images/myimage.jpg' 
                        alt='Ankit Saini' 
                    />
                </div>
            </div>

            {/* About Box */}
            <div className="flex flex-col gap-4">
                {/* Title Box */}
                <div className="flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-3 w-max">
                    <FaCode className="text-black" /> 
                    <h4 className="text-lg font-semibold">Web / App Developer</h4>
                </div>
                
                {/* Intro */}
                <h1 className="text-3xl font-bold">Hi, I&apos;m Ankit <span className="inline-flex cursor-pointer animate-waving-hand">👋</span></h1>
                <h1 className="text-2xl font-normal text-gray-500 md:text-3xl">your web / app developer</h1>

                {/* Description */}
                <p className="leading-[22px] text-lg sm:text-base max-w-[700px]">
                    <b>Web</b> and <b>Mobile</b> developer with over 2 years of experience in creating user-friendly and visually appealing
                    interfaces using <b>HTML, CSS, JavaScript</b> and <b>Responsive Design</b> techniques. Proficient in the <b>Flutter</b> framework
                    for cross-platform app development, MySQL for data management, and APIs for application communication.
                    Experienced in using Firebase for real-time database and authentication services. Dedicated to continuous
                    learning and contributing to a collaborative and innovative environment.
                </p>
            </div>
        </div>
    );
}
