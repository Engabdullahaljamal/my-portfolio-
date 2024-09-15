import './MainButton.css'

function MainButton({ button }) {
    return (
        <button className='main_button'>{button.name} {button.icon}</button>
    )
}

export default MainButton