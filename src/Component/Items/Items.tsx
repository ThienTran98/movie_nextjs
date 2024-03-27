import React from "react";
import { BiPlayCircle } from "react-icons/bi";
import styles from "./Items.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id?: string;
  thumb_url: string;
  name: string;
  year: number;
  slug: string;
};

export default function Items({ id, thumb_url, name, year, slug }: Props) {
  return (
    <div>
      <div
        className={`pr-1 ${styles["items_container"]} relative rounded-md hover:cursor-pointer hover:scale-90 hover:delay-100 hover:duration-300 hover:ease-linear`}
      >
        <img
          src={`http://img.ophim1.com/uploads/movies/${thumb_url}`}
          alt={name}
          className="w-full h-[360px] rounded-md  object-cover"
        />
        <div className={`absolute  left-0 bottom-0 px-5 font-bold text-white`}>
          <h2 className="text-start leading-7">{name}</h2>
          <p className="text-start leading-7">{year}</p>
        </div>
        <div
          className={`absolute  right-1 bottom-0 font-medium text-white bg-blue-500 rounded-br-md`}
        >
          <h2 className="text-end px-1 py-2 text-sm">HD VIETSUB</h2>
        </div>
        <div
          className={`absolute top-0 right-1 left-0 bottom-0 bg-black/[0.3] hidden  items-center justify-center rounded-md ${styles["items_container-button"]} `}
        >
          <Link
            href={`/xem-chi-tiet/${slug}`}
            className="w-full h-full flex items-center justify-center"
          >
            <BiPlayCircle
              className={`w-14 h-14 hover:text-orange-600 text-white hover:transition-all ${styles["items_button-icon"]} opacity-0`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
