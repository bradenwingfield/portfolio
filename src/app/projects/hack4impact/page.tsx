import Image from 'next/image'

export default function Hack4ImpactProjectPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Hack4Impact</h1>
      <p className="text-gray-500 mb-6">
        Students building professional software for nonprofits
      </p>

      <div className="mb-10">
        <Image
          src="/hack4impact.png"
          alt="Hack4Impact Screenshot"
          width={1200}
          height={630}
          className="rounded-xl w-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>
          Many nonprofits lack the technical resources to build the software they need. 
          At the same time, student developers are hungry for real-world projects that make a difference. 
          Hack4Impact brings the two together. 
          We partner with nonprofits to build custom tools while giving students the chance to grow as engineers, designers, collaborators, and leaders. 
          <br></br>
          <br></br>
          Over the past three semesters, I&apos;ve helped shape the University of Tennessee chapter by writing my first lines of production code, leading recruiting efforts, and launching new projects. 
          Along the way, I learned how to work on a real development team, mentor others, and build systems designed to last beyond a single semester.
        </p>
      </section>

    {/* Roles*/}
    <section className="mb-10 border-t border-gray-200 pt-6">
      <h2 className="text-xl font-semibold mb-4">My Roles</h2>

      <div className="grid gap-4">
        <div className="relative rounded-xl border border-gray-200 p-4 hover:shadow-sm transition">
          <div className="absolute top-4 right-4 text-xs text-gray-400">2023-2024</div>
          <h3 className="text-lg font-medium mb-1">Junior Developer</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Built full-stack features using the MERN stack</li>
            <li>Collaborated in a structured student dev team</li>
            <li>Learned Git  and development workflows, Agile, and pair programming</li>
          </ul>
        </div>

        <div className="relative rounded-xl border border-gray-200 p-4 hover:shadow-sm transition">
          <div className="absolute top-4 right-4 text-xs text-gray-400">2023-2024</div>
          <h3 className="text-lg font-medium mb-1">Project Sourcing</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Networked with Knoxville nonprofits</li>
            <li>Identified and scoped projects aligned with our mission</li>
            <li>Launched four new nonprofit partnerships</li>
          </ul>
        </div>
        
        <div className="relative rounded-xl border border-gray-200 p-4 hover:shadow-sm transition">
          <div className="absolute top-4 right-4 text-xs text-gray-400">2024-2025</div>
          <h3 className="text-lg font-medium mb-1">Tech Lead</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Led a team of seven junior developers</li>
            <li>Facilitated Agile standups, sprints, and code reviews</li>
            <li>Mentored developers and helped them ramp up quickly</li>
          </ul>
        </div>

        <div className="relative rounded-xl border border-gray-200 p-4 hover:shadow-sm transition">
          <div className="absolute top-4 right-4 text-xs text-gray-400">2024-2025</div>
          <h3 className="text-lg font-medium mb-1">Director of Talent Sourcing</h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Rebuilt our recruiting funnel to raise the bar on talent</li>
            <li>Interviewed 80+ applicants and redefined our evaluation rubrics</li>
            <li>Created onboarding and technical documentation in Notion to help new team members hit the ground running</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Impact Section*/}
    <section className="mb-10 border-t border-gray-200 pt-6">
      <h2 className="text-xl font-semibold mb-4">The Impact</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6 text-center text-gray-800">
          <div>
            <p className="text-4xl font-bold">30+</p>
            <p className="text-sm text-gray-500">Developers Onboarded</p>
          </div>
          <div>
            <p className="text-4xl font-bold">3</p>
            <p className="text-sm text-gray-500">Nonprofit Tools Added <br></br>to Production</p>
          </div>
          <div>
            <p className="text-4xl font-bold">50%</p>
            <p className="text-sm text-gray-500">Onboarding Time Reduction</p>
          </div>
          <div>
            <p className="text-4xl font-bold">80+</p>
            <p className="text-sm text-gray-500">Candidates Interviewed</p>
          </div>
        </div>

        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
          “The tool your team built has completely changed the way we serve our community. Thank you for everything.” - Nonprofit Partner
        </blockquote>

        <p className="text-gray-700">
          I helped build systems that brought structure to our team, created space for new developers to grow, and made our chapter more capable with each semester.
        </p>
      </div>
    </section>
  
        {/* Skills*/}
      <section className="border-t border-gray-200 pt-6 pb-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Tech Stack Icons */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { src: '/icons/react.svg', alt: 'React', link: 'https://react.dev' },
                { src: '/icons/nodedotjs.svg', alt: 'Node.js', link: 'https://nodejs.org' },
                { src: '/icons/express.svg', alt: 'Express', link: 'https://expressjs.com' },
                { src: '/icons/mongodb.svg', alt: 'MongoDB', link: 'https://mongodb.com' },
                { src: '/icons/typescript.svg', alt: 'TypeScript', link: 'https://www.typescriptlang.org/' },
                { src: '/icons/github.svg', alt: 'GitHub', link: 'https://github.com' },
                { src: '/icons/figma.svg', alt: 'Figma', link: 'https://figma.com' },
                { src: '/icons/notion.svg', alt: 'Notion', link: 'https://notion.so' },
              ].map(({ src, alt, link }) => (
                <a
                  key={src}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gray-100 flex items-center justify-center w-14 h-14 transition hover:scale-105"
                >
                  <img src={src} alt={alt} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Learn More</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://utk.hack4impact.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Hack4ImpactUTK Website
                </a>
              </li>              
              <li>
                <a href="https://github.com/hack4impact-utk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Hack4ImpactUTK GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
