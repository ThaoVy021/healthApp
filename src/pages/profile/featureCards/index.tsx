type CardItem = {
  title: string
  subtitle: string
  image: string
  onClick?: () => void
}

export default function FeatureCards({ items }: { items: CardItem[] }) {
  return (
    <section className="pb-14">
      <div className="layout-container grid gap-12 grid-cols-1 md:grid-cols-3">
        {items.map((it, i) => (
          <button
            key={i}
            onClick={it.onClick}
            className="
                relative w-[288px] h-[288px] rounded-[0px]
                bg-[#FFCC21] p-6 
                transition-transform hover:-translate-y-0.5
                focus:outline-none
            "
          >
            <div className="relative aspect-[4/4] overflow-hidden">
              <img
                src={it.image}
                alt={it.title}
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-[#FFCC21] tracking-wide text-[25px] leading-[30px] font-normal mb-[10px]">
                  {it.title}
                </h3>

                <span
                  className="
                    inline-block
                    bg-[#FF963C] text-white 
                    text-sm font-light
                    w-[160px] h-[24px]
                    shadow-[0_4px_0_rgba(0,0,0,0.2)] 
                  "
                >
                  {it.subtitle}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
