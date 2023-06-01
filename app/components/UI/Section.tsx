function Section(props: any) {
    return (
        <section id={props.block.title} className="bg-center bg-no-repeat bg-[url('/vegetables.jpg')] bg-blend-multiply">
                {props.children}
        </section>
    );
}

export default Section;