import { PageHeader, Card, Badge } from '@/components/ui';
import Link from 'next/link';
import { PlusIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function FormationsPage() {
  return (
    <div>
      <PageHeader
        title="Formations"
        subtitle="Pilotage des sessions de formation"
        action={
          <Link href="/formations/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            Nouvelle formation
          </Link>
        }
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">Formation Conducteur de Travaux – Session 2025</h3>
              <p className="text-sm text-gray-500 mt-1">Centre C.I.P FARO Rudy – Paris</p>
            </div>
            <Badge label="En cours" variant="warning" />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              06/01/2025 → 30/06/2025
            </span>
            <span className="flex items-center gap-1">
              <UserGroupIcon className="w-4 h-4" />
              1 / 12 stagiaires
            </span>
          </div>
          <div className="mt-4 flex gap-3">
            <Link href="/formations/1" className="text-sm text-blue-600 hover:underline">Voir le détail</Link>
            <Link href="/competency-blocks?formationId=1" className="text-sm text-gray-600 hover:underline">Blocs BC</Link>
            <Link href="/attendance?formationId=1" className="text-sm text-gray-600 hover:underline">Émargement</Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
