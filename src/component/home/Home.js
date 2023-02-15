import React from 'react'
import styles from '../home/Home.module.scss'
import Slider from "react-slick";
import {bannerInfo} from "../../config"
import {about} from "../../config"
import { aboutImg } from "../../config";
import {serviceHeading} from "../../config";
import { serviceInfo } from "../../config";
import {hero} from "../../config"
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
function Home() {
  document.title= "Bharat Welfare - Home"

  const settings = {dots: false,infinite: true,speed: 500,slidesToShow: 4,slidesToScroll: 1,initialSlide: 0,autoplay:true,autoplaySpeed:2000,
    responsive: [
      {breakpoint: 1024,settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true,}, },
      {breakpoint: 600,settings: {slidesToShow: 2,slidesToScroll: 2,initialSlide: 2,}, },
      { breakpoint: 480, settings: {slidesToShow: 1,slidesToScroll: 1, },},
    ],
  };

  return (
    <div>
      {/* This is Banner of site */}
      <section className={` ${styles.banner}`}>
        <div className="container mx-auto">
          <div className={`${"text-center"} ${styles.info}`}>
            <Zoom >
              <h3>{bannerInfo.semiHead}</h3>
              <h1>{bannerInfo.head}</h1>
              <p>{bannerInfo.pera}</p>
              <button>{bannerInfo.btn}</button>
            </Zoom>
          </div>
        </div>
      </section>

      {/* This is About Section */}
      <section className={`${"py-20"} ${styles.about}`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center  ">
            <Fade left>
              <div className={styles.imges}>
                <img src={aboutImg.imgUrl} alt="" />
              </div>
            </Fade>
            <div className={styles.info_wrap}>
              {about.map((ele) => (
                <div>
                  <h1>{ele.heding}</h1>
                  <h2>{ele.info}</h2>
                  <h3>{ele.head}</h3>
                  <p>{ele.pra}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* This is  Service */}
      <section className={styles.service}>
        <div className="container mx-auto">
          <div className={styles.heading}>
            <h1>{serviceHeading}</h1>
          </div>
          <Slider {...settings}>
            {serviceInfo.map((ele) => {
              return (
                <div>
                  <Zoom>
                    <div className={styles.items}>
                      <img src={ele.imgUrl} alt="" />
                      <div className={styles.info}>
                        <h3>{ele.name}</h3>
                        <p>{ele.prea}</p>
                      </div>
                    </div>
                  </Zoom>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* This is Hero  Section*/}
      <section className={styles.hero}>
        <div className="container mx-auto">
          <div className={styles.info}>
            <h1>{hero.name}</h1>
            <p>{hero.pera}</p>
            <button>{hero.btn}</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
