import { Payment, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'a@example.com',
    },
    {
      id: 'dd8ed52f',
      amount: 100,
      status: 'pending',
      email: 'z@example.com',
    },
    {
      id: '72fded52f',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '72fddsd52f',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '72fddsd52f',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '72fddsd52f',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '72fddsd52f',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '72fddsd52f',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '72fddsd52f',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '72fddsd52f',
      amount: 100,
      status: 'pending',
      email: 'c@example.com',
    },
    {
      id: '72fddsd52f',
      amount: 100,
      status: 'pending',
      email: 'test@example.com',
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
