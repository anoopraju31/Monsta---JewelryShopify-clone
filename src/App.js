import './App.css'
import { Banner, BannerSection, Carousel, Footer, HeroCarousels, Navbar, NewsLetterForm, ProductCarousel } from './components/import'



import img1 from './img/11_6c2be49d-fc5d-4737-a221-ae77090f5af0_350x350_crop_bottom.jpg'
import img2 from './img/18_e3683a41-4f3d-412a-bf04-5f5077807c84_350x350_crop_bottom.jpg'
import img3 from './img/20_4bfdeeec-a31d-4a75-b4e7-7e3693d6c8a7_350x350_crop_bottom.jpg'
import img4 from './img/21_105329e0-7caa-4d2e-99da-aebdc0c049a3_350x350_crop_bottom.jpg'
import img5 from './img/25_3682b30b-465a-4d85-aa82-857137dad765_350x350_crop_bottom.jpg'
import img6 from './img/3_6e881f7f-76b0-4d4e-a6ce-a96ebf934340_350x350_crop_bottom.jpg'

const images = [
  img1,
  img2, 
  img3,
  img4, 
  img5,
  img6
]

const App = () => {

  return (
		<div className="App">
      <Navbar />
      
      <HeroCarousels />

      <div className="container">
        <BannerSection />
      </div>
      
      <div className="container">
        <ProductCarousel images={images} />
      </div>

      <div className="full-width">
        <Banner />
      </div>

      <div className="container">
        <Carousel title='Best Selling Products' product />
      </div>

      <div className="full-width">
        <div className="horizontal-line"></div>
      </div>
      
      <div className="container">
        <Carousel title='Monsta News' news/>
      </div>
      
      <div className="full-width">
        <div className="horizontal-line"></div>
      </div>
      
      <div className="container">
        <NewsLetterForm />
      </div>

      <div className="horizontal-line"></div>
      
      <div className="container">
        <Footer />
      </div>
    </div>
  )
}

export default App