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
import Loading from "@/Component/Loading/Loading";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="">
      <Header />
      <Suspense fallback={<Loading />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FeaturedMovie />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <MovieTheaters />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SeriesMovie />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <SingleMovie />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <News />
      </Suspense>
      <Footer />
    </div>
  );
}
