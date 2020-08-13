import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Home = ({ products }) => {

  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Laravel </title>
        
        <div className="container">
          <div id="content" className="space-top-none">
            <div className="main-content">
              <div className="space60">&nbsp;</div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="space50">&nbsp;</div>
                  <div className="beta-products-list">
                    <h4>Top Products</h4>
                    <div className="beta-products-details">
                      <div className="clearfix" />
                    </div>
                    <div className="row">


                      {products.map(({ id, name, image, price, priceSale }) => (
                        <div className="col-md-3">
                          <div className="card" style={{ width: "100%", height: "440px", border: "none", textAlign: "center" }}>
                            <img src={image} style={{ height: "280px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <p> <strong>{name}</strong> </p> <br></br>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

Home.propTypes = {

}

export default Home
