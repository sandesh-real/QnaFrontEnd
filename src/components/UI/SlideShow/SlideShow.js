import classes from './SlideShow.module.css';
import React from 'react';
import Slider from "react-slick";

 
import img1 from '../../../Assets/images/1.jpg';
import img2 from '../../../Assets/images/2.jpg';
import img3 from '../../../Assets/images/3.jpg';
  const slideImages=[
    img1,
    img2,
    img3
  ] 
  const Slideshow=props=> {

      var settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:6000
      
      };
      return (
        <Slider {...settings}>
          <div className={classes.imgContainer}>
            <img src={slideImages[0]} alt="haha"/>
            {/* <h2>Question</h2> */}
          </div>
          <div className={classes.imgContainer}>
          <img src={slideImages[1]} alt="haha"/>
          {/* <h2>Question</h2> */}
          </div>
          <div  className={classes.imgContainer}>
          <img src={slideImages[2]} alt="haha"/>
          {/* <h2>Any Doubt Related to your Academic Subject ?, Ask Us  </h2> */}
          </div>
         
        </Slider>
      );
    }
  
export default Slideshow;