import React from 'react'
import "./Home.css"
import img1 from "./images/img1.jpg"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <div className="home-container">
        <img className='home-image' src={img1} alt="Banner" />

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