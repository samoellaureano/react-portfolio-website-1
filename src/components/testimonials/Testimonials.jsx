import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";


const data = [
    {
        avatar: AVTR1,
        name: "John Doe",
        review: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae unde corrupti odit voluptates tempore illum fuga minus placeat ipsa modi, facilis quibusdam recusandae fugit ad eaque quam labore repellat omnis."
    },
    {
        avatar: AVTR2,
        name: "John Doe",
        review: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae unde corrupti odit voluptates tempore illum fuga minus placeat ipsa modi, facilis quibusdam recusandae fugit ad eaque quam labore repellat omnis."
    },
    {
        avatar: AVTR3,
        name: "John Doe",
        review: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae unde corrupti odit voluptates tempore illum fuga minus placeat ipsa modi, facilis quibusdam recusandae fugit ad eaque quam labore repellat omnis."
    },
    {
        avatar: AVTR4,
        name: "John Doe",
        review: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae unde corrupti odit voluptates tempore illum fuga minus placeat ipsa modi, facilis quibusdam recusandae fugit ad eaque quam labore repellat omnis."
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;