import React, { useState } from 'react'
import Input from './Input';

function QAPlace() {

    const [answer, setAnswer] = useState("");

    return (
        <>
            <div className='workplace w-[100%] h-[82%] overflow-auto text-slate-400 p-5'>
                {/* <p className='bg-slate-800 inline py-1 px-2 rounded-md'>Who is the prime minister of india ?</p> */}
                <p>{answer}</p>
            </div>
            <Input setAnswer={setAnswer}/>
        </>
    )
}

export default QAPlace