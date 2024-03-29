"use client";
import Header from "@/Component/Header/Header";
import React, { Suspense } from "react";
import FeaturedMovie from "./FeaturedMovie/FeaturedMovie";
import Footer from "@/Component/Footer/Footer";
import Banner from "./Banner/Banner";
import MovieTheaters from "./MovieTheaters/MovieTheaters";
import SeriesMovie from "./SeriesMovie/SeriesMovie";
import SingleMovie from "./SingleMovie/SingleMovie";
import News from "./News/News";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="">
      <Header />

      <Banner />

      <FeaturedMovie />

      <MovieTheaters />

      <SeriesMovie />

      <SingleMovie />

      <News />

      <Footer />
    </div>
  );
}
