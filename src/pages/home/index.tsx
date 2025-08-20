import imageBanner from "../../assets/images/d01.jpg"
import Banner from "../../component/banner"
import HexMenu from "../../component/hexMenu"
import RecordsGrid from "../../component/recordsGrid"
import imgMeal1 from "../../assets/images/m01.jpg"
import imgMeal2 from "../../assets/images/l03.jpg"
import imgMeal3 from "../../assets/images/d01.jpg"
import imgMeal4 from "../../assets/images/l01.jpg"
import imgMeal5 from "../../assets/images/l02.jpg"
import imgMeal6 from "../../assets/images/d02.jpg"
import imgMeal7 from "../../assets/images/s01.jpg"

const sample = [
  { x: "6月", a: 90, b: 90 },
  { x: "7月", a: 87, b: 82 },
  { x: "8月", a: 60, b: 66 },
  { x: "9月", a: 71, b: 64 },
  { x: "10月", a: 64, b: 53 },
  { x: "11月", a: 58, b: 52 },
  { x: "12月", a: 68, b: 46 },
  { x: "1月", a: 55, b: 44 },
  { x: "2月", a: 50, b: 38 },
  { x: "3月", a: 46, b: 28 },
  { x: "4月", a: 42, b: 20 },
  { x: "5月", a: 48, b: 14 },
]

const items = [
  { src: imgMeal1, date: "05.21", meal: "Morning" },
  { src: imgMeal2, date: "05.21", meal: "Lunch" },
  { src: imgMeal3, date: "05.21", meal: "Dinner" },
  { src: imgMeal4, date: "05.21", meal: "Snack" },
  { src: imgMeal1, date: "05.20", meal: "Morning" },
  { src: imgMeal5, date: "05.20", meal: "Lunch" },
  { src: imgMeal6, date: "05.20", meal: "Dinner" },
  { src: imgMeal7, date: "05.20", meal: "Snack" },
]

export default function Home() {
  return (
    <>
      <Banner
        imageSrc={imageBanner}
        dateLabel="05/21"
        percent={75}
        data={sample}
      />
      <HexMenu />

      <RecordsGrid items={items} />
    </>
  )
}
