import { Briefcase, GraduationCap, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { InfoCard } from "@/components/ui/info-card"

export default function About() {
  const educationItems = [
    {
      institution: "Northeastern University, Boston, MA",
      degree: "Master of Science in Computer Software Engineering",
      period: "May 2026 (anticipated) | GPA: 4.0/4.0",
    },
    {
      institution: "Thiagarajar College of Engineering, India",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "May 2020",
    },
  ]

  const contactItems = [
    { icon: <MapPin className="w-4 h-4 text-red-500" />, label: "Location", value: "Boston, MA" },
    { icon: <Phone className="w-4 h-4 text-red-500" />, label: "Phone", value: "617-651-6158" },
    { icon: <Mail className="w-4 h-4 text-red-500" />, label: "Email", value: "alagappan.aa@northeastern.edu" },
  ]

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/aadhitya-a-002535129" },
    { name: "GitHub", url: "https://github.com/aadhitya98" },
    { name: "Medium", url: "https://medium.com/@aadhitya98" },
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-4 bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm mb-12 animate-slideUp">
            <p className="text-lg text-gray-300">
              Full Stack developer with industry experience building websites and mobile applications.
            </p>
            <p className="text-lg text-gray-300">
              Specialized in Java and have professional experience working with Spring Boot and Angular.
            </p>
            <p className="text-lg text-gray-300">
              Have experience working with Android, Flutter and also have a good hands-on in solving Data Science
              Problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              title="Education"
              icon={<GraduationCap className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />}
              animationClass="animate-slideRight"
            >
              <div className="space-y-6">
                {educationItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-red-500/30 group-hover:border-red-500 transition-colors"
                  >
                    <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-1"></div>
                    <h4 className="font-medium text-lg">{item.institution}</h4>
                    <p className="text-gray-400">{item.degree}</p>
                    <p className="text-red-500 font-medium mt-1">{item.period}</p>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard
              title="Contact Information"
              icon={<Briefcase className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />}
              animationClass="animate-slideLeft"
            >
              <div className="space-y-4">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
                      {item.icon}
                    </div>
                    <p className="text-gray-300 break-all">
                      <span className="font-medium">{item.label}:</span> {item.value}
                    </p>
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="font-medium mb-3">Connect with me:</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-md hover:bg-red-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-red-500" />
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  )
}

