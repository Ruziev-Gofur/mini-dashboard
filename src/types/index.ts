// Auth types
export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Dashboard types
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    city: string;
  };
  phone?: string;
  website?: string;
}

export interface DashboardStats {
  totalPosts: number;
  totalUsers: number;
  completedTodos: number;
  pendingTodos: number;
}
