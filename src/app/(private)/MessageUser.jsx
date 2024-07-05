"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function MessageUser() {
  const { status, data: session } = useSession();

  if (status !== "authenticated" || !session?.user?.name) {
    return null;
  }

  return (
    <span className="text-white rounded-sm px-2">
      {`Olá ${session.user.name.split(" ")[0]}`}
    </span>
  );
}
