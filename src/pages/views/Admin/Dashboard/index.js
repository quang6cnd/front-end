import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = ({ products }) => {
  return (
    <div>
      <div className="main-panel">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
          <div className="container-fluid">
            <div className="navbar-wrapper">
              <a className="navbar-brand" href="">Dashboard</a>
            </div>
            <button className="navbar-toggler" type="button" >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar" />
              <span className="navbar-toggler-icon icon-bar" />
              <span className="navbar-toggler-icon icon-bar" />
            </button>
            <div className="collapse navbar-collapse justify-content-end">
              <form className="navbar-form">
                <div className="input-group no-border">
                  <input type="text" defaultValue className="form-control" placeholder="Search..." />
                  <button type="submit" className="btn btn-white btn-round btn-just-icon">
                    <i className="material-icons">search</i>
                    <div className="ripple-container" />
                  </button>
                </div>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <i className="material-icons">dashboard</i>
                    <p className="d-lg-none d-md-block">
                      Stats
                    </p>
                  </a>
                </li>


              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-header card-header-warning card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons">content_copy</i>
                    </div>
                    <p className="card-category">Tổng sản phẩm</p>
                    <h3 className="card-title">{products.length}

                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons text-danger">warning</i>
                      <a href="">Get More Space...</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card card-stats">
                  <div className="card-header card-header-success card-header-icon">
                    <div className="card-icon">
                      <i className="material-icons">store</i>
                    </div>
                    <p className="card-category">Tổng tiền</p>
                    <h3 className="card-title">

                    </h3>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">date_range</i> Last 24 Hours
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-chart">
                  <div className="card-header card-header-success">
                    <div className="ct-chart" id="dailySalesChart" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Daily Sales</h4>
                    <p className="card-category">
                      <span className="text-success"><i className="fa fa-long-arrow-up" /> 55% </span> increase in today sales.</p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">access_time</i> updated 4 minutes ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-chart">
                  <div className="card-header card-header-warning">
                    <div className="ct-chart" id="websiteViewsChart" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Email Subscriptions</h4>
                    <p className="card-category">Last Campaign Performance</p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">access_time</i> campaign sent 2 days ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-chart">
                  <div className="card-header card-header-danger">
                    <div className="ct-chart" id="completedTasksChart" />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Completed Tasks</h4>
                    <p className="card-category">Last Campaign Performance</p>
                  </div>
                  <div className="card-footer">
                    <div className="stats">
                      <i className="material-icons">access_time</i> campaign sent 2 days ago
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

Dashboard.propTypes = {

}

export default Dashboard
