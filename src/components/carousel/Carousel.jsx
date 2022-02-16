import './carousel.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { NewsCard, ProductCard } from '../import'

const Carousel = ({title, product, news}) => {
    return (
        <div className='carousel-slider'>
            <div className="carousel-header">
                <h2> {title} </h2>
                <div className="horizontal-line"/>
                <div className="arrow-container">
                    <IoIosArrowBack className='arrow' />
                    <IoIosArrowForward className='arrow' />
                </div>
            </div>

            <div className="carousel-container">
                { product && <ProductCard/> }
                { product && <ProductCard/> }
                { product && <ProductCard/> }
                { product && <ProductCard/> }
                { news && <NewsCard /> }
                { news && <NewsCard /> }
                { news && <NewsCard /> }
            </div>
        </div>
    )
}

export default Carousel