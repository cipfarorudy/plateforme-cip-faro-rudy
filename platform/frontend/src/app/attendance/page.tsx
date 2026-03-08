import { PageHeader, Card, Badge } from '@/components/ui';
import { CheckIcon, XMarkIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function AttendancePage() {
  const sessions = [
    { date: '06/01/2025', topic: 'Introduction – Organisation du chantier', attendances: [
      { name: 'Marie MARTIN', status: 'PRESENT', signed: true },
    ]},
    { date: '13/01/2025', topic: 'Lecture de plans', attendances: [
      { name: 'Marie MARTIN', status: 'PRESENT', signed: true },
    ]},
  ];

  return (
    <div>
      <PageHeader
        title="Émargement"
        subtitle="Feuilles de présence et signatures des stagiaires"
      />
      <div className="space-y-4">
        {sessions.map((session, i) => (
          <Card key={i}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-gray-900">{session.date}</h3>
                <p className="text-sm text-gray-500">{session.topic}</p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {session.attendances.length} présent(s)
              </span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="py-2 text-left font-medium text-gray-600">Stagiaire</th>
                  <th className="py-2 text-left font-medium text-gray-600">Présence</th>
                  <th className="py-2 text-left font-medium text-gray-600">Signature</th>
                  <th className="py-2 text-left font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {session.attendances.map((att, j) => (
                  <tr key={j} className="border-b border-gray-50 last:border-0">
                    <td className="py-2 font-medium">{att.name}</td>
                    <td className="py-2">
                      {att.status === 'PRESENT' ? (
                        <span className="flex items-center gap-1 text-green-600"><CheckIcon className="w-4 h-4" />Présent</span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-500"><XMarkIcon className="w-4 h-4" />Absent</span>
                      )}
                    </td>
                    <td className="py-2">
                      {att.signed ? (
                        <Badge label="Signé" variant="success" />
                      ) : (
                        <button className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />Signer
                        </button>
                      )}
                    </td>
                    <td className="py-2">
                      <button className="text-xs text-gray-500 hover:underline">Modifier</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        ))}
      </div>
    </div>
  );
}
