import { BannerCard } from '../import'
import './bannerSection.css'
import img1 from '../../img/banner1.jpg'
import img2 from '../../img/banner2.jpg'
import img3 from '../../img/banner3.jpg'

const BannerSection = () => {
    return (
        <div className='banner-section'>
            <BannerCard 
                img={img1} 
                secondaryTitle='Design Creative'
                primaryTitle='Ring jewelry Design'
                price='From $60.99 - Sale 20%'      
            />
            <BannerCard 
                img={img2} 
                secondaryTitle='Bestselling Product'
                primaryTitle='Victoria Diamonds'
                price='Only From $89.00'
            />
            <BannerCard 
                img={img3} 
                secondaryTitle='Onsale Products'
                price='Selling Off 30%'
                primaryTitle='Perfect Rings'
            />
        </div>
    )
}

export default BannerSection