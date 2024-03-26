import React from "react";

type Props = {};

export default function News({}: Props) {
  return (
    <div className="px-8 py-3">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold text-xl px-2 h-full border-solid border-l-[3px] border-l-white">
          Tin tức
        </h2>
        <button className="text-white font-semibold text-sm p-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  focus:outline-none   hover:transition-all hover:opacity-90 rounded-lg  text-center ">
          Xem thêm
        </button>
      </div>
      {/* <div className="pt-5 pb-3 grid grid-cols-5 gap-2">
    {renderFeatureMovie()}
  </div> */}
    </div>
  );
}
