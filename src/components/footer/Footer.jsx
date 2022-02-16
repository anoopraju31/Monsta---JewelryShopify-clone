import './footer.css'
import paypalImg from '../../img/papyel2_large.png'
import topProduct1 from '../../img/top-pro-1.jpg'
import topProduct2 from '../../img/top-pro-2.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaVimeoV } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__main-menu">
                <div className="footer__container">
                    <h2> About Monsta </h2>
                    <p> Address: 6688 Princess Road, London, Greater </p>
                    <p> London BAS 23JK, UK </p>
                    <p> Phone: 123 456 789 - 000 </p>
                    <p> Email: Contact@domain.com </p>
                    <div className="social-media-container">
                        <div className="media-icon">
                            <FaFacebookF size={18} />
                        </div>
                        <div className="media-icon">
                            <FaTwitter size={18} />
                        </div>
                        <div className="media-icon">
                            <FaInstagram size={18} />
                        </div>
                        <div className="media-icon">
                            <FaYoutube size={18} />
                        </div>
                        <div className="media-icon">
                            <FaVimeoV size={18} />
                        </div>
                    </div>
                </div>

                <div className="footer__container">
                    <h2> Information </h2>
                    <p className='link'> About Us </p>
                    <p className='link'> Blog </p>
                    <p className='link'> Contact </p>
                    <p className='link'> Services </p>
                </div>

                <div className="footer__container">
                    <h2> Account </h2>
                    <p className='link'> My Account </p>
                    <p className='link'> Contact </p>
                    <p className='link'> Wishlist </p>
                    <p className='link'> Checkout </p>
                    <p className='link'> Frequently Questions </p>
                </div>

                <div className="footer__container">
                    <h2> Top Rated Products </h2>
                    <div className="top-product">
                        <div className="top-product-img">
                            <img src={topProduct1} alt="" />
                        </div>
                        <div className="top-product-desc">
                            <h3> Product Dummy Title</h3>
                            <p> $79.00 </p>
                        </div>
                    </div>

                    <div className='horizontal-line'/>.

                    <div className="top-product">
                        <div className="top-product-img">
                            <img src={topProduct2} alt="" />
                        </div>
                        <div className="top-product-desc">
                            <h3> Product Dummy Title</h3>
                            <p> <span>$60.00</span> $39.00 </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__middle-menu">
                    <p> Online Store </p>
                    <p> Privacy </p>
                    <p> Terms Of Use </p>
                    <p> Contacts </p>
            </div>

            <div className="footer__copy-right-menu">
                <p> Copyright © 2021 <span> HasThemes </span> | Built With <span> Monsta </span> By <span> HasThemes </span>. </p>
                <img src={paypalImg} alt="" />
            </div>
        </div>
    )
}

export default Footer