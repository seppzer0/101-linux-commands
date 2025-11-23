import { PostsList } from '@/components/posts-list';
import { PageHeader } from '@/components/page-header';
import { SponsorSidebar } from '@/components/sponsor-sidebar';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'All Posts',
  description:
    'Browse all DevOps articles, tutorials, and guides. Stay updated with the latest trends and best practices in DevOps.',
  alternates: {
    canonical: '/posts',
  },
  openGraph: {
    title: 'DevOps Articles - All Posts',
    description:
      'Explore our complete collection of DevOps articles, tutorials, and guides. Stay updated with the latest trends and best practices in DevOps.',
    type: 'website',
    url: '/posts',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevOps Articles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps Articles - All Posts',
    description:
      'Explore our complete collection of DevOps articles, tutorials, and guides. Stay updated with the latest trends and best practices in DevOps.',
    images: ['/og-image.png'],
  },
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="All Posts"
        description="Browse all our DevOps articles, tutorials, and guides"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
        {/* Posts List */}
        <div className="lg:col-span-9">
          <PostsList posts={posts} />
        </div>

        {/* Sponsor Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-8">
            <SponsorSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
