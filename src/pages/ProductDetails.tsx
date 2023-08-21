import React from 'react'
import "./ProductDetailsPage.css"
import * as FaIcons from 'react-icons/fa'
import * as mdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
  return (
    <div className='body1'><>
    <section className="product">
      <div className="product__photo">
        <div className="photo-container">
          <div className="photo-main">
            <div className="controls">
              <i ><FaIcons.FaShareAlt/></i>
              <i className="material-icons"><mdIcons.MdFavorite/></i>
            </div>
            <img
              src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png"
              alt="green apple slice"
            />
          </div>
          <div className="photo-album">
            <ul className=' Ulist'>
              <li className='list'>
                <img className='img1'
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                  alt="green apple"
                />
              </li >
              <li className='list'>
                <img className='img1'
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
                  alt="half apple"
                />
              </li>
              <li className='list'>
                <img className='img1'
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png"
                  alt="green apple"
                />
              </li>
              <li className='list'>
                <img className='img1' 
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
                  alt="apple top"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="product__info">
        <div className="title">
          <h1 className='font1'>Delicious Apples</h1>
          {/* <span className='font1'>COD: 45999</span> */}
        </div>
        <div className="price">
          Rs<span>7.93</span>
        </div>
        {/* <div className="variant">
          <h3 className=' font3'>SELECT A COLOR</h3>
          <ul className='Ulist'>
            <li className='list'>
              <img className='img1'
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                alt="green apple"
              />
            </li>
            <li className='list' >
              <img className='img1'
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                alt="yellow apple"
              />
            </li>
            <li className='list'>
              <img className='img1'
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                alt="orange apple"
              />
            </li>
            <li className='list'>
              <img className='img1'
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                alt="red apple"
              />
            </li>
          </ul>
        </div> */}
        <div className="description">
          <h3>BENEFITS</h3>
          <ul className='Ulist'>
            <li className='list'>Apples are nutricious</li>
            <li className='list'>Apples may be good for weight loss</li>
            <li className='list'>Apples may be good for bone health</li>
            <li className='list'>They're linked to a lowest risk of diabetes</li>
          </ul>
        </div>
        <Link to="/cart">
        <button className="buy--btn">ADD TO CART</button>
        </Link>
      </div>
    </section>
    <footer>
      <p>
        Design from{" "}
        <a href="https://dribbble.com/shots/5216438-Daily-UI-012">
          dribbble shot
        </a>{" "}
        of <a href="https://dribbble.com/rodrigorramos">Rodrigo Ramos</a>
      </p>
    </footer>
  </>
  </div>
  )
}

export default ProductDetails