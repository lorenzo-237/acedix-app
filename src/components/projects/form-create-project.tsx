'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { TCreateProjectSchema, createProjectSchema } from '@/types/projects';
import { Project } from '@/models';
import { DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

type FormProps = {
  add: (newProject: Project) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FormCreateProject(props: FormProps) {
  const { toast } = useToast();

  const form = useForm<TCreateProjectSchema>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  const onSubmit = (values: TCreateProjectSchema) => {
    console.log(values);
    const project: Project = {
      id: new Date().getDate(),
      name: values.name,
      description: values.description,
      createdById: 101,
      createdAt: new Date('2023-01-01'),
      updatedById: 102,
      updatedAt: new Date('2023-01-10'),
      lastDate: new Date('2023-02-01'),
      isFavorite: false,
    };
    props.add(project);
    props.setOpen(false);
    toast({
      title: 'Project: ' + project.name,
      description: 'Project created successfully.',
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-4 py-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Project name' {...field} />
              </FormControl>
              <FormDescription>This is your unique project name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />{' '}
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='description...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type='submit'>Create</Button>
        </DialogFooter>
      </form>
    </Form>
  );
}
