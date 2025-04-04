import { Briefcase, GraduationCap, MapPin, Phone, Mail, ExternalLink } from "lucide-react"

export default function AboutSection() {
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
            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-1 rounded-lg animate-slideRight">
              <div
                className="bg-black/80 p-6 rounded-lg h-full backdrop-blur-sm border border-white/5
                transition-all duration-500 hover:shadow-[0_0_25px_rgba(229,62,70,0.4)] group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors">
                    <GraduationCap className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-red-500/30 group-hover:border-red-500 transition-colors">
                    <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-1"></div>
                    <h4 className="font-medium text-lg">Northeastern University, Boston, MA</h4>
                    <p className="text-gray-400">Master of Science in Computer Software Engineering</p>
                    <p className="text-red-500 font-medium mt-1">May 2026 (anticipated) | GPA: 4.0/4.0</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-red-500/30 group-hover:border-red-500 transition-colors">
                    <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-1"></div>
                    <h4 className="font-medium text-lg">Thiagarajar College of Engineering, India</h4>
                    <p className="text-gray-400">Bachelor of Engineering in Computer Science and Engineering</p>
                    <p className="text-red-500 font-medium mt-1">May 2020</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black via-gray-900 to-black p-1 rounded-lg animate-slideLeft">
              <div
                className="bg-black/80 p-6 rounded-lg h-full backdrop-blur-sm border border-white/5
                transition-all duration-500 hover:shadow-[0_0_25px_rgba(229,62,70,0.4)] group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors">
                    <Briefcase className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
                      <MapPin className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-medium">Location:</span> Boston, MA
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
                      <Phone className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-gray-300">
                      <span className="font-medium">Phone:</span> 617-651-6158
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center mr-3 group-hover:bg-white/10 transition-colors">
                      <Mail className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-gray-300 break-all">
                      <span className="font-medium">Email:</span> alagappan.aa@northeastern.edu
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <p className="font-medium mb-3">Connect with me:</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://linkedin.com/in/aadhitya-a-002535129"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-md hover:bg-red-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-red-500" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/aadhitya98"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-md hover:bg-red-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-red-500" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://medium.com/@aadhitya98"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-md hover:bg-red-500/20 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-red-500" />
                        <span>Medium</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

