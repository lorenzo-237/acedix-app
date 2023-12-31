import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Project } from '@/models';
import { Star, StarOff } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { useToast } from '../ui/use-toast';
import Link from 'next/link';
import { formatDateTimeToString } from '@/lib/dates';
import { UpdateProjectDto } from '@/types/projects';
import UpdateProjectButton from './update-project-button';

type ProjectCardProps = {
  project: Project;
  toggleFavorite: (projectId: number) => void;
  updateProject: (projectId: number, payload: UpdateProjectDto) => void;
};

// TODO : update logic here (sheet)
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
        <div className='space-x-2'>
          <Button asChild className='w-16'>
            <Link href={`/projects/${project.id}`}>Open</Link>
          </Button>
          <UpdateProjectButton project={project} updateProject={updateProject} />
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
