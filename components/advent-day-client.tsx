'use client';

import { AdventProgressProvider } from './advent-progress-provider';
import { AdventCompletionButton } from './advent-completion-button';

interface AdventDayClientProps {
  day: number;
  title: string;
}

export function AdventDayClient({ day, title }: AdventDayClientProps) {
  return (
    <AdventProgressProvider>
      <AdventCompletionButton day={day} title={title} />
    </AdventProgressProvider>
  );
}
