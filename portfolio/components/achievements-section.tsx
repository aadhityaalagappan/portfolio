import { Trophy } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
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
            <div
              key={index}
              className="bg-gradient-to-br from-black via-gray-900 to-black p-1 rounded-lg animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="bg-black/80 p-6 rounded-lg border-l-4 border-red-500 backdrop-blur-sm
                transition-all duration-500 hover:shadow-[0_0_25px_rgba(229,62,70,0.4)] hover:scale-[1.03] group"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-red-500 transition-colors">
                    <Trophy className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-red-500 text-sm mt-1">{achievement.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

