"use client"
import React, { useState } from 'react'

const ReachUsForm = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState({message: '', type: ''});
    const alertTextColors = ['text-red-500', 'text-green-500']
    const alertBorderColors = ['border-red-500', 'border-green-500']

    const submit = async () => {
        if(name==="" || contact===""){
            setAlert({message: 'Name/Contact cannot be empty!', type: 'danger'})
            setTimeout(()=>{
                setAlert({message: '', type: ''})
            }, 2000)
        }
        else{
            try{
                const response = await fetch(`https://us-central1-asian-office-b6a75.cloudfunctions.net/asianElevoReachOut?name=${name}&contact=${contact}&description=${message}`);
                let data = await response.json()
                if(data.success==true){
                    setAlert({message: 'Sent!', type: 'success'})
                    setName('');
                    setContact('');
                    setMessage('');
                }
                else{
                    console.log(data);
                    setAlert({message: 'Unable to send the message.. Try other methods!', type: 'danger'})
                }
            }catch(err){
                console.log(err)
                setAlert({message: 'Unable to send the message.. Try other methods!', type: 'danger'})
            }finally{
                setTimeout(()=>{
                    setAlert({message: '', type: ''})
                }, 5000)
            }
        }
    }
    return (
        <section className="">
            <div className="mt-3 mx-auto max-w-screen-md">
                <div className="space-y-8">
                    <div className='entryAnimateLeft'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name..." required value={name} onChange={e=>setName(e.target.value)} />
                    </div>
                    <div className='entryAnimateLeft'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact Detail (Email/Phone Number) </label>
                        <input type="text" id="contact" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@xyz.com / +91-98xxxxxxxx" required value={contact} onChange={e=>setContact(e.target.value)}  />
                    </div>
                    <div className="sm:col-span-2 entryAnimateLeft">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message..." value={message} onChange={e=>setMessage(e.target.value)} ></textarea>
                    </div>
                    <div className='flex justify-end mr-10 entryAnimateUp'>
                        <button 
                            className={`py-2 px-5 rounded-full glass hvr-grow`}
                            onClick={submit}
                        >Send message</button>
                    </div>
                </div>
            </div>
            {alert.message!==''&&
                <div className='flex justify-center'>
                    <div className={`text-xl text-${alert.type==='danger'?'red':alert.type==='success'?'green':''}-500 flex border border-${alert.type==='danger'?'red':alert.type==='success'?'green':''}-500 rounded-lg px-5 py-2`} >
                        {alert.message}
                    </div>
                </div>
            }
        </section>
    )
}

export default ReachUsForm