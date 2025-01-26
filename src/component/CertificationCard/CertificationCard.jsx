import React from 'react'
import './CertificationCard.css'

function CertificationCard({ certification }) {
    return (
        <div className='certificate_card'>
            <img src={certification.img_src} alt="" />
        </div>
    )
}

export default CertificationCard