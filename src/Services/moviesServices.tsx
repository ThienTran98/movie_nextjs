import { instance } from "./configURL";

export const getListMovieAll = () => {
  return instance.get(`/danh-sach/phim-moi-cap-nhat`);
};
export const getListMovieAllOfPages = (page: number) => {
  return instance.get(`/danh-sach/phim-moi-cap-nhat?page=${page}`);
};

export const getListMoviePageDetail = () => {
  return instance.get(`/danh-sach/phim-moi-cap-nhat?page=${3}`);
};

export const getDetailMovie = (slug: string) => {
  return instance.get(`/phim/${slug}`);
};
