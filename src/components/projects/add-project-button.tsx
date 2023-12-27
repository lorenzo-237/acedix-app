import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import { Button } from '../ui/button';
import FormCreateProject from './form-create-project';
import { Project } from '@/models';

export type AddProjectProps = {
  add: (newProject: Project) => void;
};

export default function AddProjectButton(props: AddProjectProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className='mr-2 h-4 w-4' />
          Add project
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>New project</DialogTitle>
          <DialogDescription>Create a new project</DialogDescription>
        </DialogHeader>
        <FormCreateProject add={props.add} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
