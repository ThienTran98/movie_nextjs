"use client";
import { getListMovieAll } from "@/Services/moviesServices";
import React, { Fragment, useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Items from "@/Component/Items/Items";

type Props = {};
type modified = {
  time: string;
};
interface IsBanner {
  modified: modified;
  name: string;
  origin_name: string;
  poster_url: string;
  slug: string;
  thumb_url: string;
  year: number;
  _id: string;
}
export default function Banner({}: Props) {
  const [banner, setBanner] = useState<IsBanner[]>([]);

  useEffect(() => {
    getListMovieAll()
      .then((res) => {
        setBanner(res.data.items);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplaySpeed: 3000,
    autoplay: true,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
          speed: 1000,
          initialSlide: 0,
          autoplaySpeed: 3000,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          infinite: true,
          speed: 1000,

          autoplaySpeed: 3000,
          autoplay: true,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          speed: 1000,
          initialSlide: 0,
          autoplaySpeed: 3000,
          autoplay: true,
          cssEase: "linear",
        },
      },
    ],
  };
  const renderBanner = () => {
    return banner.map((item: IsBanner, index) => {
      return (
        <Items
          thumb_url={item.thumb_url}
          name={item.name}
          year={item.year}
          slug={item.slug}
        />
      );
    });
  };
  return (
    <Fragment>
      <div className="bg-[#1e293b] py-4">
        <div className="w-4/5 h-px bg-red-500 mx-auto "></div>
      </div>
      <div className="slider-container pt-5 pb-3 bg-[#1e293b] px-8">
        <Slider {...settings}>{renderBanner()}</Slider>
      </div>
    </Fragment>
  );
}
