import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Category = ({ category, onRemoveCate }) => {
    const removeCate = (id) => {
        onRemoveCate(id);
    }
    return (
        <div>
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-end">
                            <form className="navbar-form" >
                                <div className="input-group no-border">
                                    <input type="text" className="form-control" placeholder="Search..." name="name" />
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                        <i className="material-icons">search</i>
                                        <div className="ripple-container" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="card shadow ml-10">
                    {/* <div className="card-header card-header-primary"></div> */}
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Des</th>
                                        <th scope="col">Action</th>
                                        {/* <th scope="col">Detail</th> */}

                                    </tr>
                                </thead>
                                <tbody>
                                    {category.map(({ id, nameCate, imageCate, textAra }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                {nameCate}
                                            </td>
                                            <td>
                                                <img src={imageCate} alt="" width="100" />
                                            </td>
                                            <td>
                                                {textAra}
                                            </td>
                                            <td>
                                                <Link className="btn btn-success" to={'/admin/category/id/' + id}>
                                                    Edit
                                                </Link>
                                                <button className="btn btn-danger" onClick={() => removeCate(id)}>
                                                    Delete
                                                </button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Category.propTypes = {

}

export default Category
