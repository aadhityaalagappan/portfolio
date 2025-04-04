import { AchievementCard } from "@/components/ui/achievement-card"
import type { AchievementData } from "@/types/achievement"

export default function Achievements() {
  const achievements: AchievementData[] = [
    {
      title: "2nd Runner up in EasyA-Stacks Hackathon - Harvard University",
      date: "November 2024",
      description:
        "Secured 2nd Runner-up in the Stacks Bitcoin Hackathon by developing Pay2Flix, a pay-per-view streaming platform with decentralized pricing driven by NLP-based user sentiment analysis",
    },
    {
      title: "Global Top 5 in IBM Hackathon",
      date: "December 2022",
      description: "Secured Top 5 globally in IBM Hackathon for building an AI tool to resolve Git merge conflicts",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

