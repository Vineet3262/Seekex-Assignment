import React from 'react'
import './MainSection.css'
import Rectangle3 from '../Image/Rectangle 3.png'
import Rectangle4 from '../Image/Rectangle 4.png'
import Rectangle5 from '../Image/Rectangle 5.png'
import Rectangle6 from '../Image/Rectangle 6.png'
import banner1 from "../Image/banner1 2.png"

const imgData = [
    {
        img: Rectangle3,
        lable: 'Image 1',
    },
    {
        img: Rectangle4,
        lable: 'Image 2',
    },
    {
        img: Rectangle5,
        lable: 'Image 3',
    },
    {
        img: Rectangle6,
        lable: 'Image 4',
    }
]

export default function MainSection() {
    return (
        <section className="">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Trending T-Shirts</h1>
                    </div>
                </div>
                <div className="row mt-2">
                    {imgData.map(image => {
                        return <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                            <div className="Card-Img text-center">
                                <img src={image.img} alt={image.lable} loading="lazy" />
                                <div className='hoverDiv'>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-heart"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-cart-arrow-down"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-share-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p>Men Henley Neck<br />
                                    Full Sleeve Red Wine</p>
                                <h5><i className="fa fa-sm fa-inr" aria-hidden="true" /><span>399</span> <sub className='text-decoration-line-through' style={{ color: "red", marginBottom: "4px", marginLeft: "5px" }}><i className="fa fa-xs fa-inr " aria-hidden="true" />888</sub></h5>
                                <div className='SizeBtn'>
                                    <a className="btn btn-sm me-2 border rounded-0" >S</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >M</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >L</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >XL</a>
                                    <a className="btn btn-sm border rounded-0">XXL</a>
                                </div>
                            </div>
                        </div>
                    })}
                    {imgData.map(image => {
                        return <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                            <div className="Card-Img text-center">
                                <img src={image.img} alt={image.lable} />
                                <div className='hoverDiv'>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-heart"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-cart-arrow-down"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-user"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p>Men Henley Neck<br />
                                    Full Sleeve Red Wine</p>
                                <h5><i className="fa fa-sm fa-inr" aria-hidden="true" /><span>399</span> <sub className='text-decoration-line-through' style={{ color: "red", marginBottom: "4px", marginLeft: "5px" }}><i className="fa fa-xs fa-inr " aria-hidden="true" />888</sub></h5>
                                <div className='SizeBtn'>
                                    <a className="btn btn-sm me-2 border rounded-0" >S</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >M</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >L</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >XL</a>
                                    <a className="btn btn-sm border rounded-0">XXL</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className=' w-100 text-center mt-5'>
                    <button className="btn btn-lg rounded-0 ViewAllBtn" >View all</button>
                </div>
            </div>
            <div className="container mb-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Featured Products</h1>
                    </div>
                </div>
                <div className="row mt-2">
                    {imgData.map(image => {
                        return <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                            <div className="Card-Img text-center">
                                <img src={image.img} alt={image.lable} />
                                <div className='hoverDiv'>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-heart"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-cart-arrow-down"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-user"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p>Men Henley Neck<br />
                                    Full Sleeve Red Wine</p>
                                <h5><i className="fa fa-sm fa-inr" aria-hidden="true" /><span>399</span> <sub className='text-decoration-line-through' style={{ color: "red", marginBottom: "4px", marginLeft: "5px" }}><i className="fa fa-xs fa-inr " aria-hidden="true" />888</sub></h5>
                                <div className='SizeBtn'>
                                    <a className="btn btn-sm me-2 border rounded-0" >S</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >M</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >L</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >XL</a>
                                    <a className="btn btn-sm border rounded-0">XXL</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className=' w-100 text-center mt-5'>
                    <button className="btn btn-lg rounded-0 ViewAllBtn">View all</button>
                </div>
            </div>
            <img src={banner1} alt="Bannar1" className='mb-5 w-100' />
            <div className="container mb-5 ">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">New Products</h1>
                    </div>
                </div>
                <div className="row mt-2">
                    {imgData.map(image => {
                        return <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                            <div className="Card-Img text-center">
                                <img src={image.img} alt={image.lable} />
                                <div className='hoverDiv'>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-heart"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-cart-arrow-down"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-user"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p>Men Henley Neck<br />
                                    Full Sleeve Red Wine</p>
                                <h5><i className="fa fa-sm fa-inr" aria-hidden="true" /><span>399</span> <sub className='text-decoration-line-through' style={{ color: "red", marginBottom: "4px", marginLeft: "5px" }}><i className="fa fa-xs fa-inr " aria-hidden="true" />888</sub></h5>
                                <div className='SizeBtn'>
                                    <a className="btn btn-sm me-2 border rounded-0" >S</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >M</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >L</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >XL</a>
                                    <a className="btn btn-sm border rounded-0">XXL</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className=' w-100 text-center mt-5'>
                    <button className="btn btn-lg rounded-0 ViewAllBtn">View all</button>
                </div>
            </div>
            <div className="container mb-5 ">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Best Selling Products</h1>
                    </div>
                </div>
                <div className="row mt-2">
                    {imgData.map(image => {
                        return <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
                            <div className="Card-Img text-center">
                                <img src={image.img} alt={image.lable} />
                                <div className='hoverDiv'>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-heart"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light m-1 p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-cart-arrow-down"></i>
                                    </a>
                                    <a className="nav-icon position-relative bg-light p-3 border text-decoration-none rounded-circle" href="#">
                                        <i className="fa fa-fw fa-user"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p>Men Henley Neck<br />
                                    Full Sleeve Red Wine</p>
                                <h5><i className="fa fa-sm fa-inr" aria-hidden="true" /><span>399</span> <sub className='text-decoration-line-through' style={{ color: "red", marginBottom: "4px", marginLeft: "5px" }}><i className="fa fa-xs fa-inr " aria-hidden="true" />888</sub></h5>
                                <div className='SizeBtn'>
                                    <a className="btn btn-sm me-2 border rounded-0" >S</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >M</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >L</a>
                                    <a className="btn btn-sm me-2 border rounded-0" >XL</a>
                                    <a className="btn btn-sm border rounded-0">XXL</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className=' w-100 text-center mt-5'>
                    <button className="btn btn-lg rounded-0 ViewAllBtn">View all</button>
                </div>
            </div>
        </section >
    )
}
