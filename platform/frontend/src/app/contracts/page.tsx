import { PageHeader, Card, Badge } from '@/components/ui';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

const STATUS_MAP: Record<string, { label: string; variant: 'default' | 'info' | 'success' | 'warning' | 'error' }> = {
  BROUILLON: { label: 'Brouillon', variant: 'default' },
  ENVOYE: { label: 'Envoyé', variant: 'info' },
  SIGNE: { label: 'Signé', variant: 'success' },
  ANNULE: { label: 'Annulé', variant: 'error' },
};

export default function ContractsPage() {
  return (
    <div>
      <PageHeader
        title="Devis & Conventions"
        subtitle="Gestion des devis et conventions de formation"
        action={
          <Link href="/contracts/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            Nouveau document
          </Link>
        }
      />
      <Card className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Référence</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Candidat</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Type</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Montant</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Statut</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-mono text-xs">DEV-2025-001</td>
              <td className="px-4 py-3 font-medium">Marie MARTIN</td>
              <td className="px-4 py-3 text-gray-600">Devis</td>
              <td className="px-4 py-3 text-gray-600">3 500 €</td>
              <td className="px-4 py-3"><Badge label="Signé" variant="success" /></td>
              <td className="px-4 py-3 flex gap-2">
                <Link href="/contracts/1" className="text-blue-600 hover:underline text-xs">Voir</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
