'use client';

import { DataTableColumnHeader } from '@/components/tables/data-table-column-header';
import { Button } from '@/components/ui/button';
import DropdownDataTableActions from '@/components/versions/dropdown-actions';
import { formatDateTimeToString } from '@/lib/dates';
import { Version } from '@/models';
import { ColumnDef } from '@tanstack/react-table';
import { Table } from 'lucide-react';

export const columns: ColumnDef<Version>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Name' />,
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Updated At' />,
    cell: ({ row }) => {
      const updatedDate = row.getValue('updatedAt') as Date;
      const formatted = formatDateTimeToString(updatedDate);

      return <div className=''>{formatted}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const version = row.original;

      return (
        <div className='space-x-2'>
          <Button variant='ghost' className='text-primary'>
            <Table className='mr-2 h-4 w-4' /> Open boards
          </Button>
          <DropdownDataTableActions version={version} />
        </div>
      );
    },
  },
];
