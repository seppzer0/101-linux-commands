import type { Metadata } from 'next';
import DDoSSimulator from '@/components/games/ddos-simulator';
import { generateGameMetadata } from '@/lib/game-metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generateGameMetadata('ddos-simulator');
}

export default function DDoSSimulatorPage() {
  return <DDoSSimulator />;
}
