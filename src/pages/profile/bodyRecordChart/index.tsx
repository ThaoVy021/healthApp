import { useState } from "react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"
import ButtonScroll from "../../../component/buttonScroll"

type RangeKey = "day" | "week" | "month" | "year"

const COLORS = {
  bg: "#414141",
  grid: "#6B6B6B",
  yellow: "#FFCC21",
  mint: "#8FE9D0",
}

const yearData = [
  { m: 6, a: 63, b: 63 },
  { m: 7, a: 60, b: 57 },
  { m: 8, a: 30, b: 45 },
  { m: 9, a: 51, b: 42 },
  { m: 10, a: 45, b: 32 },
  { m: 11, a: 40, b: 36 },
  { m: 12, a: 50, b: 30 },
  { m: 1, a: 34, b: 27 },
  { m: 2, a: 29, b: 22 },
  { m: 3, a: 26, b: 13 },
  { m: 4, a: 15, b: 9 },
  { m: 5, a: 10, b: 5 },
]

export default function BodyRecordChart({
  date = "2021.05.21",
}: {
  date?: string
}) {
  const [range, setRange] = useState<RangeKey>("year")
  const data = yearData

  return (
    <section className="pb-[56px]">
      <div className="layout-container">
        <div className="relative w-full bg-[#414141] h-[304px]">
          <div className="absolute left-4 top-2 flex items-start gap-4">
            <h3 className="w-[96px] h-[36px] mb-0 text-left text-white/90 text-[15px] leading-[18px] font-light tracking-wide">
              BODY RECORD
            </h3>
            <span className="text-white text-[22px] leading-[27px] font-normal">
              {date}
            </span>
          </div>

          <div className="absolute inset-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 44, right: 24, left: 24, bottom: 64 }}
              >
                <CartesianGrid
                  vertical
                  horizontal={false}
                  stroke={COLORS.grid}
                />
                <XAxis
                  dataKey="m"
                  tickFormatter={(v) => `${v}月`}
                  tick={{ fill: "#E6E6E6", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "#2b2b2b",
                    border: "none",
                    color: "#fff",
                  }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Line
                  type="linear"
                  dataKey="b"
                  stroke={COLORS.mint}
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 0, fill: COLORS.mint }}
                  activeDot={{ r: 5 }}
                />
                <Line
                  type="linear"
                  dataKey="a"
                  stroke={COLORS.yellow}
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 0, fill: COLORS.yellow }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute left-4 bottom-3 flex gap-3">
            {[
              { key: "day", label: "日" },
              { key: "week", label: "週" },
              { key: "month", label: "月" },
              { key: "year", label: "年" },
            ].map((btn) => {
              const active = range === (btn.key as RangeKey)
              return (
                <button
                  key={btn.key}
                  onClick={() => setRange(btn.key as RangeKey)}
                  className={
                    "min-w-[72px] px-6 py-2 rounded-full border text-sm font-medium transition " +
                    (active
                      ? "bg-[#FFCC21] text-white border-[#FFCC21]"
                      : "bg-white text-[#FFCC21] border-[#FFCC21]")
                  }
                >
                  {btn.label}
                </button>
              )
            })}
          </div>

          <ButtonScroll customPosition="right-[-60px] bottom-[-5%]" />
        </div>
      </div>
    </section>
  )
}
