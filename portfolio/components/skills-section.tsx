export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "TypeScript", "JavaScript", "HTML", "CSS", "Python", "C♯"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "IBM Cloud", "Git", "Maven", "Jenkins", "Kubernetes", "NPM", "Docker"],
    },
    {
      title: "Databases",
      skills: ["DB2", "MySQL", "MongoDB", "Firebase"],
    },
    {
      title: "Frameworks",
      skills: ["React", "Spring Boot", "Angular", "Android", "Unity", "Unreal"],
    },
    {
      title: "Others",
      skills: [
        "Apache Kafka",
        "GitHub",
        "Data Structures & Algorithms",
        "IBM Watson",
        "Containerization",
        "CI/CD pipelines",
        "Agile methodologies",
        "RestAPIs",
        "JUnit Testing",
        "Team Management",
        "Problem Solving",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-black via-gray-900 to-black p-1 rounded-lg animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="bg-black/80 p-6 rounded-lg h-full backdrop-blur-sm border border-white/5
                transition-all duration-500 hover:shadow-[0_0_25px_rgba(229,62,70,0.4)] hover:scale-[1.03] group"
              >
                <h3 className="text-xl font-semibold mb-4 text-red-500 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm transition-all duration-300
                      hover:bg-red-500 hover:text-white hover:scale-110 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

