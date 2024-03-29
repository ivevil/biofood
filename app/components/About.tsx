import Heading from "./UI/Heading";
import { poppins } from '../utils/fonts';

interface AboutProps {
    block: IComponent
}

const About = ( props : AboutProps) => {
    return (
        <section id="about" className="about bg-cover bg-center bg-no-repeat bg-[url('/vegetables-rotated.jpg')] bg-blend-multiply">
            <Heading textColor="lime" textPosition="left">{props.block.sectionName}</Heading>
            <div className={`${poppins.className} px-4 max-w-3xl py-2 lg:px-24`}>
                <div className="inline-flex items-center w-full">
                    <hr className="w-1/6 h-2 mr-10 hr-border-bio-gray" />
                    <h3 className="mb-4 text-3xl font-bold tracking-tight leading-none bio-orange md:text-3xl">{props.block.title}</h3>
                </div>
                <p className="mb-4 text-lg font-medium bio-gray">{props.block.description}</p>
            </div>
        </section>
    );
}

export default About;