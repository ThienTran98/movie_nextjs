import Footer from "@/Component/Footer/Footer";
import Header from "@/Component/Header/Header";
import Items from "@/Component/Items/Items";
import Loading from "@/Component/Loading/Loading";
import { getListMovieAllOfPages } from "@/Services/moviesServices";

import { Pagination } from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";

type Props = {};

type modified = {
  time: string;
};
interface IsItemsMovie {
  modified: modified;
  name: string;
  origin_name: string;
  poster_url: string;
  slug: string;
  thumb_url: string;
  year: number;
  _id: string;
}
export default function DetailPage({}: Props) {
  const [listMovieAll, setListMovieAll] = useState<IsItemsMovie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [resize, setResize] = useState<number>(1025);
  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    getListMovieAllOfPages(currentPage)
      .then((res) => {
        setListMovieAll(res.data.items);
        setTotalPages(res.data.pagination.totalPages);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [currentPage]);

  // resize
  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const renderListItemsMovie = () => {
    return listMovieAll.map((item: IsItemsMovie, index: number) => {
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
    <div>
      <Header />
      <h2 className="text-white font-bold text-xl text-center py-5 ">
        Phim mới
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {renderListItemsMovie()}
      </div>
      <div className="flex items-center justify-center text-white py-5">
        <Pagination
          count={totalPages}
          variant="outlined"
          color="secondary"
          sx={{
            "Button.MuiPaginationItem-circular.Mui-selected": {
              color: "#9c27b0",
              bgcolor: "#9c27b0",
              fontWeight: "bold",
            },
            "Button.MuiButtonBase-root.MuiPaginationItem-root": {
              bgcolor: "#fafafa",
            },
          }}
          size={resize > 1024 ? "large" : "medium"}
          page={currentPage}
          onChange={(e, page) => handleChange(e, page)}
        />
      </div>

      <Footer />
    </div>
  );
}
