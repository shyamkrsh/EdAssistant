import React from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

function Navbar() {
    return (
        <header className='flex items-center justify-between px-4 w-[100%] h-[4rem] border-2' >
            <div className='cursor-pointer md:hidden'>
                <CgMenuRightAlt className='text-3xl  text-slate-700' />
            </div>
            <div>
                <h1 className='text-2xl  text-slate-700'>𝐀𝐈 𝐆𝐮𝐢𝐝𝐞</h1>
            </div>
            <div>
                <FaUser className='text-3xl  text-slate-700 hidden md:block' />
                <TbEdit className='text-3xl  text-slate-700 md:hidden' />
            </div>
        </header>
    )
}

export default Navbar