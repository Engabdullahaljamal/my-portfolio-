import MainButton from '../MainButton/MainButton'
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css'
import { GoArrowUpRight } from "react-icons/go";
import card_img from './../../assets/images/card_img.png'
import educational from './../../assets/images/educational.jpeg'
import little from './../../assets/images/little.jpeg'
import villa from './../../assets/images/villa.jpeg'
import dashboard from './../../assets/images/dashboard.jpeg'
import shoes from './../../assets/images/shoes.jpeg'
import institute from './../../assets/images/education_library.jpg'
import crypto from './../../assets/images/crypto.jpeg'
import mobile from './../../assets/images/mobile.jpeg'
import online_course from './../../assets/images/online_course.jpeg'

function Projects({ theme }) {
    const button = {
        name: 'View Github ',
        icon: <GoArrowUpRight />,
        href:'https://github.com/Engabdullahaljamal'
    }

    const card_info = [
        {
            img: educational,
            title: 'Educational Platform',
            desc: 'Html-Css3-React',
            href: 'https://engabdullahaljamal.github.io/Educational-platform/',
        },
        {
            img: dashboard,
            title: 'Dashboard',
            desc: 'Html-Tailwind-React',
            href: 'https://github.com/Engabdullahaljamal/Dashboard.git'
        },
        {
            img: villa,
            title: 'Villa',
            desc: 'Html-Css3-React',
            href: 'https://engabdullahaljamal.github.io/Task3_Villa/'
        },
        {
            img: little,
            title: 'Little lemon restaurant',
            desc: 'Html-Css3- React',
            href: 'https://engabdullahaljamal.github.io/little-lemon/'
        },
        {
            img: shoes,
            title: 'shoes store',
            desc: 'Html-Css3-Vanilla javascript',
            href: 'https://engabdullahaljamal.github.io/shoe_store/',
        },
        {
            img: institute,
            title: 'Education institute',
            desc: 'Html-Css3-',
            href: 'https://engabdullahaljamal.github.io/task4_2/',
        },
        {
            img: crypto,
            title: 'crypto login,sign pages',
            desc: 'Html-Css3-React',
            href: 'https://engabdullahaljamal.github.io/crypto_log_sign_pages/',
        },
        {
            img: mobile,
            title: 'mobile shop',
            desc: 'Html-Css3-React',
            href: 'https://engabdullahaljamal.github.io/Task6_2/',
        },
        {
            img: online_course,
            title: 'online course',
            desc: 'Html-Css3-Vanilla ',
            href: 'https://engabdullahaljamal.github.io/task3_2/',
        },

    ]
    return (
        <div className={`projects ${theme}`} id='projects'>
            <div className='projects_title_container'>
                <div>
                    <p>Projects</p>
                    <h2>My Creative Works
                        Latest <span>Projects</span> </h2>
                </div>
                <MainButton button={button} />

            </div>
            <div className='projects_container'>
                {
                    card_info.map((c, i) => {
                        return <ProjectCard key={i} card_info={c} />
                    })
                }
            </div>
        </div>
    )
}

export default Projects