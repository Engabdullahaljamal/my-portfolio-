import './SkillLine.css'
import { FaMessage } from "react-icons/fa6";

function SkillLine({ skill, theme }) {

    return (
        <div className='skill_line_container' >
        
            <p className={`skill_name ${theme}`}> {skill.skill_name}</p>
            <div className='skill_line'>
                <div className='skill_percent' style={{ width: `${skill.skill_percent}` }}>

                </div>
                <div className='skill_circle' style={{ left: `${skill.skill_left}` }}>

                    <FaMessage />
                    <p>{skill.skill_percent}</p>

                </div>
            </div>
        </div>
    )
}

export default SkillLine