import './ExperienceCard.css'
import { FaLocationPin } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";

function ExperienceCard({ theme, experience, education }) {
    return (<>
        <div className={`experience_card ${theme} ${education}`}>
            <div className='cir'></div>
            <h3>{experience.title}</h3>
            <a href={experience.company_href}>{experience.company} </a>
            <span><div><CgCalendarDates />{experience.date}</div><div><FaLocationPin />{experience.location}</div> </span>
            {
                experience.desc.map((e,i) => {
                    return <li key={i}>{e}</li>
                })
            }
        </div>
       
    </>
    )
}

export default ExperienceCard