import React, { useEffect, useRef, useState } from 'react'
import { BiSend } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { CgAttachment } from "react-icons/cg";
import { AiOutlineGlobal } from "react-icons/ai";
import axios from 'axios'
import { IoMicOutline } from "react-icons/io5";

function QAPlace() {
    const [value, setValue] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);
    const chatRef = useRef(null);

    useEffect(() => {
        setQuestions(JSON.parse(localStorage.getItem('questions')))
        setAnswers(JSON.parse(localStorage.getItem('answers')))
    });


    if (!localStorage.getItem('questions')) {
        localStorage.setItem('questions', JSON.stringify([]))
    }
    if (!localStorage.getItem('answers')) {
        localStorage.setItem('answers', JSON.stringify([]))
    }
    const handleSubmit = () => {
        if (value !== "") {
            let prevQuestions = JSON.parse(localStorage.getItem('questions'));
            let question = value;
            prevQuestions.push(question);
            localStorage.setItem('questions', JSON.stringify(prevQuestions));
            setLoading(true);
            axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBfjro3dw9hviS_4YllqafkuwPEKT-P5UM`, {
                "contents": [{
                    "parts": [{ "text": `${value}` }]
                }]
            }).then((res) => {
                setValue("");
                let prevAnswers = JSON.parse(localStorage.getItem('answers'));
                let answer = res.data.candidates[0].content.parts[0].text;
                prevAnswers.push(answer);
                localStorage.setItem('answers', JSON.stringify(prevAnswers));
                chatRef.current.scrollTop = chatRef.current.scrollHeight;
                setLoading(false);
            })
        }
    }

    let handleSpeech = () => {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.start();
        recognition.onresult = function (event) {
            let transcript = event.results[0][0].transcript;
            setValue(transcript);
            recognition.stop();
            let prevQuestions = JSON.parse(localStorage.getItem('questions'));
            let question = transcript;
            prevQuestions.push(question);
            localStorage.setItem('questions', JSON.stringify(prevQuestions));
            setLoading(true);
            axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBfjro3dw9hviS_4YllqafkuwPEKT-P5UM`, {
                "contents": [{
                    "parts": [{ "text": `${transcript}` }]
                }]
            }).then((res) => {
                setValue("");
                let prevAnswers = JSON.parse(localStorage.getItem('answers'));
                let answer = res.data.candidates[0].content.parts[0].text;
                prevAnswers.push(answer);
                localStorage.setItem('answers', JSON.stringify(prevAnswers));
                chatRef.current.scrollTop = chatRef.current.scrollHeight;
                setLoading(false);
            })

        }
    }


    return (
        <>
            <div className='relative w-[100%] h-[100%]'>
                <div className='answerArea w-[100%] h-[33.5rem] absolute flex flex-col overflow-scroll' ref={chatRef}>

                    {
                        questions?.map((question, index) => {
                            return (
                                <div key={index}>
                                    <div className='w-[100%] p-1 flex justify-end'>
                                        <div className='max-w-[60%]  px-1'>
                                            <p className='text-slate-600 bg-slate-200 p-2 rounded-lg'>{question}</p>
                                        </div>
                                    </div>
                                    <div className='w-[100%] p-1'>
                                        <h3 className='px-2 font-bold'>Ans : </h3>
                                        <p className='px-2 py-1'>
                                            {answers[index]?.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')?.replace(/`([^`]+)`/g, '<code>$1</code>')}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className={loading ? 'ms-3 w-[3rem] h-[2rem] bg-slate-100 border grid place-items-center rounded-lg ' : 'hidden'}>
                        <span className="loading loading-dots loading-md text-slate-950"></span>
                    </div>
                </div>

                <div className='inputArea w-[100%] h-[8rem] fixed bottom-5  px-2 flex flex-col gap-2 border-t rounded-lg'>

                    <div className='mt-1'>
                        <textarea type="text" placeholder='Ask your questions ..' className='outline-none  w-[100%] h-[4rem] py-1.5 px-1.5 ' value={value} onChange={(e) => setValue(e.target.value)} rows={4}></textarea>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <GoPlus className='text-3xl  text-slate-600' />
                            <CgAttachment className='text-2xl  text-slate-600' />
                            <AiOutlineGlobal className='text-3xl text-slate-600' />
                        </div>
                        <div className='flex gap-4 items-center'>
                            <IoMicOutline className='text-3xl text-slate-600' onClick={handleSpeech} />
                            <button onClick={handleSubmit} type='submit' className='w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center text-slate-600 hover:text-blue-500 bg-slate-300'>
                                <BiSend className='text-3xl font-semibold text-slate-600' />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default QAPlace