import { PageHeader, Card } from '@/components/ui';
import { StarIcon } from '@heroicons/react/24/solid';

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((starValue) => (
        <StarIcon key={starValue} className={`w-4 h-4 ${starValue <= score ? 'text-yellow-400' : 'text-gray-200'}`} />
      ))}
    </div>
  );
}

export default function SurveysPage() {
  return (
    <div>
      <PageHeader
        title="Questionnaires de satisfaction"
        subtitle="Analyse des retours stagiaires"
      />

      {/* Stats summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card>
          <p className="text-sm text-gray-500 mb-1">Score moyen global</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-gray-900">4.2</span>
            <StarRating score={4} />
          </div>
        </Card>
        <Card>
          <p className="text-sm text-gray-500 mb-1">Questionnaires complétés</p>
          <p className="text-3xl font-bold text-gray-900">1</p>
        </Card>
        <Card>
          <p className="text-sm text-gray-500 mb-1">Taux de recommandation</p>
          <p className="text-3xl font-bold text-gray-900">100%</p>
        </Card>
      </div>

      {/* Survey list */}
      <Card className="p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Candidat</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Formation</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Date</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Note globale</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="px-4 py-3 font-medium">Marie MARTIN</td>
              <td className="px-4 py-3 text-gray-600">CT Session 2025</td>
              <td className="px-4 py-3 text-gray-600">30/06/2025</td>
              <td className="px-4 py-3"><StarRating score={4} /></td>
              <td className="px-4 py-3"><button className="text-blue-600 hover:underline text-xs">Voir les réponses</button></td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
