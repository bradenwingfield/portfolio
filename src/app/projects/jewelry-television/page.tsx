import Image from 'next/image'

export default function JTVPage() {
  return (
    <main className="pt-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Jewelry Television</h1>
      <p className="text-gray-500 mb-6">
        Cut inventory processing time by 27% and unlocked $10M in revenue for a national retailer using Lean Six Sigma.
      </p>

      <div className="mb-10">
        <Image
          src="/JTV.png"
          alt="Jewelry Television Screenshot"
          width={1200}
          height={630}
          className="rounded-xl w-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Overview</h2>
        <p>
        As part of the Heath Integrated Business and Engineering Program (HIBEP), I worked with Jewelry Television to streamline their inbound inventory workflow. 
        Over 16 weeks, my team applied Lean Six Sigma and the DMAIC framework to redesign warehouse processes, analyze over 100,000 rows of inventory data, and pilot a new weight-based counting system.
        <br></br>
        <br></br>
        <strong>Due to an NDA, some project details have been anonymized.</strong>
        </p>
      </section>

      <section className="mb-10 grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
          The existing inbound inventory workflow was slower than industry standards and created operational bottlenecks. 
          These inefficiencies limited the company&apos;s ability to meet customer demand and respond quickly to changes in the market.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Role</h2>
          <p>
          I contributed to process mapping, data analysis, and on-site testing. 
          I developed internal software to analyze operational data, collaborated with stakeholders to identify pain points, and helped design and implement pilot solutions that informed the final rollout strategy.          </p>
        </div>
      </section>

      <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Approach</h2>
        <p>
            We followed the DMAIC framework to guide our work:
        </p>
        <ul className="list-disc list-inside text-l space-y-1.5">
            <li><strong>Define:</strong> Collaborated with stakeholders to clarify goals and narrow the project scope.</li>
            <li><strong>Measure:</strong> Collected and analyzed operational data to understand current performance.</li>
            <li><strong>Analyze:</strong> Identified key bottlenecks and root causes through site visits and feedback.</li>
            <li><strong>Improve:</strong> Developed and tested solutions.</li>
            <li><strong>Control:</strong> Delivered documentation, training materials, and recommendations to support long-term adoption.</li>
          </ul>
      </section>

        {/* Impact Section*/}
        <section className="mb-10 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-4">The Outcome</h2>
        <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6 text-center text-gray-800">
            <div>
                <p className="text-4xl font-bold">$10M</p>
                <p className="text-sm text-gray-500">Annual Impact</p>
            </div>
            <div>
                <p className="text-4xl font-bold">60%</p>
                <p className="text-sm text-gray-500">Reduction in Counting Time</p>
            </div>
            <div>
                <p className="text-4xl font-bold">27%</p>
                <p className="text-sm text-gray-500">Faster Inbound Inventory Workflow</p>
            </div>
            </div>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                "We immediately saw improvement from the reconfiguration." - JTV Stakeholder 
            </blockquote>

            <p className="text-gray-700">
                I helped design and implement a process that improved speed, accuracy, and sustainability for a national retailer. 
                The experience deepened my understanding of operational systems and showed me how thoughtful design can drive measurable business results.            
            </p>
        </div>
        </section>
  
        {/* Skills*/}
      <section className="border-t border-gray-200 pt-6 pb-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Tech Stack Icons */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { src: '/icons/python.svg', alt: 'Python', link: 'https://www.python.org/://react.dev' },
                { src: '/icons/googlesheets.svg', alt: 'Google Sheets', link: 'https://workspace.google.com/products/sheets/' },
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
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://jtv.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  JTV Website
                </a>
              </li>
              <li>
                <a href="https://integrate.utk.edu/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  HIBEP Website
                </a>
              </li>                   
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
