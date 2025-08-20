import utensilsPng from "../../assets/icons/グループ 11.png"
import coffeePng from "../../assets/icons/グループ 23.png"

function HexBadge({ label, iconSrc }: { label: string; iconSrc: string }) {
  const w = 134
  const h = 116

  return (
    <div style={{ width: w }}>
      <div
        className="relative flex items-center justify-center gap-x-16 overflow-hidden select-none shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
        style={{
          width: w,
          height: h,
          clipPath:
            "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
          background: "linear-gradient(135deg, #FFCC21 0%, #FF963C 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center pt-2">
          <img
            src={iconSrc}
            alt={label}
            className="w-10 h-10 mb-1 object-contain"
          />
          <span className="text-white/95 text-[20px] leading-[24px] font-normal">
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function HexMenu() {
  return (
    <section className="w-full bg-white py-6">
      <div className="layout-container mx-auto px-32">
        <div className="flex items-start justify-between gap-6">
          <HexBadge label="Morning" iconSrc={utensilsPng} />
          <HexBadge label="Lunch" iconSrc={utensilsPng} />
          <HexBadge label="Dinner" iconSrc={utensilsPng} />
          <HexBadge label="Snack" iconSrc={coffeePng} />
        </div>
      </div>
    </section>
  )
}
