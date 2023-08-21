import React from 'react'
import "./ProductDetailsPage.css"
import * as FaIcons from 'react-icons/fa'
import * as mdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useGetSingleusersQuery } from '../services/Users'
import LoadingFile from "./commonPages/LoadingFile";

const ProductDetails = () => {
  const { data, isError, isLoading } = useGetSingleusersQuery();
  if (isLoading) {
    return (
      <h1 style={{

      }}>

        <LoadingFile />

      </h1>)
  }
  if (isError) {
    return <p>Something Went Wrong...</p>;
  }
  return (
    <div className='body1'><>
      
        return (
          <>
            <section className="product">
              <div className="product__photo">
                <div className="photo-container">
                  <div className="photo-main">
                    <div className="controls">
                      <i ><FaIcons.FaShareAlt /></i>
                      <i className="material-icons"><mdIcons.MdFavorite /></i>
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
                  <h1 className='font1'>title</h1>
                  {/* <span className='font1'>COD: 45999</span> */}
                </div>
                <div className="price">
                  Rs<span>price</span>
                </div>
                <div className="variant">
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
                </div>
                <div className="description">
                  <h3>BENEFITS</h3>
                  <ul className='Ulist'>
                    <li className='list'>description</li>
             
                  </ul>
                </div>
                <Link
                          to="/product/productdetails"
                          type="button"
                          className="btn btn-primary btn-rounded"
                          // state={{ from: `${item.id}` }}
                        >
                          Add To Cart
                        </Link>
              </div>
            </section>
          </>
        )
      
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