import Image from 'next/image'
import Link from 'next/link'

type ProjectProps = {
  slug: string
  title: string
  description: string
  image: string
}

export default function ProjectCard({ slug, title, description, image }: ProjectProps) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm transition hover:shadow-md">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={1200}
          height={600}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}
