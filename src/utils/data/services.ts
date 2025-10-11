
type Servicio = {
    id: number;
    title: string;
    content: string;
    category: string;
};

export const services: Servicio[] = [
    {
        id: 1,
        title: "Consulta médica general",
        content:
            "Evaluación integral del paciente para diagnóstico, tratamiento y orientación médica general. Ideal para chequeos y primeras atenciones.",
        category: "Atención primaria",
    },
    {
        id: 2,
        title: "Análisis de laboratorio",
        content:
            "Pruebas clínicas de sangre, orina y otros estudios para el diagnóstico y seguimiento de diversas enfermedades.",
        category: "Diagnóstico",
    },
    {
        id: 3,
        title: "Ecografías y radiografías",
        content:
            "Estudios por imagen de alta precisión que permiten visualizar órganos internos y detectar anomalías médicas.",
        category: "Imagenología",
    },
    {
        id: 4,
        title: "Atención de emergencias",
        content:
            "Disponibilidad inmediata para atender urgencias médicas con personal especializado y equipamiento adecuado.",
        category: "Emergencias",
    },
    {
        id: 5,
        title: "Vacunación y control preventivo",
        content:
            "Aplicación de vacunas y controles regulares para prevenir enfermedades y mantener tu salud protegida.",
        category: "Prevención",
    },
    {
        id: 6,
        title: "Control prenatal y salud materna",
        content:
            "Acompañamiento médico a futuras mamás durante todo el embarazo, con controles, ecografías y orientación nutricional.",
        category: "Ginecología",
    },
    {
        id: 7,
        title: "Rehabilitación y fisioterapia",
        content:
            "Tratamientos personalizados para recuperar movilidad, fuerza y bienestar tras lesiones, cirugías o enfermedades musculares.",
        category: "Rehabilitación",
    },
    {
        id: 8,
        title: "Odontología integral",
        content:
            "Atención dental completa, desde limpiezas y restauraciones hasta ortodoncia, para mantener una sonrisa saludable.",
        category: "Odontología",
    },
    {
        id: 9,
        title: "Salud mental y psicología clínica",
        content:
            "Apoyo psicológico profesional para el manejo del estrés, ansiedad, depresión y bienestar emocional.",
        category: "Psicología",
    },
]; 