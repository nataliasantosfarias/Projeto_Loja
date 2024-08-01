"use client";
import { signOut } from "next-auth/react";
import React from "react";
import Button from "../../components/Button";

export default function ExitButton() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // Redireciona para a página principal após o logout
  };

  return (
    <>
      <Button
        text="Sair"
        className="bg-red-600 text-white rounded px-2 cursor-pointer max-sm:fixed  bottom-4 right-4 z-50  block"
        onClick={handleSignOut}
      />
    </>
  );
}
