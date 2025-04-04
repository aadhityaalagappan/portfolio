import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, FileText, ExternalLink } from "lucide-react"
import ContactModal from "@/components/ui/contact-modal"

export default function Hero() {
  return (
    <div
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center"
      style={{
        backgroundImage: "url('/network-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold">Hi,</h2>
            <h1 className="text-5xl font-bold">
              I'm <span className="text-red-500">Aadhitya Alagappan</span>
            </h1>
            <h2 className="text-4xl font-bold">Full Stack Developer</h2>
            <p className="text-xl text-gray-300">
              I am a full stack developer pursuing my Master's in Northeastern University and currently in Boston.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <ContactModal />
              <a
                href="/resume.pdf"
                download="Aadhitya_Alagappan_Resume.pdf"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 px-8 py-2 rounded transition-colors"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </div>

            <div className="flex space-x-4 pt-6">
              <Link
                href="https://github.com/aadhityaalagappan"
                target="_blank"
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/aadhitya-a-002535129/"
                target="_blank"
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://medium.com/@aadhitya98"
                target="_blank"
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
                <span className="sr-only">Medium</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative w-80 h-80 mx-auto hexagon-clip">
              <Image src="/profile.jpeg" alt="Aadhitya Alagappan" width={400} height={400} className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

