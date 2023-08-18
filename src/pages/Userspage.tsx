import { useGetAllUsersQuery } from "../services/Users";
import React from "react";
interface product {
  id: number;
  price: number;
  title: string;
  images: any;
  category: { name: string; image: string };
}
const UsersPage = () => {
  console.log("allproduct", useGetAllUsersQuery());
  const { data, isError, isLoading } = useGetAllUsersQuery();
  if (isLoading) {
    return <p>isLoading...</p>;
  }
  if (isError) {
    return <p>Something Went Wrong...</p>;
  }

  return (
    <>
      <section style={{ background: "#eee" }}>
        <div className="container">
          <h3>All Products </h3>
          <div className="row">
            {data.map((allProduct: product, index: number) => {
              console.log("aaaaaaaaaa" ,data)
              return (
                <>
                  <div className="col-md-3">
                    <div className="my-3">
                      <div
                        className="card w-100 p-3 bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                        style={{ height: "400px", width: "400px" }}
                      >
                        <img
                          src={allProduct.images[0]}
                          className="card-img-top"
                          alt="Hollywood Sign on The Hill"
                          height={200}
                          width={200}
                        />
                        <div className="card-body">
                          <h4 className="card-title">{allProduct.title}</h4>
                          <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">${allProduct.price}</h4>
                          </div>
                          <h6>category : {allProduct.category.name}</h6>
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

export default UsersPage;
