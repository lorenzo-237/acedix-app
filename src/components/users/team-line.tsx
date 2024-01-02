import React from 'react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { ChevronDownIcon } from 'lucide-react';
import { User } from '@/models';

export type TeamLineProps = {
  user: User;
};

// TODO : complete the component with more infos from API (lastname, firtname, roles)
function TeamLine({ user }: TeamLineProps) {
  return (
    <div className='flex items-center justify-between space-x-4'>
      <div className='flex items-center space-x-4'>
        <Avatar>
          <AvatarFallback>{user.username.slice(0, 2).toLocaleUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <p className='text-sm font-medium leading-none'>{user.username}</p>
          <p className='text-sm text-muted-foreground'>{user.email}</p>
        </div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' className='ml-auto'>
            Owner <ChevronDownIcon className='ml-2 h-4 w-4 text-muted-foreground' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0' align='end'>
          <Command>
            <CommandInput placeholder='Select new role...' />
            <CommandList>
              <CommandEmpty>No roles found.</CommandEmpty>
              <CommandGroup>
                <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                  <p>Viewer</p>
                  <p className='text-sm text-muted-foreground'>Can view and comment.</p>
                </CommandItem>
                <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                  <p>Developer</p>
                  <p className='text-sm text-muted-foreground'>Can view, comment and edit.</p>
                </CommandItem>
                <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                  <p>Billing</p>
                  <p className='text-sm text-muted-foreground'>Can view, comment and manage billing.</p>
                </CommandItem>
                <CommandItem className='teamaspace-y-1 flex flex-col items-start px-4 py-2'>
                  <p>Owner</p>
                  <p className='text-sm text-muted-foreground'>Admin-level access to all resources.</p>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default TeamLine;
