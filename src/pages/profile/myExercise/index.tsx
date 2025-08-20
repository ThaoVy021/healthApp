type ExerciseItem = {
  title: string
  kcal: number
  minutes: number
}

export default function MyExercise({
  date = "2021.05.21",
  items,
}: {
  date?: string
  items: ExerciseItem[]
}) {
  return (
    <section className="pb-[56px]">
      <div className="layout-container bg-[#414141] py-4 px-6">
        {/* Header */}
        <div className="flex gap-5 mb-2 top-2 items-start">
          <h3 className="w-[96px] h-[36px] mb-0 text-left text-white/90 text-[15px] leading-[18px] font-light tracking-wide">
            MY EXERCISE
          </h3>
          <span className="text-white text-[22px] leading-[27px] font-normal">
            {date}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 h-[188px] overflow-y-auto pr-2 thin-scrollbar">
          {items.map((it, i) => (
            <div
              key={i}
              className="flex items-start justify-between border-b border-[#6B6B6B] pt-1 pb-0"
            >
              <div className="relative pl-4">
                <span className="absolute left-0 top-[0.45em] w-1.5 h-1.5 rounded-full bg-white" />
                <p className="text-white text-[15px] leading-[18px] font-light mb-0">
                  {it.title}
                </p>
                <p className="text-left text-[#FFCC21] text-[15px] leading-[18px] font-normal mb-0">
                  {it.kcal}kcal
                </p>
              </div>
              <span className="text-[#FFCC21] text-[18px] leading-[22px] font-normal whitespace-nowrap">
                {it.minutes} min
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
