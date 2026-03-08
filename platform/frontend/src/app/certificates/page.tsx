import { PageHeader, Card, Badge } from '@/components/ui';
import Link from 'next/link';
import { PlusIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const TYPE_LABELS: Record<string, string> = {
  ATTESTATION_ENTREE: "Attestation d'entrée",
  ATTESTATION_SORTIE: 'Attestation de sortie',
  CERTIFICAT_COMPETENCE: 'Certificat de compétence',
  DIPLOME: 'Diplôme',
};

export default function CertificatesPage() {
  return (
    <div>
      <PageHeader
        title="Attestations & Certificats"
        subtitle="Émission et suivi des attestations de formation"
        action={
          <Link href="/certificates/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            Émettre une attestation
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
              <th className="px-4 py-3 text-left font-medium text-gray-600">Date d&apos;émission</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Validité</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-mono text-xs">ATT-2025-001</td>
              <td className="px-4 py-3 font-medium">Marie MARTIN</td>
              <td className="px-4 py-3 text-gray-600">Attestation d&apos;entrée</td>
              <td className="px-4 py-3 text-gray-600">06/01/2025</td>
              <td className="px-4 py-3"><Badge label="Valide" variant="success" /></td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:underline text-xs flex items-center gap-1">
                  <DocumentArrowDownIcon className="w-3 h-3" />Télécharger
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
