import React from 'react';
import { mockVersions } from '@/mocks/versions';
import { mockProjects } from '@/mocks/projects';
import { columns } from './columns';
import { DataTable } from './data-table';
import AcedixTitleWithSeparator from '@/components/utils/acedix-title-with-sep';
import AddVersionButton from '@/components/versions/add-version-button';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const versions = mockVersions;
  const project = mockProjects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className='space-between flex items-center'>
        <div className='ml-auto mr-4'>
          <AddVersionButton projectName={project.name} />
        </div>
      </div>
      <AcedixTitleWithSeparator title={project.name} description={project.description} />
      <DataTable columns={columns} data={versions} />
    </div>
  );
}
