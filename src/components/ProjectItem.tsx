
const ProjectItem = ({img, title}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 "/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3>
                    {title}
                </h3>
{/*------------------------------Tools used for project---------------------------------------------------- */}
                <p className="pb-4 pt-2 text-white text-center rounded-xl shadow-xl group-hover:opadicty-5">React</p>
                    <a href="/">
                        <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-semibold cursor-pointer text-lg">More Info</p>
                    </a>
            </div>
        </div>
    );
};

export default ProjectItem;