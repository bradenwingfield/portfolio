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
          Across three semesters, I helped shape the University of Tennessee chapter of Hack4Impact, a student organization that partners with nonprofits to build meaningful software.
          My journey included roles in development, leadership, and recruiting, all focused on growing both our technical impact and the people behind it.
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            Nonprofits often rely on outdated systems or generic tools that don&apos;t fit their mission.
            At the same time, student developers are eager to learn by doing but lack structured, impactful opportunities.
            Hack4Impact solves both problems by building custom tools for nonprofits while giving students real-world experience in software development.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Developer (Learning-Based Project):</strong> Built full-stack features, collaborated with peers, and learned Git workflows.
            </li>
            <li>
              <strong>Tech Lead:</strong> Led a team of developers, ran standups, reviewed pull requests, and helped ship on time.
            </li>
            <li>
              <strong>Project Sourcing:</strong> Identified mission-driven nonprofits and evaluated alignment with our team capacity.
            </li>
            <li>
              <strong>Director of Talent Sourcing:</strong> Interviewed over 60 applicants, rebuilt the recruiting funnel, and improved candidate quality.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Approach</h2>
        <p>
          We used the MERN stack, GitHub for version control, Figma for design, and Notion for documentation. 
          As a tech lead, I improved Git workflows using VS Code&apos;s Source Control tab, helped junior developers grow through pair programming, and created onboarding materials to streamline ramp-up time.
          As Director, I developed a scoring rubric and coordinated recruitment timelines to align with the needs of engineering and design leadership.
        </p>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Impact</h2>
        <p>
          I interviewed over 60 applicants, helped onboard 30+ students, and contributed to 3 nonprofit projects that are now in active use. 
          We cut onboarding time nearly in half and created a culture where new developers could confidently contribute, collaborate, and deliver. 
          I learned how to build processes that scale, lead with clarity, and empower others to grow. 
          If I could do one thing differently, I would have documented our systems earlier — structure was key to moving faster.
        </p>
      </section>

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
                  key={alt}
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
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com/your-repo" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </li>
              <li>
                <a href="https://hack4impactutk.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Hack4Impact @ UTK
                </a>
              </li>
              <li>
                <a href="https://yourblog.com/project-post" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Blog Post / Reflection
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
