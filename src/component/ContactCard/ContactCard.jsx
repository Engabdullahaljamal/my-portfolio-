import './ContactCard.css'

function ContactCard({ contact_info }) {
    return (
        <div className='contact_card'>
            <div className='contact_icon_container'>{contact_info.icon}</div>
            <div>
            <h6>{contact_info.title}</h6>
            <p>{contact_info.value}</p>
            </div>
          
        </div>
    )
}

export default ContactCard