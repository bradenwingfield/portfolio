export default function DragRacingAppPage() {
    return (
      <main className="pt-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Drag Racing Time Tracker</h1>
        <p className="text-gray-600 text-lg mb-6">
          A mobile app to predict and log drag race times using React Native and Expo. Built for iOS with a focus on real-world racing data input and predictive analysis.
        </p>
        <img
          src="/project-placeholder.jpg"
          alt="Drag Racing App Screenshot"
          className="rounded-xl w-full mb-6"
        />
        <div className="text-sm text-gray-500">
          <strong>Stack:</strong> React Native, Expo, TypeScript
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