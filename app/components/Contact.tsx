import Form from "./UI/Form";
import Heading from "./UI/Heading";

interface ContactProps {
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

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
    return (
        <div className="contact bg-orange-300" id="contact">
            <Heading textColor="orange" textPosition="left">CONTACT</Heading>
            <Form />
        </div>
    );
}

export default Contact;