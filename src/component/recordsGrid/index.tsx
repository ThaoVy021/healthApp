import Button from "../button"
import ButtonScroll from "../buttonScroll"

type RecordItem = {
  src: string
  date: string
  meal: "Morning" | "Lunch" | "Dinner" | "Snack" | string
}

export default function RecordsGrid({ items }: { items: RecordItem[] }) {
  return (
    <section className="px-4 md:px-6">
      <div className="relative layout-container grid grid-cols-2 md:grid-cols-4 gap-2  bg-white">
        {items.map((it, i) => (
          <figure
            key={i}
            className="relative aspect-[4/4] overflow-hidden bg-gray-100"
          >
            <img
              src={it.src}
              alt={`${it.date}.${it.meal}`}
              className="absolute inset-0 h-full w-[234px] object-cover"
            />
            <figcaption className="absolute left-0 bottom-0 w-[130px] h-[32px] text-white bg-[#FFCC21] text-[15px] leading-[18px] font-normal px-3 py-2">
              {it.date}.{it.meal}
            </figcaption>
          </figure>
        ))}
        <ButtonScroll customPosition="right-[-60px] top-[35%]" />
      </div>

      <div className="flex justify-center pt-5 pb-16">
        <Button children="記録をもっと見る" />
      </div>
    </section>
  )
}
