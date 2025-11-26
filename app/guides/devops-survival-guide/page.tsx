import { Metadata } from 'next';
import { ClientContent } from './client-content';

export const metadata: Metadata = {
  title: 'DevOps Survival Guide | Real-world DevOps without the BS',
  description: 'A comprehensive guide for engineers who want to master DevOps practices without burning out. Get early access to chapters on infrastructure, monitoring, on-call, security, and more.',
  alternates: {
    canonical: '/guides/devops-survival-guide',
  },
  openGraph: {
    title: 'DevOps Survival Guide - Real-world DevOps without the BS',
    description: 'A comprehensive guide for engineers who want to master DevOps practices without burning out. 14 chapters covering everything from your first day to driving organizational change.',
    type: 'website',
    url: '/guides/devops-survival-guide',
    images: [
      {
        url: '/images/guides/devops-survival-guide-og.svg',
        width: 1200,
        height: 630,
        alt: 'DevOps Survival Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Survival Guide - Real-world DevOps without the BS',
    description: 'A comprehensive guide for engineers who want to master DevOps practices without burning out.',
    images: ['/images/guides/devops-survival-guide-og.svg'],
  },
};

export default function DevOpsSurvivalGuidePage() {
  return <ClientContent />;
}
