import Heading from "./UI/Heading";

interface AboutProps {
    block: {
        button: string,
        buttonLink: string,
        component: string,
        description: string,
        details:Array<{ title: string; description: string; }>
        id: string,
        image: string,
        sectionName: string,
        title: string
    }
}

const About: React.FC<AboutProps> = (props: AboutProps) => {
    return (
        <section id="about" className="about bg-center bg-no-repeat bg-[url('/vegetables-rotated.jpg')] bg-blend-multiply">
            <Heading textColor="lime" textPosition="left">{props.block.sectionName}</Heading>
            <div className="px-4 max-w-3xl py-12 lg:px-24">
                <h3 className="text-amber-500 mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray md:text-3xl">{props.block.title}</h3>
                <p className="mb-4 text-lg font-normal bio-green">{props.block.description}</p>
            </div>
        </section>
    );
}

export default About;