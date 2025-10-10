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
    }
];