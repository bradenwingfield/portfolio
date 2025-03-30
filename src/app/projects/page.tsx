import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  return (
    <main className="pt-20 pb-6 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">All Projects</h1>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </main>
  )
}
