import React, { useState } from 'react'
import Input from './Input';

function QAPlace() {

    const [answer, setAnswer] = useState("");

    return (
        <>
            <div className='workplace w-[100%] h-[100%]' style={{ background: 'linear-gradient(90deg, #001116, #13035c, #030352)' }}>
                <div className=' h-[80%] p-5 text-white' >
                    <p className='bg-slate-800 inline py-1 px-2 rounded-md '>Who is the prime minister of india ?</p>
                    <p>{answer}</p>
                </div>
                <Input setAnswer={setAnswer} />
            </div>
        </>
    )
}

export default QAPlace