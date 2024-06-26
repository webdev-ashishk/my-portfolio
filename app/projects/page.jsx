"use client";

import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const data = [
    {
      id: "1",
      projectName: "Youtube contant organizing-1",
      projectTechStack: "nextjs",
    },
    {
      id: "2",
      projectName: "Youtube contant organizing-2",
      projectTechStack: "nextjs",
    },
    {
      id: "3",
      projectName: "Youtube contant organizing-3",
      projectTechStack: "nextjs",
    },
    {
      id: "4",
      projectName: "Youtube contant organizing-4",
      projectTechStack: "nextjs",
    },
  ];
  console.log(data);
  console.log("love");
  return (
    <div className="flex flex-wrap gap-10 m-5 px-20 py-5">
      {data.map((singleProject) => (
        <ProjectCard key={singleProject.id} projectData={singleProject} />
      ))}
    </div>
  );
};

export default Projects;
