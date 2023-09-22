import React from 'react';
import "./home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <>
   {/* <div className=' mt-5 pt-4'>
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
        
        </div> */}
         <div>
         <>
  <meta charSet="UTF-8" />
  {/* <title>E-commerce Landing page Template</title> */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
  <header>
    {/* <nav id="nav">
      <div className="logo nav-common">
        <img
          // src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/BRANDY_1x.png"
          alt="brand-logo"
        />
      </div>
      <ul className="nav-common">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#products">products</a>
        </li>
        <li>
          <a href="#collections">collections</a>
        </li>
        <li>
          <a href="#blog">blog</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="cart nav-icon nav-common">
        <img
          // src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412544/E-commerce%20landing%20page/icons/shopping_cart_1x.png"
          alt="shopping-cart"
        />
      </div>
      <div className="menu nav-icon nav-common">
        <img
          // src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/icons/menu_1x.png"
          alt="hamburger-menu"
        />
      </div>
    </nav> */}
    <div id="header-hero">
      <div className="header-bg">
        {" "}
        <img
          src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg"
          alt="header-image"
        />{" "}
      </div>
      <div className="header-content">
        <p className="heading-1">fashion collection 2017</p>
        <h1>
          wellcome to brand<span className="logo-style">y</span> unique store
        </h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <div className="button font-white">
          <Link to="/product">
          <p>shop now</p>
          </Link>
        </div>
      </div>
    </div>
  </header>
  <section id="summer-collection">
    <div className="container">
      <div className="sc-content">
        <h1>summer collection</h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <a href="#">discover now</a>{" "}
      </div>
      <div className="sc-media">
        <div className="sc-media-bg">
          {" "}
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412556/E-commerce%20landing%20page/summer-collection/cold-fashion-man-women_3x.jpg"
            alt="sc-image"
          />{" "}
        </div>
      </div>
    </div>
  </section>
  <section id="products">
    <div className="container">
      <div className="products-header">
        <h2>popular products</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="product product-1">
        <figure>
          {" "}
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412551/E-commerce%20landing%20page/products-showcase/product-1-img_3x.jpg"
            alt="product-image"
          />
          <figcaption>cold fashion</figcaption>
          <figcaption>$ 56.00</figcaption>
        </figure>
      </div>
      <div className="product product-2">
        <figure>
          {" "}
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412546/E-commerce%20landing%20page/products-showcase/product-2-img_3x.jpg"
            alt="product-image"
          />
          <figcaption>women fashion</figcaption>
          <figcaption>$ 84.00</figcaption>
        </figure>
      </div>
      <div className="product product-3">
        <figure>
          {" "}
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-3-img_3x.jpg"
            alt="product-image"
          />
          <figcaption>women fashion</figcaption>
          <figcaption>$ 48.00</figcaption>
        </figure>
      </div>
      <div className="product product-4">
        <figure>
          {" "}
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg"
            alt="product-image"
          />
          <figcaption>men fashion</figcaption>
          <figcaption>$ 89.00</figcaption>
        </figure>
      </div>
    </div>
  </section>
  <section id="collections">
    <div className="container">
      <div className="c-1">
        <div className="c-1-image-holder">
          {" "}
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/suit-collections/suit-collection-img_3x.jpg"
            alt="image"
          />{" "}
        </div>
      </div>
      <div className="c-2">
        <h2>featured collection</h2>
        <hr />
        <div className="c-2-image-holder">
          {" "}
          <img
            className="left"
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412552/E-commerce%20landing%20page/suit-collections/collection-2-img_3x.jpg"
            alt=""
          />
          <img
            className="right"
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412552/E-commerce%20landing%20page/suit-collections/collection-1-img_3x.jpg"
            alt=""
          />
        </div>
        <p className="button">view all collections</p>
      </div>
    </div>
  </section>
  <section id="blog">
    <div className="container">
      <div className="blog-header">
        <h2>latest from blog</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="blog-content">
        <div className="blog-1">
          <div className="blog-1-image-holder">
            {" "}
            <img
              src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412548/E-commerce%20landing%20page/blog/blog-2-img_3x.jpg"
              alt="image"
            />{" "}
          </div>
          <div className="blog-1-content">
            <h4>Lorem Ipsum</h4>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p className="button">view post</p>
          </div>
        </div>
        <div className="blog-2">
          <div className="blog-2-image-holder">
            {" "}
            <img
              src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/blog/blog-1-img_3x.jpg"
              alt="image"
            />{" "}
          </div>
          <div className="blog-2-content">
            <h4>Lorem Ipsum</h4>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p className="button">view post</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div className="container">
      <h4>cantact us</h4>
      <p>451 awenve 5th street new york city</p>
      <p>+ (42) 442 4521</p>
      <p>info.fashion@gmail.com</p>
      <p className="email">
        emailus{" "}
        <span>
          <img
            src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/get_in_touch_1x.png"
            alt="email-image"
          />
        </span>
      </p>
    </div>
  </section>
  <footer>
    <p className="copy-right">
      <img
        src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/icons/copy-right-img_1x.png"
        alt="copy right image"
      />{" "}
      2017 all right recived{" "}
    </p>
    <p>privacy policy</p>
    <p>license</p>
  </footer>
  <div className="back-to-top">
    <a href="#nav">
      {" "}
      <img
        title="Back to Top."
        src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/back_-_top_1x.png"
        alt="back to top"
      />
    </a>{" "}
  </div>
</>

         </div>
  </>
  )
}

export default Home