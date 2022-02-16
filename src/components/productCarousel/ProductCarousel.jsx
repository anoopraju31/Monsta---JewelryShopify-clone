import './productCarousel.css'
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from 'react'
import { ProductCard } from '../import'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

const ProductCarousel = ({ images }) => {
    const [width, setWidth] = useState(0)
    const [x, setX] = useState(0)
	const carousel = useRef()

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
	}, [])

    const leftClick = () => {
        setX(x + 298.837)
    }

    const rightClick = () => {
        setX(x - 298.837)
    }

    return (
        <div className='product-carousel-outer'>
            <div className="product-carousel">
				<div className="left-arrow">
					<FaLessThan onClick={leftClick}/>
				</div>

				<motion.div 
					ref={carousel} 
					className='carousel' 
					whileTap={{cursor: 'grabbing'}}
					dragElastic={1}
				>
					<motion.div 
						drag='x' 
						dragConstraints={{
							right: 0,
							left: -width
						}} 
						className='inner-carousel'
					>
					{
						images.map((image, idx) => {
							return (
								<motion.div className='item' key={idx} animate={{x: -x}}>
									<ProductCard className='item1' idx={idx}/>
									<ProductCard className='item2' idx={idx}/>
									<div className="box"></div>
								</motion.div>
							)
						})
					}
					</motion.div>
				</motion.div>

				<div className="right-arrow">
					<FaGreaterThan onClick={rightClick}/>
				</div>
			</div>
        </div>
    )
};


export default ProductCarousel