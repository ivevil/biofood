import StatsCard from "./UI/StatsCard";

interface StatisticsProps {
    block: IComponent
}

const Statistics: React.FC<StatisticsProps> = (props: StatisticsProps) => {
    return (
        <div className="flex items-center justify-around bg-bio-orange shadow dark:bg-orange-300">
            <div style={{margin: "0 auto"}} className="w-9/12 flex flex-col py-8 sm:py-0 sm:flex-row items-center justify-around">
            {props.block.details.map((detail, index) => {
                return (
                    <>
                    {detail != null ? <StatsCard detailTitle={detail.title} detailDescription={detail.description} key={detail.id} /> : "none"}
                        
                        {props.block.details.length - 1 > index ? <hr key={`key-${Math.random()}`} className="w-36 h-1 mx-auto my-4 bg-gray-100 sm:rotate-90 border-0 rounded md:my-10 dark:bg-white" /> : ""}
                    </>
                )
            })}
            </div>
        </div>
    );
}

export default Statistics;
