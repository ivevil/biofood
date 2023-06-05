import Head from "next/head";

interface HeadingProps {
    textPosition: string,
    textColor: string,
    children: string | JSX.Element | JSX.Element[]
}

const Heading: React.FC<HeadingProps> = ({ textPosition, textColor, children }: HeadingProps) => {

    return(
        <h2 className={`xs:text-4xl sm:text-6xl lg:text-9xl opacity-40 font-extrabold text-${textColor}-200 text-center sm:text-${textPosition}`}>{children}</h2>
    );
}

export default Heading;