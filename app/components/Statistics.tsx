import StatsCard from "./UI/StatsCard";

interface StatisticsProps {
    block: IComponent
}

const Statistics = ( props : StatisticsProps) => {
    return (
        <div className="flex items-center justify-around bg-bio-orange shadow dark:bg-orange-300">
            <div style={{margin: "0 auto"}} className="w-9/12 flex flex-col py-8 sm:py-0 sm:flex-row items-center justify-around">
            {props.block.details.map((detail, index) => {
                return (
                    <StatsCard detailTitle={detail.title} detailDescription={detail.description} key={detail.id} />
                )
            })}
            </div>
        </div>
    );
}

export default Statistics;
