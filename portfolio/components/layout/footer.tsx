import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="py-6 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Aadhitya Alagappan. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="tel:6176516158" className="text-sm text-gray-400 hover:text-white">
              617-651-6158
            </Link>
            <Link href="mailto:alagappan.aa@northeastern.edu" className="text-sm text-gray-400 hover:text-white">
              alagappan.aa@northeastern.edu
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

