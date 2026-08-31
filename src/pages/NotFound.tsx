import { Link } from "react-router"
import { Home as HomeIcon, LifeBuoy } from "lucide-react"
import { BTN, BTN_SIZE } from "../lib/ui"

export default function NotFound() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center px-6 py-24 text-center">
        <span className="font-display text-[clamp(4rem,12vw,8rem)] font-bold leading-none tracking-tight text-navy-050">
          404
        </span>
        <h1 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-tight">
          Không tìm thấy trang bạn cần
        </h1>
        <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
          Trang có thể đã được di chuyển hoặc không còn tồn tại. Bạn có thể quay về trang chủ hoặc liên hệ hỗ trợ.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/" className={`${BTN.primary} ${BTN_SIZE.lg}`}>
            <HomeIcon className="h-4 w-4" /> Về trang chủ
          </Link>
          <Link to="/ho-tro" className={`${BTN.secondary} ${BTN_SIZE.lg}`}>
            <LifeBuoy className="h-4 w-4" /> Liên hệ hỗ trợ
          </Link>
        </div>
      </div>
    </section>
  )
}
