import type { Metadata } from 'next';
import { CardsAgainstDevOps } from '@/components/games/cards-against-devops';
import { generateGameMetadata } from '@/lib/game-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generateGameMetadata('cards-against-devops');
}

export default function CardsAgainstDevOpsPage() {
  return <CardsAgainstDevOps />;
}
