import React from 'react'
import Ellipse1 from "../Image/Ellipse/1.png"
import Ellipse2 from "../Image/Ellipse/2.png"
import Ellipse3 from "../Image/Ellipse/3.png"
import Ellipse4 from "../Image/Ellipse/4.png"
import Ellipse5 from "../Image/Ellipse/5.png"
import Ellipse6 from "../Image/Ellipse/6.png"
import img1 from "../Image/image 2.png"
import img2 from "../Image/image 3.png"
import img3 from "../Image/image 4.png"
import img4 from "../Image/image 5.png"
import img5 from "../Image/image 6.png"

var imgData = [
    {
        img: Ellipse1,
        lable: "Men’s T-Shirts",
        backgroundColor: "#F1DBE9"
    },
    {
        img: Ellipse2,
        lable: "Women’s Wear",
        backgroundColor: "#DDD3EB"
    },
    {
        img: Ellipse3,
        lable: "Winter Collections",
        backgroundColor: "#D3EAEB"
    },
    {
        img: Ellipse4,
        lable: "Hooded T-Shirts",
        backgroundColor: "#EFF1D9"
    },
    {
        img: Ellipse5,
        lable: "Polo Neck T-Shirts",
        backgroundColor: "#F1DADB"
    },
    {
        img: Ellipse6,
        lable: "Full Sleeves T-Shirts",
        backgroundColor: "#D9F1DE"
    },
]

export default function Category() {
    return (
        <section className="container ">
            <div className="row">
                {imgData.map((image) => {
                    return <div className="col-sm-6 col-md-4 col-lg-2 p-10 mt-3 text-center" >
                        <a href="#"><img src={image.img} style={image} className="rounded-circle img-fluid border" /></a>
                        <h5 className="h6 text-center mt-3 mb-3">{image.lable}</h5>
                    </div>
                })}
            </div>
            <div className='Offers mt-5'>
                <div className=''>
                    <img src={img1} alt="Image" className='pe-2 w-50' />
                    <img src={img2} alt="Image" className='ps-2 w-50' />
                </div>
                <div className='mt-3 text-center'>
                    <img src={img3} alt="Image" className='pe-2' />
                    <img src={img5} alt="Image" className='pe-2 ps-2' />
                    <img src={img4} alt="Image" className='ps-2' />
                </div>

            </div>
        </section>
    )
}
