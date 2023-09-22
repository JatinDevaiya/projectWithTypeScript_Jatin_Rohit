import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSearchProductQuery } from "../services/Users";
interface product {
  id: number;
  price: number;
  title: string;
  images: any;
  category: { name: string; image: string };
}
const SearchProduct = () => {
  const { keyword }: any = useParams();
  const { data, isSuccess } = useSearchProductQuery(keyword);

  return (
    <section style={{ background: "#eee", paddingTop:"100px" }}>
      <div className="container">
        <div className="row">
          {isSuccess &&
            data.map((allProduct: product, index: number) => {
              return (
                <>
                  <div className="col-md-3">
                    <div className="g-col-6 mb-3" style={{width:"19rem"}}>
                      <div
                        className="card w-100 p-3 bg-image hover-zoom"
                        style={{ height: "500px" }}
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
  );
};

export default SearchProduct;
