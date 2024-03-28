import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import { getListMovieAll } from "@/Services/moviesServices";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

type isParams = {
  params: string;
};

type modified = {
  time: string;
};
type isItems = {
  modified: modified;
  name: string;
  origin_name: string;
  poster_url: string;

  slug: string;

  thumb_url: string;

  year: number;
  _id: string;
};

interface isListMovie {
  items: isItems[];
  pagination?: string;
  pathImage?: string;
  status: boolean;
}
export default function SearchParams({}: Props) {
  const [listMovie, setListMovie] = useState<Partial<isListMovie>>({});

  useEffect(() => {
    getListMovieAll()
      .then((res) => {
        setListMovie(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  const params = useParams<isParams>();
  const valueSearch = params?.params;

  const listSearchMovie = listMovie?.items?.filter((movie) => {
    return movie.name.toLowerCase().includes(valueSearch.toLowerCase());
  });
  return (
    <div>
      <Header />
      <div>
        <h3 className="text-center font-medium text-white">
          Từ khóa tìm kiếm : {valueSearch}
        </h3>
      </div>
      <Footer />
    </div>
  );
}
