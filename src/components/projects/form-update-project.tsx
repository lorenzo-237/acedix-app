'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { TUpdateProjectSchema, UpdateProjectDto, updateProjectSchema } from '@/types/projects';
import { Project } from '@/models';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';
import { TeamMembers } from '../users/team-members';

type FormProps = {
  project: Project;
  updateProject: (projectId: number, payload: UpdateProjectDto) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FormUpdateProject(props: FormProps) {
  const { toast } = useToast();

  const form = useForm<TUpdateProjectSchema>({
    resolver: zodResolver(updateProjectSchema),
    defaultValues: {
      name: props.project.name,
      description: props.project.description,
    },
  });

  const onSubmit = (values: TUpdateProjectSchema) => {
    console.log(values);
    props.updateProject(props.project.id, { description: values.description, name: values.name });
    props.setOpen(false);
    toast({
      title: 'Project: ',
      description: 'Project updated successfully.',
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
        <Button type='submit'>Save changes</Button>
      </form>
      <TeamMembers />
    </Form>
  );
}
