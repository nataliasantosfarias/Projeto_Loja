import { useSession } from "next-auth/react";
import React from "react";

export default function MessageUser() {
  const { status, data: session } = useSession();

  if (status !== "authenticated" || !session?.user?.name) { // Condição para exibir mensagem apenas para usuários autenticados
    return null;
  }

  return (
    <div className="flex items-center space-x-2 text-white rounded-sm px-1">
      {session.user.image ? ( // Usuário autenticado? exiba imagem
        <img
          src={session.user.image}
          alt="User Image"
          className="w-8 h-8 rounded-full"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14c-3.313 0-6 2.687-6 6 0 .552.448 1 1 1h10c.552 0 1-.448 1-1 0-3.313-2.687-6-6-6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
          />
        </svg>
      )}
      <span className=" md:inline-block whitespace-nowrap">
       {`Olá ${session.user.name.split(" ")[0]}`}  {/* suário autenticado? exiba imagem */}
      </span>
    </div>
  );
}
// hidden md:inline-block