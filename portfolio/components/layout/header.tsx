import Link from "next/link"

export default function Header() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="container mx-auto px-4 py-6 sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between">
        <div className="text-2xl font-bold">AA</div>
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-red-500 transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

