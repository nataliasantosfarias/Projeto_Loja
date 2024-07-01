"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Button from "./Button";


export default function Header() {
  const { status, data: session } = useSession();

  if (status !== "authenticated") { // Se o status code n for de autenticado retornará a  null
    return null;
  }

  return (
    <div className="flex gap-4 justify-center p-2 flex-wrap">
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
      <span className="text-white rounded-sm px-2">
        {
      `Olá ${
        session?.user?.name.split(" ")[0] //quando ousuário estiver autenticado ele vai pegar da sessão p primeiro  userName
      }`}</span> 
      <Button
        text="Sair"
        className="bg-red-600 text-white rounded px-2 cursor-pointer"
        onClick={() => signOut()}
      />
      
    </div>
  );
}