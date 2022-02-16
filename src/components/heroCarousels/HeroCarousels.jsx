import { useState, useEffect } from 'react'
import './heroCarousels.css'
import slides from './sliderUtill'

const HeroCarousels = () => {
	const [slideNum, setSlideNum] = useState(1)
	const [psn, setPsn] = useState(true)

	useEffect(() => {
		const changeSlide = () => {
			setPsn(true)
			if (slideNum === 1)
				setSlideNum(0)
			else 
				setSlideNum(1)

			setTimeout(() => {
				setPsn(false)
			}, 4000);
		}

		const timer = setInterval(changeSlide, 10000)
		
		return () => clearInterval(timer)
	}, [slideNum])
	


	return (
		<div className='hero-carousels' style={{
			backgroundImage: `url(${slides[slideNum].img})`
		}}>
			<div className="hero-carousels__container">
				<div className="hero-carousels__content">
					<h4 className={ psn? 'ani-one' : ''}> {slides[slideNum].secondaryTitle} </h4>
					<h1 className={ psn? 'ani-two' : ''}> {slides[slideNum].primaryTitle} </h1>
					<p className={ psn? 'ani-one' : ''}> {slides[slideNum].text} <span> {slides[slideNum].highlightText} </span> </p>
				</div>

				<div className={`hero-carousels__button ${psn? 'ani-two' : '' }`}>
					show now
				</div>
			</div>

			<div className="hero-carousels__pointer-container">
				{
					slides.map((slide, idx) => <div 
							className= {`pointer ${slideNum === idx? 'current-pointer' : ''}`} 
							key={idx} 
							onClick = {() => {
								setSlideNum(idx) 
							}}
						/>
					)
				}
			</div>
		</div>
	)
}

export default HeroCarousels