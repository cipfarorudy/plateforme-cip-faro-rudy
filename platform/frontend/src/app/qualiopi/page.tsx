import { PageHeader, Card, Badge } from '@/components/ui';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

const indicators = [
  { code: 'C1.1', title: 'Information des publics', target: 100, current: 90, period: '2025' },
  { code: 'C1.2', title: 'Accessibilité des formations', target: 100, current: 100, period: '2025' },
  { code: 'C2.1', title: 'Adéquation aux besoins', target: 90, current: 85, period: '2025' },
  { code: 'C3.1', title: 'Adaptation des formations', target: 85, current: 80, period: '2025' },
  { code: 'C4.1', title: 'Ressources pédagogiques', target: 90, current: 88, period: '2025' },
  { code: 'C5.1', title: 'Compétences des intervenants', target: 100, current: 95, period: '2025' },
  { code: 'C6.1', title: 'Insertion professionnelle', target: 75, current: 72, period: '2025' },
  { code: 'C7.1', title: 'Sous-traitance et partenariats', target: 100, current: 100, period: '2025' },
];

function ProgressBar({ value, target }: { value: number; target: number }) {
  const pct = Math.min((value / target) * 100, 100);
  const color = pct >= 90 ? 'bg-green-500' : pct >= 70 ? 'bg-yellow-400' : 'bg-red-400';
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-gray-500 w-12 text-right">{value}%</span>
    </div>
  );
}

export default function QualiopiPage() {
  const compliant = indicators.filter(i => i.current >= i.target * 0.9).length;

  return (
    <div>
      <PageHeader
        title="Indicateurs Qualiopi"
        subtitle="Suivi des critères de certification qualité Qualiopi"
      />

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <Card>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Critères conformes</p>
              <p className="text-2xl font-bold text-green-600">{compliant} / {indicators.length}</p>
            </div>
          </div>
        </Card>
        <Card>
          <p className="text-sm text-gray-500 mb-1">Taux de conformité global</p>
          <p className="text-2xl font-bold text-gray-900">
            {Math.round((compliant / indicators.length) * 100)}%
          </p>
        </Card>
        <Card>
          <p className="text-sm text-gray-500 mb-1">Période d&apos;audit</p>
          <p className="text-2xl font-bold text-gray-900">2025</p>
        </Card>
      </div>

      {/* Indicators list */}
      <div className="space-y-3">
        {indicators.map((indicator) => {
          const conformant = indicator.current >= indicator.target * 0.9;
          return (
            <Card key={indicator.code}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                    {indicator.code}
                  </span>
                  <h3 className="font-medium text-gray-900">{indicator.title}</h3>
                </div>
                <Badge
                  label={conformant ? 'Conforme' : 'À améliorer'}
                  variant={conformant ? 'success' : 'warning'}
                />
              </div>
              <ProgressBar value={indicator.current} target={indicator.target} />
              <p className="text-xs text-gray-400 mt-1">Objectif : {indicator.target}%</p>
            </Card>
          );
        })}
      </div>

      {/* Qualiopi reference */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-semibold text-blue-800 mb-1">📋 Référentiel Qualiopi</h3>
        <p className="text-sm text-blue-700">
          Ces indicateurs sont basés sur le <strong>Référentiel National Qualité</strong> (RNQ) 
          pour la certification Qualiopi des organismes de formation.
        </p>
      </div>
    </div>
  );
}
