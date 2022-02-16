import './bannerCard.css'

const BannerCard = ({img, secondaryTitle, primaryTitle, price}) => {
    return (
        <div className='banner-card'>
			<div className="banner-img-container">
				<img src={img} alt="" />
			</div>
			<div className="banner-content-container">
				<h4> {secondaryTitle} </h4>
				<h2> {primaryTitle} </h2>
				<p> {price} </p>
			</div>
        </div>
    )
}

export default BannerCard