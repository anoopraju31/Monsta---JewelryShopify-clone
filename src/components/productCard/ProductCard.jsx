import './productCard.css'
import img1 from '../../img/25_3682b30b-465a-4d85-aa82-857137dad765_350x350_crop_bottom.jpg'
import { Marker } from '../import'
import img2 from '../../img/3_6e881f7f-76b0-4d4e-a6ce-a96ebf934340_350x350_crop_bottom.jpg'
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai'
import { RiEqualizerFill } from 'react-icons/ri'

const ProductCard = ({idx}) => {
    return (
        <div className='product-card'>
            <div className="product-card__img">
                <img className='primary-img' src={img1} alt="" />
                <img className='secondary-img' src={img2} alt="" />
            </div>

            <div className="product-card__quick-view-button">
                <p> quick view </p>
            </div>

            <div className="product-card__tags">
                <p> Bestselling, Featured </p>
            </div>

            <div className="product-card__title">
                <h2> Dummy Product Name{idx} </h2>
            </div>

            <div className="product-card__horizontal-seperator"/>

            <div className="product-card__price">
                <p className='old-price'> $100.00 </p>
                <p className='new-price'> $80.00 </p>
            </div>

            <div className="product-card__product-hover">
                <div className="product-card__product-rating">
                    <AiOutlineStar className='star-icon' />
                    <AiOutlineStar className='star-icon' />
                    <AiOutlineStar className='star-icon' />
                    <AiOutlineStar className='star-icon' />
                    <AiOutlineStar className='star-icon' />
                </div>

                <div className="product-card__product-desc">
                    There are many variations of passages of Lorem Ipsum available, but the...
                </div>
                
                <div className="product-card__horizontal-seperator"/>

                <div className="product-card__action-links">
                    <div className="product-like">
                        <AiOutlineHeart className='action-icon' />
                    </div>

                    <div className="product-add-card">
                        add to cart
                    </div>

                    <div className="product-compare">
                        <RiEqualizerFill className='action-icon' />
                    </div>
                </div>
            </div>

            <div className="product-card__marker">
                <Marker text='sale' />
                <Marker text='-20%' />
            </div>
        </div>
    )
}

export default ProductCard