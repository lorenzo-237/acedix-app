import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/models';
import { Star, StarOff } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { useToast } from '../ui/use-toast';
import Link from 'next/link';
import { formatDateTimeToString } from '@/lib/dates';

type ProjectCardProps = {
  project: Project;
  toggleFavorite: (projectId: number) => void;
};

// TODO : update logic here (sheet)
// TODO : delete logic here (for admin)
export function ProjectCard({ project, toggleFavorite }: ProjectCardProps) {
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
        <Button asChild>
          <Link href={`/projects/${project.id}`}>Open</Link>
        </Button>
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
