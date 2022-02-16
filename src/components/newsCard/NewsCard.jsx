import './newsCard.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import newsImg from '../../img/4_7e7141ad-49d9-4888-aaa9-59a98495c77f_370x225.jpg'

const NewsCard = () => {
    return (
        <div className='news-card'>
            <div className="news-card__img">
                <img src={newsImg} alt="" />
                <div className="overlay"></div>
            </div>
            <h2 className='header'> Temporibus Autem Quibusdam </h2>
            <p className='author'> By <span> monsta demo admin </span> / 27, Oct, 19 </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi rem hic culpa accusamus maiores, consequatur eveniet cupiditate vero debitis qui....</p>

            <p className='read-more'> 
                Read More 
                <span> <HiOutlineArrowNarrowRight className='icon' /> </span>
            </p>
        </div>
    )
}

export default NewsCard