import { poppins } from '../../utils/fonts';
interface ServicesCardProps {
    detailTitle: string,
    detailDescription: string
}

const ServicesCard: React.FC<ServicesCardProps> = ({ detailTitle, detailDescription }: ServicesCardProps) => {
    return (
        <div className={`${poppins.className} m-8 services-card relative block p-6 bg-dark-orange rounded-3xl z-10`}>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{detailTitle}</h5>
            <p className="font-normal text-sm text-white-700 pr-14">{detailDescription}</p>
        </div>
    );
}

export default ServicesCard;