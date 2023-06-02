import { useEffect } from 'react';
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
        <div className="statscard max-w-sm p-6" ref={ref}>
            <div className="inline-flex text-center">
                <CountUp
                    start={0}
                    end={inView ? target : 0}
                    duration={duration}
                    separator='.'
                    useEasing={true}>
                    {({ countUpRef }) => (
                        <h5 className="mb-2 md:text-8xl font-semibold tracking-tight text-gray-900 dark:text-white" ref={countUpRef as React.RefObject<HTMLDivElement>} />
                    )}
                </CountUp>
                <h5 className="mb-2 md:text-8xl font-semibold tracking-tight text-gray-900 dark:text-white">K</h5>
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
            <p className="mb-3 font-normal text-center text-white-500 dark:text-white-400">{detailDescription}</p>
        </div>
    );
}

export default StatsCard;