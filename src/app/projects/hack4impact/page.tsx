export default function Hack4ImpactPage() {
    return (
      <main className="pt-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Hack4Impact MVP</h1>
        <p className="text-gray-600 text-lg mb-6">
          Led development for a web app connecting nonprofits with student volunteers. Focused on intuitive UI, fast load times, and collaboration features.
        </p>
        <img
          src="/project-placeholder.jpg"
          alt="Hack4Impact MVP Screenshot"
          className="rounded-xl w-full mb-6"
        />
        <div className="text-sm text-gray-500">
          <strong>Stack:</strong> React, MongoDB, Node.js
        </div>
        <a
          href="/projects"
          className="inline-block mt-10 text-blue-600 hover:underline"
        >
          ← Back to Projects
        </a>
      </main>
    )
  }