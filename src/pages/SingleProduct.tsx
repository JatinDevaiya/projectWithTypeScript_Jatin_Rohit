import React, { useState } from "react";
import { useGetSingleProductQuery } from "../services/Users";
import { useNavigate, useParams } from "react-router";
import LoadingFile from "./commonPages/LoadingFile";
import { Add } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, isLoading, isError, isSuccess } = useGetSingleProductQuery(id);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleAdd = (item: any) => {
    token
      ? dispatch(Add({ ...data, quantity: 0 })) && navigate("/cart")
      : navigate("/signin");
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
                      maxWidth: "50%",
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

                  <button
                    onClick={() => handleAdd(data)}
                    className="btn btn-primary shadow-0"
                  >
                    <i className="me-1 fa fa-shopping-basket" /> Add to cart{" "}
                  </button>
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
