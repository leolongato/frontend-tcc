import Head from 'next/head'
import { useState } from 'react';
import { VscLoading } from 'react-icons/vsc'
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [inputType, setInputType] = useState<string>('password');

  function handleInputType(){
    if (inputType === "password")
      setInputType("text")
    else
      setInputType("password")
  }

  return (
    <div>
      <Head>
        <title>LGPDBank - Login</title>
        <link rel="icon" href="/bank.svg" />        
      </Head>
      <img src="/bank.svg" alt="Bank" className="absolute w-20 h-20 m-4"/>
      <div className="screen">
        <div className="form">
          <h1 className="text-2xl font-bold">Log In</h1>
          <div className="input-div">
            <AiOutlineUser className="input-icon"/>
            <input type="text" placeholder="Username" className="input" />
          </div>
          <div className="input-div">
            <AiOutlineLock className="input-icon"/>
            <input type={inputType} placeholder="Password" className="input" />
            {
              inputType === "password" 
              ? <AiOutlineEyeInvisible onClick={handleInputType} className="eye-icon"/>
              : <AiOutlineEye onClick={handleInputType} className="eye-icon"/>
            }          
          </div>
          <button onClick={() => setIsLoading(true)} type="submit" className="btn-submit">Continue</button>
          {
            isLoading && <VscLoading className="absolute w-8 h-8 text-purple-600 bottom-5 animate-spin"/> 
          }
        </div>
      </div>
    </div>
  )
}
