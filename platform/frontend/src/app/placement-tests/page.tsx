import { PageHeader, Card, Badge } from '@/components/ui';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function PlacementTestsPage() {
  return (
    <div>
      <PageHeader
        title="Tests de positionnement"
        subtitle="Évaluation initiale du niveau des candidats"
        action={
          <Link href="/placement-tests/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            Nouveau test
          </Link>
        }
      />
      <Card className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Candidat</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Score</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Niveau</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-medium">Marie MARTIN</td>
              <td className="px-4 py-3 text-gray-600">15/01/2025</td>
              <td className="px-4 py-3 text-gray-600">78/100</td>
              <td className="px-4 py-3"><Badge label="Intermédiaire" variant="warning" /></td>
              <td className="px-4 py-3"><Link href="/placement-tests/1" className="text-blue-600 hover:underline text-xs">Voir</Link></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
