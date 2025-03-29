import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="w-full px-6 py-20 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-semibold text-black mb-10">Featured Projects</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </section>
  )
}
