"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex gap-4 justify-center p-2 flex-wrap">
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/contato">Contato</Link>
    </div>
  );
}