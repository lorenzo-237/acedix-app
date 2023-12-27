import React from 'react';
import { mockVersions } from '@/mocks/versions';
export default function ProjectPage({ params }: { params: { id: string } }) {
  const versions = mockVersions;

  return (
    <div>
      <h1>ProjectPage {params.id}</h1>
      <ul>
        {versions.map((version) => (
          <li key={version.id}>{version.name}</li>
        ))}
      </ul>
    </div>
  );
}
