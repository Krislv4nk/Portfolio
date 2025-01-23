const ProjectCard = ({ project }) => {
  return (
    <div className="project-card p-4 border rounded shadow-lg">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <a href={project.link} className="mt-4 inline-block text-blue-600 hover:underline">Learn more</a>
    </div>
  );
};

export default ProjectCard;
