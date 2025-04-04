import { Card } from "./card"

interface SkillCardProps {
  title: string
  skills: string[]
  delay: number
}

export function SkillCard({ title, skills, delay }: SkillCardProps) {
  return (
    <Card animationClass="animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-xl font-semibold mb-4 text-red-500 group-hover:text-white transition-colors">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 bg-white/10 rounded-full text-sm transition-all duration-300
            hover:bg-red-500 hover:text-white hover:scale-110 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  )
}

