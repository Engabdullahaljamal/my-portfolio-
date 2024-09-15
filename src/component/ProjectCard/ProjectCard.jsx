import './ProjectCard.css'
import { CgArrowTopRightO } from "react-icons/cg";
function ProjectCard({ card_info }) {
    return (
        <>
            <div className='project_card'>
                <img id='img' src={card_info.img} alt="image" />
                <h5>{card_info.title}</h5>
                <div>
                    <p>{card_info.desc}</p>
                    <a href={card_info.href}> <CgArrowTopRightO /></a>
                </div>



            </div>
        </>

    )
}

export default ProjectCard