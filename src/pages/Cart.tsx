import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add, remove, removeOnePRoduct } from '../redux/CartSlice'
import { Link } from 'react-router-dom'
interface prod{
state: any
cart:any,
id:string,
category: {
  image:string
}
title:string
price:number
quantity:number
}

const Cart = () => {
  const CartProd = useSelector((state:prod)=>state.cart)
  const getTotal = () => {
    let total = 0;
    CartProd.map((item:prod) => {
      total = total + item.quantity * item.price;
    });
    return total;
  };
  const disptch = useDispatch();
  const handleRemove=(productId:number)=>{
    disptch(remove(productId))
  }
  return (
    <div  style={{
      paddingTop:"200px"
    }}><section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <div className="container h-100 py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card shopping-cart" style={{ borderRadius: 15 }}>
            <div className="card-body text-black">
              <div className="row">
                <div className="col-lg-6 px-5 py-4">
                  <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                    Your products
                  </h3>
                  {CartProd.length > 0 && CartProd.map((product:any, index:number)=>{
                    return ( 
                      <>
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img
                            src={product.category.image}
                            className="img-fluid"
                            style={{ width: 150 }}
                            alt="Generic placeholder image"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <a href="#!" className="float-end text-black">
                            <i className="fas fa-times" />
                            <button
                          className="btn btn-link px-2"
                          onClick={() => handleRemove(product.Id)}
                          
                        ></button>
                          </a>
                          <h5 className="text-primary">{product.title}</h5>
                          {/* <h6 style={{ color: "#9e9e9e" }}>Color: white</h6> */}
                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">{product.price}$</p>
                            <div className="def-number-input number-input safari_only">
                              <button
                                // onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                className="minus"
                                 
                                onClick={() => {
                                  if (product.quantity > 1) {
                                    disptch(removeOnePRoduct(product));
                                  } else {
                                    handleRemove(product.id);
                                  }
                                }}
                              >➖</button>
                              <input
                                className="quantity fw-bold text-black"
                                min={1}
                                name="quantity"
                                defaultValue={product.quantity}
                                value={product.quantity}
                                type="number"
                                readOnly
                              />
                              <button
                                // onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                className="plus"
                                onClick={() => disptch(Add(product))}
                              >➕</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <hr
                        className="mb-4"
                        style={{ height: 2, backgroundColor: "#1266f1", opacity: 1 }}
                      />
                     
                    
                      </>
                    )
                  })}
                   
                    <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">{getTotal()}</h5>
                      </div>
                </div>
                <div className="col-lg-6 px-5 py-4">
                  {/* <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                    Payment
                  </h3> */}
                  <form className="mb-5">
                   
                    <div className="row">
                      <div className="col-md-7 mb-7">
                        <div className="form-outline">
                          <input
                            type="text"
                            // id="typeExp"
                            className=" form-control-lg"
                            defaultValue="01/22"
                            size={7}
                            minLength={7}
                            maxLength={7}
                          />
                          <label className="form-label" htmlFor="typeExp">
                            Expiration
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-5">
                        <div className="form-outline">
                          <input
                            type="password"
                            // id="typeText"
                            className=" form-control-lg"
                            defaultValue="●●●"
                            size={1}
                            minLength={3}
                            maxLength={3}
                          />
                          <label className="form-label" htmlFor="typeText">
                            Cvv
                          </label>
                        </div>
                      </div>
                    </div>
                    <p className="mb-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit{" "}
                      <a href="#!">obcaecati sapiente</a>.
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary btn-block btn-lg"
                    >
                      Buy now
                    </button>
                    <h5
                      className="fw-bold mb-5"
                      style={{ position: "absolute", bottom: 0 }}
                    >
                      <Link to="/product">
                        <i className="fas fa-angle-left me-2" />
                        Back to shopping
                      </Link>
                    </h5>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Cart