import './newsLetterForm.css'

const NewsLetterForm = () => {
    return (
        <div className='news-letter-form'>
            <h2> Our Newsletter </h2>
            <p> Get E-mail updates about our latest shop and special offers. </p>
            <div className="search-box">
                <input type="email" placeholder='email@example.com' />
                <div className="search-box__button"> Subscribe </div>
            </div>
        </div>
    )
}

export default NewsLetterForm