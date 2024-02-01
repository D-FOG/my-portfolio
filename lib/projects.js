import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export function getProjects() {
  const projectFiles = fs.readdirSync(projectsDirectory);

  const projects = projectFiles.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: filename.replace(/\.md$/, ''),
      ...matterResult.data,
    };
  });

  return projects;
}
