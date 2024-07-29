"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#059669] text-white py-3 px-6  flex flex-col sm:flex-row justify-between items-center">
      <div className="mb-2 sm:mb-0">
        <h1 className="text-xl font-bold">Footer</h1>
      </div>
      <div>
        <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
