export interface NoticiaMedica {
    id: number;
    title: string;
    content: string;
    category: string;
}

export const noticiasMedicas: NoticiaMedica[] = [
    {
        id: 1,
        title: "Avances en Tratamiento del Cáncer",
        content: "Nuevos estudios revelan que la inmunoterapia combinada con quimioterapia tradicional aumenta la tasa de supervivencia en pacientes con cáncer de pulmón en un 35%. Los resultados fueron publicados en el Journal of Clinical Oncology.",
        category: "Oncología • Investigación"
    },
    {
        id: 2,
        title: "Nueva Vacuna para la Influenza",
        content: "La OMS aprueba una nueva vacuna tetravalente que ofrece protección contra cuatro cepas diferentes del virus de la influenza. Eficacia demostrada del 92% en adultos y 85% en población de riesgo mayores de 65 años.",
        category: "Epidemiología • Prevención"
    },
    {
        id: 3,
        title: "Innovación en Cirugía Robótica",
        content: "Hospitales implementan nuevos sistemas de cirugía robótica que reducen el tiempo de recuperación en un 60%. Procedimientos mínimamente invasivos con mayor precisión y menores complicaciones.",
        category: "Cirugía • Tecnología"
    },
    {
        id: 4,
        title: "Descubrimiento en Neurociencia",
        content: "Investigadores identifican nuevo mecanismo cerebral relacionado con la memoria. Hallazgo promete avances en el tratamiento de enfermedades neurodegenerativas como el Alzheimer y Parkinson.",
        category: "Neurología • Investigación"
    },
    {
        id: 5,
        title: "Avances en Medicina Regenerativa",
        content: "Científicos desarrollan técnica para regenerar tejido cardíaco utilizando células madre. El procedimiento muestra recuperación del 78% en pacientes con infarto agudo de miocardio.",
        category: "Cardiología • Regeneración"
    },
    {
        id: 6,
        title: "Nuevo Antibiótico de Amplio Espectro",
        content: "Investigadores descubren nueva clase de antibióticos efectiva contra bacterias multirresistentes. El compuesto demostró eficacia en el 95% de las cepas resistentes a tratamientos convencionales.",
        category: "Farmacología • Infectología"
    },
    {
        id: 7,
        title: "Telemedicina y Salud Digital",
        content: "Implementación de plataformas de telemedicina reduce tiempos de espera en un 70%. Estudio confirma que la consulta virtual mantiene igual efectividad que la presencial en casos no urgentes.",
        category: "Telemedicina • Innovación"
    },
    {
        id: 8,
        title: "Avances en Diagnóstico Precoz de Diabetes",
        content: "Nuevo biomarcador en sangre permite detectar prediabetes con 5 años de anticipación. La prueba tiene una sensibilidad del 94% y especificidad del 89% según estudio multicéntrico.",
        category: "Endocrinología • Diagnóstico"
    },
    {
        id: 9,
        title: "Terapia Génica para Enfermedades Raras",
        content: "Primera terapia génica aprobada para tratar la atrofia muscular espinal. Pacientes muestran mejoría motora significativa y reducción del 80% en complicaciones respiratorias.",
        category: "Genética • Terapias Avanzadas"
    },
    {
        id: 10,
        title: "Inteligencia Artificial en Radiología",
        content: "Algoritmo de IA detecta nódulos pulmonares malignos con 98% de precisión. Sistema reduce tiempo de diagnóstico en un 65% y mejora la detección temprana de cáncer pulmonar.",
        category: "Radiología • Inteligencia Artificial"
    },
    {
        id: 11,
        title: "Nuevo Protocolo para COVID Persistente",
        content: "Investigadores establecen protocolo de tratamiento multidisciplinario para COVID prolongado. Terapia combinada muestra mejoría en el 85% de los pacientes con síntomas persistentes.",
        category: "Medicina Interna • Rehabilitación"
    },
    {
        id: 12,
        title: "Avances en Cirugía de Mínima Invasión",
        content: "Nueva técnica endoscópica permite extirpar tumores cerebrales sin craneotomía. Procedimiento reduce complicaciones en un 60% y tiempo de hospitalización a 24 horas.",
        category: "Neurocirugía • Técnicas Avanzadas"
    }
]; 