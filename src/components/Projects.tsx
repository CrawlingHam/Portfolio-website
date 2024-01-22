import ProjectItem from './ProjectItem';
import mig23Img from '../assets/mig23.png';
import imagine1Img from '../assets/imagine1.png';
import imagine2Img from '../assets/imagine2.jpg';
import imagine3Img from '../assets/imagine3.png';
import imagine5Img from '../assets/imagine5.png';

const Projects = () => {
    return (
/*-------------------------Smooth Scrolling + Project-section Introduction-------------------------------*/
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm py-8">
            En karriärfokuserad person som gillar att lägga all sin energi på de arbetsuppgifter jag
            ansvarar för. Tycker om att arbeta självständigt såväl som i grupp, där jag antar
            utmaningar som dyker upp på vägen. Är mycket ambitiös när det gäller att arbeta med
            mina personliga- och professionella färdigheter, och att nå mina mål varje månad så att
            jag kan vara en värdefull tillgång för mina lagkamrater.
            </p>

{/*-----------------------------Project images (import first)------------------------------------------ */}
            <div className="grid sm:grid-cols-2 gap-12 flex flex-wrap gap-4 flex-row items-center justify-start text-xl">
                <ProjectItem img={mig23Img} title=" Crypto App" />
                <ProjectItem img={imagine1Img} title=" doni App" />
                <ProjectItem img={imagine2Img} title=" mario App" />
                <ProjectItem img={imagine3Img} title=" fortnite App" />
                <ProjectItem img={imagine5Img} title=" amongus App" />
            </div>
        </div>
    );
};

export default Projects;