'use client'

import { sendPost } from "@/functions/send"
import { useRouter } from "next/navigation"
import {startTransition} from 'react'

const obj = 
{
	userId: 107,
	name: "Manoel gomes"
}

export function Button() {
  const router = useRouter()
  const sendDating = async () => {
    const res = await sendPost('/post', obj)
    
     startTransition(() => {
       router.refresh();
   });
    
    return res
  }

  return (
    <>
  <button onClick={sendDating}>
    enviar
  </button>
  </>
  )
}