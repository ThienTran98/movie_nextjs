"use client";
import { DataNavBar } from "@/FetchData/DataNavBar/DataNavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoYoutube,
} from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";

type Props = {};

const renderSubListMovie = () => {
  return DataNavBar.map((item, index) => {
    if (item.subList) {
      return item.subList.slice(0, 6).map((_item, _index) => {
        return (
          <li
            key={_index}
            className="hover:opacity-80 hover:transition-all hover:text-white leading-9"
          >
            <Link href={_item.path}>{_item.title}</Link>
          </li>
        );
      });
    }
  });
};
const renderSubListCountry = () => {
  return DataNavBar.map((item, index) => {
    if (item.subListCountry) {
      return item.subListCountry.slice(0, 6).map((_item, _index) => {
        return (
          <li
            key={_index}
            className="hover:opacity-80 hover:transition-all hover:text-white leading-9"
          >
            <Link href={_item.path}>{_item.title}</Link>
          </li>
        );
      });
    }
  });
};
export default function Footer({}: Props) {
  return (
    <div className="pt-2 px-2 md:px-8 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 border-y border-solid border-y-rose-800 py-8 ">
        <div>
          <Image
            src="/img/logo-ophim-6.png"
            width={120}
            height={80}
            alt="logo"
          />
          <h2 className="text-white font-medium leading-7 py-4 text-justify">
            OPhim.TV - Trang xem phim Online với giao diện mới được bố trí và
            thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các
            website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className=" font-medium text-blue-500">
            <h2 className="text-xl font-bold text-white">Phim mới</h2>
            <ul className=" mt-3 ">{renderSubListMovie()}</ul>
          </div>
          <div className=" font-medium text-blue-500">
            <h2 className="text-xl font-bold text-white">Phim hay</h2>
            <ul className=" mt-3 ">{renderSubListCountry()}</ul>
          </div>
          <div className=" font-medium text-blue-500">
            <h2 className="text-xl font-bold text-white">Thông tin </h2>
            <ul className=" mt-3 ">
              <li className="hover:opacity-80 hover:transition-all hover:text-white leading-9">
                <Link href="#">Giới thiệu</Link>
              </li>
              <li className="hover:opacity-80 hover:transition-all hover:text-white leading-9">
                <Link href="#">Liên hệ chúng tôi</Link>
              </li>
              <li className="hover:opacity-80 hover:transition-all hover:text-white leading-9">
                <Link href="#">Điều khoản sử dụng</Link>
              </li>
              <li className="hover:opacity-80 hover:transition-all hover:text-white leading-9">
                <Link href="#">Chính sách riêng tư</Link>
              </li>
              <li className="hover:opacity-80 hover:transition-all hover:text-white leading-9">
                <Link href="#">Khiếu nại bản quyền</Link>
              </li>
              <li className="hover:opacity-80 hover:transition-all hover:text-white leading-9">
                <Link href="#"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-3 flex items-center justify-between px-10">
        <h2 className="text-white font-medium">© OPhim.TV</h2>
        <div className="items-center flex">
          <Link href="#" className="text-2xl">
            <BsFacebook className="text-white hover:text-purple-800 ml-3" />
          </Link>
          <Link href="#" className="text-2xl">
            <BiLogoTelegram className="text-white hover:text-purple-800 ml-3" />
          </Link>
          <Link href="#" className="text-2xl">
            <BiLogoGmail className="text-white hover:text-purple-800 ml-3" />
          </Link>
          <Link href="#" className="text-2xl">
            <BiLogoYoutube className="text-white hover:text-purple-800 ml-3" />
          </Link>
          <Link href="#" className="text-2xl">
            <BiLogoInstagram className="text-white hover:text-purple-800 ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
