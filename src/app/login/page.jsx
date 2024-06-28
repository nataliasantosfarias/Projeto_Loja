"use client"; //Informa que será uma página usada pelo cliente
import { Form, Formik } from "formik";
import React from "react";
// import Input from "../components/input";


export default function Login() { // função para importar valores do formik
    return ( 
        <main className="min-h-screen flex items-center justify-center">
            <Formik>{({ values }) => <Form  noValidate>caralho</Form>}</Formik>
                
                    
        </main>
    );
}
