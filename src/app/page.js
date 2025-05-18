// app/page.js

import CustomerTable from './components/CustomerTable';
import GenderChart from './components/GenderChart';
import { fetchCustomers, fetchSummary } from '../utils/api';

export default async function Home() {
  const summary = await fetchSummary();
  const customers = await fetchCustomers();

  return (
    <main className="p-6">
      <h1 className="title">Customer Dashboard</h1>
      <GenderChart data={summary} />
      <CustomerTable data={customers} />
    </main>
  );
}
