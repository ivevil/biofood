interface ServicesCardProps {
    detailTitle: string,
    detailDescription: string
}

const ServicesCard: React.FC<ServicesCardProps> = ({ detailTitle, detailDescription }: ServicesCardProps) => {
    return (
        <div className="block p-6 bg-white rounded-lg shadow dark:bg-orange-200 z-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{detailTitle}</h5>
            <p className="font-normal text-white-700 dark:text-white-400">{detailDescription}</p>
        </div>
    );
}

export default ServicesCard;