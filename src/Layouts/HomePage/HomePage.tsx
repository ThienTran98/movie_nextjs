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

      <Suspense fallback={""}>
        <Banner />
      </Suspense>
      <Suspense fallback={""}>
        <FeaturedMovie />
      </Suspense>
      <Suspense fallback={""}>
        <MovieTheaters />
      </Suspense>
      <Suspense fallback={""}>
        <SeriesMovie />
      </Suspense>
      <Suspense fallback={""}>
        <SingleMovie />
      </Suspense>
      <Suspense fallback={""}>
        <News />
      </Suspense>

      <Footer />
    </div>
  );
}
