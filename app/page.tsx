import { CategoryGrid } from '@/components/category-grid';
import FeaturedPosts from '@/components/featured-posts';
import { Hero } from '@/components/hero';
import LatestPosts from '@/components/latest-posts';
import LatestGuides from '@/components/latest-guides';
import FeaturedExercises from '@/components/featured-exercises';

export default async function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <Hero />
      <CategoryGrid
        className="my-16"
        limit={8}
        showHeader
        showViewAll
        gridClassName="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      />
      <FeaturedPosts className="my-16" />
      <FeaturedExercises className="my-16" />
      <LatestPosts className="my-16" />
      <LatestGuides className="my-16" />
    </div>
  );
}
