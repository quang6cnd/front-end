import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from '../views/Admin/Dashboard'
// import '../assets/admin/sb-admin-2.min.scss'
// import '../assets/admin/main.scss'

export default ({ children }) => {
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        {/* <Dashboard/> */}
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

