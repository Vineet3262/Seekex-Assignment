import React from 'react'
import Rectangle18 from '../Image/Rectangle 18.png'
import Rectangle19 from '../Image/Rectangle 19.png'
import Rectangle20 from '../Image/Rectangle 20.png'
import Rectangle21 from '../Image/Rectangle 21.png'
import Rectangle22 from '../Image/Rectangle 22.png'
import Rectangle23 from '../Image/Rectangle 23.png'
import banner2 from "../Image/banner1 3.png";
import './Category2.css'

const imgData = [
    {
        img: Rectangle18,
        label: "Streetwear Collections",
        background: "#06B8A6"
    },
    {
        img: Rectangle19,
        label: "Striped T-Shirts",
        background: "#80E8FF"
    },
    {
        img: Rectangle20,
        label: "Round Neck T-Shirts",
        background: "#DC493A"
    },
    {
        img: Rectangle21,
        label: "Printed T-Shirts",
        background: "#D7B2FF"
    },
    {
        img: Rectangle22,
        label: "Oversized T-Shirts",
        background: "#F0BC8C"
    },
    {
        img: Rectangle23,
        label: "Half Sleeves T-Shirts",
        background: "#4392F1"
    }
]

export default function Category2() {
    return (
        <section>
            <div className="container mb-5 ">
                <div className="row mt-2 text-center">
                    {imgData.map((image) => {
                        return <div className="col-12 col-md-4 mb-4">
                            <div className="Card Catogery-Card" style={image}>
                                <img src={image.img} alt={image.label} />
                                <span>{image.label}</span>
                                <div className='CatogeryName'>

                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <img src={banner2} alt="Banner 2" className='mb-5 w-100' />
        </section>
    )
}
