import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
   <>
   <div className=' mt-5 pt-4'>
    <div
          style={{ color: "white" }}
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-mdb-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-mdb-target="#carouselExampleCaptions"
              data-mdb-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg"
                height={1200}
                className="d-block w-100"
                alt="Wild Landscape"
              />

              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-sm-block mb-5">
                <h1 className="mb-4">
                  <strong>New Season Arrivals </strong>
                </h1>
                <p>
                  <strong>Check Out All The Trends</strong>
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg"
                height={1200}
                className="d-block w-100"
                alt="Camera"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-md-block mb-5">
                <h1 className="mb-4">
                  <strong>New Season Arrivals </strong>
                </h1>
                <p>
                  <strong>Check Out All The Trends</strong>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg"
                height={1200}
                className="d-block w-100"
                alt="Exotic Fruits"
              />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              />
              <div className="carousel-caption d-none d-md-block mb-5">
                <h1 className="mb-4">
                  <strong>New Season Arrivals </strong>
                </h1>
                <p>
                  <strong>Check Out All The Trends</strong>
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          hello
        </div>
        
        </div>
  </>
  )
}

export default Home