import { Project } from '@/models';
import { useEffect, useState } from 'react';
import { mockProjects } from '@/mocks/projects';

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  const addProject = (newProject: Project) => {
    setProjects([...projects, newProject]);
  };

  const toggleFavorite = (projectId: number) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId ? { ...project, isFavorite: !project.isFavorite } : project
      )
    );
  };

  return {
    projects,
    addProject,
    toggleFavorite,
  };
};

export default useProjects;
