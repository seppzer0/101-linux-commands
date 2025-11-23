import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/breadcrumb';
import { BreadcrumbSchema } from '@/components/schema-markup';
import CICDStackGenerator from '../../../components/games/cicd-stack-generator';
import { ArrowLeft, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CI/CD Stack Generator - Get Your Cursed DevOps Stack',
  description:
    'Spin the CI/CD Stack Generator and discover your perfect (or perfectly cursed) DevOps stack combination!',
  openGraph: {
    title: 'CI/CD Stack Generator - DevOps Daily',
    description:
      'Spin the reels and get your DevOps stack combination. Share your cursed CI/CD pipeline with your team!',
    type: 'website',
    images: [
      {
        url: '/images/games/cicd-stack-generator-og.svg',
        width: 1200,
        height: 630,
        alt: 'CI/CD Stack Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CI/CD Stack Generator - DevOps Daily',
    description:
      'Spin the reels and get your DevOps stack combination. Share your cursed CI/CD pipeline with your team!',
    images: ['/images/games/cicd-stack-generator-og.svg'],
  },
};

export default function CICDStackGeneratorPage() {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Games', href: '/games' },
    { label: 'CI/CD Stack Generator', href: '/games/cicd-stack-generator', isCurrent: true },
  ];

  // Breadcrumb items for schema
  const schemaItems = [
    { name: 'Home', url: '/' },
    { name: 'Games', url: '/games' },
    { name: 'CI/CD Stack Generator', url: '/games/cicd-stack-generator' },
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Page H1 heading for SEO and accessibility */}
          <h1 className="sr-only">CI/CD Stack Generator</h1>

          {/* Game Component */}
          <CICDStackGenerator />

          {/* Share buttons */}
          <div className="my-8 w-full max-w-md">
            <h2 className="text-center text-lg font-medium mb-4">Share this game</h2>
            <div className="flex justify-center gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Try the CI/CD Stack Generator! Get your perfect (or perfectly cursed) DevOps stack combination!')}&url=${encodeURIComponent('https://devops-daily.com/games/cicd-stack-generator')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a91da] transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Share on Twitter</span>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://devops-daily.com/games/cicd-stack-generator')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 bg-[#1877F2] text-white rounded-full hover:bg-[#166fe5] transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Share on Facebook</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://devops-daily.com/games/cicd-stack-generator')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 bg-[#0A66C2] text-white rounded-full hover:bg-[#095fb8] transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">Share on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* "How it works" section */}
          <div className="w-full bg-muted/30 rounded-lg p-6 my-4">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="mb-4">The CI/CD Stack Generator randomly combines:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <strong>CI/CD Tools</strong> like GitHub Actions, Jenkins, GitLab CI
              </li>
              <li>
                <strong>Infrastructure Tools</strong> like Terraform, Ansible, Pulumi
              </li>
              <li>
                <strong>Cloud Platforms</strong> like AWS, GCP, or even a Raspberry Pi!
              </li>
            </ul>
            <p className="mb-4">
              Spin the wheels to get your perfect (or perfectly cursed) DevOps stack! Each
              combination receives a humorous rating that you can share with your team.
            </p>
            <p>
              This is just a fun game – but who knows, you might discover your next favorite tech
              stack!
            </p>
          </div>

          {/* Back to games button */}
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/games">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Games
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
