'use client'
import { submitTheLink } from '@/actions/actions'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

const CreateALink = () => {
  const [link, setLink] = useState<String>('')
  const copyref = useRef <any>()
  const router =useRouter()
  
 async function verifyFormdata(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    
    const originalUrl = formData.get('original') as string;
    if (!originalUrl) {
      alert("Please enter a valid URL");
      return;
    }
    const result =await submitTheLink(originalUrl)
    setLink(result)
  }

  function copyvalue(){
    const shortLink = copyref.current.textContent;
    window.navigator.clipboard.writeText(shortLink)
    alert('copied')
    window.location.reload()
  }
    return (
      <div className='flex justify-center items-center w-screen h-screen '>
        <div>
          <form onSubmit={verifyFormdata} className='flex gap-2'>
            <input  placeholder='https://www.example.com/' className='px-2 py-1 border-2 border-red-600 rounded text-black' type="text" name='original' required
            />
            <button className='p-4 rounded-lg bg-blue-600 text-white font-semibold ' type='submit'>Short</button>
          </form>

        
            {
            link&&(
          <div className='mt-4 bg-blue-400 p-5 rounded-3xl'>
              <h1 ref={copyref} className='text-white'>localhost:3000/{link}</h1>
              <button className='p-4 bg-green-400 rounded-md' onClick={copyvalue}>copy</button>
          </div>
            )
            }
        </div>
      </div>
    )
  }

  export default CreateALink;