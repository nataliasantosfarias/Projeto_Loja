import Link from "next/link";
import Button from "./Button";

export default function RegisterLoginButtons () {
  return (
    <div className="min-h-screen flex flex-col items-center pt-6">
      {/* Botão login */}
      <Link href="/register">
        <Button
          text="Cadastro"
          className="w-40 bg-green-600 text-white rounded px-2 cursor-pointer mb-4"
        />
      </Link>
      <Link href="/login">
        <Button
          text="Login"
          className="w-40 bg-green-600 text-white rounded px-2 cursor-pointer mb-4"
        />
      </Link>
    </div>
  );
}
