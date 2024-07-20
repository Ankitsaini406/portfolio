"use client"

import {motion} from 'framer-motion'
import style from "@/styles/intro.module.css";

const Template = ({children} : {children : React.ReactNode}) => {
    return (
        <motion.div
        initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{ease: 'easeInOut', duration: 1}} className={style.template}>
            {children}
        </motion.div>
    )
}

export default Template;