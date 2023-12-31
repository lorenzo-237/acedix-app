'use client';

import { KanbanSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ModeToggle } from '../ui/toggle-mode';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // any props
}

function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn(className)}>
      <div className='px-3 py-4'>
        <div className='mb-2 px-4 flex items-center space-x-2'>
          <KanbanSquare />
          <h2 className='text-lg font-semibold tracking-tight'>Acédix</h2>
        </div>

        <div className='space-y-1'>
          <Link href='/' className='block'>
            <Button variant='ghost' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <circle cx='12' cy='12' r='10' />
                <polygon points='10 8 16 12 10 16 10 8' />
              </svg>
              Dashboard
            </Button>
          </Link>
          <Link href='/projects' className='block'>
            <Button variant='secondary' className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'
              >
                <rect width='7' height='7' x='3' y='3' rx='1' />
                <rect width='7' height='7' x='14' y='3' rx='1' />
                <rect width='7' height='7' x='14' y='14' rx='1' />
                <rect width='7' height='7' x='3' y='14' rx='1' />
              </svg>
              Projects
            </Button>
          </Link>
          <Button variant='ghost' className='w-full justify-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 h-4 w-4'
            >
              <path d='M4.9 19.1C1 15.2 1 8.8 4.9 4.9' />
              <path d='M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5' />
              <circle cx='12' cy='12' r='2' />
              <path d='M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5' />
              <path d='M19.1 4.9C23 8.8 23 15.1 19.1 19' />
            </svg>
            Radio
          </Button>
        </div>
      </div>
      <div className='px-3'>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Sidebar;
