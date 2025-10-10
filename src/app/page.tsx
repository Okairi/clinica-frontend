import { noticiasMedicas } from "@/utils/data/noticias";
import Button from "./component/button/Button";
import Card from "./component/Card/Card";


export default function Home() {
  return (
    <>
      <section className="section-banner gap-8 p-8">
        <h2 style={{ fontSize: "3.5rem" }}>Tu salud, nuestra prioridad</h2>
        <p>En HealthFirst, nos dedicamos a proporcionar atención médica de calidad con un enfoque en el bienestar del paciente.</p>
        <Button
          text="Conoce nuestros servicios"
          backgroundColor="#4a90e2"
          color="white"
          size="1.6rem"
        />
      </section>

      <h2 className="mt-7 text-center text-[3rem]">Noticias actuales</h2>

      <section className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {noticiasMedicas.map((noticia) => (
          <Card
            key={noticia.id}
            title={noticia.title}
            content={noticia.content}
            category={noticia.category}
          />
        ))}
      </section>
    </>
  );
}