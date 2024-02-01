// import Layout from '../components/Layout';
// import ProjectCard from '....//components/ProjectCard';
// import ProjectStyles from '../../styles/Projects.module.css';
// import { getProjects } from '../../lib/projects';

// export default function Projects({ projects }) {
//   return (
//     <Layout>
//       <div className={ProjectStyles.container}>
//         <h1>My Projects</h1>
//         <div className={ProjectStyles.projectsContainer}>
//           {projects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const projects = getProjects();
//   return {
//     props: {
//       projects,
//     },
//   };
// }
