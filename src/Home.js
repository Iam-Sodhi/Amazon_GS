import React from 'react'
import "./Home.css"
import img1 from "./images/img1.jpg"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className="home-container">
        <img className='home-image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner" />

        <div className="home-row">
        <Product 
          id="1"
        title="Bengoo G9000 Stereo Gaming Headset"
             price={1799}
             image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5}
        />
        <Product 
          id="2"
          title="Dowinx Gaming Chair Cloth with Headrest"
          price={15551}
          image="https://m.media-amazon.com/images/I/614izepm28L._AC_UL600_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product 
          id="3"
          title="SAMSUNG Galaxy Tab S6 Lite 10.4inch 64GB Tablet"
          price={20462}
          image="https://m.media-amazon.com/images/I/61jfI8GyQgL._AC_UL600_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product
        id="4"
        title="Fitbit Inspire 3 Health & Fitness Tracker"
        price={8099}
        image="https://m.media-amazon.com/images/I/61Eyp16MspL._AC_UY327_FMwebp_QL65_.jpg"
        rating={5}
         />

        </div>

        <div className="home-row">
        <Product 
          id="5"
        title="Campus Men's Rodeo-2 Running Shoes"
             price={844}
             image="https://m.media-amazon.com/images/I/6138Uxu+hvL._UY695_.jpg"
             rating={4}
        />
        <Product 
          id="6"
          title="Reebok Mens Advent Tr Track and Field Shoe"
          price={1285.1}
          image="https://m.media-amazon.com/images/I/81xcLHSFSCL._UY695_.jpg"
          rating={4}
        />
        <Product 
          id="7"
          title="Doctor Extra Soft Doctor Ortho Slippers for Women."
          price={399}
          image="https://m.media-amazon.com/images/I/51dMc66bcZL._UX695_.jpg"
          rating={4}
        />
        <Product
        id="8"
        title="FB272 Men Tan Brown Black Colour Outdoor Sandal Shoe"
        price={8099}
        image="https://m.media-amazon.com/images/I/61mMKG4E8SL._UY695_.jpg"
        rating={5}
        />
        </div>
        <div className="home-row">
          <Product
            id="13"
            title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)"
            price={12990.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71a4ZQNqTiL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="14"
            title="Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA43CUE60AKLXL (Black)"
            price={29990.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81+JXgPUDLL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="16"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="15"
            title="SAF Multieffect UV Textured Panel Painting (Set of 3, 12 Inches X 27 Inches (SANFC12242) SANFC12242"
            price={1690.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/41YdZvuWRgL._SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="16"
            title="VISUALSKETCHES Horse Paintin for Wall 20x47 Inch Running Horses Painting Modern Canvas Painting Wall Painting"
            price={9990.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/51+1Cshj-3L._SX679_.jpg"
          />
        </div>
        <div className="home-row">
        <Product 
          id="9"
        title="BENGOO G9000 Stereo Gaming Headset "
             price={1799}
             image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5}
        />
        <Product 
          id="10"
          title="Dowinx Gaming Chair "
          price={15551}
          image="https://m.media-amazon.com/images/I/614izepm28L._AC_UL600_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product 
          id="11"
          title="SAMSUNG Galaxy Tab S6 Lite 10.4inch 64GB Android Tablet"
          price={20462}
          image="https://m.media-amazon.com/images/I/61jfI8GyQgL._AC_UL600_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product
        id="12"
        title="Fitbit Inspire 3 Health & Fitness Tracker"
        price={8099}
        image="https://m.media-amazon.com/images/I/61Eyp16MspL._AC_UY327_FMwebp_QL65_.jpg"
        rating={5}
        />
        </div>
      </div>
    </div>
  )
}

export default Home
