import { poppins } from '@/app/utils/fonts';

interface JumbotronProps {
    block: IComponent
}

const Jumbotron = ( props : JumbotronProps) => {
    return (
        <section id="intro" className="bg-center bg-cover bg-no-repeat bg-[url('/vegetables.jpg')] bg-blend-multiply">
            <div className="px-4 max-w-3xl py-24 lg:py-36">
                <h1 className={`${poppins.className} mb-4 text-4xl lg:px-24 font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl`} dangerouslySetInnerHTML={{ __html: props.block.title.replace(/(<? *script)/gi, 'illegalscript') }} ></h1>
                <p className="mb-4 text-md font-normal bio-green lg:px-24">{props.block.description}</p>
                <div className="flex flex-col space-y-4 lg:px-24 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a href={props.block.buttonLink} className="inline-flex w-48 sm:w-100 justify-center hover:text-white items-center py-2 px-3 text-base font-bold text-center border-bio-green bio-gray rounded-xl border hover:bg-lime-600 focus:ring-4 focus:ring-gray-400">
                        {props.block.button}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Jumbotron;
