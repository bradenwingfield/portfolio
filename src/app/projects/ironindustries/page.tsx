import Image from 'next/image'

export default function IronIndustriesPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      {/* Title & Subtitle */}
      <h1 className="text-4xl font-bold mb-2">IronIndustries</h1>
      <p className="text-gray-500 mb-6">Assessed client operations and applied 3D printing processes that streamlined production, improved margins, and fulfilled 1000+ orders.</p>

      {/* Hero Image */}
      <div className="mb-10">
        <Image
          src="/ironindustries.png"
          alt="IronIndustries Screenshot"
          width={1200}
          height={630}
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>
        IronIndustries was a 3D printing consulting and production business I founded to help clients integrate additive manufacturing into their existing workflows. Over two years, I scaled operations to fulfill more than 1000 orders, streamlining production and improving client margins through tailored 3D printing solutions.        </p>
      </section>

      {/* Approach */}
      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Problem</h2>
        <ul className="list-disc list-inside text-l space-y-1.5">
          <li>High costs and long lead times from outsourcing or traditional methods</li>
          <li>Difficulty integrating custom or low-volume parts into existing workflows</li>
          <li>Limited understanding of where additive manufacturing could provide real value</li>
        </ul>
      </section>

      {/* Problem + Role */}
      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Approach</h2>
          <p>
          I assessed client operations, identified inefficiencies, and applied 3D printing processes to improve cost, quality, and speed. This included CAD design, production scheduling across multiple 3D printers, quality control systems, and iterative refinement based on client feedback.  
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">The Outcome</h2>
          <p>
          The business fulfilled more than 1000 client orders while delivering measurable improvements in efficiency and profitability. The venture was validated by winning the 2023 Cleveland State Community College Student Shark Tank competition, highlighting both execution and strategic impact.
          </p>
        </div>
      </section>

    </main>
  )
}
