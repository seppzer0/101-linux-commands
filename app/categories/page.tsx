import { CategoryGrid } from '@/components/category-grid';
import { PageHeader } from '@/components/page-header';
import { getAllCategories } from '@/lib/categories';

export const metadata = {
  title: 'Categories',
  description: 'Browse all DevOps categories',
  alternates: {
    canonical: '/categories',
  },
  openGraph: {
    title: 'Categories - DevOps Articles and Tutorials',
    description:
      'Browse all DevOps categories and discover articles, tutorials, and guides. Explore topics like CI/CD, cloud computing, containerization, and more to enhance your DevOps knowledge.',
    url: '/categories',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevOps Categories - Browse All Topics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Categories - DevOps Articles and Tutorials',
    description: 'Browse all DevOps categories and discover articles, tutorials, and guides.',
    images: ['/og-image.png'],
  },
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Categories" description="Browse all our DevOps categories" />
      <CategoryGrid categories={categories} className="my-8" />
    </div>
  );
}
