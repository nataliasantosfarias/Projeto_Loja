"use client";
import { ErrorMessage, Field } from "formik";
import React from "react";

export default function Input({ name, label, type, required, ...props }) {
  //Função dos inputs
  return (
    <div className="flex flex-col text-black">
      <label className="capitalize">
        {label || name} <span className="text-red-500">{required && "*"}</span>
      </label>
      <Field
        name={name}
        type={type}
        {...props}
        className="p-2 text-black rounded border-green-500 border border-solid outline-0 focus:border-red-500" //style input
      />
      <div className="text-red-500 text-xs mt-1">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}
//
