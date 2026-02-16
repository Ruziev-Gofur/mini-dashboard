import { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Circle } from 'lucide-react';
import type { Todo } from '@/types';

interface TodosListProps {
  todos: Todo[];
  limit?: number;
}

// Memoized component
export const TodosList = memo(function TodosList({ todos, limit = 8 }: TodosListProps) {
  const displayTodos = todos.slice(0, limit);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Vazifalar</CardTitle>
        <CardDescription>
          {todos.filter(t => t.completed).length} / {todos.length} bajarildi
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {displayTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-start gap-2 text-sm"
            >
              {todo.completed ? (
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <Circle className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              )}
              <span className={todo.completed ? 'line-through text-muted-foreground' : ''}>
                {todo.title}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
});
