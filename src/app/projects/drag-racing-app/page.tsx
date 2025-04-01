import Image from 'next/image'

export default function DragRacingAppPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      {/* Title & Subtitle */}
      <h1 className="text-4xl font-bold mb-2">Drag Racing Time Tracker</h1>
      <p className="text-gray-500 mb-6">An iOS and Android app to predict and log drag race times using real-world data.</p>

      {/* Hero Image */}
      <div className="mb-10">
        <Image
          src="/project-placeholder.png"
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
        A mobile app built with React Native and Expo that helps drag racers log race data and predict future times based on their historical performance and environmental conditions. 
        Designed for simplicity, accuracy, and real-time use at the track.
        </p>
      </section>

      {/* Problem + Role */}
      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            Racers lacked a lightweight, purpose-built tool to track and analyze performance. 
            Existing solutions like spreadsheets or manual notes were time-consuming, inconsistent, and not optimized for mobile use at the track.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <p>
            I led the full technical design and implementation of the app. This included frontend development, database architecture, authentication, time prediction logic, and camera-based time slip scanning. 
            I also built the logging system for weather conditions per lap to improve accuracy.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Approach</h2>
        <ul className="list-disc list-inside text-l space-y-1.5">
            <li>Built with React Native + Expo for fast cross-platform deployment</li>
            <li>Integrated Firebase for cloud-based data storage and user authentication</li>
            <li>Implemented time slip scanning using the device camera and OCR for quick data entry</li>
            <li>Logged weather conditions per lap, integrates with OpenWeatherMap API</li>
            <li>Designed a predictive model that uses historical ETs, reaction times, and logged weather to estimate future performance</li>
            <li>Focused on clean UI and fast input for use during real-world race events</li>
          </ul>
      </section>

      {/* Outcome */}
      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Outcome</h2>
        <p>
        The app is actively being developed.
        </p>
      </section>

        {/* Skills*/}
        <section className="border-t border-gray-200 pt-6 pb-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Tech Stack Icons */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { src: '/icons/expo.svg', alt: 'Expo', link: 'https://expo.dev/' },
                { src: '/icons/firebase.svg', alt: 'Firebase', link: 'https://firebase.google.com/' },
                { src: '/icons/react.svg', alt: 'React Native', link: 'https://reactnative.dev' },
                { src: '/icons/nodedotjs.svg', alt: 'Nodejs', link: 'https://nodejs.org/en' },
                { src: '/icons/javascript.svg', alt: 'Javascript', link: 'https://www.javascript.com/' },
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
                <a href="https://openweathermap.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  OpenWeatherMap API Website
                </a>
              </li>             
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
