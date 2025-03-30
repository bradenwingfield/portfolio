import Image from 'next/image'

export default function TVAProjectPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">TVA Proof of Concept</h1>
      <p className="text-gray-500 mb-6">Replacing a legacy system with Angular/.NET</p>

      <div className="mb-10">
        <Image
          src="/project-placeholder.jpg"
          alt="TVA App Screenshot"
          width={1200}
          height={630}
          className="rounded-xl w-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>
          Created a skeleton Angular/.NET web app to replace an outdated internal tool used by employees
          at the Tennessee Valley Authority. Focused on maintainability, scalability, and integrating Excel data.
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            TVA was using a legacy application with an outdated UI and limited compatibility with new systems.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <p>
            Built the proof of concept frontend using Angular. Integrated file parsing for Excel sheets.
          </p>
        </div>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Approach</h2>
        <p>
          Used Angular for the frontend with .NET backend stubs. Parsed Excel with custom logic and focused
          on developer handoff for future scalability.
        </p>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Outcome</h2>
        <p>
          Delivered a successful proof of concept. Helped guide internal planning for full system replacement.
        </p>
      </section>

      <section className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Angular</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">.NET</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Excel Parsing</span>
        </div>
      </section>
    </main>
  )
}
