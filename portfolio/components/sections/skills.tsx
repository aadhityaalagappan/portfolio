import { SkillCard } from "@/components/ui/skill-card"

export default function Skills() {
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
            <SkillCard key={index} title={category.title} skills={category.skills} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

