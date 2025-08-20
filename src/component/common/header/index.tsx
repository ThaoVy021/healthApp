import { Menu, Badge } from "antd"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import logo from "../../../assets/logo.svg"
import OpenMenu from "../../../assets/icons/icon_menu.svg"
import CloseMenu from "../../../assets/icons/icon_close.svg"
import Profile from "../../../assets/icons/グループ 139.svg"
import Challenge from "../../../assets/icons/グループ 25.svg"
import Notice from "../../../assets/icons/パス 30.svg"
import "../../../App.scss"

const menuItems = [
  { label: "自分の記録", icon: Profile, path: "/profile" },
  { label: "チャレンジ", icon: Challenge, path: "/challenge" },
  { label: "お知らせ", icon: Notice, path: "/notice" },
]

const mobileMenu = [
  { label: "自分の記録", path: "/profile" },
  { label: "体重グラフ", path: "/weight" },
  { label: "目標", path: "/goals" },
  { label: "選択中のコース", path: "/courses" },
  { label: "コラム一覧", path: "/columns" },
  { label: "設定", path: "/settings" },
]

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onOutside = (e: MouseEvent | TouchEvent) => {
      if (!dropRef.current) return
      if (!dropRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onOutside)
    document.addEventListener("touchstart", onOutside)
    return () => {
      document.removeEventListener("mousedown", onOutside)
      document.removeEventListener("touchstart", onOutside)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open)
    return () => document.body.classList.remove("overflow-hidden")
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-[1000] w-full h-[64px] flex justify-between items-center bg-[#414141] shadow-md">
        <div className="layout-container flex justify-between items-center gap-4 w-full">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-[40px] w-[109px] object-contain"
            />
          </Link>

          <div className="flex items-center gap-2">
            <Menu
              mode="vertical"
              selectedKeys={[pathname]}
              className="hidden md:flex items-center gap-2 bg-transparent custom-ant-menu"
            >
              {menuItems.map((item) => (
                <Menu.Item key={item.path}>
                  <Link
                    to={item.path}
                    className="flex justify-center items-center gap-2 w-[128px] text-sm uppercase font-medium"
                  >
                    {item.path === "/notice" ? (
                      <Badge
                        count={1}
                        color={"#FF963C"}
                        style={{
                          backgroundColor: "#FF963C",
                          color: "#fff",
                          boxShadow: "none",
                          border: "none",
                        }}
                      >
                        <img
                          src={item.icon}
                          alt=""
                          className="h-[32px] w-[32px] object-contain"
                        />
                      </Badge>
                    ) : (
                      <img
                        src={item.icon}
                        alt=""
                        className="h-[32px] w-[32px] object-contain"
                      />
                    )}
                    {item.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>

            {/* ICON + DROPDOWN */}
            <div ref={dropRef} className="relative">
              {/* Icon toggle: Open <-> Close */}
              <img
                src={open ? CloseMenu : OpenMenu}
                alt="toggle menu"
                className="min-w-6 w-6 min-h-6 h-6 cursor-pointer"
                onClick={() => setOpen((v) => !v)}
              />

              {/* Menu xổ xuống ngay dưới icon */}
              <div
                className={
                  "absolute right-0 top-full mt-5 w-[280px]  " +
                  "bg-[#777777] text-white shadow-xl overflow-y-auto " +
                  "transition-all duration-200 " +
                  (open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none")
                }
              >
                <nav>
                  <ul className="divide-y divide-white/15 mb-0">
                    {mobileMenu.map((m) => (
                      <li key={m.path}>
                        <Link
                          to={m.path}
                          className="block px-[32px] py-[23px] text-white hover:text-primary font-light text-[18px] leading-[26px]"
                          onClick={() => setOpen(false)}
                        >
                          {m.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
