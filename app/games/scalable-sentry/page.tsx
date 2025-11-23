import type { Metadata } from 'next';
import ScalableSentry from '@/components/games/scalable-sentry';
import { generateGameMetadata } from '@/lib/game-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generateGameMetadata('scalable-sentry');
}

export default function ScalableSentryPage() {
  return <ScalableSentry />;
}
