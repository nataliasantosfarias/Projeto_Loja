"use client";
//import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";


export default function Header() {
  //const { status, data: session } = useSession();

  // if (status !== "authenticated") { // Se o status code n for de autenticado retornará a  null
  //   return null;
  // }

  return (
    <div className="flex gap-4 justify-center p-2 flex-wrap">
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </div>
  );
}