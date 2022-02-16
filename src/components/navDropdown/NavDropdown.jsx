import './navDropDown.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const NavDropdown = ({title}) => {
    return (
        <div className='nav-dropdown'>
            <div className="nav-dropdown__header">
                <p> {title} </p> 
                <MdOutlineKeyboardArrowDown size={30} className='arrow-down-icon' />
            </div>

            <div className="nav-dropdown__container">
                <div className="dropdown-item"> Home Version 1 </div>
                <div className="dropdown-item"> Home Version 2 </div>
                <div className="dropdown-item"> Home Version 3 </div>
                <div className="dropdown-item"> Home Version 4 </div>
                <div className="dropdown-item"> Home Version 5 </div>
                <div className="dropdown-item"> Home Version 6 </div>
                <div className="dropdown-item"> Home Version 7 </div>
                <div className="dropdown-item"> Home Version 8 </div>
                <div className="dropdown-item"> Home Version RTL </div>
            </div> 
        </div>
    )
}

export default NavDropdown