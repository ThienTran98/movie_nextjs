"use client";

import { DataNavBar } from "@/FetchData/DataNavBar/DataNavBar";
import { XMarkIcon } from "@heroicons/react/16/solid";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [isOpenSubList, setIsOpenSubList] = useState<boolean>(false);
  const [isOpenSubCountry, setIsOpenSubCountry] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();
  const [valueSearch, setValueSearch] = useState<string>("");

  const renderNavBar = () => {
    return DataNavBar.map((item, index) => {
      return (
        <li
          key={index}
          className={
            item.title === "Thể Loại" || item.title === "Quốc Gia"
              ? "mx-4 hover:text-blue-400 text-white flex items-center relative"
              : "mx-4 hover:text-blue-400 text-white"
          }
          onClick={() => {
            handleOpenModal(item.title);
          }}
        >
          <Link className=" font-bold" href={item.path ? item.path : ""}>
            {item.title}
          </Link>
          {item.title === "Thể Loại" || item.title === "Quốc Gia" ? (
            <Fragment>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 cursor-pointer ml-2 text-violet-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Fragment>
          ) : (
            <></>
          )}
          {isOpenSubList ? (
            <Fragment>
              {item.title === "Thể Loại" ? (
                <Fragment>
                  <div className="absolute z-50 top-[150%] left-[-200%] w-[360px] h-[260px] text-red-700 grid grid-cols-3 bg-[#1e293b] px-5 py-2 text-center rounded-md">
                    {item.subList?.map((i, index) => {
                      return (
                        <Link
                          href={i.path}
                          key={i.id}
                          className="hover:cursor-pointer font-semibold text-white p-2 hover:bg-blue-600 hover:rounded hover:transition-all"
                        >
                          {i.title}
                        </Link>
                      );
                    })}
                  </div>
                </Fragment>
              ) : (
                <></>
              )}
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
          {isOpenSubCountry ? (
            <Fragment>
              {item.title === "Quốc Gia" ? (
                <Fragment>
                  <div className="absolute top-[150%] left-[-200%] w-[400px] h-[260px] text-red-700 grid grid-cols-3 bg-[#1e293b] px-5 py-2 text-center rounded-md z-20">
                    {item.subListCountry?.map((i, index) => {
                      return (
                        <Link
                          href={i.path}
                          key={i.id}
                          className="hover:cursor-pointer font-semibold text-white p-2 hover:bg-blue-600 hover:rounded hover:transition-all text-center"
                        >
                          {i.title}
                        </Link>
                      );
                    })}
                  </div>
                </Fragment>
              ) : (
                <></>
              )}
            </Fragment>
          ) : (
            <></>
          )}
        </li>
      );
    });
  };

  const renderNavBarMobile = () => {
    return DataNavBar.map((item, index) => {
      return (
        <li
          key={index}
          className={`mx-4 hover:text-blue-400 text-white  text-base md:text-xl  cursor-pointer `}
        >
          <Link
            className=" font-bold block w-full h-full px-5 py-3 "
            href={item.path ? item.path : ""}
          >
            {item.title}
          </Link>
        </li>
      );
    });
  };
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
  };

  const handleChangePageSearch = () => {
    if (valueSearch) {
      router.push(`/search/${valueSearch}`);
    } else {
      return false;
    }
  };
  const handleOpenModal = (item: string) => {
    switch (item) {
      case "Thể Loại":
        setIsOpenSubList(!isOpenSubList);
        setIsOpenSubCountry(false);
        break;
      case "Quốc Gia":
        setIsOpenSubCountry(!isOpenSubCountry);
        setIsOpenSubList(false);
        break;
      default:
        return false;
        break;
    }
  };

  const handleShowNavbar = () => {
    setShow(!show);
  };
  return (
    // bg-transparent
    <div className=" bg-[#1e293b]">
      <div className="flex items-center justify-between px-6 py-8">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/img/logo-ophim-6.png"
              alt="logo"
              width={150}
              height={40}
              className="mr-4"
            />
          </Link>
          <div className="hidden md:flex lg:flex items-center px-4 py-3 border-solid border-2 rounded-3xl">
            <svg
              onClick={handleChangePageSearch}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white hover:opacity-80 hover:cursor-pointer focus:text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text "
              placeholder="Tìm kiếm phim ..."
              className="outline-none ml-2 border-slate-700 focus:text-white bg-[#1e293b] text-blue-400"
              onChange={(e) => {
                handleChangeValue(e);
              }}
            />
          </div>
        </div>
        <div className="block md:block lg:hidden" onClick={handleShowNavbar}>
          {show ? (
            <XMarkIcon className="w-12 h-12 text-white" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <ul className=" items-center hidden md:hidden lg:flex ">
          {renderNavBar()}
        </ul>
      </div>

      <div className=" bg-[#1e293b] pt-4">
        <div className="w-4/5 h-px bg-red-500 mx-auto "></div>
      </div>
      <div
        className={
          !show
            ? "bg-white/20 text-white translate-y-[-150%] hidden py-3"
            : " text-white animate-show-menu py-3 bg-gradient-to-r from-purple-500 via-purple-900 to-fuchsia-500 "
        }
      >
        <ul>
          {renderNavBarMobile()}
          <div className="px-4">
            <div className="flex md:hidden lg:hidden px-2 py-3 items-center border-solid border-2 rounded-xl">
              <svg
                onClick={handleChangePageSearch}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white hover:opacity-80 hover:cursor-pointer focus:text-blue-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text "
                placeholder="Tìm kiếm phim ..."
                className="outline-none ml-2 text-lg border-slate-700 focus:text-white py-2  text-blue-400 bg-transparent"
                onChange={(e) => {
                  handleChangeValue(e);
                }}
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
