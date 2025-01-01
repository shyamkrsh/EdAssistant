import React from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";

function Navbar() {
    return (
        <header className='flex items-center justify-between  py-2 px-4 w-[100%] ' style={{ background: 'linear-gradient(90deg, #001116, #13035c, #030352)' }}>
            <div className='cursor-pointer md:hidden'>
                <CgMenuRightAlt className='text-3xl font-bold text-slate-500' />
            </div>
            <div>
                <h1 className='text-2xl  font-bold text-slate-500'>EdAssistant</h1>
            </div>
            <div>
                <FaUser className='text-3xl font-bold text-slate-500 hidden md:block' />
                <TbEdit className='text-3xl font-bold text-slate-500 md:hidden' />

            </div>
        </header>
    )
}

export default Navbar