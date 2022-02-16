import './dropdown.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Dropdown = ({title}) => {
    return (
        <div className='dropdown'>
            <div className="dropdown__header">
                <p> {title} </p> 
                <MdOutlineKeyboardArrowDown size={30} className='arrow-down-icon' />
            </div>

            <div className="dropdown__body">
                <div className="dropdown-item"> USD - US Dollar </div>
                <hr />
                <div className="dropdown-item"> EUR - Euro </div>
                <hr />
                <div className="dropdown-item"> GBP - British Pound </div>
                <hr />
                <div className="dropdown-item"> INR - Indian Rupee </div>
                <hr />
                <div className="dropdown-item"> BDT - Bangladesh Taka </div>
                <hr />
                <div className="dropdown-item"> JPY - Japan Yen </div>
                <hr />
                <div className="dropdown-item"> CAD - Canada Dollar </div>
                <hr />
                <div className="dropdown-item"> AUD - Australian Dollar </div>
            </div>
        </div>
    )
}

export default Dropdown