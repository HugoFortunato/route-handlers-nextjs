'use client'

import { sendPost } from "@/functions/send"

const obj = 
{
	userId: 107,
	name: "Yasmin"
}

export function Button() {
  const sendDating = async () => {
    const res = await sendPost('/post', obj)

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