import './Contact.css'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import ContactCard from '../ContactCard/ContactCard';
import MainButton from '../MainButton/MainButton';

function Contact({ theme }) {
    const button = {
        name: 'Send Message',
        icon: '',
        href: "mailto:Engabdullahaljamal@gmail.com"
    }
    const contact_info = [
        {
            icon: <FiPhone />,
            title: 'Call me',
            value: '201 693 0516',
        },
        {
            icon: <MdOutlineMail />,
            title: 'Email me',
            value: 'Engabdullahaljamal@gmail.com',
        },
        {
            icon: <IoLocationOutline />,
            title: 'Address',
            value: 'Totowa,New Jersey,USA',
        },

    ]
    return (
        <div className={`contact ${theme}`} id='contact'>
            <div className='projects_title_container'>
                <div>
                    <p>Contact</p>
                    <h2>Let’s Discuss Your  <span>Project</span> </h2>
                </div>


            </div>
            <div className='contact_body_container' >
                <div className='contact_info'>
                    {
                        contact_info.map((c, i) => {
                            return <ContactCard key={i} contact_info={c} />
                        })
                    }
                </div>
                <form className='contact_form'>
                    <div>
                        <input type="text" placeholder='Full name' />
                        <input type="email" placeholder='Your email' />
                    </div>
                    <input type="text" placeholder='Phone number' />
                    <textarea name="message" id="" placeholder='Message'></textarea>
                    <MainButton button={button} />

                </form>
            </div>
        </div>
    )
}

export default Contact