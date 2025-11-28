'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar } from 'lucide-react';
import type { Post } from '@/lib/posts';

interface PostsListWithoutSearchProps {
  posts: Post[];
  className?: string;
}

export function PostsListWithoutSearch({ posts, className }: PostsListWithoutSearchProps) {
  return (
    <div className={cn('space-y-8', className)}>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/posts/${post.slug}`}
          className="group flex flex-col md:flex-row gap-6 p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                <span>{post.category?.name ?? 'Uncategorized'}</span>
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
                <span className="mx-2">|</span>
                <Clock className="mr-1 h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
            <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
