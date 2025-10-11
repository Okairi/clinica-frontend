"use client";

import Card from "@/app/component/Card/Card";
import { services } from "@/utils/data/services";
import Button from "@/app/component/button/Button";

export default function ServiciosPage() {
    return (
        <section className="mt-8 flex flex-col">
            {/* Hero Section */}
            <div className="bg-[#e8f1fb] text-center py-20 px-8 rounded-2xl shadow-md mb-20 max-w-[120rem] mx-auto">
                <h1 className="text-[4rem] font-bold text-[#4a90e2] mb-6">
                    Cuidamos tu salud con excelencia
                </h1>
                <p className="text-[1.8rem] text-gray-700 max-w-[80rem] mx-auto leading-relaxed">
                    En nuestra clínica encontrarás servicios diseñados para cuidar tu bienestar
                    físico y emocional, con un equipo médico comprometido con tu salud.
                </p>
            </div>

            {/* Sección de Servicios */}
            <h2 className="text-center text-[3.5rem] mb-14 font-bold text-[#4a90e2]">
                Nuestros Servicios Médicos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[120rem] mx-auto px-8 py-10 bg-gray-50 rounded-2xl shadow-inner">
                {services.map((servicio) => (
                    <Card
                        key={servicio.id}
                        title={servicio.title}
                        content={servicio.content}
                        category={servicio.category}
                    />
                ))}
            </div>

            {/* CTA final */}
            <div className="text-center mt-24 mb-10">
                <h3 className="text-[2.5rem] font-semibold mb-6">
                    ¿Necesitas atención médica personalizada?
                </h3>
                <Button
                    text="Agenda tu cita ahora"
                    backgroundColor="#4a90e2"
                    color="white"
                    size="1.6rem"
                    className="p-8"
                />
            </div>
        </section>
    );
}
