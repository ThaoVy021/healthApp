import clsx from "clsx"
import type { RefObject } from "react"
import imageScroll from "../../assets/icons/component_scroll.png"

type ButtonProps = {
  customPosition?: string // ví dụ: "fixed right-6 bottom-6" hoặc "absolute right-4 bottom-4"
  containerRef?: RefObject<HTMLElement | null> // nếu cuộn trong 1 div có overflow
}

export default function ButtonScroll({
  customPosition,
  containerRef,
}: ButtonProps) {
  const handleClick = () => {
    const node = containerRef?.current
    if (node) {
      node.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
      className={clsx(
        "absolute z-50 cursor-pointer select-none",
        customPosition
      )}
    >
      <img src={imageScroll} alt="" />
    </button>
  )
}
