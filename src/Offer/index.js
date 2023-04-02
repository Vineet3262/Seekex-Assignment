import React from 'react'
import diamond from '../Image/diamond 1.png'
import discount from '../Image/discount 1.png'
import logo1 from "../Image/Group1.png"
import logo2 from "../Image/Group2.png"
import logo3 from "../Image/Group3.png"
import logo4 from "../Image/Group4.png"
import './Offer.css'

var imgData = [
    {
        img: logo1,
        value: "7 Days Return"
    },
    {
        img: logo2,
        value: "Quality Products        "
    },
    {
        img: logo3,
        value: "Safe Payment"
    },
    {
        img: logo4,
        value: "24x7 Helpline"
    }
]
export default function Offer() {
    return (
        <section>
            <div className="container mb-5 ">
                <div className="row mt-2 text-center" >
                    <div className="col-12 col-md-6" >
                        <div className="Card py-5" style={{ background: "#CCCEA7" }}>
                            <img src={diamond} alt="Rectangle3" />
                            <div>
                                <h2 className='py-2'>Hurry Up!</h2>
                                <h2 className='py-2'>85% OFF</h2>
                                <h3 className='py-2'>Sale</h3>
                            </div>
                            <button className="btn btn-lg" style={{ border: "1px solid white", width: "170px", color: "white" }}>View all</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6" >
                        <div className="Card py-5" style={{ background: "#D6BEBE" }}>
                            <img src={discount} alt="Rectangle3" />
                            <div>
                                <h2 className='py-2'>Hurry Up!</h2>
                                <h2 className='py-2'>75% OFF</h2>
                                <h3 className='py-2'>Sale</h3>
                            </div>
                            <button className="btn btn-lg" style={{ border: "1px solid white", width: "170px", color: "white" }}>View all</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='policy mb-5 w-100'>
                <div className='container'>
                    <div className="row mt-2 text-center" >
                        <div className="col-sm-12 col-md-6 col-lg-3" >
                            <div className="Card borderRight mt-5 pb-3">
                                <img src={logo1} alt="logo1" />
                            </div>
                            <h5>7 Days Return</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3" >
                            <div className="Card borderRight mt-5 pb-3">
                                <img src={logo2} alt="logo1" />
                            </div>
                            <h5>Quality Products</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3" >
                            <div className="Card borderRight mt-5 pb-3">
                                <img src={logo3} alt="logo1" />
                            </div>
                            <h5>Safe Payment</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3" >
                            <div className="Card mt-5 pb-3">
                                <img src={logo4} alt="logo1" />
                            </div>
                            <h5>24x7 Helpline</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container Subscribe mb-5 text-center w-100'>
                <div className='py-5 w-50%'>
                    <h2>Subscribe to get updates on exciting offers<br />
                        & deals</h2>
                </div>
                <div>
                    <input className='SubscribeInput' type="test" placeholder='Enter your email' />
                    <button className="SubscribeBtn" type="submit">Subscribe</button>
                </div>
            </div>

        </section>
    )
}
