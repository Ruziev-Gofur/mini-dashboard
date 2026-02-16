# Mini Dashboard - React + TypeScript

Professional dashboard loyihasi React, TypeScript, Zustand, React Query, va Shadcn/UI bilan qurilgan.

## 🚀 Texnologiyalar

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Zustand** - State management (Auth)
- **React Query (TanStack Query)** - Server state management
- **Axios** - HTTP client
- **React Router** - Routing
- **Shadcn/UI** - UI components
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📁 Loyiha Strukturasi

```
src/
├── components/          # Reusable components
│   ├── ui/             # Shadcn/UI components
│   └── protected-route.tsx
├── features/           # Feature-based architecture
│   ├── auth/
│   │   └── components/
│   │       └── login-form.tsx
│   └── dashboard/
│       ├── components/
│       │   ├── dashboard-page.tsx
│       │   ├── stats-card.tsx  (memo optimized)
│       │   ├── posts-list.tsx  (memo optimized)
│       │   └── todos-list.tsx  (memo optimized)
│       └── hooks/
│           └── use-dashboard-data.ts
├── hooks/              # Custom hooks
│   └── use-api.ts      # Generic API hooks
├── lib/                # Utilities
│   ├── api-client.ts   # Axios instance
│   └── utils.ts        # Helper functions
├── store/              # Zustand stores
│   └── auth-store.ts
├── types/              # TypeScript types
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ O'rnatish

### 1. Dependencies o'rnatish

```bash
npm install
```

### 2. Development server ishga tushirish

```bash
npm run dev
```

Loyiha `http://localhost:5173` da ochiladi.

### 3. Build qilish

```bash
npm run build
```

Build fayllari `dist/` papkasida bo'ladi.

## 📚 Asosiy Xususiyatlar

### 1. Authentication (Zustand)

```typescript
// Login
const { login } = useAuthStore();
login(user, token);

// Logout
const { logout } = useAuthStore();
logout();

// Check auth status
const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
```

### 2. Data Fetching (Custom Hooks + React Query)

```typescript
// GET request
const { data, isLoading, error } = useGet<Post[]>('posts', '/posts');

// POST request
const { mutate } = usePost<User>('/users');
mutate(newUser);
```

### 3. Feature-based Architecture

Har bir feature o'z ichida components, hooks, va boshqa kerakli narsalarni saqlaydi.

### 4. Optimization (React.memo)

```typescript
// Performance optimization
export const StatsCard = memo(function StatsCard({ title, value }) {
  // Component faqat props o'zgarganda re-render bo'ladi
});
```

### 5. Shadcn/UI Components

```typescript
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
```

## 🔐 Login Ma'lumotlari

Dashboard demo versiyasi bo'lgani uchun har qanday username va password bilan kirish mumkin.

```
Username: istalgan_nom
Password: istalgan_parol
```

## 📝 API

Loyiha [JSONPlaceholder](https://jsonplaceholder.typicode.com/) dan foydalanadi:

- `/posts` - Postlar
- `/todos` - Vazifalar
- `/users` - Foydalanuvchilar

## 🎯 Next.js'ga O'tish

Bu loyiha Next.js'ga o'tish uchun tayyor:

1. ✅ Feature-based architecture
2. ✅ TypeScript
3. ✅ API hooks pattern
4. ✅ Server/Client state separation
5. ✅ Component optimization (memo)

Next.js uchun:
- `pages/` yoki `app/` routing
- Server Components
- API routes
- SSR/SSG support

## 📖 O'rganilgan Narsalar

- ✅ React + TypeScript best practices
- ✅ State management (Zustand)
- ✅ Server state (React Query)
- ✅ Custom hooks yaratish
- ✅ API abstraction
- ✅ Component optimization
- ✅ Feature-based architecture
- ✅ Routing va protected routes
- ✅ Modern UI (Shadcn/UI + Tailwind)

## 🚀 Keyingi Qadamlar

1. API mutations (POST, PUT, DELETE) qo'shish
2. Form validation (React Hook Form, Zod)
3. Error boundaries
4. Loading skeletons
5. Dark mode
6. Next.js'ga migration

## 📄 License

MIT
# mini-dashboard
