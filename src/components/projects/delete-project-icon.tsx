import { Trash2 } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function DeleteProjectIcon() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant='ghost' size='icon'>
          <Trash2 className='text-destructive' />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Delete project</p>
      </TooltipContent>
    </Tooltip>
  );
}
