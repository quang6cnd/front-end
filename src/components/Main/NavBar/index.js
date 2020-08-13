import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <link href="http://fonts.googleapis.com/css?family=Dosis:300,400" rel="stylesheet" type="text/css" />
      <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/dest/css/font-awesome.min.css" />
      <link rel="stylesheet" href="assets/dest/vendors/colorbox/example3/colorbox.css" />
      <link rel="stylesheet" href="assets/dest/rs-plugin/css/settings.css" />
      <link rel="stylesheet" href="assets/dest/rs-plugin/css/responsive.css" />
      <link rel="stylesheet" title="style" href="assets/dest/css/style.css" />
      <link rel="stylesheet" href="assets/dest/css/animate.css" />
      <link rel="stylesheet" title="style" href="assets/dest/css/huong-style.css" />


      <div id="header">
        <div className="header-top">
          <div className="container">
            <div className="pull-left auto-width-left">
              <ul className="top-menu menu-beta l-inline">
                <li><a href><i className="fa fa-home" /> 90-92 Lê Thị Riêng, Bến Thành, Quận 1</a></li>
                <li><a href><i className="fa fa-phone" /> 0163 296 7751</a></li>
              </ul>
            </div>
            <div className="pull-right auto-width-right">
              <ul className="top-details menu-beta l-inline">
                <li><a href="#"><i className="fa fa-user" />Tài khoản</a></li>
                <li><a href="#">Đăng kí</a></li>
                <li><a href="#">Đăng nhập</a></li>
              </ul>
            </div>
            <div className="clearfix" />
          </div> {/* .container */}
        </div> {/* .header-top */}
        <div className="header-body">
          <div className="container beta-relative">
            <div className="pull-left">
              <a href="index.html" id="logo"><img src="assets/dest/images/logo-cake.png" width="200px" alt="" /></a>
            </div>
            <div className="pull-right beta-components space-left ov">
              <div className="space10">&nbsp;</div>
              <div className="beta-comp">
                <form role="search" method="get" id="searchform" action="/">
                  <input type="text" defaultValue name="s" id="s" placeholder="Nhập từ khóa..." />
                  <button className="fa fa-search" type="submit" id="searchsubmit" />
                </form>
              </div>
              <div className="beta-comp">

              </div>
            </div>
            <div className="clearfix" />
          </div> {/* .container */}
        </div> {/* .header-body */}
        <div className="header-bottom" style={{ backgroundColor: '#0277b8' }}>
          <div className="container">
            <a className="visible-xs beta-menu-toggle pull-right" href="#"><span className="beta-menu-toggle-text">Menu</span> <i className="fa fa-bars" /></a>
            <div className="visible-xs clearfix" />
            <nav className="main-menu">
              <ul className="l-inline ov">
                <li><a href="/">Trang chủ</a></li>
                <li><a href="#">Sản phẩm</a>
                  <ul className="sub-menu">
                    <li><a href="product_type.html">Sản phẩm 1</a></li>
                    <li><a href="product_type.html">Sản phẩm 2</a></li>
                    <li><a href="product_type.html">Sản phẩm 4</a></li>
                  </ul>
                </li>
                <li><a href="/about">Giới thiệu</a></li>
                <li><a href="/contact">Liên hệ</a></li>
              </ul>
              <div className="clearfix" />
            </nav>
          </div> {/* .container */}
        </div> {/* .header-bottom */}
      </div> {/* #header */}

    </div>
  )
}