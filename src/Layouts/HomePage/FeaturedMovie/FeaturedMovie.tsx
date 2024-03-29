"use client";
import Items from "@/Component/Items/Items";
import { getListMoviePageDetail } from "@/Services/moviesServices";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

type modified = {
  time: string;
};
interface isFeatureMovie {
  modified: modified;
  name: string;
  origin_name: string;
  poster_url: string;
  slug: string;
  thumb_url: string;
  year: number;
  _id: string;
}
export default function FeaturedMovie({}: Props) {
  
  const [movieList, setMovieList] = useState<isFeatureMovie[]>([]);
  
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/xem-chi-tiet");
  };
  useEffect(() => {
    getListMoviePageDetail()
      .then((res) => {
        setMovieList(res.data.items);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  const renderFeatureMovie = () => {
    return movieList.slice(8, 13).map((item: isFeatureMovie) => {
      return (
        <Items
          key={item._id}
          thumb_url={item.thumb_url}
          name={item.name}
          year={item.year}
          slug={item.slug}
        />
      );
    });
  };
  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold text-xl px-2 h-full border-solid border-l-[3px] border-l-white">
          Phim mới nổi bật
        </h2>
        <button
          onClick={handleNavigate}
          className="text-white font-semibold text-sm p-2 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl  focus:outline-none   hover:transition-all hover:opacity-90 rounded-lg  text-center "
        >
          Xem thêm
        </button>
      </div>
      <div className="pt-5 pb-3 grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 md:gap-1 lg:gap-2 gap-1">
        {renderFeatureMovie()}
      </div>
    </div>
  );
}
