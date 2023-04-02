import React from 'react'
import logo from '../Image/Vector.png'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-xl bg-light shadow py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <img src={logo} alt="logo" />

                    </div>
                    <div className="text-center">
                        <h5 className="nav-link" style={{ fontFamily: "Playfair Display" }}>Logo Here</h5>
                    </div>
                    <div className="navbar align-self-center d-flex" style={{ width: "15%" }}>
                        <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                                <div className="input-group-text">
                                    <i className="fa fa-fw fa-search"></i>
                                </div>
                            </div>
                        </div>
                        <a className="nav-icon d-none d-lg-inline" href="#">
                            <i className="fa fa-fw fa-search text-dark"></i>
                        </a>
                        <a className="nav-icon position-relative text-decoration-none" href="#">
                            <i className="fa fa-fw fa-heart text-dark"></i>
                        </a>
                        <a className="nav-icon position-relative text-decoration-none" href="#">
                            <i className="fa fa-fw fa-cart-arrow-down text-dark"></i>
                        </a>
                        <a className="nav-icon position-relative text-decoration-none" href="#">
                            <i className="fa fa-fw fa-user text-dark"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
