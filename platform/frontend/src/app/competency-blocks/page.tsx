import { PageHeader, Card, Badge } from '@/components/ui';

export default function CompetencyBlocksPage() {
  const blocks = [
    { code: 'BC01', title: 'Préparation et organisation des travaux', status: 'EN_COURS', count: 1, validated: 0 },
    { code: 'BC02', title: 'Pilotage et suivi de chantier', status: 'NON_COMMENCE', count: 0, validated: 0 },
    { code: 'BC03', title: 'Gestion administrative et financière', status: 'NON_COMMENCE', count: 0, validated: 0 },
  ];

  const statusVariant: Record<string, 'default' | 'warning' | 'success' | 'info'> = {
    NON_COMMENCE: 'default',
    EN_COURS: 'warning',
    VALIDE: 'success',
    ECHEC: 'error' as any,
  };

  const statusLabel: Record<string, string> = {
    NON_COMMENCE: 'Non commencé',
    EN_COURS: 'En cours',
    VALIDE: 'Validé',
    ECHEC: 'Échec',
  };

  return (
    <div>
      <PageHeader
        title="Blocs de compétences"
        subtitle="Suivi des blocs BC01, BC02, BC03"
      />
      <div className="space-y-4">
        {blocks.map((block) => (
          <Card key={block.code}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <span className="font-bold text-blue-700 text-sm">{block.code}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{block.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {block.count} candidat(s) évalué(s) · {block.validated} validé(s)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge label={statusLabel[block.status]} variant={statusVariant[block.status]} />
                <button className="text-sm text-blue-600 hover:underline">Évaluer</button>
              </div>
            </div>
            {block.status === 'EN_COURS' && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progression</span>
                  <span>0%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '0%' }} />
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
