import Image from 'next/image'

export default function DragRacingAppPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      {/* Title & Subtitle */}
      <h1 className="text-4xl font-bold mb-2">Drag Racing Time Tracker</h1>
      <p className="text-gray-500 mb-6">Predict and log drag race times using real-world data</p>

      {/* Hero Image */}
      <div className="mb-10">
        <Image
          src="/project-placeholder.jpg"
          alt="Drag Racing App Screenshot"
          width={1200}
          height={630}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>
          A mobile app built with React Native and Expo that helps drag racers log race data and
          predict future times using patterns in their historical performance. Designed for simplicity,
          accuracy, and real-time use at the track.
        </p>
      </section>

      {/* Problem + Role */}
      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            Racers lack an easy way to log and analyze times without using bulky spreadsheets or manual
            note-taking. We needed something mobile, intuitive, and fast.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <p>
            Led frontend development using Expo. Designed the user interface and implemented time
            prediction logic. Handled testing on real devices.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Approach</h2>
        <p>
          I built the app using React Native and Expo to support both Android and iOS quickly. Times
          were stored locally using async storage. I focused on fast input, clean visualizations, and
          a predictive algorithm based on average reaction time.
        </p>
      </section>

      {/* Outcome */}
      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Outcome</h2>
        <p>
          The app was tested with local racers and praised for its ease of use. One user said, “This
          feels like something NHRA should’ve made years ago.” The prediction accuracy was within
          0.12s on average over 10 races.
        </p>
      </section>

      {/* Tech Stack & Links */}
      <section className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">React Native</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Expo</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">TypeScript</span>
        </div>
        <div className="flex flex-col gap-2 text-blue-600 text-sm">
          <a href="bradenwingfield.com/404" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          <a href="bradenwingfield.com/404" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </section>
    </main>
  )
}
