'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [isMdRequest, setIsMdRequest] = useState(false);
  const [mdPath, setMdPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.endsWith('.md')) {
        setIsMdRequest(true);
        setMdPath(pathname.replace('.md', ''));
      }
    }
  }, []);

  if (isMdRequest) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="container max-w-2xl text-center">
          <FileText className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
          <h1 className="text-4xl font-bold mb-4">Markdown File Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The requested markdown file doesn't exist or hasn't been published yet.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            You can try viewing the HTML version instead.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href={mdPath}>
                <FileText className="mr-2 h-4 w-4" />
                View HTML Version
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }

  // Your original 404 page for non-.md requests
  return (
    <main className="min-h-[60vh] flex items-center justify-center">
      <div className="container max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </main>
  );
}
