import './Try.css'
import try_img from './../../assets/images/try_section_img.png'
import { FaArrowRight } from "react-icons/fa6";
import MainButton from '../MainButton/MainButton';


function Try({ theme }) {
    const button={
    name :'Contact',
    icon:<FaArrowRight />,
    href:'#contact'

    }
    return (
        <div className={`try ${theme}`}>
            <img src={try_img} alt="try_img" />
            <div className='try_container'>
                <div>
                    <h2>Try me out, risk free!</h2>
                    <p>If you’re not happy with the design after the first draft,
                        I’ll refund your deposit, <span>no questions asked</span> </p>
                </div>
              <MainButton button={button}/>

            </div>
        </div>
    )
}

export default Try