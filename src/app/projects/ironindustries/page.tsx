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
        IronIndustries was a 3D printing consulting and production business I founded to help clients integrate additive manufacturing into their existing workflows. While in highschool, I scaled operations to fulfill more than 1000 orders, streamlining production and improving client margins through tailored 3D printing solutions.</p>
      </section>

      {/* Problem */}
      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Problem</h2>
        <p className="mb-2">Clients faced consistent barriers in their operations:</p>
        <ul className="list-disc list-outside pl-6 text-l space-y-1.5">
          <li>High costs and long lead times from outsourcing or traditional methods</li>
          <li>Difficulty integrating custom or low-volume parts into existing workflows</li>
          <li>Limited understanding of where additive manufacturing could provide real value</li>
        </ul>
      </section>



      {/* Approach */}
    <section className="mb-10 border-t border-gray-200 pt-6">          
      <h2 className="text-xl font-semibold mb-2">The Approach</h2>
        <p>
        I assessed client operations, identified inefficiencies, and applied 3D printing processes to improve cost, quality, and speed. This included CAD design, production scheduling across multiple 3D printers, quality control systems, and iterative refinement based on client feedback.  
        </p>
    </section>

      {/* Outcome*/}
      <section className="mb-10 border-t border-gray-200 pt-6">
      <h2 className="text-xl font-semibold mb-4">The Outcome</h2>
      <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6 text-center text-gray-800">
          <div>
              <p className="text-4xl font-bold">1000+</p>
              <p className="text-sm text-gray-500">Orders Fulfilled</p>
          </div>
          <div>
              <p className="text-4xl font-bold">28%</p>
              <p className="text-sm text-gray-500">Improvement in Client Profit Margins</p>
          </div>
          </div>
          <p className="text-gray-700">
          The business fulfilled more than 1000 client orders while delivering measurable improvements in efficiency and profitability. The venture was validated by winning the 2023 Cleveland State Community College Student Shark Tank competition, an award I earned while completing my Associate&apos;s degree in Entrepreneurship during high school. IronIndustries gave me first-hand experience guiding clients through technology adoption and managing projects from assessment to execution.
          </p>
      </div>
      </section>
    </main>
  )
}
