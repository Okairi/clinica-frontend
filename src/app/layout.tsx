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
      <body>
        <header className="flex items-center justify-between px-8 py-4">
          <Link href={"/"} className="text-2xl font-bold text-red-500">MiLogo</Link>
          <nav className="flex gap-6 hidden sm:flex">
            <Link href="/">Inicio</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/doctores">Doctores</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>

          <button className="md:hidden" onClick={() => {
            setMenuOpen(true)
          }}  >


            <img src="/burger.svg" alt="Menú" className="cursor-pointer w-8 h-8" />
          </button>


        </header>

        {menuOpen && (
          /*    <div className=" fixed inset-0 flex justify-end z-50"> */
          <div className="bg-black fixed inset-0 z-50 text-white w-full h-full p-8 flex flex-col space-y-6 animate-slide-in">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-gray-600 text-xl"
            >
              <img src="/cloe.svg" alt="close" className="cursor-pointer w-8 h-8 text-white" />

            </button>

            <nav className="flex flex-col gap-6 text-lg">
              <Link href="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
              <Link href="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
              <Link href="/doctores" onClick={() => setMenuOpen(false)}>Doctores</Link>
              <Link href="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </nav>
          </div>
          /*   </div> */
        )}



        <main className="p-8">{children}</main>

        <footer className="text-center py-4 text-sm text-gray-500 border-t mt-8 absolute bottom-0 w-full">
          © {new Date().getFullYear()} Mi App. Todos los derechos reservados.
        </footer>
      </body>
    </html >
  );
}
