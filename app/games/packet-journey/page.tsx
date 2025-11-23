import type { Metadata } from 'next';
import PacketJourney from '@/components/games/packet-journey';
import { generateGameMetadata } from '@/lib/game-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generateGameMetadata('packet-journey');
}

export default function PacketJourneyPage() {
  return <PacketJourney />;
}
