'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaList, FaHome } from "react-icons/fa";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState();
    const sidebar = [
        {name: 'Home', src: <FaHome  fontSize={30}/>, link: `/login/${id}`},
        {name: 'List', src: <FaList fontSize={30}/>, link:`/login/${id}/list`}
    ];

    useEffect(() => {
        setId(localStorage.getItem('id'));
    }, []);

    return (
        <main className={`${open ? "w-60" : "w-28"} h-screen pt-24 relative font-openSans duration-300 bg-blueLight`}>
            <FaArrowCircleLeft fontSize={35} onClick={()=> setOpen(!open)} className={`${!open && "rotate-180"} -right-4 top-10 absolute cursor-pointer text-grey bg-white rounded-full`}/>
            <ul>
                {
                    sidebar.map((sidebar, index)=>(
                        <Link key={index} href={sidebar.link}>
                            <li className=" p-10 left-10 flex items-center text-center text-2xl gap-x-4 cursor-pointer font-semibold text-white hover:bg-blueDarksito">
                                {sidebar.src}
                                <span className={`${!open && "hidden origin-left duration-200"}`}>{sidebar.name}</span>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </main>
    )
}

export default Sidebar
