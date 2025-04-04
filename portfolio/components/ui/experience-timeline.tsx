import type { ExperienceData } from "@/types/experience"

interface ExperienceTimelineProps {
  experiences: ExperienceData[]
  activeIndex: number
}

export function ExperienceTimeline({ experiences, activeIndex }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500/20 via-red-500 to-red-500/20"></div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`mb-16 relative flex items-center experience-item ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Year bubble */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(229,62,70,0.5)] transition-all duration-500 ${
                activeIndex === index ? "bg-red-500 animate-pulse" : "bg-red-500/50"
              }`}
            >
              <span className="text-white font-bold text-sm">{exp.year}</span>
            </div>
          </div>

          {/* Content */}
          <div className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
            <div
              className={`bg-white/5 p-6 rounded-lg shadow-lg border border-white/5 backdrop-blur-sm
              transition-all duration-500 group animate-fadeIn ${
                activeIndex === index
                  ? "shadow-[0_0_25px_rgba(229,62,70,0.4)] scale-[1.03]"
                  : "hover:shadow-[0_0_25px_rgba(229,62,70,0.4)] hover:scale-[1.03]"
              }`}
            >
              <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{exp.title}</h3>
              <p className="text-red-500 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 group-hover:text-white transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

