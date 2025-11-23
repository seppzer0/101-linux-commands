import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getAllCategories } from '@/lib/categories';
import { getAllGuides } from '@/lib/guides';
import { getAllExercises } from '@/lib/exercises';
import { getQuizMetadata } from '@/lib/quiz-loader';
import { getAllNews } from '@/lib/news';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devops-daily.com';

  // Get all content
  const [posts, categories, guides, exercises, quizzes, news] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
    getAllGuides(),
    getAllExercises(),
    getQuizMetadata(),
    getAllNews(),
  ]);

  // Static routes
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/exercises`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quizzes`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/toolbox`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ];

  // Post routes
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Guide routes
  const guideRoutes = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Guide part routes
  const guidePartRoutes = guides.flatMap((guide) =>
    guide.parts.map((part) => ({
      url: `${baseUrl}/guides/${guide.slug}/${part.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // Exercise routes
  const exerciseRoutes = exercises.map((exercise) => ({
    url: `${baseUrl}/exercises/${exercise.id}`,
    lastModified: new Date(exercise.updatedAt || exercise.publishedAt || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Quiz routes
  const quizRoutes = quizzes.map((quiz) => ({
    url: `${baseUrl}/quizzes/${quiz.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // News routes
  const newsRoutes = news.map((digest) => ({
    url: `${baseUrl}/news/${digest.slug}`,
    lastModified: new Date(digest.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...routes,
    ...postRoutes,
    ...categoryRoutes,
    ...guideRoutes,
    ...guidePartRoutes,
    ...exerciseRoutes,
    ...quizRoutes,
    ...newsRoutes,
  ];
}
