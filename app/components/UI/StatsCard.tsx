import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface StatsCardProps {
    detailTitle: string,
    detailDescription: string
}
const StatsCard: React.FC<StatsCardProps> = ({ detailTitle, detailDescription }: StatsCardProps) => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    let target = parseInt(detailTitle);

    const duration = 5;
    return (
        <>
        <div className="statscard max-w-sm p-2 sm:p-6 text-center" ref={ref}>
            <div className="inline-flex text-center">
                <CountUp
                    start={0}
                    end={inView ? target : 0}
                    duration={duration}
                    separator='.'
                    useEasing={true}>
                    {({ countUpRef }) => (
                        <h5 className="mb-2 text-7xl md:text-8xl font-semibold tracking-tight text-gray-900 text-white" ref={countUpRef as React.RefObject<HTMLDivElement>} />
                    )}
                </CountUp>
                <h5 className="mb-2 text-7xl md:text-8xl font-semibold tracking-tight text-gray-900 text-white">K</h5>
            </div>
            <style jsx>{`
				.delay {
					transition-delay: ${duration}s;
				}
				.transform-hide {
					transform: translate3d(0, 1rem, 0);
				}
				.transform-show {
					transform: translate3d(0, 0, 0);
				}
			`}</style>
            <p className="mb-3 font-bold text-sm text-center text-white">{detailDescription}</p>
        </div>
        <hr key={`key-${Math.random()}`} className="w-36 h-1 mx-auto my-4 bg-gray-100 sm:rotate-90 border-0 rounded md:my-10 dark:bg-white" />
        {/* {props.block.details.length - 1 > index ? <hr key={`key-${Math.random()}`} className="w-36 h-1 mx-auto my-4 bg-gray-100 sm:rotate-90 border-0 rounded md:my-10 dark:bg-white" /> : ""} */}
        </>
    );
}

export default StatsCard;