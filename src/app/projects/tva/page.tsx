export default function TVAPOCPage() {
    return (
      <main className="pt-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">TVA Proof of Concept</h1>
        <p className="text-gray-600 text-lg mb-6">
          Created a skeleton Angular/.NET app to demonstrate replacing a legacy system.
          The project parsed Excel files and introduced modern design patterns used in TVA’s future stack.
        </p>
        <img
          src="/project-placeholder.jpg"
          alt="TVA App Screenshot"
          className="rounded-xl w-full mb-6"
        />
        <div className="text-sm text-gray-500">
          <strong>Stack:</strong> Angular, .NET, ExcelJS
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
  