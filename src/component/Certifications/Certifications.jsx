import React from 'react'
import './Certifications.css'
import meta from './../../assets/images/meta.webp'
import google_ux from './../../assets/images/Google_UX.webp'
import google_pm from './../../assets/images/Google_PM.webp'
import google_dm from './../../assets/images/Google_DM.webp'
import google_cyber from './../../assets/images/Google_Cyber.webp'
import google_it from './../../assets/images/Google_IT.webp'
import focal_x_front_ from './../../assets/images/Focal_x_front.webp'
import focal_x_back from './../../assets/images/Focal_x_back.webp'
import CertificationCard from '../CertificationCard/CertificationCard'

function Certifications({ theme }) {
    const certifications = [
        {
            img_src: meta
        },
        {
            img_src: google_ux
        },
        {
            img_src: google_pm
        },
        {
            img_src: google_dm
        },
        {
            img_src: google_cyber
        },
        {
            img_src: google_it
        },
        {
            img_src: focal_x_front_
        },
        {
            img_src: focal_x_back
        },]
    return (
        <div className={`certifications ${theme}`} id="Certification">
            <h2>Certifications</h2>
            <div className='certificate_card_container'>
                {
                    certifications.map((e, i) => {
                        return <CertificationCard certification={e} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Certifications