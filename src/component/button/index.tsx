type ButtonProps = {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="w-[296px] h-[56px] rounded-[5px] text-white text-[18px] leading-[26px] font-light "
      style={{
        background: "linear-gradient(135deg, #FFCC21 0%, #FF963C 100%)",
      }}
    >
      {children}
    </button>
  )
}
