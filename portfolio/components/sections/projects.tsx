import { ProjectCard } from "@/components/ui/project-card"
import type { ProjectData } from "@/types/project"

export default function Projects() {
  const projects: ProjectData[] = [
    {
      title: "SQL Query Auto generator and retriever using IBM Watson",
      technologies: "Java, Python, Pinecone",
      period: "July 2024 – August 2024",
      description:
        "Automated SQL query generation using Retrieval-Augmented Generation (RAG) and integrating a chatbot with a Python API, streamlining database retrieval",
    },
    {
      title: "Slack Messages Summarizer using IBM Watson",
      technologies: "Java, Open API, Slack APIs",
      period: "June 2023 – July 2023",
      description:
        "Boosted productivity by creating Java APIs to summarize Slack message threads using Watson's transformer models",
    },
    {
      title: "Merge Conflict Resolver using AI",
      technologies: "Java, Python, Angular, Apache Kafka",
      period: "December 2021 – December 2022",
      description:
        "Minimized development conflicts by building a Visual Studio Code extension with AI to predict and highlight Git merge conflicts, implemented using Kafka, Java, and Angular",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

