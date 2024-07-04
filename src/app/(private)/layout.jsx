"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LayoutAdmin({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // Se o usuário não estiver  autenticado não retorna nada
  }

  if (!session) { // Se estiver envia o usuário a tela de login
    router.push("/login");

    return null;
  }

  return <div className="min-h-screen">{children}</div>; // Se tiver uma sesão ele vai continuar
}