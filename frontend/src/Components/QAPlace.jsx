import React, { useState } from 'react'
import { BiSend } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { CgAttachment } from "react-icons/cg";
import { AiOutlineGlobal } from "react-icons/ai";

function QAPlace() {

    const [answer, setAnswer] = useState("");

    return (
        <>
            <div className='relative w-[100%] h-[100%]'>
                <div className='answerArea w-[100%] h-[33.5rem] absolute flex flex-col overflow-scroll'>
                    <div className='w-[100%] p-1 flex justify-end'>
                        <div className='w-[60%] px-1'>
                            <p className='text-slate-600 bg-slate-200 p-2 rounded-lg'>Who is the prime minister of india? </p>
                        </div>
                    </div>
                    <div className='w-[100%] p-1'>
                        <p className='p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, dicta cupiditate. Quod cumque recusandae ut provident aperiam accusantium qui sequi deserunt alias sapiente, ipsa quo! Quos, cum dolores, deleniti pariatur minus beatae, nisi fugit sequi officia repudiandae quas ex temporibus. Quam voluptas reiciendis consequatur qui? Molestias, nam iste expedita eius quam voluptas in, praesentium nisi beatae illo quos eveniet, mollitia reiciendis quasi aliquam omnis temporibus nihil ipsa quo fugit aspernatur asperiores ipsum architecto repellendus! Velit quidem cumque ratione laborum consectetur ut minima sed! Minima, dolore amet praesentium iste rerum magni. Necessitatibus cum omnis dolores hic nam, impedit voluptate perferendis autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolorum est aperiam quaerat consectetur quod veritatis commodi! Et, quaerat. Nam necessitatibus, quae nulla natus quos libero asperiores illum vitae velit accusantium fuga id eligendi eveniet iure dolor ab harum rem provident? Commodi ad quis eum inventore.</p>
                    </div>
                </div>

                <div className='inputArea w-[100%] h-[8rem] fixed bottom-5  px-2 flex flex-col gap-2 border-t rounded-lg'>
                    <div className='mt-1'>
                        <textarea type="text" placeholder='Ask your questions ..' className='outline-none  w-[100%] h-[4rem] py-1.5 px-1.5 ' rows={4}></textarea>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <GoPlus className='text-3xl  text-slate-600' />
                            <CgAttachment className='text-2xl  text-slate-600' />
                            <AiOutlineGlobal className='text-3xl text-slate-600' />
                        </div>
                        <button className='w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center text-slate-600 hover:text-blue-500 bg-slate-300'>
                            <BiSend className='text-3xl font-semibold text-slate-600' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QAPlace