import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { BreadcrumbSchema } from '@/components/schema-markup';
import { CardsAgainstDevOps } from '@/components/games/cards-against-devops';
import { generateGameMetadata } from '@/lib/game-metadata';
import { getGameById } from '@/lib/games';

export async function generateMetadata(): Promise<Metadata> {
  return generateGameMetadata('cards-against-devops');
}

export default async function CardsAgainstDevOpsPage() {
  const game = await getGameById('cards-against-devops');
  const gameTitle = game?.title || 'Cards Against DevOps';

  const breadcrumbItems = [
    { label: 'Games', href: '/games' },
    { label: gameTitle, href: '/games/cards-against-devops', isCurrent: true },
  ];

  const schemaItems = [
    { name: 'Home', url: '/' },
    { name: 'Games', url: '/games' },
    { name: gameTitle, url: '/games/cards-against-devops' },
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <div className="container px-4 py-8 mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <CardsAgainstDevOps />
      </div>
    </>
  );
}
