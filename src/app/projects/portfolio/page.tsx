import Image from 'next/image'

export default function PortfolioPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Personal Portfolio Website</h1>
      <p className="text-gray-500 mb-6">A minimal site to showcase my work and get hired</p>

      <div className="mb-10">
        <Image
          src="/project-placeholder.jpg"
          alt="Portfolio Screenshot"
          width={1200}
          height={630}
          className="rounded-xl w-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>
          Built from scratch using Next.js 15, App Router, and Tailwind CSS. Designed to reflect my
          personal brand and showcase projects in a clean, case study format.
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            I needed a personal site to professionally showcase my work and stand out to recruiters.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <p>
            Designed and developed the entire frontend. Wrote all copy and case study content.
          </p>
        </div>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Approach</h2>
        <p>
          Used a content-focused design inspired by Apple and Notion. Built reusable components and
          focused on fast page loads and SEO.
        </p>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Outcome</h2>
        <p>
          Got immediate positive feedback from mentors and recruiters. Used it successfully in job applications.
        </p>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">Reflection</h2>
        <p>
          This project taught me how important personal storytelling is in tech. I&apos;d like to experiment
          with adding more interactivity and blog posts next.
        </p>
      </section>

      <section className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Next.js</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">React</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Tailwind CSS</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">TypeScript</span>
        </div>
        <div className="flex flex-col gap-2 text-blue-600 text-sm">
          <a href="https://bradenwingfield.com/404" target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </div>
      </section>
    </main>
  )
}
