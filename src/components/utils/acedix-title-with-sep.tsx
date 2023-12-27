import React from 'react';
import { Separator } from '../ui/separator';

type AcedixTitleProps = {
  title: string;
  description: string;
};

function AcedixTitleWithSeparator(props: AcedixTitleProps) {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>{props.title}</h2>
          <p className='text-sm text-muted-foreground'>{props.description}</p>
        </div>
      </div>
      <Separator className='my-4' />
    </>
  );
}

export default AcedixTitleWithSeparator;
