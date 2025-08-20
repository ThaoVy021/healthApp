import { Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import { Badge } from "antd"
import logo from "../../../assets/logo.svg"
import OpenMenu from "../../../assets/icons/icon_menu.svg"
import Profile from "../../../assets/icons/グループ 139.svg"
import Challenge from "../../../assets/icons/グループ 25.svg"
import Notice from "../../../assets/icons/パス 30.svg"
import "../../../App.scss"

const menuItems = [
  { label: "自分の記録", icon: Profile, path: "/profile" },
  { label: "チャレンジ", icon: Challenge, path: "/challenge" },
  { label: "お知らせ", icon: Notice, path: "/notice" },
]

export default function Header() {
  const location = useLocation()
  const { pathname } = location

  return (
    <header className="sticky top-0 z-[1000] w-full h-[64px] flex justify-between items-center bg-[#414141] shadow-md">
      <div className="layout-container flex justify-between items-center gap-4">
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
            className="flex items-center gap-2 bg-transparent custom-ant-menu"
          >
            {menuItems.map((item) => {
              return (
                <Menu.Item key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex justify-center items-center gap-2 w-[128px] text-sm uppercase font-medium`}
                  >
                    {item.icon &&
                      (item.path === "/notice" ? (
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
                            alt="Logo"
                            className="h-[32px] w-[32px] object-contain"
                          />
                        </Badge>
                      ) : (
                        <img
                          src={item.icon}
                          alt="Logo"
                          className="h-[32px] w-[32px] object-contain"
                        />
                      ))}
                    {item.label}
                  </Link>
                </Menu.Item>
              )
            })}
          </Menu>

          <img
            src={OpenMenu}
            alt="Open menu"
            className="min-w-6 w-6 min-h-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </header>
  )
}
