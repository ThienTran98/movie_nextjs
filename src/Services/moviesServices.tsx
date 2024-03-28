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

export const getListMoviePage5 = () => {
  return instance.get(`/danh-sach/phim-moi-cap-nhat?page=${5}`);
};
export const getListMoviePage6 = () => {
  return instance.get(`/danh-sach/phim-moi-cap-nhat?page=${6}`);
};

export const getListMoviePage7 = () => {
  return instance.get(`/danh-sach/phim-moi-cap-nhat?page=${7}`);
};
export const getListMoviePage8 = () => {
  return instance.get(`/danh-sach/phim-moi-cap-nhat?page=${8}`);
};

export const getDetailMovie = (slug: string) => {
  return instance.get(`/phim/${slug}`);
};
