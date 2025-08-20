import Button from "../../../component/button"
import ButtonScroll from "../../../component/buttonScroll"

type ColumnItem = {
  image: string
  date: string
  time: string
  title: string
  tags: string[]
}

export default function RecommendedColumns({ items }: { items: ColumnItem[] }) {
  return (
    <section className="pb-[64px]">
      <div className="layout-container">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-[18px]">
          {items.map((it, i) => (
            <article key={i} className="bg-white">
              {/* Image with date badge */}
              <div className="relative aspect-[4/4] h-[144px] w-[234px] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="absolute inset-0 h-[144px] w-[234px] object-cover transition group-hover:scale-[1.02]"
                />

                {/* Date badge (yellow) */}
                <div className="absolute left-0 bottom-[-4px]">
                  <div className="relative inline-block">
                    <span className="bg-[#FFCC21] text-white text-[15px] leading-[30px] font-normal px-[8px] py-[3px]">
                      {it.date}
                      {it.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-2">
                <p
                  className="text-[#414141] text-[15px] leading-[22px] font-light px-1 mb-0"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {it.title}
                </p>

                <div className="px-1 pt-0 pb-3 flex flex-wrap gap-x-3 gap-y-1">
                  {it.tags.map((t, j) => (
                    <span
                      key={j}
                      className="text-[#FF963C] text-[12px] leading-[22px] font-light"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <ButtonScroll customPosition="right-[-60px] bottom-[1%]" />
        </div>

        <div className="flex justify-center mt-[24px]">
          <Button children="コラムをもっと見る" />
        </div>
      </div>
    </section>
  )
}
