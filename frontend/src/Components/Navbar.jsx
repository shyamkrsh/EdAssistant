import React from 'react'
import { FaUser } from "react-icons/fa";

function Navbar() {
    return (
        <header className='shadow-lg flex items-center justify-between fixed top-0 py-2 px-4 w-[100%]' style={{ background: 'linear-gradient(90deg, #001116, #13035c, #030352)' }}>
            <div>
                <h1 className='text-3xl font-bold text-slate-500'>EdAssistant</h1>
            </div>
            <div>
                <FaUser className='text-3xl font-bold text-slate-500' />
            </div>
        </header>
    )
}

export default Navbar