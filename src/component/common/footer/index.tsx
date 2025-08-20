export default function Footer() {
  const links = [
    { label: "会員登録", href: "#" },
    { label: "運営会社", href: "#" },
    { label: "利用規約", href: "#" },
    { label: "個人情報の取扱について", href: "#" },
    { label: "特定商取引法に基づく表記", href: "#" },
    { label: "お問い合わせ", href: "#" },
  ]

  return (
    <footer className="w-full h-[128px] bg-[#414141] py-6">
      <div className="layout-container h-full flex items-center mx-auto px-4">
        <nav className="flex flex-wrap justify-start gap-x-10 gap-y-3">
          {links.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-gray-200 text-sm hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
