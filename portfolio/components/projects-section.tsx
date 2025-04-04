export default function ProjectsSection() {
  const projects = [
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
            <div
              key={index}
              className="bg-gradient-to-br from-black via-gray-900 to-black p-1 rounded-lg animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="bg-black/80 p-6 rounded-lg h-full flex flex-col backdrop-blur-sm border border-white/5
                transition-all duration-500 hover:shadow-[0_0_25px_rgba(229,62,70,0.4)] hover:scale-[1.03] group"
              >
                <div className="mb-1 flex justify-between items-start">
                  <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{project.title}</h3>
                </div>
                <div className="mb-2">
                  <span className="text-red-500 text-sm">{project.technologies}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.period}</p>
                <p className="text-gray-300 flex-grow group-hover:text-white transition-colors">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

