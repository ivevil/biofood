import Image from "next/image";

interface BlogCardProps {
    detailImage: string,
    detailTitle: string,
    detailDescription: string
}

const BlogCard: React.FC<BlogCardProps> = ({ detailTitle, detailDescription, detailImage }: BlogCardProps) => {
    return (
        <div className="blog-card m-3 bg-white border border-gray-200 rounded-3xl shadow dark:bg-white-800 dark:border-gray-100">
            <a href="#">
                <Image className="rounded-t-3xl max-h-44 object-cover" src={detailImage} alt="" width="600" height="100" />
            </a>
            <div className="px-6 py-2">
                <a href="#">
                    <h5 className="mt-4 mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-gray-500">{detailTitle}</h5>
                </a>
                <p className="mb-7 font-normal text-sm text-gray-700 dark:text-gray-500">{detailDescription}</p>
            </div>
        </div>
    );
}

export default BlogCard;