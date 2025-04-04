"use client"

import { useState, useRef, useEffect } from "react"
import { ExperienceTimeline } from "@/components/ui/experience-timeline"
import { ExperienceSlider } from "@/components/ui/experience-slider"
import type { ExperienceData } from "@/types/experience"

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  const experiences: ExperienceData[] = [
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

        <ExperienceSlider
          experiences={experiences}
          activeIndex={activeIndex}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelect={scrollToExperience}
        />

        <div className="max-w-5xl mx-auto" ref={timelineRef}>
          <ExperienceTimeline experiences={experiences} activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  )
}

