'use client';

import { Project } from '@/models';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import TeamLine from './team-line';

export type TeamMembersProps = {
  project: Project;
};

export function TeamMembers({ project }: TeamMembersProps) {
  if (!project.users)
    return (
      <Card>
        <CardHeader>
          <CardTitle>Problem</CardTitle>
          <CardDescription>No users found.</CardDescription>
        </CardHeader>
      </Card>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>Invite your team members to collaborate.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-6'>
        {project.users.map((user) => (
          <TeamLine key={user.id} user={user} />
        ))}
      </CardContent>
    </Card>
  );
}
