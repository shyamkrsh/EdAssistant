import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import axios from 'axios'


function Input({setAnswer}) {

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBfjro3dw9hviS_4YllqafkuwPEKT-P5UM`, {
                "contents": [{
                    "parts": [{ "text": `${value}` }]
                }]
            
        }).then((res) => {
            setAnswer(res.data.candidates[0].content.parts[0].text);
        })
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex items-center justify-center gap-1 h-[3rem]  fixed bottom-3 w-[100%]'>
                <div>
                    <FaPlus className='text-3xl font-semibold text-slate-700' />
                </div>
                <div className='w-[70%] bg-blue-950 h-full rounded-md'>
                    <input className='w-full h-full rounded-md px-5 outline-none bg-transparent text-slate-400' type="text" placeholder='Ask your questions' value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <button type='submit' className='btn bg-blue-950 h-[3rem] w-[3rem] rounded-full flex items-center justify-center text-blue-400 hover:opacity-90 hover:text-blue-500'><IoMdSend className='text-3xl font-semibold' /></button>
            </div>

        </form>

    </div>
)
}

export default Input