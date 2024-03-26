"use client";
import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";

import { getDetailMovie } from "@/Services/moviesServices";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
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
  server_data: isDataSever;
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
  episodes: isEpisodes;
  movie: isMovie;
  msg: string;
  status: boolean;
}
export default function index({}: Props) {
  // const { detailId } = useParams<detailId>();
  const params = useParams<detailId>();

  const [detailMovie, setDetailMovie] = useState<isDataMovie[]>([]);
  useEffect(() => {
    getDetailMovie(params?.detailId)
      .then((res) => {
        setDetailMovie(res.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="py-5">
        <div>
          <iframe
            frameBorder={0}
            width={640}
            height={360}
            src="https://vip.opstream17.com/share/f5496252609c43eb8a3d147ab9b9c006"
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
