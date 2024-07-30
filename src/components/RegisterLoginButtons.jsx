"use client";
import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function RegisterLoginButtons () {
  return (
    <div className=" flex gap-4 mt-4 justify-end">
      {/* Botão login */}
      <Link href="/register">
        <Button
          text="Cadastro"
          className="bg-[#059669] text-white rounded px-4"
        />
      </Link>
      <Link href="/login">
        <Button
          text="Login"
          className="bg-red-600 text-white rounded px-4"
        />
      </Link>
    </div>
  );
}
