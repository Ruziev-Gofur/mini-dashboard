import { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Post } from '@/types';

interface PostsListProps {
  posts: Post[];
  limit?: number;
}

//  Memoized to prevent unnecessary re-renders
export const PostsList = memo(function PostsList({ posts, limit = 5 }: PostsListProps) {
  const displayPosts = posts.slice(0, limit);

  return (
    <Card>
      <CardHeader>
        <CardTitle>So'nggi Postlar</CardTitle>
        <CardDescription>
          Jami {posts.length} ta post mavjud
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayPosts.map((post) => (
            <div
              key={post.id}
              className="border-b pb-4 last:border-0 last:pb-0"
            >
              <h3 className="font-semibold text-sm mb-1 capitalize">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {post.body}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});
