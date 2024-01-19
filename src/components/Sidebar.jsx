'use client';
import { useState } from "react";
import { FaArrowCircleLeft, FaList, FaHome } from "react-icons/fa";
// import { GrHomeRounded } from "react-icons/gr";
import { GoHome } from "react-icons/go";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const sidebar = [
        {name: 'Home', src: <FaHome  fontSize={30}/>},
        {name: 'List', src: <FaList fontSize={30}/>}
    ];
    
    return (
        <main className={`${open ? "w-60" : "w-28"} h-screen pt-24 relative font-openSans duration-300 bg-blueLight`}>
            <FaArrowCircleLeft fontSize={35} onClick={()=> setOpen(!open)} className={`${!open && "rotate-180"} -right-4 top-10 absolute cursor-pointer text-grey bg-white rounded-full`}/>
            <ul>
                {
                    sidebar.map((sidebar, index)=>(
                        <li key={index} className="flex items-center text-center text-2xl gap-x-4 p-10 left-10 font-semibold text-white hover:bg-blueDarksito">
                            {sidebar.src}
                            <span className={`${!open && "hidden origin-left duration-200"}`}>{sidebar.name}</span>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}

export default Sidebar
