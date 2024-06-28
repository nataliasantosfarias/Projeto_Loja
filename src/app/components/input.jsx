import React from "react";

export default function Input({name, label, type, required, ...props}) {
  return (
    <div className="flex flex-col">
        <div className="capitalize">
          {label || name} <span className="text-red-500">{required && "*"}</span>
        </div>
    </div>
  );
}
