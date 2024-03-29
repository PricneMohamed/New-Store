import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "./Slider";
import { Link } from "react-router-dom";
export default function Home() {
  const [index, setindex] = useState(0);
  useEffect(() => {
    document.body.title = "Prince Store";
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scrolling);

    return () => window.removeEventListener("scroll", scrolling);
  });
  const scrolling = () => {
    if (window.scrollY >= 600) {
      document.querySelector(".s2").style.transform = "translate(0)";
      document.querySelector(".s2").style.transition = "0.4s";
    }
  };
  const wordTitle = "Welcome in Our Website";
  useEffect(() => {
    const interval = setInterval(() => {
      setindex((i) => i + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const compeleted = () => {
    return `${wordTitle.slice(0, index)} |`;
  };
  return (
    <div className="Home">
      <div className="s1 h-[100vh] flex items-center flex-col text-white">
        <h1
          className="lg:text-[40px] md:text-[35px] p-2 sm:text-[30px] text-[20px]
        mt-32
        font-bold tracking-[3px]
        "
        >
          {compeleted()}
        </h1>
        <h2
          className="w-[90%] mt-10 lg:text-[35px] md:text-[30px]
        sm:text-[25px]
        text-[20px]
        "
        >
          Welcome to the wonderful world of online shopping through our
          distinguished website! Discover a unique shopping experience with our
          wide and diverse range of high-quality products that cater to all your
          needs
        </h2>
        <Link
          to={"/product"}
          className="smky-btn3 mt-16 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white"
        >
          Go Shopping
          <FontAwesomeIcon icon={faArrowRight} className="ml-5 arrow" />
        </Link>
      </div>
      <div className="s2 h-auto mt-10 flex items-center flex-col translate-y-[50%]">
        <h1 className="font-bold lg:text-[40px] md:text-[35px] p-2 sm:text-[30px] text-[20px]">
          What we offer?
        </h1>
        <hr className="border-2 border-black w-[40%]" />
        <div className="contexts2 mt-20 p-5 items-center flex justify-evenly flex-row-reverse flex-wrap">
          <img src={require("../img/Home/undraw_product_tour_re_8bai.png")} />
          <h1 className="lg:text-[35px]">
            Welcome to our wonderful online shopping destination! We are proud
            to offer a wide range of high-quality products that meet your needs
            with ease and convenience. Whether you're looking for stylish
            clothing, unique home accessories, or special gifts, we guarantee
            that you'll find everything you need here. With our easy and
            convenient website, you can save time and effort and get everything
            you want quickly and effortlessly.
          </h1>
        </div>
      </div>
      <div className="s3 h-[100vh] mt-20">
        <Slider />
      </div>
      <div
        className="s4 h-auto bg-slate-500 p-5 text-[20px] font-bold flex
      flex-wrap
      justify-evenly
      "
      >
        <Link to={"/"} className="p-4">
          Prince
        </Link>
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to={"/product"} className="p-4">
          Product
        </Link>
        <Link to={"/cart"} className="p-4">
          Cart
        </Link>
        <Link to={"/sell"} className="p-4">
          Sell
        </Link>
        <Link to={""} className="p-4">
          Contact
        </Link>
      </div>
    </div>
  );
}
