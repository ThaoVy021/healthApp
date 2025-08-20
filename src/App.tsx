import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import Header from "./component/common/header"
import Home from "./pages/home"
import Footer from "./component/common/footer"
import Profile from "./pages/profile"
import Challenge from "./pages/challenge"
import Notice from "./pages/notice"

export default function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-rows-[64px_1fr_56px] h-dvh">
        <Header />
        <div className="flex-1 bg-white ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
