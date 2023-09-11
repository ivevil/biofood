import Form from "./UI/Form";
import Heading from "./UI/Heading";
import { poppins } from '../utils/fonts';

interface ContactProps {
    block: IComponent
}

const Contact = ( props : ContactProps) => {
    return (
        <div className="contact bg-orange-300" id="contact">
            <Heading textColor="orange" textPosition="left">CONTACT</Heading>
            <div className="px-4 mx-auto max-w-sm flex flex-col">
                <h3 className={`${poppins.className} w-full font-bold text-2xl`} dangerouslySetInnerHTML={{ __html: props.block.description.replace(/(<? *script)/gi, 'illegalscript') }}></h3>
            </div>
            <Form />
        </div>
    );
}

export default Contact;