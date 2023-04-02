import React from 'react'
import FaceBook from '../Image/FaceBook.png';
import Twiter from '../Image/Twiter.png';
import Insta from '../Image/Insta.png';
import LinkedIn from '../Image/LinkedIn.png';
import PInterest from '../Image/PInterest.png';

const color = {
    color: "#770015",
    fontFamily: "Playfair Display"
}

export default function Footer() {
    return (
        <footer className="border-top" id="tempaltemo_footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 pt-5">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</p>
                        <div className="col-auto me-auto">
                            <ul className="list-inline text-left footer-icons">
                                <li className="list-inline-item rounded-circle text-center">
                                    <a className="text-decoration-none" target="_blank" href="#"><img src={FaceBook} alt='FaceBook' /></a>
                                </li>
                                <li className="list-inline-item rounded-circle text-center">
                                    <a className="text-decoration-none" target="_blank" href="#"><img src={Twiter} alt='FaceBook' /></a>
                                </li>
                                <li className="list-inline-item rounded-circle text-center">
                                    <a className="text-decoration-none" target="_blank" href="#"><img src={Insta} alt='FaceBook' /></a>
                                </li>
                                <li className="list-inline-item rounded-circle text-center">
                                    <a className="text-decoration-none" target="_blank" href="#"><img src={LinkedIn} alt='FaceBook' /></a>
                                </li>
                                <li className="list-inline-item rounded-circle text-center">
                                    <a className="text-decoration-none" target="_blank" href="#"><img src={PInterest} alt='FaceBook' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-2 pt-5">
                        <h6 className="pb-3" style={color}>ONLINE SHOPPING</h6>
                        <ul className="list-unstyled footer-link-list">
                            <li><a className="text-decoration-none text-dark" href="#">Men’s T-Shirts</a></li>
                            <li><a className="text-decoration-none text-dark" href="#">Women’s Wear</a></li>
                            <li><a className="text-decoration-none text-dark" href="#">Winter Collections</a></li>
                            <li><a className="text-decoration-none text-dark" href="#">Hooded T-Shirts</a></li>
                            <li><a className="text-decoration-none text-dark" href="#">Streetwear Collections</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 pt-5">
                        <h6 className=" pb-3" style={color}>CUSTOMER POLICIES</h6>
                        <ul className="list-unstyled footer-link-list">
                            <li><a className="text-decoration-none text-dark" href="#">About Us</a></li>
                            <li><a className="text-decoration-none text-dark" href="#">Terms & Conditions</a></li>
                            <li><a className="text-decoration-none text-dark" href="#">Shipping & Returns Policy</a></li>
                            <li><a className="text-decoration-none text-dark" href="#">Cancellation & Refund Policy</a></li>
                            <li><a className="text-decoration-none text-dark" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 pt-5">
                        <h6 className=" pb-3" style={color}>STORE INFORMATION</h6>
                        <ul className="list-unstyled footer-link-list">
                            <li><i className="fas fa-map-marker-alt fa-fw"></i> <a className="text-decoration-none text-dark" href="#">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. </a></li>
                            <li></li>
                            <li><i className="fa fa-phone fa-fw"></i> <a className="text-decoration-none text-dark" href="#">Call Us: 1234567890</a></li>
                            <li></li>
                            <li><i className="fa fa-envelope fa-fw"></i> <a className="text-decoration-none text-dark" href="#">Email Us: info@yourmail.com</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="w-100  py-3" style={{ background: "#20050A" }}>
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-center text-light">
                                &copy;2022-23 Powered By dummy team
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
