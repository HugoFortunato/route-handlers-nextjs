"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const obj = {
  userId: 110,
  name: "Hugo Fortunato",
};

export function Button() {
  const router = useRouter();
  const sendDating = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      <button onClick={sendDating}>enviar</button>
    </>
  );
}
