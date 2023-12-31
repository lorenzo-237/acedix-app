'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/models';
import { BookUp2, Star, StarOff } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { useToast } from '../ui/use-toast';
import Link from 'next/link';
import { formatDateTimeToString } from '@/lib/dates';
import { UpdateProjectDto } from '@/types/projects';
import UpdateProjectButton from './update-project-button';
import DeleteProjectIcon from './delete-project-icon';

type ProjectCardProps = {
  project: Project;
  toggleFavorite: (projectId: number) => void;
  updateProject: (projectId: number, payload: UpdateProjectDto) => void;
};

// TODO : delete logic here (for admin)
export function ProjectCard({ project, toggleFavorite, updateProject }: ProjectCardProps) {
  const { toast } = useToast();

  const setFavorite = () => {
    const message = project.isFavorite ? 'Project removed from favorite.' : 'Project added to favorites.';
    toast({
      title: 'Favorite: ' + project.name,
      description: message,
    });
    toggleFavorite(project.id);
  };

  return (
    <Card className='w-[320px]'>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>Updated at : {formatDateTimeToString(project.updatedAt)}</CardDescription>
      </CardHeader>
      <CardFooter className='flex items-center justify-between'>
        <div className='space-x-2 flex items-center'>
          <AddProjectButton projectId={project.id} />
          <UpdateProjectButton project={project} updateProject={updateProject} />
          <DeleteProjectIcon />
        </div>
        <Button variant='ghost' size='icon' onClick={setFavorite}>
          <Tooltip>
            <TooltipTrigger>
              {project.isFavorite ? <Star className='text-primary' /> : <StarOff className='text-primary' />}
            </TooltipTrigger>
            <TooltipContent>{project.isFavorite ? <p>Remove favorite</p> : <p>Add favorite</p>}</TooltipContent>
          </Tooltip>
        </Button>
      </CardFooter>
    </Card>
  );
}

function AddProjectButton({ projectId }: { projectId: number }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button asChild variant='ghost' size='icon'>
          <Link href={`/projects/${projectId}`}>
            <BookUp2 className='text-primary' />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Open project</p>
      </TooltipContent>
    </Tooltip>
  );
}
