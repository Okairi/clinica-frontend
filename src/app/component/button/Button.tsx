
'use client'

export default function Button({

    text,
    className = "",
    backgroundColor,
    color,
    size
}: Readonly<{
    text: string,
    className?: string,
    backgroundColor?: string,
    color?: string,
    size?: string,

}>) {
    return (
        <button style={{ backgroundColor, color, fontSize: size }} className={`px-4 rounded-md transition-colors ${className} cursor-pointer`}
            disabled={true}

        >

            {text}</button>
    )
}



