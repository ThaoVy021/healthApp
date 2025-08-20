import FeatureCards from "./featureCards"
import imageBody from "../../assets/images/MyRecommend-1.jpg"
import imageExercise from "../../assets/images/MyRecommend-2.jpg"
import imageDiary from "../../assets/images/MyRecommend-3.jpg"
import BodyRecordChart from "./bodyRecordChart"
import MyExercise from "./myExercise"
import MyDiary from "./myDiary"

export default function Profile() {
  return (
    <div className="max-w-full layout-container text-center pt-14">
      <FeatureCards
        items={[
          {
            title: "BODY RECORD",
            subtitle: "自分のカラダの記録",
            image: imageBody,
          },
          {
            title: "MY EXERCISE",
            subtitle: "自分の運動の記録",
            image: imageExercise,
          },
          {
            title: "MY DIARY",
            subtitle: "自分の日記",
            image: imageDiary,
          },
        ]}
      />
      <BodyRecordChart />
      <MyExercise
        items={Array.from({ length: 32 }, () => ({
          title: "家事全般（立位・軽い）",
          kcal: 26,
          minutes: 10,
        }))}
      />
      <MyDiary
        items={Array.from({ length: 8 }, () => ({
          date: "2021.05.21",
          time: "23:25",
          snippet:
            "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        }))}
      />
    </div>
  )
}
