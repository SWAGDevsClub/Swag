import { motion } from "framer-motion"
import styles from "../styles"
import { fadeIn, staggerContainer } from "../utils/motion"
import Link from "next/link"
const Model = () =>(

<motion.div
    initial={{ opacity: 0, scale: 0.5, y:-100 }}
    animate={{ opacity: 1, scale: 1 ,y:0}}
    transition={{ duration: 0.5 }}
className={`lg:ml-[85%] ml-[50%] mt-[-40px]
   rounded-[10px] inline-flex flex-col bg-[#1e2840] z-30 absolute p-2 md:ml-[70%]`}
>
{/* options={["Projects","Events","About","ContactUs"]} */}
<div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]  `}
    >
    <div className=" absolute rounded-full bg-red-600 via-red-800 h-4 w-4 top-[10px] left-5 "/>
    <Link href="/Hackfusion2" className="text-white font-medium p-[10px] px-4 cursor-pointer" >
    HackFusion 2.O
    </Link>
    </div>
    <div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96] `}
    >

    <Link href="/Projects" className="text-white font-medium p-[10px] px-5 cursor-pointer" >
    Projects
    </Link>
    </div>
    <div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
    >
    <Link href="/Events"
    className="text-white font-medium p-[10px] px-5 cursor-pointer"
    >
    Events
    </Link></div>
    <div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
    >
    <Link href="/AboutUs"
    className="text-white font-medium p-[10px] px-5 cursor-pointer"
    >
    AboutUs
    </Link>
    </div>
    <div
    className={`${styles.flexCenter}  w-[100%] h-[40px] p-[0px] mb-1
   rounded-[10px] bg-[#323f5d] hover:bg-[#586b96]`}
    >
    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=swag@sggs.ac.in&su=Contact%20Us"
    className="text-white font-medium p-[10px] px-5 cursor-pointer"
    >
    ContactUs
    </Link>
    </div>
</motion.div>
)

export default Model