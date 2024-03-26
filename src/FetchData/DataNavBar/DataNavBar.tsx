type isSubList = {
  id: number;
  path: string;
  title: string;
};
type isSubListCountry = {
  id: number;
  path: string;
  title: string;
};

interface isDataNavBar {
  id: number;
  path?: string;
  title: string;
  subList?: isSubList[];
  subListCountry?: isSubListCountry[];
}

export const DataNavBar: Array<isDataNavBar> = [
  { id: 1, path: "/phim-bo", title: "Phim Bộ" },
  { id: 2, path: "/phim-le", title: "Phim Lẻ" },
  { id: 3, path: "/tv-shows", title: "Shows" },
  { id: 4, path: "/hoat-hinh", title: "Hoạt Hình" },
  {
    id: 5,
    path: "",
    title: "Thể Loại",
    subList: [
      {
        id: 1,
        path: "/hanh-dong",
        title: "Hành Động",
      },
      {
        id: 2,
        path: "/co-trang",
        title: "Cổ Trang",
      },
      {
        id: 3,
        path: "/chien-tranh",
        title: "Chiến Tranh",
      },
      {
        id: 4,
        path: "/vien-tuong",
        title: "Viễn Tưởng",
      },
      {
        id: 5,
        path: "/kinh-di",
        title: "Kinh Dị",
      },
      {
        id: 6,
        path: "/tinh-cam",
        title: "Tình Cảm",
      },
      {
        id: 7,
        path: "/tam-ly",
        title: "Tâm Lý",
      },
      {
        id: 8,
        path: "/the-thao",
        title: "Thể Thao",
      },
      {
        id: 9,
        path: "/phieu-luu",
        title: "Phiêu Lưu",
      },
      {
        id: 10,
        path: "/am-nhac",
        title: "Âm Nhạc",
      },
      {
        id: 11,
        path: "/hai-huoc",
        title: "Hài Hước",
      },
      {
        id: 12,
        path: "/hinh-su",
        title: "Hình Sự",
      },
      {
        id: 13,
        path: "/vo-thuat",
        title: "Võ Thuật",
      },
      {
        id: 14,
        path: "/khoa-hoc",
        title: "Khoa Học",
      },
      {
        id: 15,
        path: "/than-thoai",
        title: "Thần Thoại",
      },
    ],
  },
  {
    id: 6,
    path: "",
    title: "Quốc Gia",
    subListCountry: [
      {
        id: 1,
        path: "/trung-quoc",
        title: "Trung Quốc",
      },
      {
        id: 2,
        path: "/han-quoc",
        title: "Hàn Quốc",
      },
      {
        id: 3,
        path: "/nhat-ban",
        title: "Nhật Bản",
      },
      {
        id: 4,
        path: "/vien-tuong",
        title: "Thái Lan",
      },
      {
        id: 5,
        path: "/au-my",
        title: "Âu Mỹ",
      },
      {
        id: 6,
        path: "/dai-loan",
        title: "Đài Loan",
      },
      {
        id: 7,
        path: "/hong-kong",
        title: "Hồng Kông",
      },
      {
        id: 8,
        path: "/an-do",
        title: "Ấn Độ",
      },
      {
        id: 9,
        path: "/anh",
        title: "Anh",
      },
      {
        id: 10,
        path: "/phap",
        title: "Pháp",
      },
      {
        id: 11,
        path: "/canada",
        title: "Canada",
      },
      {
        id: 12,
        path: "/duc",
        title: "Đức",
      },
      {
        id: 13,
        path: "/tay-ban-nha",
        title: "Tây Ban Nha",
      },
      {
        id: 14,
        path: "/tho-nhi-ky",
        title: "Thổ Nhĩ Kỳ",
      },
      {
        id: 15,
        path: "/quoc-gia-khac",
        title: "Quốc Gia Khác",
      },
    ],
  },
  { id: 6, path: "/phim-bo", title: "Sắp Chiếu" },
];
