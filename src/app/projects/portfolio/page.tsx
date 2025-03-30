import Image from 'next/image'

export default function PortfolioPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Personal Portfolio Website</h1>
      <p className="text-gray-500 mb-6">The site you&apos;re browsing right now was built from the ground up to showcase my work with a clean, responsive UI.</p>

      <div className="mb-10">
        <Image
          src="/personal_portfolio_website.png"
          alt="Portfolio Screenshot"
          width={1200}
          height={630}
          className="rounded-xl w-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>
        Developed using Next.js 15, the App Router, and Tailwind CSS, and deployed on Vercel. 
        The site is designed to reflect my personal brand and highlight my projects in a structured, case study format.
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            I needed a professional online presence to showcase my work, tell my story, and stand out to recruiters.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <p>
            I was responsible for the entire project: designing and building the frontend, writing all copy, and crafting the case studies.
          </p>
        </div>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Approach</h2>
        <p>
        I drew inspiration from Apple and Notion, focusing on content-first design with clean typography and intentional spacing. 
        I built reusable components, optimized for fast load times, and implemented SEO best practices to improve visibility.
        </p>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Outcome</h2>
        <p>
        The site received positive feedback from mentors and recruiters and has helped me stand out in job applications by clearly communicating my work and process. 
        It consistently scores 100 across all categories in Google Lighthouse, including performance, accessibility, best practices, and SEO. 
        Building this project taught me the importance of personal storytelling in tech and how design choices influence how your work is perceived. 
        </p>
      </section>

      <section className="border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Next.js</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">React</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Tailwind CSS</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">TypeScript</span>
          <span className="bg-gray-100 px-3 py-1 rounded-md text-sm">Vercel</span>
          <a href="https://github.com/bradenwingfield/portfolio" target="_blank" rel="noopener noreferrer">
            <span className="bg-gray-100 px-3 py-1 rounded-md text-sm underline">Github</span>
          </a>
        </div>
      </section>
    </main>
  )
}
