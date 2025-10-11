"use client"

import { useState } from "react";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-8 py-6 fixed top-0 left-0 w-full bg-white z-50 shadow-md">
          <Link href={"/"} className="text-3xl font-bold text-[#4a90e2]">Clinica de los Dioses</Link>
          <nav className="gap-6 hidden sm:flex text-3xl">
            <Link href="/">Inicio</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/doctores">Doctores</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <picture>
              <img src="/burger.svg" alt="Menú" className="cursor-pointer w-8 h-8" />
            </picture>
          </button>
        </header>

        <div className="mb-20"></div>

        {menuOpen && (
          <div className="bg-black fixed inset-0 z-50 text-white w-full h-full p-8 flex flex-col space-y-6 animate-slide-in">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-gray-600 text-xl"
            >
              <picture>
                <img src="/cloe.svg" alt="close" className="cursor-pointer w-8 h-8 text-white" />
              </picture>
            </button>

            <nav className="flex flex-col gap-6 text-3xl">
              <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
              <Link href="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
              <Link href="/doctores" onClick={() => setMenuOpen(false)}>Doctores</Link>
              <Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </nav>
          </div>
        )}

        <main className="flex-1 p-8">
          {children}
        </main>

        <footer className="text-center p-8 text-[2rem] border-t mt-auto">
          © Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}