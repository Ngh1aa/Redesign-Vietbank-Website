import { createBrowserRouter } from "react-router"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import CaNhan from "./pages/CaNhan"
import DoanhNghiep from "./pages/DoanhNghiep"
import NganHangSo from "./pages/NganHangSo"
import The from "./pages/The"
import HoTro from "./pages/HoTro"
import VeVietbank from "./pages/VeVietbank"
import NhaDauTu from "./pages/NhaDauTu"
import NotFound from "./pages/NotFound"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "ca-nhan", Component: CaNhan },
      { path: "doanh-nghiep", Component: DoanhNghiep },
      { path: "ngan-hang-so", Component: NganHangSo },
      { path: "the", Component: The },
      { path: "ho-tro", Component: HoTro },
      { path: "ve-vietbank", Component: VeVietbank },
      { path: "nha-dau-tu", Component: NhaDauTu },
      { path: "*", Component: NotFound },
    ],
  },
])
