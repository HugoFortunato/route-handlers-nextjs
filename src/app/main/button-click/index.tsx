"use client";
import { usePathname, useRouter } from "next/navigation";
import Cookie from "js-cookie";
import { sendDating } from "@/app/functions/sendDating";
import { startTransition } from "react";

export function Button({ label }: { label: string }) {
  const router = useRouter();

  const handleRouteValidate = async () => {
    Cookie.set("token", "my-token");

    await router.push("/main");
    await sendDating();

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <>
      <button onClick={handleRouteValidate}>{label}</button>
    </>
  );
}
