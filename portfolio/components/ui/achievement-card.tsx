import { Trophy } from "lucide-react"
import { Card } from "./card"
import type { AchievementData } from "@/types/achievement"

interface AchievementCardProps {
  achievement: AchievementData
  delay: number
}

export function AchievementCard({ achievement, delay }: AchievementCardProps) {
  return (
    <Card
      animationClass="animate-fadeIn"
      className="border-l-4 border-red-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start mb-4">
        <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors">
          <Trophy className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
        </div>
        <div>
          <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{achievement.title}</h3>
          <p className="text-red-500 text-sm mt-1">{achievement.date}</p>
        </div>
      </div>
      <p className="text-gray-300 group-hover:text-white transition-colors">{achievement.description}</p>
    </Card>
  )
}

