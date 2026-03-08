import { PrismaClient, UserRole, CandidateStatus, ContractType, ContractStatus, FormationStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Admin user
  const adminPassword = await bcrypt.hash('Admin123!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@cip-faro-rudy.fr' },
    update: {},
    create: {
      email: 'admin@cip-faro-rudy.fr',
      password: adminPassword,
      firstName: 'Rudy',
      lastName: 'FARO',
      role: UserRole.ADMIN,
    },
  });

  // Formateur
  const formateurPassword = await bcrypt.hash('Formateur123!', 10);
  const formateur = await prisma.user.upsert({
    where: { email: 'formateur@cip-faro-rudy.fr' },
    update: {},
    create: {
      email: 'formateur@cip-faro-rudy.fr',
      password: formateurPassword,
      firstName: 'Jean',
      lastName: 'DUPONT',
      role: UserRole.FORMATEUR,
    },
  });

  // Sample candidates
  const candidate1 = await prisma.candidate.upsert({
    where: { email: 'marie.martin@example.fr' },
    update: {},
    create: {
      firstName: 'Marie',
      lastName: 'MARTIN',
      email: 'marie.martin@example.fr',
      phone: '06 12 34 56 78',
      birthDate: new Date('1990-05-15'),
      address: '12 rue de la Paix',
      city: 'Paris',
      postalCode: '75001',
      status: CandidateStatus.EN_FORMATION,
    },
  });

  const candidate2 = await prisma.candidate.upsert({
    where: { email: 'pierre.dubois@example.fr' },
    update: {},
    create: {
      firstName: 'Pierre',
      lastName: 'DUBOIS',
      email: 'pierre.dubois@example.fr',
      phone: '06 98 76 54 32',
      birthDate: new Date('1985-11-20'),
      address: '45 avenue des Roses',
      city: 'Lyon',
      postalCode: '69001',
      status: CandidateStatus.INSCRIT,
    },
  });

  // Formation
  const formation = await prisma.formation.upsert({
    where: { id: 'formation-1' },
    update: {},
    create: {
      id: 'formation-1',
      title: 'Formation Conducteur de Travaux – Session 2025',
      description: 'Formation complète incluant BC01, BC02, BC03',
      startDate: new Date('2025-01-06'),
      endDate: new Date('2025-06-30'),
      location: 'Centre C.I.P FARO Rudy – Paris',
      status: FormationStatus.EN_COURS,
      formateurId: formateur.id,
      maxStudents: 12,
    },
  });

  // Competency blocks
  await prisma.competencyBlock.upsert({
    where: { id: 'bc01-1' },
    update: {},
    create: {
      id: 'bc01-1',
      formationId: formation.id,
      code: 'BC01',
      title: 'Préparation et organisation des travaux',
      description: 'Organisation, planification et préparation des chantiers',
      objectives: ['Analyser les plans', 'Organiser les ressources', 'Planifier les interventions'],
    },
  });

  await prisma.competencyBlock.upsert({
    where: { id: 'bc02-1' },
    update: {},
    create: {
      id: 'bc02-1',
      formationId: formation.id,
      code: 'BC02',
      title: 'Pilotage et suivi de chantier',
      description: 'Suivi quotidien, gestion des équipes et des ressources',
      objectives: ['Gérer les équipes', 'Suivre les avancements', 'Gérer les imprévus'],
    },
  });

  await prisma.competencyBlock.upsert({
    where: { id: 'bc03-1' },
    update: {},
    create: {
      id: 'bc03-1',
      formationId: formation.id,
      code: 'BC03',
      title: 'Gestion administrative et financière',
      description: 'Aspects administratifs, juridiques et financiers du chantier',
      objectives: ['Gérer les budgets', 'Rédiger les rapports', 'Assurer la conformité'],
    },
  });

  // Enrollment
  await prisma.formationEnrollment.upsert({
    where: { candidateId_formationId: { candidateId: candidate1.id, formationId: formation.id } },
    update: {},
    create: { candidateId: candidate1.id, formationId: formation.id },
  });

  // Qualiopi indicators
  const indicators = [
    { code: 'C1.1', title: 'Information des publics', period: '2025', target: 100 },
    { code: 'C1.2', title: 'Accessibilité des formations', period: '2025', target: 100 },
    { code: 'C2.1', title: 'Adéquation des formations aux besoins', period: '2025', target: 90 },
    { code: 'C3.1', title: 'Adaptation des formations', period: '2025', target: 85 },
    { code: 'C4.1', title: 'Ressources pédagogiques', period: '2025', target: 90 },
    { code: 'C5.1', title: 'Compétences des intervenants', period: '2025', target: 100 },
    { code: 'C6.1', title: 'Insertion professionnelle', period: '2025', target: 75 },
    { code: 'C7.1', title: 'Sous-traitance et partenariats', period: '2025', target: 100 },
  ];

  for (const indicator of indicators) {
    await prisma.qualiopiIndicator.upsert({
      where: { code: indicator.code },
      update: {},
      create: { ...indicator, current: Math.floor(indicator.target * 0.9) },
    });
  }

  console.log('✅ Seed terminé !');
  console.log('👤 Admin: admin@cip-faro-rudy.fr / Admin123!');
  console.log('👤 Formateur: formateur@cip-faro-rudy.fr / Formateur123!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
