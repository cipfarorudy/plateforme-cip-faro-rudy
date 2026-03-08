import Link from 'next/link';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  ClockIcon,
  DocumentIcon,
  StarIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  BeakerIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline';

const modules = [
  {
    href: '/candidates',
    title: 'Candidats',
    description: "Gestion des inscriptions et du parcours candidat",
    icon: UserGroupIcon,
    color: 'blue',
    badge: 'Inscription',
  },
  {
    href: '/placement-tests',
    title: 'Tests de positionnement',
    description: 'Évaluation initiale du niveau des candidats',
    icon: BeakerIcon,
    color: 'purple',
    badge: 'Évaluation',
  },
  {
    href: '/prerequisites',
    title: 'Prérequis',
    description: 'Vérification et validation des prérequis',
    icon: DocumentCheckIcon,
    color: 'yellow',
    badge: 'Validation',
  },
  {
    href: '/contracts',
    title: 'Devis & Conventions',
    description: 'Création et suivi des devis et conventions de formation',
    icon: DocumentTextIcon,
    color: 'green',
    badge: 'Administratif',
  },
  {
    href: '/formations',
    title: 'Formations',
    description: "Pilotage des sessions de formation en cours",
    icon: AcademicCapIcon,
    color: 'blue',
    badge: 'Formation',
  },
  {
    href: '/competency-blocks',
    title: 'Blocs de compétences',
    description: 'Suivi BC01, BC02, BC03 et évaluations',
    icon: ChartBarIcon,
    color: 'indigo',
    badge: 'BC01 · BC02 · BC03',
  },
  {
    href: '/ecf',
    title: 'Suivi ECF',
    description: 'Évaluations en cours de formation',
    icon: ClipboardDocumentCheckIcon,
    color: 'orange',
    badge: 'ECF',
  },
  {
    href: '/attendance',
    title: 'Émargement',
    description: 'Feuilles de présence et signatures',
    icon: ClockIcon,
    color: 'teal',
    badge: 'Présence',
  },
  {
    href: '/certificates',
    title: 'Attestations',
    description: "Émission et suivi des attestations et certificats",
    icon: DocumentIcon,
    color: 'green',
    badge: 'Certificats',
  },
  {
    href: '/surveys',
    title: 'Questionnaires de satisfaction',
    description: 'Collecte et analyse des retours stagiaires',
    icon: StarIcon,
    color: 'yellow',
    badge: 'Satisfaction',
  },
  {
    href: '/qualiopi',
    title: 'Indicateurs Qualiopi',
    description: 'Suivi des critères de certification Qualiopi',
    icon: ShieldCheckIcon,
    color: 'red',
    badge: 'Qualiopi',
  },
];

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-200 text-blue-700 [&_.icon]:bg-blue-100 [&_.icon]:text-blue-600',
  purple: 'bg-purple-50 border-purple-200 text-purple-700 [&_.icon]:bg-purple-100 [&_.icon]:text-purple-600',
  yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700 [&_.icon]:bg-yellow-100 [&_.icon]:text-yellow-600',
  green: 'bg-green-50 border-green-200 text-green-700 [&_.icon]:bg-green-100 [&_.icon]:text-green-600',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700 [&_.icon]:bg-indigo-100 [&_.icon]:text-indigo-600',
  orange: 'bg-orange-50 border-orange-200 text-orange-700 [&_.icon]:bg-orange-100 [&_.icon]:text-orange-600',
  teal: 'bg-teal-50 border-teal-200 text-teal-700 [&_.icon]:bg-teal-100 [&_.icon]:text-teal-600',
  red: 'bg-red-50 border-red-200 text-red-700 [&_.icon]:bg-red-100 [&_.icon]:text-red-600',
};

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Tableau de bord
        </h1>
        <p className="text-gray-500 mt-1">
          Bienvenue sur la plateforme de pilotage <strong>C.I.P FARO Rudy</strong>
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <UserGroupIcon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Candidats inscrits</p>
            <p className="text-2xl font-bold text-gray-900">—</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <AcademicCapIcon className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Formations actives</p>
            <p className="text-2xl font-bold text-gray-900">—</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <StarIcon className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Satisfaction moyenne</p>
            <p className="text-2xl font-bold text-gray-900">—/5</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Indicateurs Qualiopi</p>
            <p className="text-2xl font-bold text-gray-900">—/8</p>
          </div>
        </div>
      </div>

      {/* Module grid */}
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Modules de gestion</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {modules.map(({ href, title, description, icon: Icon, color, badge }) => (
          <Link
            key={href}
            href={href}
            className={`group block rounded-xl border p-5 transition-all hover:shadow-md hover:-translate-y-0.5 ${colorClasses[color] || colorClasses.blue}`}
          >
            <div className="flex items-start gap-4">
              <div className="icon w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-sm truncate">{title}</h3>
                  <span className="text-xs opacity-70 bg-white/50 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {badge}
                  </span>
                </div>
                <p className="text-xs opacity-75 leading-relaxed">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Moodle / M365 integration notice */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-semibold text-blue-800 mb-1">🔗 Intégrations futures</h3>
        <p className="text-sm text-blue-700">
          Cette plateforme est conçue pour s&apos;intégrer avec{' '}
          <strong>Moodle</strong>,{' '}
          <strong>Microsoft 365</strong> et{' '}
          <strong>Microsoft Teams</strong> dans les prochaines versions.
        </p>
      </div>
    </div>
  );
}
