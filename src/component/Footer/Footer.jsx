import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
function Footer({ theme }) {
    return (
        <div className={`footer ${theme}`}>
            <p>@ 2024. All Rights Reserved</p>
            <p>Developed by Abdullah Aljamal</p>
            <div className='footer_icon_container'>
<a href='https://www.facebook.com/abdullah.aljaml?mibextid=LQQJ4d'><FaFacebookF /></a>
<a href=''><FaXTwitter /></a>
<a href='https://www.linkedin.com/in/abdullah-aljamal-394886212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FaLinkedinIn /></a>
<a href='https://www.instagram.com/abdullah_m_aljamal?igsh=OHZzMjkxeWxuOGw3&utm_source=qr'><IoLogoInstagram /></a>
            </div>
        </div>
    )
}

export default Footer