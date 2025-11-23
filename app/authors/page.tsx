import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { getAllAuthors } from '@/lib/authors';
import { Breadcrumb } from '@/components/breadcrumb';
import { BreadcrumbSchema } from '@/components/schema-markup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authors',
  description: 'Meet our team of DevOps experts and content creators',
  alternates: {
    canonical: '/authors',
  },
  openGraph: {
    title: 'DevOps Authors - Meet Our Experts',
    description: 'Discover the talented authors behind DevOps Daily’s content.',
    type: 'website',
    url: '/authors',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevOps Authors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Authors - Meet Our Experts',
    description: 'Discover the talented authors behind DevOps Daily’s content.',
    images: ['/og-image.png'],
  },
};

export default async function AuthorsPage() {
  const authors = await getAllAuthors();

  // Breadcrumb items
  const breadcrumbItems = [{ label: 'Authors', href: '/authors', isCurrent: true }];

  // Breadcrumb items for schema
  const schemaItems = [
    { name: 'Home', url: '/' },
    { name: 'Authors', url: '/authors' },
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <PageHeader
          title="Our Authors"
          description="Meet the experts behind DevOps Daily's content"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {authors.map((author) => (
            <Link
              key={author.slug}
              href={`/authors/${author.slug}`}
              className="group flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-3 border-primary/20 group-hover:border-primary/40 transition-colors bg-muted">
                {author.avatar ? (
                  <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-muted-foreground">
                      {author.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <h2 className="text-xl font-semibold text-center group-hover:text-primary transition-colors">
                {author.name}
              </h2>

              {author.bio && (
                <p className="mt-2 text-sm text-muted-foreground text-center line-clamp-2">
                  {author.bio}
                </p>
              )}

              <div className="mt-4 text-sm text-muted-foreground text-center">
                {author.postCount || 0} posts • {author.guideCount || 0} guides
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
