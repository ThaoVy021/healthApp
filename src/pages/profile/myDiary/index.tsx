import Button from "../../../component/button"

type DiaryItem = {
  date: string // "2021.05.21"
  time: string // "23:25"
  snippet: string // nội dung ngắn
}

export default function MyDiary({
  items,
}: {
  items: DiaryItem[]
  onMore?: () => void
}) {
  return (
    <section className="pb-[64px]">
      <div className="layout-container">
        <h3 className="text-[#414141] text-left text-[22px] leading-[27px] font-normal mb-4">
          MY DIARY
        </h3>

        {/* Grid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <article
              key={i}
              className="w-[231px] h-[231px] border-2 border-[#707070] bg-white text-left p-4 hover:shadow-sm transition"
            >
              <div className="text-[#414141] text-[14px] leading-[22px] font-normal">
                {it.date}
              </div>
              <div className="text-[#414141] text-[14px] leading-[22px] font-normal">
                {it.time}
              </div>

              <p
                className="mt-3 text-[#414141] font-light text-[12px] leading-[17px]"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {it.snippet}
              </p>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-[24px]">
          <Button children="自分の日記をもっと見る" />
        </div>
      </div>
    </section>
  )
}
