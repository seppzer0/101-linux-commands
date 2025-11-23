import { PostsList } from '@/components/posts-list';
import { PageHeader } from '@/components/page-header';
import { SponsorSidebar } from '@/components/sponsor-sidebar';
import { getCategoryBySlug, getAllCategories } from '@/lib/categories';
import { getPostsByCategory } from '@/lib/posts';
import { getGuidesByCategory } from '@/lib/guides';
import { notFound } from 'next/navigation';
import { Breadcrumb } from '@/components/breadcrumb';
import { BreadcrumbSchema } from '@/components/schema-markup';
import Link from 'next/link';
import type { Metadata } from 'next';

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const categories = await getAllCategories();
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.warn('Error generating static params for categories:', error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: `Category: ${category.name} - DevOps Articles and Tutorials`,
    description: `Explore the ${category.name} category for articles, tutorials, and guides covering DevOps practices. ${category.longDescription || category.description}`,
    alternates: {
      canonical: `/categories/${slug}`,
    },
    openGraph: {
      title: `Category: ${category.name} - DevOps Articles and Tutorials`,
      description: `Explore the ${category.name} category for articles, tutorials, and guides covering DevOps practices. ${category.longDescription || category.description}`,
      url: `/categories/${slug}`,
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${category.name} - DevOps Articles and Tutorials`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Category: ${category.name} - DevOps Articles and Tutorials`,
      description: `Explore the ${category.name} category for articles, tutorials, and guides covering DevOps practices. ${category.longDescription || category.description}`,
      images: ['/og-image.png'],
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(slug);
  const guides = await getGuidesByCategory(slug);

  // Breadcrumb items
  const breadcrumbItems = [
    { label: 'Categories', href: '/categories' },
    { label: category.name, href: `/categories/${category.slug}`, isCurrent: true },
  ];

  // Breadcrumb items for schema
  const schemaItems = [
    { name: 'Home', url: '/' },
    { name: 'Categories', url: '/categories' },
    { name: category.name, url: `/categories/${category.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <PageHeader
          title={category.name}
          description={`Browse all articles, tutorials, and guides about ${category.name}`}
        />

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">About {category.name}</h2>
          <p className="text-muted-foreground">
            {category.longDescription || category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Guides List */}
          <div className="lg:col-span-9">
            {guides.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 mt-4">Guides</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="block p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
                    >
                      <h3 className="text-xl font-semibold">{guide.title}</h3>
                      <p className="mt-2 text-muted-foreground">{guide.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Posts List */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-2">Posts</h2>
              <PostsList posts={posts} />
            </div>
          </div>

          {/* Sponsor Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-8">
              <SponsorSidebar />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
