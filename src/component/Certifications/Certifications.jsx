import React from 'react'
import './Certifications.css'
import meta from './../../assets/images/meta.jpeg'
import google_ux from './../../assets/images/Google_UX.jpeg'
import google_pm from './../../assets/images/Google_PM.jpeg'
import google_dm from './../../assets/images/Google_DM.jpeg'
import google_cyber from './../../assets/images/Google_Cyber.jpeg'
import google_it from './../../assets/images/Google_IT.jpeg'
import focal_x_front_ from './../../assets/images/Focal_x_front.jpeg'
import focal_x_back from './../../assets/images/Focal_x_back.jpeg'
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
        <div className={`certifications ${theme}`}>
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