"use client";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import Button from "../components/Button";


export default function MessageUser() {
  const { status, data: session } = useSession();

 

  return (
    <div className="flex items-center gap-2">
      <span className="text-white rounded-sm px-2">
        {`Olá ${
          session?.user?.name.split(" ")[0] // quando o usuário estiver autenticado ele vai pegar da sessão o primeiro userName
        }`}
      </span>
      <Button
        text="Sair"
        className="bg-red-600 text-white rounded px-2 cursor-pointer"
        onClick={() => signOut()}
      />
    </div>
  );
}
