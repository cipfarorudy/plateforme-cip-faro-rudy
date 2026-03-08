'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PageHeader, Badge, Card, Button } from '@/components/ui';

const STATUS_LABELS: Record<string, string> = {
  PROSPECT: 'Prospect',
  INSCRIT: 'Inscrit',
  EN_FORMATION: 'En formation',
  CERTIFIE: 'Certifié',
  ABANDON: 'Abandon',
};

const STATUS_VARIANTS: Record<string, 'default' | 'info' | 'success' | 'warning' | 'error'> = {
  PROSPECT: 'default',
  INSCRIT: 'info',
  EN_FORMATION: 'warning',
  CERTIFIE: 'success',
  ABANDON: 'error',
};

export default function CandidatesPage() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <PageHeader
        title="Candidats"
        subtitle="Gestion des inscriptions et du parcours candidat"
        action={
          <Link href="/candidates/new">
            <Button>
              <PlusIcon className="w-4 h-4 mr-2 inline" />
              Nouveau candidat
            </Button>
          </Link>
        }
      />

      {/* Search */}
      <div className="relative mb-6">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Status filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {['Tous', ...Object.values(STATUS_LABELS)].map((label) => (
          <button
            key={label}
            className="px-3 py-1 rounded-full text-xs border border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Table */}
      <Card className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Nom</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Email</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Téléphone</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Statut</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder rows – will be populated via API */}
            <tr className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 font-medium text-gray-900">Marie MARTIN</td>
              <td className="px-4 py-3 text-gray-600">marie.martin@example.fr</td>
              <td className="px-4 py-3 text-gray-600">06 12 34 56 78</td>
              <td className="px-4 py-3">
                <Badge label="En formation" variant="warning" />
              </td>
              <td className="px-4 py-3">
                <Link href="/candidates/1" className="text-blue-600 hover:underline text-xs mr-3">
                  Voir
                </Link>
                <button className="text-red-500 hover:underline text-xs">Supprimer</button>
              </td>
            </tr>
            <tr className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-3 font-medium text-gray-900">Pierre DUBOIS</td>
              <td className="px-4 py-3 text-gray-600">pierre.dubois@example.fr</td>
              <td className="px-4 py-3 text-gray-600">06 98 76 54 32</td>
              <td className="px-4 py-3">
                <Badge label="Inscrit" variant="info" />
              </td>
              <td className="px-4 py-3">
                <Link href="/candidates/2" className="text-blue-600 hover:underline text-xs mr-3">
                  Voir
                </Link>
                <button className="text-red-500 hover:underline text-xs">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
