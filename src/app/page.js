import Header from "./components/Header";
import RegisterLoginButtons from "./components/RegisterLoginButtons";
import MessageUser from "./(private)/MessageUser";

export default function Home() {

  return (
    //<LayoutAdmin> 
    <main className="min-h-screen flex flex-col items-center pt-6">
      <Header />
      <MessageUser />
      <RegisterLoginButtons />
    </main>
  );
}
