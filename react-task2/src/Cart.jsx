import React from "react";
import productdata from "./Data";

export default function Cart(props) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {productdata.map((item, index) => {
            return (
              <div key={index} className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Sale badge--> */}
                  {item.sale ? (
                    <div
                      className="badge bg-dark text-white position-absolute"
                      style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                      Sale
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Product image */}
                  <img
                    className="card-img-top"
                    src={item.productImg}
                    alt="..."
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{item.productName}</h5>
                      {/* <!-- Product reviews--> */}
                      {item.productRating ? (
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* <!-- Product price--> */}
                      <div>
                        {item.oldPrice && (
                          <>
                            <span className="text-muted text-decoration-line-through">
                              {item.oldPrice}
                            </span>
                            {"  "}
                          </>
                        )}
                        {item.newPrice}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      {item.productRating || item.sale ? (
                        <>
                          {props.cart.find((cartItem) => item.id === cartItem.id) ? (
                            <button
                              onClick={() => props.handleRemoveItem(item)}
                              className="btn btn-outline-dark mt-auto"
                            >
                              Remove from Cart
                            </button>
                          ) : (
                            <button
                              onClick={() => props.handleAddItem(item)}
                              className="btn btn-outline-dark mt-auto"
                            >
                              Add To Cart
                            </button>
                          )}
                        </>
                      ) : (
                        <button className="btn btn-outline-dark mt-auto">
                          View Options
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}