import { Card } from "./card"
import type { ProjectData } from "@/types/project"

interface ProjectCardProps {
  project: ProjectData
  delay: number
}

export function ProjectCard({ project, delay }: ProjectCardProps) {
  return (
    <Card animationClass="animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      <div className="mb-1 flex justify-between items-start">
        <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{project.title}</h3>
      </div>
      <div className="mb-2">
        <span className="text-red-500 text-sm">{project.technologies}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{project.period}</p>
      <p className="text-gray-300 flex-grow group-hover:text-white transition-colors">{project.description}</p>
    </Card>
  )
}

