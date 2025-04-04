"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ExperienceData } from "@/types/experience"

interface ExperienceSliderProps {
  experiences: ExperienceData[]
  activeIndex: number
  onPrev: () => void
  onNext: () => void
  onSelect: (index: number) => void
}

export function ExperienceSlider({ experiences, activeIndex, onPrev, onNext, onSelect }: ExperienceSliderProps) {
  return (
    <div className="max-w-5xl mx-auto mb-16 bg-gray-900/50 p-1 rounded-full backdrop-blur-sm">
      <div className="relative flex items-center">
        <button
          onClick={onPrev}
          className="absolute -left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-red-600 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div className="w-full overflow-x-auto py-2 px-4 hide-scrollbar">
          <div className="flex justify-between items-center min-w-max">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => onSelect(index)}
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
          onClick={onNext}
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
  )
}

