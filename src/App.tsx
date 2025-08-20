import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.scss"
import Header from "./component/common/header"
import Home from "./pages/home"
import Footer from "./component/common/footer"
import Profile from "./pages/profile"
import Challenge from "./pages/challenge"
import Notice from "./pages/notice"
import Columns from "./pages/columns"
import Weight from "./pages/weight"
import Goals from "./pages/goals"
import Courses from "./pages/courses"
import Settings from "./pages/settings"

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
            <Route path="/columns" element={<Columns />} />
            <Route path="/weight" element={<Weight />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
