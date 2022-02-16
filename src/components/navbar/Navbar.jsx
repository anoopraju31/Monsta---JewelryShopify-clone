import { Dropdown } from '../import'
import './navbar.css'
import { BsSearch, BsCartFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import logo from '../../img/logo_150x.png'
import { useRef, useState, useEffect } from 'react'

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    const navbar = useRef()

    const handleScroll = () => {
        const offset = window.scrollY
        
        if (offset > 200)
            setSticky(true)
        else
            setSticky(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    

    return (
        <div className='navbar'>
            <div className="navbar__header-top">
                <div className="navbar__header-top_left">
                    <p> Free shipping on all domestic orders with coupn code <span> Watches2021 </span> </p>
                </div>

                <div className="navbar__header-top_right">
                    <Dropdown title='USD' />
                    <div className="vertical-line" style={{height: 25}} />
                    <Dropdown title='My Account' />
                </div>
            </div>

            <div className='horizonal-line' />

            <div className="navbar__header-middle">
                <div className="navbar__header-middle_left">
                    <div className="contact">
                        <h4> LOCATION </h4>
                        <p> Street 12345 – USA </p>
                    </div>

                    <div className="vertical-line" style={{height: 45}} />

                    <div className="contact">
                        <h4> CALL FREE </h4>
                        <p> 123 456 789 000 </p>
                    </div>
                </div>

                <div className="navbar__header-middle_logo">
                    <img src={logo} alt="" />
                </div>

                <div className="navbar__header-middle_right">
                    <div className="search-box">
                        <BsSearch size={20} />

                        <div className="search-box_container">
                            <input type="text" placeholder='Search Our Store' />
                            
                            <div className="search-box_logo">
                                <BsSearch size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="cart-box">
                        <div className="cart-count">0</div>
                        <BsCartFill />
                        <div className='vertical-line' style={{height: 25}} />
                        <p> $0.00 </p>
                        <MdOutlineKeyboardArrowDown size={20} />
                        <div className="cart-container">
                            Your cart is currently empty.
                        </div>
                    </div>
                </div>

                
            </div>
            
            <div className='horizonal-line' />

            <div className={sticky? 'navbar__header-bottom sticky': 'navbar__header-bottom'} ref={navbar}>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-container">
                    <div className="nav-item"> Home <MdOutlineKeyboardArrowDown /> </div>
                    <div className="nav-item"> Home <MdOutlineKeyboardArrowDown /> </div>
                    <div className="nav-item"> Home <MdOutlineKeyboardArrowDown /> </div>
                    <div className="nav-item"> Home <MdOutlineKeyboardArrowDown /> </div>
                    <div className="nav-item"> Home <MdOutlineKeyboardArrowDown /> </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar