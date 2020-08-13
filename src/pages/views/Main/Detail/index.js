import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Detail = ({ products }) => {
    console.log(products)
    let { id } = useParams();
    console.log(id)
    const product = products.find((product) => product.id === id);
    console.log(product)
    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb mt-10" style={{ paddingLeft: "15px" }}>
                    <li className="breadcrumb-item" >
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Detail
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {product.name}
                    </li>
                </ol>
            </nav>

            <div className="container">
                <div id="content">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="col-sm-8">
                                    <div className="single-item-body">
                                        <p className="single-item-title"><strong> {product.name}</strong></p><br></br>
                                        <p className="single-item-price">
                                            <span>Giá: {product.price} VND</span>
                                        </p>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="space20">&nbsp;</div>
                                    <div className="single-item-desc">
                                      Trạng Thái:  {product.status} </div>
                                    <div className="space20">&nbsp;</div>
                                    <p>Options:</p>
                                    <div className="single-item-options">
                                        <select className="wc-select" name="size">
                                            <option>Size</option>
                                            <option value="XS">XS</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                        </select>
                                        <select className="wc-select" name="color">
                                            <option>Color</option>
                                            <option value="Red">Red</option>
                                            <option value="Green">Green</option>
                                            <option value="Yellow">Yellow</option>
                                            <option value="Black">Black</option>
                                            <option value="White">White</option>
                                        </select>
                                        <select className="wc-select" name="color">
                                            <option>Qty</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>

                                        <button type="button" className="btn btn-outline-danger">
                                            Thêm vào giỏ hàng
                        </button>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                            </div>
                            <div className="space40">&nbsp;</div>
                            <div className="woocommerce-tabs">
                                <ul className="tabs">
                                    <li><a href="#tab-description">Description</a></li>
                                    <li><a href="#tab-reviews">Reviews (0)</a></li>
                                </ul>
                                <div className="panel" id="tab-description">{product.textAra} </div>
                                <div className="panel" id="tab-reviews">
                                    <p>No Reviews</p>
                                </div>
                            </div>
                            <div className="space50">&nbsp;</div>
                            <div className="beta-products-list">
                                <h4>Related Products</h4>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="single-item-header">
                                                <a href="product.html"><img src="assets/dest/images/products/4.jpg" alt="" /></a>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span>$34.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <a className="add-to-cart pull-left" href="product.html"><i className="fa fa-shopping-cart" /></a>
                                                <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right" /></a>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="single-item-header">
                                                <a href="product.html"><img src="assets/dest/images/products/5.jpg" alt="" /></a>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span>$34.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <a className="add-to-cart pull-left" href="product.html"><i className="fa fa-shopping-cart" /></a>
                                                <a className="beta-btn primary" href="product.html">Details <i className="fa fa-chevron-right" /></a>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="single-item">
                                            <div className="ribbon-wrapper"><div className="ribbon sale">Sale</div></div>
                                            <div className="single-item-header">
                                                <a href="#"><img src="assets/dest/images/products/6.jpg" alt="" /></a>
                                            </div>
                                            <div className="single-item-body">
                                                <p className="single-item-title">Sample Woman Top</p>
                                                <p className="single-item-price">
                                                    <span className="flash-del">$34.55</span>
                                                    <span className="flash-sale">$33.55</span>
                                                </p>
                                            </div>
                                            <div className="single-item-caption">
                                                <a className="add-to-cart pull-left" href="#"><i className="fa fa-shopping-cart" /></a>
                                                <a className="beta-btn primary" href="#">Details <i className="fa fa-chevron-right" /></a>
                                                <div className="clearfix" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* .beta-products-list */}
                        </div>
                        <div className="col-sm-3 aside">
                            <div className="widget">
                                <h3 className="widget-title">Best Sellers</h3>
                                <div className="widget-body">
                                    <div className="beta-sales beta-lists">
                                        <div className="media beta-sales-item">
                                            <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/1.png" alt="" /></a>
                                            <div className="media-body">
                                                Sample Woman Top
                    <span className="beta-sales-price">$34.55</span>
                                            </div>
                                        </div>
                                        <div className="media beta-sales-item">
                                            <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/2.png" alt="" /></a>
                                            <div className="media-body">
                                                Sample Woman Top
                    <span className="beta-sales-price">$34.55</span>
                                            </div>
                                        </div>
                                        <div className="media beta-sales-item">
                                            <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/3.png" alt="" /></a>
                                            <div className="media-body">
                                                Sample Woman Top
                    <span className="beta-sales-price">$34.55</span>
                                            </div>
                                        </div>
                                        <div className="media beta-sales-item">
                                            <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/4.png" alt="" /></a>
                                            <div className="media-body">
                                                Sample Woman Top
                    <span className="beta-sales-price">$34.55</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* best sellers widget */}
                            <div className="widget">
                                <h3 className="widget-title">New Products</h3>
                                <div className="widget-body">
                                    <div className="beta-sales beta-lists">
                                        <div className="media beta-sales-item">
                                            <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/1.png" alt="" /></a>
                                            <div className="media-body">
                                                Sample Woman Top
                    <span className="beta-sales-price">$34.55</span>
                                            </div>
                                        </div>
                                        <div className="media beta-sales-item">
                                            <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/2.png" alt="" /></a>
                                            <div className="media-body">
                                                Sample Woman Top
                    <span className="beta-sales-price">$34.55</span>
                                            </div>
                                        </div>
                                        <div className="media beta-sales-item">
                                            <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/3.png" alt="" /></a>
                                            <div className="media-body">
                                                Sample Woman Top
                    <span className="beta-sales-price">$34.55</span>
                                            </div>
                                        </div>
                                        <div className="media beta-sales-item">
                                            <a className="pull-left" href="product.html"><img src="assets/dest/images/products/sales/4.png" alt="" /></a>
                                            <div className="media-body">
                                                Sample Woman Top
                    <span className="beta-sales-price">$34.55</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* best sellers widget */}
                        </div>
                    </div>
                </div> {/* #content */}
            </div> {/* .container */}





        </div>
    );
};

Detail.propTypes = {};

export default Detail;
