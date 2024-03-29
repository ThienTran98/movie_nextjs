import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import React from "react";

type Props = {};

export default function SeriesPage({}: Props) {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-80">
        <h2 className="text-white font-medium text-sm px-3 md:text-base md:px-0 lg:text-base lg:px-0 text-center">
          Tính năng này đang phát triển vui lòng thử lại sau 😢
        </h2>
      </div>
      <Footer />
    </div>
  );
}
