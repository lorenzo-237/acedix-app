'use client';

import AddProjectButton from '@/components/projects/add-project-button';
import { ProjectCard } from '@/components/projects/project-card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useProjects from '@/hooks/useProject';

export default function Projects() {
  const { projects, addProject, toggleFavorite } = useProjects();

  return (
    <div className=''>
      <Tabs defaultValue='favorites' className=''>
        <div className='space-between flex items-center'>
          <TabsList>
            <TabsTrigger value='favorites'>Favorites</TabsTrigger>
            <TabsTrigger value='all'>All</TabsTrigger>
            <TabsTrigger value='manage' disabled>
              Manage
            </TabsTrigger>
          </TabsList>
          <div className='ml-auto mr-4'>
            <AddProjectButton add={addProject} />
          </div>
        </div>
        <TabsContent value='favorites'>
          <div className='flex items-center justify-between'>
            <div className='space-y-1'>
              <h2 className='text-2xl font-semibold tracking-tight'>Favorites</h2>
              <p className='text-sm text-muted-foreground'>Favorite projects.</p>
            </div>
          </div>
          <Separator className='my-4' />
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-2'>
            {projects
              .filter((project) => project.isFavorite)
              .map((project) => (
                <li key={project.id}>
                  <ProjectCard project={project} toggleFavorite={toggleFavorite} />
                </li>
              ))}
          </ul>
        </TabsContent>
        <TabsContent value='all'>
          <div className='flex items-center justify-between'>
            <div className='space-y-1'>
              <h2 className='text-2xl font-semibold tracking-tight'>All</h2>
              <p className='text-sm text-muted-foreground'>All projects where you belong to.</p>
            </div>
          </div>
          <Separator className='my-4' />
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-2'>
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} toggleFavorite={toggleFavorite} />
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}
