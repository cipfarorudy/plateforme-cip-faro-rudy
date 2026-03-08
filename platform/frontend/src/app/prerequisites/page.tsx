import { PageHeader, Card, Badge } from '@/components/ui';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function PrerequisitesPage() {
  return (
    <div>
      <PageHeader
        title="Prérequis"
        subtitle="Vérification et validation des prérequis des candidats"
        action={
          <Link href="/prerequisites/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            Ajouter un prérequis
          </Link>
        }
      />
      <Card className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Candidat</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Prérequis</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Description</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Statut</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-medium">Marie MARTIN</td>
              <td className="px-4 py-3">Brevet des collèges</td>
              <td className="px-4 py-3 text-gray-600">Diplôme de niveau 3 minimum</td>
              <td className="px-4 py-3"><Badge label="Validé" variant="success" /></td>
              <td className="px-4 py-3"><button className="text-blue-600 hover:underline text-xs">Modifier</button></td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-medium">Pierre DUBOIS</td>
              <td className="px-4 py-3">Expérience professionnelle</td>
              <td className="px-4 py-3 text-gray-600">2 ans minimum dans le BTP</td>
              <td className="px-4 py-3"><Badge label="En attente" variant="warning" /></td>
              <td className="px-4 py-3"><button className="text-blue-600 hover:underline text-xs">Valider</button></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
