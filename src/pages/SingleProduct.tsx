import React from "react";
import { useGetSingleProductQuery } from "../services/Users";
import { useParams } from "react-router";
import LoadingFile from "./commonPages/LoadingFile";
import { Add } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();

  const handleAdd = (item:any) => {
    dispatch(Add({ ...data, quantity: 0 }));
  };
  return (
    <header>
      {/* content */}
      <section className="py-5 mt-5">
        <div className="container">
          {isSuccess ? (
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center">
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src={data.images[0]}
                  />
                </div>
                {/* thumbs-wrap.// */}
                {/* gallery-wrap .end// */}
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">{data.title}</h4>
                  <div className="d-flex flex-row my-3">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1" />
                      154 orders
                    </span>
                    <span className="text-success ms-2">In stock</span>
                  </div>
                  <div className="mb-3">
                    <span className="h5">${data.price}</span>
                  </div>
                  <p>{data.description}</p>
                  <div className="row">
                    <dt className="col-3">category:</dt>
                    <dd className="col-9">{data.category.name}</dd>
                  </div>
                  <hr />
                  <div className="row mb-4">
                    {/* <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: 35 }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div> */}
                    {/* col.// */}
                    <div className="col-md-4 col-6 mb-3">
                      <label className="mb-2 d-block">Quantity</label>
                      <div className="input-group mb-3" style={{ width: 170 }}>
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon1"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fas fa-minus" />
                        </button>
                        <input
                          type="text"
                          className="form-control text-center border border-secondary"
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                        <button
                          className="btn btn-white border border-secondary px-3"
                          type="button"
                          id="button-addon2"
                          data-mdb-ripple-color="dark"
                        >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-warning shadow-0">
                    {" "}
                    Buy now{" "}
                  </a>
                  <Link to="/cart" onClick={() => handleAdd(data)} className="btn btn-primary shadow-0">
                    
                    <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                  </Link>
                  <a
                    href="#"
                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                  >
                    {" "}
                    <i className="me-1 fa fa-heart fa-lg" /> Save{" "}
                  </a>
                </div>
              </main>
            </div>
          ) : (
            <LoadingFile />
          )}
        </div>
      </section>
    </header>
  );
};

export default SingleProduct;
