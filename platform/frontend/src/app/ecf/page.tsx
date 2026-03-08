import { PageHeader, Card, Badge } from '@/components/ui';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function EcfPage() {
  return (
    <div>
      <PageHeader
        title="Suivi ECF"
        subtitle="Évaluations en cours de formation"
        action={
          <Link href="/ecf/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            Nouvelle évaluation
          </Link>
        }
      />
      <Card className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Candidat</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Formation</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Situation</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Score</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Résultat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-medium">Marie MARTIN</td>
              <td className="px-4 py-3 text-gray-600">CT Session 2025</td>
              <td className="px-4 py-3 text-gray-600">15/03/2025</td>
              <td className="px-4 py-3 text-gray-600">Organisation de chantier</td>
              <td className="px-4 py-3">16/20</td>
              <td className="px-4 py-3"><Badge label="Réussi" variant="success" /></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
