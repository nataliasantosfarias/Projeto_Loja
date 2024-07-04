
import Link from 'next/link';
import Button from './components/Button';

export default function Home() {

  return (
    //<LayoutAdmin> 
    <main className="min-h-screen flex flex-col items-center pt-6">
      <div className="text-center mb-6">Só cozinho Verde</div>


        {/* Botão login */}
        <Link href="/login">
          <Button text="Cadastro"
            className="w-40 bg-green-600 text-white rounded px-2 cursor-pointer mb-4"
          />
        </Link>
        <Link href="/register">
          <Button text="Login"
            className="w-40 bg-green-600 text-white rounded px-2 cursor-pointer mb-4"
          />
        </Link>
    </main>
  );
}
