import './MainButton.css'

function MainButton({ button }) {
    return (
        <a href={button.href} className='main_button'>{button.name} {button.icon}</a>
    )
}

export default MainButton