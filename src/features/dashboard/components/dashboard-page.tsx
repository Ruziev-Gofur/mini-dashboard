import { useMemo } from 'react';
import { useAuthStore } from '@/store/auth-store';
import { Button } from '@/components/ui/button';
import { StatsCard } from '@/features/dashboard/components/stats-card';
import { PostsList } from '@/features/dashboard/components/posts-list';
import { TodosList } from '@/features/dashboard/components/todos-list';
import { usePosts, useTodos, useUsers } from '@/features/dashboard/hooks/use-dashboard-data';
import { FileText, Users, CheckSquare, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function DashboardPage() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  
  // Fetch data using React Query
  const { data: posts, isLoading: postsLoading } = usePosts();
  const { data: todos, isLoading: todosLoading } = useTodos();
  const { data: users, isLoading: usersLoading } = useUsers();

  // Memoized stats calculations - only recalculate when data changes
  const stats = useMemo(() => {
    if (!posts || !todos || !users) return null;
    
    return {
      totalPosts: posts.length,
      totalUsers: users.length,
      completedTodos: todos.filter(t => t.completed).length,
      totalTodos: todos.length,
    };
  }, [posts, todos, users]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (postsLoading || todosLoading || usersLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold">Yuklanmoqda...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                Xush kelibsiz, {user?.name}!
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Chiqish
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        {stats && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <StatsCard
              title="Jami Postlar"
              value={stats.totalPosts}
              icon={FileText}
              description="Barcha foydalanuvchilar postlari"
            />
            <StatsCard
              title="Foydalanuvchilar"
              value={stats.totalUsers}
              icon={Users}
              description="Ro'yxatdan o'tgan foydalanuvchilar"
            />
            <StatsCard
              title="Bajarilgan Vazifalar"
              value={stats.completedTodos}
              icon={CheckSquare}
              description={`${stats.totalTodos} tadan`}
            />
            <StatsCard
              title="Tugallanmagan"
              value={stats.totalTodos - stats.completedTodos}
              icon={CheckSquare}
              description="Kutilayotgan vazifalar"
            />
          </div>
        )}

        {/* Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts && <PostsList posts={posts} />}
          {todos && <TodosList todos={todos} />}
        </div>
      </main>
    </div>
  );
}
