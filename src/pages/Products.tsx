import React, { useState } from "react";
import { useGetAllProductsQuery } from "../services/Users";
import LoaddingPage from "./commonPages/LoaddingPage";
import LoadingFile from "./commonPages/LoadingFile";
import { Link, NavLink } from "react-router-dom";

interface product {
  id: number;
  price: number;
  title: string;
  images: any;
  category: { name: string; image: string };
}
const Product = () => {
  const [keyword, setKeyword] = useState("");
  const { data, isError, isLoading } = useGetAllProductsQuery();
  if (isLoading) {
    return (
      <>
        {/* <LoaddingPage /> */}
        <LoadingFile />
      </>
    );
  }
  if (isError) {
    return <p>Something Went Wrong...</p>;
  }

  return (
    <>
      <section style={{ background: "#eee", paddingTop:"100px" }} >
        <div className="container mt-3">
          <h3>All Products </h3>
          {/* search button template */}
          <div className="input-group">
            <input
              type="search"
              id="form1"
              className="form-control p-3"
              placeholder="search"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <NavLink to={`/searchProduct/${keyword}`}>
              <button type="button" className="btn btn-primary p-3">
                <i className="fas fa-search" />
              </button>
            </NavLink>
          </div>

          <div className="row">
            {data.map((allProduct: product, index: number) => {
              return (
                <>
                  <div className="col-md-3">
                    <div className="my-3">
                      <div
                        className="card w-100 p-3 bg-image hover-zoom "
                        style={{ height: "500px", width: "400px" }}
                      >
                        <Link to={`/singleProduct/${allProduct.id}`}>
                          <img
                            src={allProduct.images[0]}
                            className="card-img-top"
                            alt="Hollywood Sign on The Hill"
                            height={200}
                            width={200}
                          />
                        </Link>

                        <div className="card-body">
                          <h4 className="card-title">{allProduct.title}</h4>
                          <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">Rs.{allProduct.price}</h4>
                          </div>
                          <h6>category : {allProduct.category.name}</h6>

                          {/* <Link to="/productDetails"> */}
                          <Link to={`/singleProduct/${allProduct.id}`}>
                            <button className="btn btn-outline-success">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
