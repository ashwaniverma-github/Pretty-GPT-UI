'use client'
import { useState } from "react";
import Button from "./Button";
import axios from "axios";
import Display from "./Display";

export default function Input() {

    const[userMessage,setUserMessage] = useState('')
    const[lallanMessage,setLallanMessage] = useState('Ask me Something annyoing')

    async function sendMessaege(){
        try{
            const response  = await axios.post('https://prettygpt.carzynft.com/api/chat',{
                message:userMessage
            })
            const message = response.data.lallan
            console.log(`Received message: ${message}`)
            setLallanMessage(message)
            setUserMessage('')
            
            
            

        }catch(err){
            console.error(`error sending message${err}`)
        }
        
    }
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-x-0 bottom-5 flex justify-center">
                <input 
                    type="text" 
                    placeholder="Send message" 
                    className="input bg-gray-700 rounded-badge mb-5 w-4/5 max-w-xl md:ml-0 ml-4 "
                    value={userMessage}
                    onChange={(e)=>
                        setUserMessage(e.target.value)
                    }
                />
                <div className="mx-4 ">
                    <Button onclick={sendMessaege} />
                </div>
            </div>
            <Display response={lallanMessage} />
            
        </div>
    );
}


