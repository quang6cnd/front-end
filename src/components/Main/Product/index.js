import React from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  
const Product = ({products}) => {
    // console.log(products)
    return (
        
            <div className="product">
                <br />
                <h3>Sản Phẩm mới</h3>
                <div className="row" style={{ paddingTop: "50px" }}>
                {products.map(({ id,  image, price ,priceSale}) => (
                    <div className="col-md-3">
                        <div className="card" style={{ width: "100%", height: "440px", border: "none", textAlign: "center" }}>
                            <img src={image} style={{ height: "280px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text" style={{ color: "red" }}>
                                    <span style={{ textDecoration: "line-through", color: "#000", paddingRight: "15px" }}>{price}</span>
                                    {priceSale} VNĐ
                                </p>
                                <hr />
                                <button type="button" className="btn btn-outline-primary" style={{ marginBottom: "10px" }}>
                                    <Link to={"/product_" + id} style={{ textDecoration: "none" }}>
                                        Mua ngay
                                    </Link>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                    
                </div>
            </div>
       
    );
};

Product.propTypes = {};

export default Product;
