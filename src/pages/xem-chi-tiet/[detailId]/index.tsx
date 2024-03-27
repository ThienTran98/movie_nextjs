"use client";
import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";

import { getDetailMovie } from "@/Services/moviesServices";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";

type Props = {};

type detailId = {
  detailId: string;
};

type isDataSever = {
  filename: string;
  link_embed: string;
  link_m3u8: string;
  name: string;
  slug: string;
};
type isEpisodes = {
  server_data: isDataSever[];
  server_name: string;
};

type isCategory = {
  id: string;
  name: string;
  slug: string;
};

type isCountry = {
  id: string;
  name: string;
  slug: string;
};

type isCreated = {
  time: string;
};

type isModified = {
  time: string;
};
type isMovie = {
  actor: Array<string>;
  category: isCategory;
  chieurap: boolean;
  content: string;
  country: isCountry;
  created: isCreated;
  director: Array<string>;
  episode_current: string;
  episode_total: string;
  is_copyright: boolean;
  lang: string;
  modified: isModified;
  name: string;
  notify: string;
  origin_name: string;
  poster_url: string;
  quality: string;
  showtimes: string;
  slug: string;
  status: string;
  sub_docquyen: true;
  thumb_url: string;
  time: string;
  trailer_url: string;
  type: string;
  view: number;
  year: number;
  _id: string;
};
interface isDataMovie {
  episodes: isEpisodes[];
  movie: isMovie;
  msg: string;
  status: boolean;
}
export default function index({}: Props) {
  const params = useParams<detailId>();
  const [detailMovie, setDetailMovie] = useState<isDataMovie>();
  const [linkEpisoder, setLinkEpisoder] = useState<string>("");
  const [isActive, setIsActive] = useState<number>(0);
  console.log("isActive: ", isActive);
  useEffect(() => {
    if (params) {
      getDetailMovie(params?.detailId)
        .then((res) => {
          setDetailMovie(res.data);
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }
  }, [params?.detailId]);
  const handleChangeChap = (item: isDataSever, index: number) => {
    setIsActive(index);
    setLinkEpisoder(item.link_embed);
  };
  const renderButtonChapFilm = () => {
    return detailMovie?.episodes.map((item, index) => {
      return (
        <Fragment key={index}>
          <iframe
            frameBorder={0}
            width={720}
            height={400}
            src={
              linkEpisoder ? linkEpisoder : `${item.server_data[0].link_embed}`
            }
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture; web-share"
          ></iframe>
          <p className="font-medium  text-white mt-3">
            Sever <span className="mx-2">:</span>
            <button className="mx-1 px-3 py-2 bg-slate-500 rounded-md text-white hover:transition-all hover:opacity-85">
              {item.server_name}
            </button>
          </p>
          <div className="text-white font-semibold my-3">Chọn tập phim :</div>
          <div className="">
            {item.server_data.map((_item, _index) => {
              return (
                <Fragment>
                  <button
                    onClick={() => {
                      handleChangeChap(_item, _index);
                    }}
                    className={
                      isActive == _index
                        ? "px-3 py-2 text-white bg-red-400 rounded-md min-w-14 w-14 max-w-14 m-2"
                        : "px-3 py-2 text-white bg-blue-400 rounded-md min-w-14 w-14 max-w-14 m-2"
                    }
                  >
                    {_item.name}
                  </button>

                  {(_index + 1) % 12 === 0 ? <br></br> : ""}
                </Fragment>
              );
            })}
          </div>
        </Fragment>
      );
    });
  };

  return (
    <div>
      <Header />
      <div className="py-5 px-10">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center">
            <div>
              <img
                src={`${detailMovie?.movie.poster_url}`}
                alt="image"
                className="rounded-lg shadow-xl min-w-[280px] max-w-[280px]  h-[360px] object-cover"
              />
            </div>
            <div className="ml-5 text-start text-red-500 leading-7">
              <h2 className="text-white font-semibold text-2xl">
                {detailMovie?.movie.name}
              </h2>
              <p>
                Diễn viên :
                <span className="ml-1 text-white font-medium">
                  {detailMovie?.movie.actor.map((item, index) => {
                    return <span key={index}>{item},</span>;
                  })}
                </span>
              </p>
              <p>
                Năm phát hành :
                <span className="ml-1 text-white font-medium">
                  {detailMovie?.movie.year}
                </span>
              </p>
              <p>
                Lượt xem :
                <span className="ml-1 text-white font-medium">
                  {detailMovie?.movie.view}
                </span>
              </p>
              <p>
                Thời lượng :
                <span className="ml-1 text-white font-medium">
                  {detailMovie?.movie.time}
                </span>
              </p>
              <p>
                Thể loại :
                <span className="ml-1 text-white font-medium">
                  {detailMovie?.movie.lang}
                </span>
              </p>
              <p>
                Full :
                <span className="ml-1 text-white font-medium">
                  {detailMovie?.movie.episode_current}
                </span>
                <span className="mx-1">/</span>
                <span className="ml-1 text-white font-medium">
                  {detailMovie?.movie.episode_current}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>{renderButtonChapFilm()}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
