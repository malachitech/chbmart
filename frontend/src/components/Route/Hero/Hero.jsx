import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-cover bg-center bg-no-repeat bg-center bg-[url(https://images.unsplash.com/photo-1648550443002-c84f673d62d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-blend-darken ${styles.noramlFlex}`}
    // style={{
    //   backgroundImage:
    //     "https://cdn.create.vista.com/api/media/medium/338515582/stock-photo-top-view-sex-toys-black-textile-background?token=",
    // }}
    >
      <div className={`${styles.section}  w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[45px] leading-[1.2] 800px:text-[60px] 1200px:text-[80px] text-[#ffffff] font-[700] capitalize`}
        >
          Best Collection Of <br /> Sex Toys
        </h1>
        <p className="pt-5 text-[16px] 800px:text-[16px] 1200px:text-[20px] font-[400] text-[#ffffff]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
