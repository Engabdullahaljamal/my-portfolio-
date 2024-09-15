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
                experience.desc.map(e => {
                    return <li>{e}</li>
                })
            }
        </div>
        {/* <div className={`experience_card ${theme}`}>
            <div className='cir'></div>
            <h3>Experince Designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
        </div> */}
        {/* <div className={`experience_card ${theme}`}>
            <div className='cir'></div>
            <h3>Experince Designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
        </div>
        <div className={`experience_card ${theme}`}>
            <div className='cir'></div>
            <h3>Experince Designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
        </div>
        <div className={`experience_card ${theme}`}>
            <div className='cir'></div>
            <h3>Experince Designer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>
        </div> */}
    </>
    )
}

export default ExperienceCard