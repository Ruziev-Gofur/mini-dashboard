import { useGet } from '@/hooks/use-api';
import type { Post, Todo, User } from '@/types';

// Fetch posts
export function usePosts() {
  return useGet<Post[]>('posts', '/posts', undefined, {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

// Fetch todos
export function useTodos() {
  return useGet<Todo[]>('todos', '/todos', undefined, {
    staleTime: 1000 * 60 * 5,
  });
}

// Fetch users
export function useUsers() {
  return useGet<User[]>('users', '/users', undefined, {
    staleTime: 1000 * 60 * 5,
  });
}

// Fetch single post
export function usePost(id: number) {
  return useGet<Post>(['post', id], `/posts/${id}`, undefined, {
    enabled: !!id,
  });
}

// Fetch single user
export function useUser(id: number) {
  return useGet<User>(['user', id], `/users/${id}`, undefined, {
    enabled: !!id,
  });
}
