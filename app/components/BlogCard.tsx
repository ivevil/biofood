import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    post: IPost
}

const BlogCard: React.FC<BlogCardProps> = ({ post }: BlogCardProps) => {
    const slugTitle = post.title.toLowerCase().replace(/\s+/g, '-');
    return (
        <Link href={`/blog/${slugTitle}`}>
            <div className="blog-card m-3 bg-white border border-gray-200 rounded-3xl shadow dark:bg-white-800 dark:border-gray-100">
                <a href="#">
                    <Image className="rounded-t-3xl max-h-44 object-cover" src={post.image} alt="" width="600" height="100" />
                </a>
                <div className="px-6 py-2">
                    <div className="flex justify-between">
                        <h5 className="mt-4 mb-2 text-sm font-bold tracking-tight text-gray-900">{post.title}</h5>
                        <h6 className="mt-4 mb-2 text-right text-xs tracking-tight text-gray-900">{post.date}</h6>
                    </div>
                    <p className="mb-7 font-normal text-sm text-gray-700">{post.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default BlogCard;