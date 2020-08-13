import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <div className="logo"><a href="" className="simple-text logo-normal">
        Admin
          </a></div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active ">
            <Link className="nav-link" to="/admin">
              <i className="material-icons"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/product/add">
              
              <p>Add Product</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/products">
            
              <p>List Products</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/category/add">
              
              <p>Add Category</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/category">
              
              <p>List Category</p>
            </Link>
          </li>
          {/* <li className="nav-item ">
            <Link className="nav-link" to="/admin/post/add">
              
              <p>Add Post</p>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/admin/post">
              
              <p>List Post</p>
            </Link>
          </li> */}

        </ul>
      </div>
    </div>
  )
}

Sidebar.propTypes = {

}

export default Sidebar
