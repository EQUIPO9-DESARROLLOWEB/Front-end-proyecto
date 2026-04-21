import VoterTable from '@/app/ui/voters/table';

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sistema Electoral</h1>
      <VoterTable />
    </main>
  );
}