type RecItem = {
  title: string
  subtitle: string
  onClick?: () => void
}

export default function RecommendedBlocks({ items }: { items: RecItem[] }) {
  return (
    <section className="pb-14">
      <div className="layout-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <button
            key={i}
            onClick={it.onClick}
            className="
              h-[160px] w-full bg-[#2e2e2e] text-white
              flex flex-col items-center justify-center text-center
              transition hover:brightness-110
            "
          >
            <div className="text-[#FFCC21] uppercase tracking-wide leading-[27px] font-normal text-[22px]">
              {it.title.split(" ").map((w, idx) =>
                idx === 1 ? (
                  <span key={idx}>
                    {" "}
                    {w}
                    <br />
                  </span>
                ) : (
                  <span key={idx}> {w}</span>
                )
              )}
            </div>

            <div className="mt-2 h-[1px] w-10 bg-white/80" />

            <div className="mt-2 text-[18px] leading-[26px] font-light">
              {it.subtitle}
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
