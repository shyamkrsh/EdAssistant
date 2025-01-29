import React, { useState } from 'react'
import Input from './Input';

function QAPlace() {

    const [answer, setAnswer] = useState("");

    return (
        <>
            <div className='workplace w-[100%] h-[100%]'>
                <div className=' h-[80%] p-5 text-white' >
                    <p className=''>Who is the prime minister of india ?</p>
                    <p>{answer}</p>
                </div>
                <Input setAnswer={setAnswer} />
            </div>
        </>
    )
}

export default QAPlace