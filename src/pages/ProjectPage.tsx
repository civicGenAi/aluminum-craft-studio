import { useParams } from "react-router-dom";
import ProjectDetail from "@/components/ProjectDetail";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();

  return <ProjectDetail id={id || ""} />;
};

export default ProjectPage;
