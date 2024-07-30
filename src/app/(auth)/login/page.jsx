"use client"; //Informa que será uma página usada pelo cliente
import { Form, Formik } from "formik";
import React, { useEffect,useState } from "react";
import Input from "@/app/components/Input";//Importa o componente Input
import Button from "../../components/Button"; //Importa o componente Button
import Link from "next/link";
import * as Yup from "yup"; //validação
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


// função para importar valores do formik
export default function Login() {
  const [error, setError] = useState("");
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => { //função do React para alterar  a rota
    if (status === "authenticated") {
      router.push("/");
    }
  }, [ status,router ]);

  if (status !== "unauthenticated") { // caso status n seja autenticado retorne null
    return null;
  }
    


  const initialValues = {  //valores iniciais
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    //objeto de validação
    email: Yup.string()
      .email("Digite um email válido")
      .required("O campo e-mail é obrigatório"),
    password: Yup.string().required("O campo senha é obrigatório"),
  });


  async function handleSubmit(values, { resetForm }) {
    setFormSubmitting(true);
    try {
      signIn("Credentials", { ...values, redirect: false }).then(
        ({ error }) => {
          if (!error) {
            router.push("/"); // Verifico se possui algum erro
          } else {
            setError(error.replace("Error: ", ""));
            setTimeout(() => {
              setError("");
            }, 3000);
            resetForm();
          }
          setFormSubmitting(false);
        }
      );
    } catch {
      setFormSubmitting(false);
      setError("Erro ao criar conta, tente mais tarde!"); //testa erro tela login
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form
            noValidate
            className="flex flex-col gap-2 p-4 border rounded border-zinc-300 min-w-[300px] bg-white "
          >
             
            <div className="mb-4 text-center text-lg text-gray-700">
              Bem-vindo!Por favor, faça login para acessar a sua conta.
            </div>

            <Input name="email" type="email" required />
            <Input name="password" type="password" required autoComplete="off" />

            <Button
              type="submit"
              text={isFormSubmitting ? "Carregando..." :"Entrar"} // Formulário login enviado ? arregando
              disabled={isFormSubmitting} //botão desabilitado caso o formulário de login seja enviado corretamente
              className="bg-green-700 text-white rounded p-2 cursor-pointer  "
            />
              
                { error  &&( //condição que renderiza um elemento se valores derem erro/incorretos ou inesistência de informações
                    <span className="text-red-500">{error}</span>
                )}

                <span className="text-xs text-zinc-500">
                  Não possui uma conta?
                  <strong className="text-zinc-700">
                <Link href="/register">
                   Inscreva-se
                </Link>
              </strong>
            </span>
          </Form>
        )}
      </Formik>
    </main>
  );
}


