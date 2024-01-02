import React, { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Project } from '@/models';
import { Button } from '../ui/button';
import { UpdateProjectDto } from '@/types/projects';
import FormUpdateProject from './form-update-project';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Pencil } from 'lucide-react';

type UpdateProjectButtonProps = {
  project: Project;
  updateProject: (projectId: number, payload: UpdateProjectDto) => void;
};

export default function UpdateProjectButton({ project, updateProject }: UpdateProjectButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Tooltip>
          <TooltipTrigger>
            <Button variant='ghost' size='icon'>
              <Pencil className='text-primary' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit project</p>
          </TooltipContent>
        </Tooltip>
      </SheetTrigger>
      <SheetContent className='w-[400px] sm:w-[540px]'>
        <SheetHeader>
          <SheetTitle>Edit project</SheetTitle>
          <SheetDescription>
            Make changes to <b>{project.name}</b> here. Click save when {"you're"} done.
            <FormUpdateProject setOpen={setOpen} project={project} updateProject={updateProject} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
