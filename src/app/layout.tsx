
import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {/* HEADER GLOBAL */}
        <header className="flex items-center justify-between px-8 py-4">
          <div className="text-2xl font-bold text-red-500">MiLogo</div>
          <nav className="flex gap-6">
            <Link href="/">Inicio</Link>
            <Link href="/login">Servicios</Link>
            <Link href="/registro">Doctores</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </header>


        <main className="p-8">{children}</main>

        <footer className="text-center py-4 text-sm text-gray-500 border-t mt-8">
          © {new Date().getFullYear()} Mi App. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
