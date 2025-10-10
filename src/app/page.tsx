'use client'

import Button from "./component/button/Button"

export default function Home() {


  return (


    <>

      <section className="section-banner gap-8 p-8">




        <h2 style={{ fontSize: "3.5rem" }}>Tu salud, nuestra prioridad</h2>

        <p>En HealthFirst, nos dedicamos a proporcionar atención médica de calidad con un enfoque en el bienestar del paciente.</p>


        <Button text="Conoce nuestros servicios" backgroundColor="#4a90e2" color="white" size="1.6rem"></Button>

      </section>



      <h2 className="mt-7 text-center text-[3rem]"> Noticias actuales</h2>

      <section className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">

        <article className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-3 h-8 bg-[#4a90e2] rounded-full mr-3"></div>
            <h3 className="text-[1.8rem] sm:text-[2.0rem]  font-bold text-gray-800">Tratamiento del Cáncer</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-[1.5rem]" >
            Nuevos estudios revelan que la inmunoterapia combinada con quimioterapia tradicional
            aumenta la tasa de supervivencia en pacientes con cáncer de pulmón en un 35%.
            Los resultados fueron publicados en el Journal of Clinical Oncology.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-[#4a90e2] font-medium">Oncología • Investigación</span>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-3 h-8 bg-[#4a90e2] rounded-full mr-3"></div>
            <h3 className="text-[1.8rem] sm:text-[2.0rem]  font-bold text-gray-800">Nueva Vacuna para la Influenza</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-[1.5rem]" >
            La OMS aprueba una nueva vacuna tetravalente que ofrece protección contra
            cuatro cepas diferentes del virus de la influenza. Eficacia demostrada del 92%
            en adultos y 85% en población de riesgo mayores de 65 años.
          </p>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-sm text-[#4a90e2] font-medium">Epidemiología • Prevención</span>
          </div>
        </article>

      </section>
    </>
  )
}
