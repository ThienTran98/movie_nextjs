"use client";
import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";

import { getDetailMovie, getListMovieAll } from "@/Services/moviesServices";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setListMovie } from "@/redux/movieSlice";
import moment from "moment";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
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
  country: isCountry[];
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
export default function Detail({}: Props) {
  const params = useParams<detailId>();
  const [detailMovie, setDetailMovie] = useState<isDataMovie>();
  const [linkEpisoder, setLinkEpisoder] = useState<string>("");
  const [changeSever, setChangeSever] = useState<string>("Vietsub #1");
  const [isActive, setIsActive] = useState<number>(0);
  const router = useRouter();

  const listMovieSuggest = useAppSelector((state) => {
    return state.listMoviesReducer.listMovie;
  });
  const dispatch = useAppDispatch();

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

  useEffect(() => {
    getListMovieAll()
      .then((res) => {
        dispatch(setListMovie(res.data.items));
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  const handleChangeChap = (item: isDataSever, index: number) => {
    setIsActive(index);
    setLinkEpisoder(item.link_embed);
  };
  const renderButtonChapFilm = () => {
    if (detailMovie?.episodes[0]?.server_name === changeSever) {
      return (
        <Fragment>
          <iframe
            frameBorder={0}
            className="w-full h-[400px]"
            src={
              linkEpisoder
                ? linkEpisoder
                : `${detailMovie?.episodes[0].server_data[0].link_embed}`
            }
            allowFullScreen
            //
            allow=" fullscreen;  autoplay; picture-in-picture; web-share"
          ></iframe>
          {renderServerName()}
          <div className="text-white font-semibold my-3">Chọn tập phim :</div>
          <div className="">
            {detailMovie?.episodes[0].server_data.map((_item, _index) => {
              return (
                <Fragment key={_index}>
                  <button
                    onClick={() => {
                      handleChangeChap(_item, _index);
                    }}
                    className={
                      isActive == _index
                        ? "px-3 py-2 text-white bg-red-400 rounded-md min-w-14 w-14 max-w-14 m-2 font-bold"
                        : "px-3 py-2 text-white bg-blue-400 rounded-md min-w-14 w-14 max-w-14 m-2 font-bold"
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
    } else {
      return (
        <Fragment>
          <iframe
            frameBorder={0}
            className="w-full h-[400px]"
            src={
              linkEpisoder
                ? linkEpisoder
                : `${detailMovie?.episodes[1]?.server_data[0].link_embed}`
            }
            allowFullScreen
            loading={"lazy"}
            // autoplay;
            allow="  fullscreen; picture-in-picture; web-share"
          ></iframe>
          {renderServerName()}
          <div className="text-white font-semibold my-3">Chọn tập phim :</div>
          <div className="">
            {detailMovie?.episodes[1].server_data.map((_item, _index) => {
              return (
                <Fragment key={_index}>
                  <button
                    onClick={() => {
                      handleChangeChap(_item, _index);
                    }}
                    className={
                      isActive == _index
                        ? "px-3 py-2 text-white bg-red-400 rounded-md min-w-14 w-14 max-w-14 m-2 font-bold"
                        : "px-3 py-2 text-white bg-blue-400 rounded-md min-w-14 w-14 max-w-14 m-2 font-bold"
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
    }
  };
  const renderServerName = () => {
    return (
      <p className="font-medium  text-white mt-3">
        Sever <span className="mx-2">:</span>
        {detailMovie?.episodes?.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleChangeSever(item.server_name);
              }}
              className={
                changeSever !== item.server_name
                  ? "mx-2 px-3 py-2 bg-slate-500 rounded-md text-white hover:transition-all hover:opacity-85"
                  : "mx-2 px-3 py-2 bg-red-500 rounded-md text-white hover:transition-all hover:opacity-85"
              }
            >
              {item.server_name}
            </button>
          );
        })}
      </p>
    );
  };
  const handleChangeSever = (changeSever: string) => {
    setChangeSever(changeSever);
  };

  const renderListMovieSuggest = () => {
    return listMovieSuggest.map((item, index) => {
      return (
        <div
          key={item._id}
          onClick={() => {
            handleChangePath(item.slug);
          }}
          className="flex p-2 bg-black/45 cursor-pointer hover:bg-black/70 hover:transition-all"
        >
          <div>
            <img
              src={`http://img.ophim1.com/uploads/movies/${item.poster_url}`}
              alt="poster"
              className="w-24 h-20 object-cover rounded-md"
            />
          </div>
          <div className="pl-4 md:pl-4 lg:pl-8 text-white">
            <h2 className="font-bold leading-7 text-base">{item.name}</h2>
            <p>{item.year}</p>
          </div>
        </div>
      );
    });
  };
  const handleChangePath = (item: string) => {
    router.push(`/xem-chi-tiet/${item}`);
  };
  return (
    <div>
      <Header />
      <div className="py-5 px-10">
        <div className="grid grid-cols-1 md:grid-col-1 lg:grid-cols-3">
          <div className="col-span-2">
            <div className="flex items-center ">
              <div>
                <img
                  src={`${detailMovie?.movie?.poster_url}`}
                  alt="image"
                  className="rounded-lg shadow-xl min-w-[280px] max-w-[280px]  h-[360px] object-cover"
                />
              </div>
              <div className="ml-5 text-start text-red-500 flex flex-col justify-between items-baseline leading-8">
                <h2 className="text-white font-semibold text-2xl leading-8 mb-5">
                  {detailMovie?.movie?.name}
                </h2>

                <p className="leading-9">
                  Quốc gia :
                  <span className="ml-1 text-white font-medium ">
                    {detailMovie?.movie?.country.map((item, index) => {
                      return <span key={index}>{item.name}</span>;
                    })}
                  </span>
                </p>
                <p className="leading-9">
                  Năm phát hành :
                  <span className="ml-1 text-white font-medium">
                    {detailMovie?.movie?.year}
                  </span>
                </p>
                <p className="leading-9">
                  Ngày phát hành :
                  <span className="ml-1 text-white font-medium">
                    {moment(`${detailMovie?.movie?.created.time}`).format("LL")}
                  </span>
                </p>
                <p className="leading-9">
                  Lượt xem :
                  <span className="ml-1 text-white font-medium">
                    {detailMovie?.movie?.view}
                  </span>
                </p>
                <p className="leading-9">
                  Thời lượng :
                  <span className="ml-1 text-white font-medium">
                    {detailMovie?.movie?.time}
                  </span>
                </p>
                <p className="leading-9">
                  Thể loại :
                  <span className="ml-1 text-white font-medium">
                    {detailMovie?.movie?.lang}
                  </span>
                </p>
                <p className="leading-9">
                  Full :<span className="ml-2"></span>
                  <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-3 py-2 md:px-3 md:py-2 lg:px-4 lg:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      {detailMovie?.movie?.episode_current}
                    </span>
                  </button>
                  <span className="mx-2">/</span>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-3 py-2 md:px-3 md:py-2 lg:px-4 lg:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      {detailMovie?.movie?.episode_current}
                    </span>
                  </button>
                </p>
              </div>
            </div>
            <div className="pt-8 pb-5">
              <div>{renderButtonChapFilm()}</div>
            </div>
            <div className="py-5 px-4 bg-gray-300 mt-5 rounded-md shadow-lg">
              <h2 className="text-lg font-bold underline">Nội dung phim :</h2>
              <p className="leading-7">{detailMovie?.movie?.content}</p>

              <p className="text-violet-700">
                Với các diễn viên tham gia :
                <span className="ml-1  font-semibold text-black">
                  {detailMovie?.movie?.actor.map((item, index) => {
                    return <span key={index}>{item},</span>;
                  })}
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-1 ">
            <h2 className=" mt-4 md:mt-5 lg:mt-0 lg:text-base md:text-sm text-xs font-bold px-2 py-1 text-white mb-3 border-l-2 border-solid divide-white">
              Phim đề xuất :
            </h2>
            <div
              className="h-[400px] md:h-[500px] lg:h-[700px]  overflow-y-scroll"
              id="movie_suggest"
            >
              {renderListMovieSuggest()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
