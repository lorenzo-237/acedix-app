'use client';

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
import { Version } from '@/models';

export type AddVersionProps = {
  add?: (newVersion: Version) => void;
  projectName: string;
};

// TODO : Create custom hook useVersion()
// TODO : Create Version Form
export default function AddVersionButton(props: AddVersionProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className='mr-2 h-4 w-4' />
          Add version
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>New version</DialogTitle>
          <DialogDescription>Create a new version for {props.projectName}</DialogDescription>
        </DialogHeader>
        {/* <FormCreateProject add={props.add} setOpen={setOpen} /> */}
      </DialogContent>
    </Dialog>
  );
}
