import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { BreadcrumbSchema } from '@/components/schema-markup';
import DbmsSimulator from '@/components/games/dbms-simulator';
import { generateGameMetadata } from '@/lib/game-metadata';
import { getGameById } from '@/lib/games';

export async function generateMetadata(): Promise<Metadata> {
  return generateGameMetadata('dbms-simulator');
}

export default async function DbmsSimulatorPage() {
  const game = await getGameById('dbms-simulator');
  const gameTitle = game?.title || 'DBMS Simulator';

  const breadcrumbItems = [
    { label: 'Games', href: '/games' },
    { label: gameTitle, href: '/games/dbms-simulator', isCurrent: true },
  ];

  const schemaItems = [
    { name: 'Home', url: '/' },
    { name: 'Games', url: '/games' },
    { name: gameTitle, url: '/games/dbms-simulator' },
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <div className="container px-4 py-8 mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <DbmsSimulator />
      </div>
    </>
  );
}
