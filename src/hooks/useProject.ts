import { Project } from '@/models';
import { useEffect, useState } from 'react';
import { mockProjects } from '@/mocks/projects';

type UpdateProjectDto = {
  name: string;
  description: string;
};

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  const addProject = (newProject: Project) => {
    setProjects([...projects, newProject]);
  };

  const updateProject = (projectId: number, payload: UpdateProjectDto) => {
    const newProjects = projects.map((p) => (p.id === projectId ? { ...p, ...payload } : p));
    setProjects(newProjects);
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
    updateProject,
  };
};

export default useProjects;
