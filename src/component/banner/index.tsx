import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

type Point = { x: string; a: number; b: number }

export default function Banner({
  imageSrc,
  dateLabel = "05/21",
  percent = 75,
  data,
}: {
  imageSrc: string
  dateLabel?: string
  percent?: number // 0..100
  data: Point[]
}) {
  // circle progress geometry
  const size = 220 // px
  const stroke = 6
  const r = (size - stroke) / 2
  const C = 2 * Math.PI * r
  const offset = C * (1 - percent / 100)

  return (
    <div className="w-full bg-[#2f2f2f]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: image with circular progress overlay */}
        <div className="relative aspect-[16/10] md:aspect-auto md:h-[360px]">
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay circle + text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              className="-translate-x-6"
            >
              {/* base ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth={stroke}
              />
              {/* progress ring */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="white"
                strokeWidth={stroke}
                strokeDasharray={C}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            </svg>

            {/* center text */}
            <div className="absolute flex items-center gap-1 text-white text-center">
              <div className="text-[18px] leading-[22px] self-end	mb-[1px] tracking-wider opacity-90">
                {dateLabel}
              </div>
              <div className="text-[25px] leading-[30px] tracking-wide">
                {percent}%
              </div>
            </div>
          </div>
        </div>

        {/* Right: line chart on dark panel */}
        <div className="bg-[#333] md:h-[360px] p-3 md:p-4">
          <div className="h-full w-full rounded-md">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 8, right: 24, bottom: 16, left: 42 }}
              >
                <CartesianGrid
                  vertical
                  stroke="rgba(255,255,255,0.15)"
                  horizontal={false}
                />

                <XAxis
                  dataKey="x"
                  padding={{ left: 0, right: 0 }}
                  interval={0}
                  tick={{ fill: "rgba(255,255,255,0.85)", fontSize: 12 }}
                  tickMargin={6}
                />
                <YAxis hide domain={[0, 100]} />
                <Tooltip />

                <Line
                  type="linear"
                  dataKey="b"
                  stroke="#7dd3c7"
                  strokeWidth={3}
                  dot
                />
                <Line
                  type="linear"
                  dataKey="a"
                  stroke="#f2c200"
                  strokeWidth={3}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
