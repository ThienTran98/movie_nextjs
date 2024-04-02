import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import Items from "@/Component/Items/Items";
import { getDetailMovie, getListMovieAll } from "@/Services/moviesServices";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

type isParams = {
  params: string;
};

export default function SearchParams({}: Props) {
  const [name, setName] = useState<string>("");
  const [thumbUrl, setThumbUrl] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [slug, setSlug] = useState<string>("");
  const params = useParams<isParams>();
  const valueSearch = params?.params;

  useEffect(() => {
    getDetailMovie(valueSearch)
      .then((res) => {
        setName(res.data.movie.name);
        setThumbUrl(res.data.movie.thumb_url);
        setId(res.data.movie._id);
        setYear(res.data.movie.year);
        setSlug(res.data.movie.slug);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [valueSearch]);

  return (
    <div>
      <Header />
      <div>
        <h3 className="text-center font-medium text-white mt-5">
          Từ khóa tìm kiếm : {valueSearch}
        </h3>

        <div className="py-10">
          <div className=" flex items-center justify-center">
            <Items
              id={id}
              thumb_url={thumbUrl}
              name={name}
              year={year}
              slug={slug}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
