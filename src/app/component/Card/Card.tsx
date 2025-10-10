

interface NoticiaMedica {
    id: number;
    title: string;
    content: string;
    category: string;
}

interface CardProps {
    title: string;
    content: string;
    category: string;
}


export default function Card({ title, content, category }: Readonly<CardProps>) {
    return (
        <article className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between">
            <div className="flex items-center mb-4">
                <div className="w-3 h-8 bg-[#4a90e2] rounded-full mr-3"></div>
                <h3 className="text-[1.8rem] sm:text-[2.0rem] font-bold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-[1.5rem] md:text-[2rem]">
                {content}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-[#4a90e2]  text-[1.7rem] sm:text-[2.2rem]">{category}</span>
            </div>
        </article>
    );
}