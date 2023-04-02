import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div className="container text-light">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="#">Welcome to Our Store Hiscraves</a>

                    </div>
                    <div>
                        <i className="fa fa-phone mx-2"></i>
                        <a className="navbar-sm-brand text-light text-decoration-none" href="#">Call Us: 1234567890</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
