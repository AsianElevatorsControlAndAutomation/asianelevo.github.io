import React from 'react'
import Script from "next/script";
import { FAQInformation } from '@/constants/FAQInformation';
import Title from '../Title/Title';

const FAQ = () => {
  return (
    <div className='p-10'>
        <Script src="/Scripts/Accordian.jsx" strategy='afterInteractive' />
        <Title type={2} title="FAQs" subTitle="Frequently Asked Questions" color="red" />
        <div className='grid grid-cols-6'>
          <div className='col-span-6 md:col-span-4'>
            {FAQInformation.map((element, idx)=>
              <div key={idx}>
                <button className="accordion bg-transparent p-5 my-2 w-full text-left outline-none text-2xl cursor-pointer border rounded-xl
                hover:border-2 hover:border-solid hover:border-white
                active:border-2 active:border-solid active:border-white active:border-b-0
                ">Q{idx+1}. {element.question}</button>
                <div className="panel pt-2 px-5 pb-5 -mt-2 mb-2 hidden overflow-hidden text-gray-300 border border-t-0">
                  <p className='text-xl'>{element.answer}</p>
                </div>
              </div>
            )}
          </div>
          <div className='hidden md:flex col-span-2'>
            <img src='/FAQ.svg' alt='faq' />
          </div>
        </div>
    </div>
  )
}

export default FAQ