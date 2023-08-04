import {getProjects} from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-2xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hey I'm
        <span className="bg-gradient-to-r from-orange-500  to-black bg-clip-text text-transparent"> Potato</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Welcome to potato land!</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover  rounded-lg boder border-gray-500"
              />
            )}
            <div className="font-extrabold bg-gradient-to-r from-orange-500 to to-black bg-clip-text text-transparent p-1">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
