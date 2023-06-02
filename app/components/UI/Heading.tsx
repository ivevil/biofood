import Head from "next/head";

interface HeadingProps {
    textPosition: string,
    textColor: string,
    children: string | JSX.Element | JSX.Element[]
}

const Heading: React.FC<HeadingProps> = ({ textPosition, textColor, children }: HeadingProps) => {

    return(
        <h2 className={`md:text-9xl font-extrabold text-${textColor}-200 text-${textPosition} opacity-80`}>{children}</h2>
    );
}

export default Heading;