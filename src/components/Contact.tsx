import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="w-full px-6 py-24 max-w-4xl mx-auto text-center" id="contact">
      {/* Heading + Message */}
      <h2 className="text-3xl font-semibold text-black mb-4">Let&apos;s Connect</h2>
      <p className="text-gray-600 text-lg mb-4">
        If you&apos;re interested in my work or have an opportunity in mind, I&apos;d love to hear from you.
      </p>

      {/* Actions: Email + Resume */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
        <a
          href="mailto:bradenwingfieldcareers@gmail.com"
          className="text-blue-600 hover:underline text-lg"
        >
          bradenwingfieldcareers@gmail.com
        </a>

        <span className="hidden md:inline-block text-gray-400">|</span>

        <a
          href="/Wingfield, Braden Resume.pdf"
          download
          className="inline-block px-5 py-3 rounded-xl border border-gray-300 text-black font-medium hover:bg-gray-100 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl text-gray-700">
        <a href="https://github.com/bradenwingfield" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-black transition" />
        </a>
        <a href="https://linkedin.com/in/bradenwingfield" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-black transition" />
        </a>
      </div>
    </section>
  )
}
