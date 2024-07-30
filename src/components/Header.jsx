"use client";
import Link from "next/link";
import React from "react";
import ExitButton from "../app/(private)/ExitButton";
import MessageUser from "../app/(private)/MessageUser";
export default function Header() {
  

  return (
    <div className="bg-[#059669] text-white py-4 px-6 flex justify-center">
      <div className="flex gap-4">
          <Link href="/" className="text-xl">Home</Link>
          <Link href="/sobre" className="text-xl">Sobre</Link>
          <Link href="/contato" className="text-xl">Contato</Link>
        <ExitButton/>
        <MessageUser/>
      </div>
    </div>
  );
}
