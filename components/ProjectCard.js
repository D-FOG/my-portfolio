import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <Link href={`/projects/${project.id}`}>
        <a>Read more</a>
      </Link>
    </div>
  );
}
