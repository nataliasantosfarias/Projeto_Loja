"use client";
import { signOut } from "next-auth/react";
import React from "react";
import Button from "../components/Button";

export default function ExitButton () {
  return (
    <Button
      text="Sair"
      className="bg-red-600 text-white rounded px-2 cursor-pointer"
      onClick={() => signOut()}
    />
  );
}