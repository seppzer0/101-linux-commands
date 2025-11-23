import { PageHeader } from '@/components/page-header';
import { getAllTags } from '@/lib/tags';
import { Breadcrumb } from '@/components/breadcrumb';
import { BreadcrumbSchema } from '@/components/schema-markup';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tags',
  description:
    'Browse all DevOps topics and tags. Discover articles, tutorials, and guides organized by technology and practice.',
  alternates: {
    canonical: '/tags',
  },
  openGraph: {
    title: 'Tags - DevOps Topics and Technologies',
    description:
      'Browse all DevOps topics and tags. Discover articles, tutorials, and guides organized by technology and practice. Stay updated with the latest trends in DevOps.',
    url: '/tags',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevOps Tags - Browse All Topics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tags - DevOps Topics and Technologies',
    description:
      'Browse all DevOps topics and tags. Discover articles, tutorials, and guides organized by technology and practice. Stay updated with the latest trends in DevOps.',
    images: ['/og-image.png'],
  },
};

export default async function TagsPage() {
  const tags = await getAllTags();

  // Breadcrumb items
  const breadcrumbItems = [{ label: 'Tags', href: '/tags', isCurrent: true }];

  // Breadcrumb items for schema
  const schemaItems = [
    { name: 'Home', url: '/' },
    { name: 'Tags', url: '/tags' },
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <PageHeader title="Tags" description="Browse all DevOps topics and tags" />

        <div className="flex flex-wrap gap-3 my-8">
          {tags.map((tag) => (
            <Link
              key={tag.slug}
              href={`/tags/${tag.slug}`}
              className="px-4 py-2 bg-card text-card-foreground rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <span className="font-medium">{tag.name}</span>
              <span className="ml-2 text-sm text-muted-foreground">({tag.count})</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
