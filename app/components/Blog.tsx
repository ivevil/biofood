import BlogCard from "./BlogCard";
import Heading from "./UI/Heading";

interface BlogProps {
    block: IComponent
}

const Blog: React.FC<BlogProps> = (props: BlogProps) => {
    return (
        <>
            <div className="blog bg-center bg-no-repeat bg-[url('/vegetables-twisted.jpg')] bg-blend-multiply bg-cover py-8" style={{ margin: "0 auto" }} id="blog">
                <Heading textColor="lime" textPosition="right">{props.block.title}</Heading>
                {/* <div className="grid grid-cols-2 gap-4 align-right" style={{ margin: "0 auto" }}> */}
                <div className="flex flex-wrap justify-center sm:justify-end w-full">
                <div className="w-3/4 flex flex-end flex-wrap justify-end">
                    {props.block.details.map((detail, index) => {
                        return (
                            <BlogCard post={detail} key={index} />
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;