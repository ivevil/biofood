import Heading from "./UI/Heading";
import ServicesCard from "./UI/ServicesCard";

interface ServicesProps {
    block: {
        button: string,
        buttonLink: string,
        component: string,
        description: string,
        details: Array<{ title: string; description: string; }>
        id: string,
        image: string,
        sectionName: string,
        title: string
    }
}

const Services: React.FC<ServicesProps> = (props: ServicesProps) => {
    return (
        <div className="services bg-bio-orange sm:p-10" id="services">
            <Heading textPosition="right" textColor="lime">{props.block.title}</Heading>
            <div className="sm:max-w-6xl" style={{ margin: "0 auto" }}>
                <div className="grid sm:grid-cols-2 sm:gap-2 sm:-mt-32">
                    {props.block.details.map((detail, index) => {
                        return (
                            <ServicesCard detailTitle={detail.title} detailDescription={detail.description} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Services;