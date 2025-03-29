export default function PortfolioPage() {
    return (
      <main className="pt-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Personal Portfolio Website</h1>
        <p className="text-gray-600 text-lg mb-6">
          The site you're browsing now — designed to showcase my work with a focus on clean UI, responsiveness, and a smooth dev experience using the App Router, TypeScript, and Tailwind.
        </p>
        <img
          src="/project-placeholder.jpg"
          alt="Portfolio Website Screenshot"
          className="rounded-xl w-full mb-6"
        />
        <div className="text-sm text-gray-500">
          <strong>Stack:</strong> Next.js, React, Tailwind CSS, TypeScript
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