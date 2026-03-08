'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentIcon,
  StarIcon,
  ShieldCheckIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { href: '/', label: 'Tableau de bord', icon: HomeIcon },
  { href: '/candidates', label: 'Candidats', icon: UserGroupIcon },
  { href: '/placement-tests', label: 'Tests de positionnement', icon: BeakerIcon },
  { href: '/prerequisites', label: 'Prérequis', icon: DocumentCheckIcon },
  { href: '/contracts', label: 'Devis & Conventions', icon: DocumentTextIcon },
  { href: '/formations', label: 'Formations', icon: AcademicCapIcon },
  { href: '/competency-blocks', label: 'Blocs de compétences', icon: ChartBarIcon },
  { href: '/ecf', label: 'Suivi ECF', icon: ClipboardDocumentCheckIcon },
  { href: '/attendance', label: 'Émargement', icon: ClockIcon },
  { href: '/certificates', label: 'Attestations', icon: DocumentIcon },
  { href: '/surveys', label: 'Satisfaction', icon: StarIcon },
  { href: '/qualiopi', label: 'Indicateurs Qualiopi', icon: ShieldCheckIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-blue-900 text-white flex flex-col z-10">
      {/* Logo */}
      <div className="p-5 border-b border-blue-800">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-sm">CIP</span>
          </div>
          <div>
            <h1 className="font-bold text-sm leading-tight">C.I.P FARO Rudy</h1>
            <p className="text-blue-300 text-xs">Plateforme de pilotage</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'bg-blue-700 text-white font-medium'
                      : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-blue-800">
        <p className="text-blue-400 text-xs text-center">
          © 2025 C.I.P FARO Rudy
        </p>
      </div>
    </aside>
  );
}
