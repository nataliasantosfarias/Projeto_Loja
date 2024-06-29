"use client"; //Informa que será uma página usada pelo cliente
import { Form, Formik } from "formik";
import React from 'react'
import Input from "../../components/input"; //Importa o componente Input
import Button from '@/app/components/Button';
import * as Yup from "yup";
import Link from "next/link";
export default function Register() {
  
  const initialValues = { //valores iniciais
    email: "",
    password: "",
  };


const validationSchema = Yup.object().shape({ //objeto de validação
    name: Yup.string().required("O campo é obrigatório"),
    email: Yup.string()
        .email("Digite um email válido")
        .required("O campo e-mail é obrigatório"),
    password: Yup.string().required("O campo senha é obrigatório"),    
});

async function handleSubmit(){
    console.log('Form Values',values)
}

return (
  <main className="min-h-screen flex items-center justify-center">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, onChange }) => (
        <Form
          noValidate
          className="flex flex-col gap-2 p-4 border border-zinc-300 min-w-[300px] bg-green-100 "
        >
          <Input
            name="Nome"
            type="Nome"
            label="Nome"
            value={values?.name}
            required={true}
            onChange={handleSubmit}
          />

          <Input
            name="email"
            type="email"
            label="email"
            value={values?.name}
            required={true}
            onChange={handleSubmit}
          />

          <Input
            name="password"
            label="password "
            value={values?.name}
            required={true} //campo obrigatório
            autoComplete="off" //não aulto_complet a senha
            onChange={onChange} //manipulador de eventos
          />

          <Button
            type="submit"
            text="Entrar"
            className="bg-green-700 text-white rounded p-2 cursor-pointer  "
          ></Button>

          <span className="text-xs text-zinc-500">
            Não possui uma conta?
            <strong className="text-zinc-700">
              <Link href="/login">Entre</Link>
            </strong>
          </span>
        </Form>
      )}
    </Formik>
  </main>
);
}
