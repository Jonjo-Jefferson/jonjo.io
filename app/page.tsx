import {getProjects} from '@/sanity/sanity-utils';

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="bg-red-50">
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </div>
  );
}
