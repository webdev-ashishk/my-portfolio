import Link from "next/link";

const ProjectCard = ({ projectData }) => {
  return (
    <div className="border-2 w-[300px] h-[300px] bg-blue-500 cursor-pointer">
      <Link href="https://github.com/webdev-ashishk" target="_blank">
        <h1>{projectData.projectName}</h1>
        <p>{projectData.projectTechStack}</p>

        <h2>Github-Page</h2>
      </Link>
    </div>
  );
};

export default ProjectCard;
