import RecommendedBlocks from "./recommendedBlocks"
import RecommendedColumns from "./recommendedColumns"
import imageRecommended1 from "../../assets/images/column-1.jpg"
import imageRecommended2 from "../../assets/images/column-2.jpg"
import imageRecommended3 from "../../assets/images/column-3.jpg"
import imageRecommended4 from "../../assets/images/column-4.jpg"
import imageRecommended5 from "../../assets/images/column-5.jpg"
import imageRecommended6 from "../../assets/images/column-6.jpg"
import imageRecommended7 from "../../assets/images/column-7.jpg"
import imageRecommended8 from "../../assets/images/column-8.jpg"

export default function Columns() {
  return (
    <div className="max-w-full layout-container text-center pt-14">
      <RecommendedBlocks
        items={[
          { title: "RECOMMENDED COLUMN", subtitle: "オススメ" },
          { title: "RECOMMENDED DIET", subtitle: "ダイエット" },
          { title: "RECOMMENDED BEAUTY", subtitle: "美容" },
          { title: "RECOMMENDED HEALTH", subtitle: "健康" },
        ]}
      />
      <RecommendedColumns
        items={[
          {
            image: imageRecommended1,
            date: "2021.05.17",
            time: "23:25",
            title:
              "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
            tags: ["魚料理", "和食", "DHA"],
          },
          {
            image: imageRecommended2,
            date: "2021.05.17",
            time: "23:25",
            title:
              "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
            tags: ["魚料理", "和食", "DHA"],
          },
          {
            image: imageRecommended3,
            date: "2021.05.17",
            time: "23:25",
            title:
              "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
            tags: ["魚料理", "和食", "DHA"],
          },
          {
            image: imageRecommended4,
            date: "2021.05.17",
            time: "23:25",
            title:
              "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
            tags: ["魚料理", "和食", "DHA"],
          },
          {
            image: imageRecommended5,
            date: "2021.05.17",
            time: "23:25",
            title:
              "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
            tags: ["魚料理", "和食", "DHA"],
          },
          {
            image: imageRecommended6,
            date: "2021.05.17",
            time: "23:25",
            title:
              "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
            tags: ["魚料理", "和食", "DHA"],
          },
          {
            image: imageRecommended7,
            date: "2021.05.17",
            time: "23:25",
            title:
              "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
            tags: ["魚料理", "和食", "DHA"],
          },
          {
            image: imageRecommended8,
            date: "2021.05.17",
            time: "23:25",
            title:
              "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
            tags: ["魚料理", "和食", "DHA"],
          },
        ]}
      />
    </div>
  )
}
