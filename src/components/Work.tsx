import WorkItem from './WorkItem';

/*---------------Past Work experience------------------------------- */
const data = [
    {
        year: 2020,
        anställningsform: 'Sommarjobb på heltid',
        title: 'Costumer Service Representative',
        details: 'Planerade aktiviteter med mitt team, Arbetade även med att dra potentiella kunders intressen för att öka utbudet av vår service, Ökade kundnöjdheten under min anställningsperiod.'
    },
    {
        year: 2019,
        anställningsform: 'Feriejobb på heltid',
        title: 'Restaurang- och köksbiträde',
        details: 'Behandlade kundbeställningar som servitör och kock., Samarbetade med kökspersonalen för att leverera enastående kundservice., Har ökat kundnöjdheten och vinsten hos restaurangen under min anställning.'
    }
]

const Work = () => {
    return(
/*-------------------------Smooth Scrolling-------------------------------*/
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
{/*-------------------------Print Work Data-------------------------------*/}
            {data.map((item, idx) => (
                <WorkItem 
                key={ idx } 
                year={ item.year } 
                anställningsform={ item.anställningsform } 
                title={ item.title } 
                details={ item.details }/>
            ))}
        </div>
)}

export default Work;