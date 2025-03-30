import Image from 'next/image'

export default function Hack4ImpactProjectPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Hack4Impact MVP</h1>
      <p className="text-gray-500 mb-6">Connecting nonprofits with student volunteers</p>

      <div className="mb-10">
        <Image
          src="/project-placeholder.jpg"
          alt="Hack4Impact MVP Screenshot"
          width={1200}
          height={630}
          className="rounded-xl w-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>
          An MVP web platform built to match nonprofits with student developers. Focused on simplicity,
          impact, and enabling project management at scale.
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            Nonprofits needed tech help, but lacked easy access to student developers in Knoxville.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <p>
            Led development team, structured the database and backend APIs, and helped define the initial UX.
          </p>
        </div>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Approach</h2>
        <p>
          Built using the MERN stack for rapid development. Focused on modular components, easy filtering
          for volunteer roles, and simple admin dashboards.
        </p>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Outcome</h2>
        <p>
          Onboarded 4 nonprofits and 30+ students. Enabled project collaboration in less than 2 weeks.
        </p>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">Reflection</h2>
        <p>
          Learned the importance of balancing MVP speed with future maintainability in real nonprofit settings.
        </p>
      </section>

      <section className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">React</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">MongoDB</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Node.js</span>
        </div>
      </section>
    </main>
  )
}
