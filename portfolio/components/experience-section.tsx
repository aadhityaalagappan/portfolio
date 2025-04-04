"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      title: "Software Engineer",
      company: "First Byte Club - Northeastern University",
      period: "September 2024 – Present",
      year: "2024",
      description: [
        "Improved scheduling and collaboration for schools by developing a comprehensive dashboard using React and Java, facilitating the coordination of classes and meetings",
      ],
    },
    {
      title: "Game Engineer",
      company: "Games Club - Northeastern University",
      period: "September 2024 – Present",
      year: "2024",
      description: [
        'Enhanced player engagement by developing "Raise Hell," a 2D action game using C♯ and Unity, featuring multiple levels, puzzles, AI behavior, and Unity Physics for dynamic player interactions',
      ],
    },
    {
      title: "Software Engineer",
      company: "IBM, Bangalore",
      period: "October 2020 – August 2024",
      year: "2020-2024",
      description: [
        "Increased application security by integrating APIs for secure logins, microservices and third-party communication",
        "Boosted database performance and scalability by optimizing and maintaining DB2 databases for critical applications",
        "Enhanced user experience by building responsive web applications with Angular, Node.js and Spring Boot",
        "Reduced manual effort by automating data updates through scheduled batch jobs and running on IBM Cloud",
        "Improved development efficiency by creating Jenkins pipelines for testing, code quality checks (SonarQube)",
        "Facilitated global trade operations by contributing to the development of IBM's core financial application",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "IBM, Bangalore",
      period: "January 2020 – October 2020",
      year: "2020",
      description: [
        "Improved team collaboration by developing a QA forum for query resolution, reducing response times",
        "Enhanced frontend performance by migrating the codebase from AngularJS to Angular, resulting in faster application",
      ],
    },
  ]

  const scrollToExperience = (index: number) => {
    setActiveIndex(index)

    if (timelineRef.current) {
      const experienceElements = timelineRef.current.querySelectorAll(".experience-item")
      if (experienceElements[index]) {
        experienceElements[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }
    }
  }

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : experiences.length - 1
    scrollToExperience(newIndex)
  }

  const handleNext = () => {
    const newIndex = activeIndex < experiences.length - 1 ? activeIndex + 1 : 0
    scrollToExperience(newIndex)
  }

  // Update active index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const experienceElements = timelineRef.current.querySelectorAll(".experience-item")

        experienceElements.forEach((element, index) => {
          const rect = element.getBoundingClientRect()
          const windowHeight = window.innerHeight

          // If the element is in the center of the viewport
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveIndex(index)
          }
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>

        {/* Navigation Slider */}
        <div className="max-w-5xl mx-auto mb-16 bg-gray-900/50 p-1 rounded-full backdrop-blur-sm">
          <div className="relative flex items-center">
            <button
              onClick={handlePrev}
              className="absolute -left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-red-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="w-full overflow-x-auto py-2 px-4 hide-scrollbar">
              <div className="flex justify-between items-center min-w-max">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToExperience(index)}
                    className={`px-4 py-2 mx-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                      activeIndex === index
                        ? "bg-red-500 text-white font-medium"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {exp.company.split("-")[0].trim()}
                    <span className="ml-2 text-xs opacity-70">{exp.year}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute -right-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-red-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-300"
                style={{ width: `${(activeIndex / (experiences.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto" ref={timelineRef}>
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
        </div>
      </div>
    </section>
  )
}

