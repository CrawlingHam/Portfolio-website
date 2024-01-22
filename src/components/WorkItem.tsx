
const WorkItem = ({ year, title, anställningsform, details }) => {

    const detailsList = details.split(', ');

    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-400">
            <li className="mb-10 ml-4 py-1">
                <div className="absolute w-3 h-3 bg-stone-500 rounded-full mt-1.5 -left-1.5 border-white"/>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 font-semibold text-white bg-[#001b5e] rounded-md">{year}</span>
                    <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
                    <span className="my-1 text-sm font-normal leading-none text-stone-400">{anställningsform}</span>
                </p>
                <ul className="list-disc ml-6">
                    {detailsList.map((detail, index) => (
                    <li key={index}>{detail}</li>
                    ))}
                </ul>
            </li>
        </ol>
  );
};

export default WorkItem;