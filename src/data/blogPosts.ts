import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'modern-web-development',
    title: 'Modern Web Development Best Practices 2024',
    excerpt: 'Modern web geliştirme dünyasında performans, güvenlik ve kullanıcı deneyimi odaklı en iyi pratikler ve güncel yaklaşımlar.',
    content: `
# Modern Web Development Best Practices 2024

Web geliştirme sürekli evrimleşiyor ve yüksek kaliteli uygulamalar geliştirmek için güncel kalmak çok önemli. İşte 2024'ün en önemli web geliştirme pratikleri:

## Performance Optimization

Performans modern web geliştirmenin en kritik yönlerinden biridir:

### Code Splitting ve Lazy Loading
- Dynamic imports kullanarak route-based code splitting
- React.lazy() ile component-based code splitting
- Intersection Observer API ile akıllı lazy loading
- Virtual scrolling ile büyük listeleri optimize etme

### Asset Optimization
- Modern image formatları (WebP, AVIF)
- Responsive images ve art direction
- SVG optimizasyonu ve sprite kullanımı
- Font loading stratejileri

### Caching Strategies
- Service Workers ile offline first yaklaşımı
- Browser cache politikaları
- Memory ve disk cache optimizasyonu

## Modern Architecture

### Micro-Frontend Yaklaşımı
\`\`\`typescript
// Module Federation örneği
const RemoteApp = React.lazy(() => import("remote/App"));

function HostApp() {
  return (
    <Suspense fallback="Loading...">
      <RemoteApp />
    </Suspense>
  );
}
\`\`\`

### State Management
- Redux Toolkit ile modern state yönetimi
- React Query ile server state
- Zustand ile basit state çözümleri

## Security Best Practices

- Content Security Policy (CSP) implementasyonu
- HTTPS ve SSL/TLS konfigürasyonu
- XSS ve CSRF koruması
- Input validasyonu ve sanitizasyonu

## Modern Development Tools

### Build Tools
- Vite ve esbuild ile hızlı development
- Webpack 5 module federation
- Docker ve container orchestration

### Testing
\`\`\`typescript
// Modern test yaklaşımı örneği
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('user interaction flow', async () => {
  render(<MyComponent />);
  await userEvent.click(screen.getByRole('button'));
  expect(screen.getByText('Success')).toBeInTheDocument();
});
\`\`\`
    `,
    date: '15 Mart 2024',
    readTime: '10 dk okuma',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=400',
    tags: ['Web Development', 'Performance', 'Security', 'Testing']
  },
  {
    id: 'react-hooks-guide',
    title: 'React Hooks Derinlemesine İnceleme ve İleri Düzey Kullanım',
    excerpt: 'React Hooks\'un tüm yönleriyle incelenmesi, custom hooks geliştirme ve performans optimizasyonu teknikleri.',
    content: `
# React Hooks Derinlemesine İnceleme

React Hooks, modern React geliştirmesinin temel taşlarından biridir. İşte detaylı bir inceleme:

## Temel Hooks ve İleri Düzey Kullanımları

### useState ve Optimizasyonlar
\`\`\`typescript
// Fonksiyonel güncelleme
const [count, setCount] = useState(0);
setCount(prev => prev + 1);

// Obje state optimizasyonu
const [user, setUser] = useState<User>(() => ({
  name: 'John',
  preferences: loadUserPreferences() // Ağır hesaplama
}));
\`\`\`

### useEffect ve Cleanup
\`\`\`typescript
useEffect(() => {
  const ws = new WebSocket('ws://api.example.com');
  
  ws.onmessage = (event) => {
    // Mesaj işleme
  };

  return () => ws.close(); // Cleanup
}, []);
\`\`\`

### useCallback ve useMemo
\`\`\`typescript
const memoizedValue = useMemo(() => computeExpensiveValue(deps), [deps]);
const memoizedCallback = useCallback((param) => doSomething(param, deps), [deps]);
\`\`\`

## Custom Hooks Örnekleri

### useLocalStorage Hook
\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
\`\`\`

### useDebounce Hook
\`\`\`typescript
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
\`\`\`

## Performance Optimizations

### Hook Dependencies Optimization
- Dependency array optimizasyonu
- useCallback ve useMemo doğru kullanımı
- Object reference stabilizasyonu

### Context Optimization
\`\`\`typescript
const ThemeContext = React.createContext<Theme | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
\`\`\`
    `,
    date: '10 Mart 2024',
    readTime: '15 dk okuma',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&h=400',
    tags: ['React', 'Hooks', 'JavaScript', 'Performance', 'TypeScript']
  },
  {
    id: 'typescript-guide',
    title: 'TypeScript ile Profesyonel Yazılım Geliştirme',
    excerpt: 'TypeScript\'in ileri düzey özellikleri, tip sistemi, generics ve decorators ile kurumsal uygulama geliştirme.',
    content: `
# TypeScript ile Profesyonel Yazılım Geliştirme

TypeScript, modern web geliştirmenin vazgeçilmez araçlarından biri haline geldi. İşte derinlemesine bir inceleme:

## İleri Düzey Tip Sistemi

### Conditional Types
\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type Result = IsString<"hello">; // true
type Result2 = IsString<42>; // false

// Utility type örneği
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

### Mapped Types
\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
\`\`\`

## Generic Constraints ve Utility Types

### Generic Constraints
\`\`\`typescript
interface HasLength {
  length: number;
}

function longest<T extends HasLength>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

// Kullanım
longest("typescript", "javascript"); // OK
longest([1, 2], [1, 2, 3]); // OK
longest(10, 20); // Error: Number has no length property
\`\`\`

### Advanced Utility Types
\`\`\`typescript
// Record utility type
type PageInfo = {
  title: string;
  url: string;
};

type Pages = Record<'home' | 'about' | 'contact', PageInfo>;

// Pick ve Omit
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;
type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;
\`\`\`

## Decorators ve Metadata

### Class Decorators
\`\`\`typescript
function logger<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    created = new Date();
    
    log() {
      console.log('Instance created at:', this.created);
    }
  };
}

@logger
class Example {
  constructor() {
    console.log('Constructing Example...');
  }
}
\`\`\`

### Property Decorators
\`\`\`typescript
function required(target: any, propertyKey: string) {
  let value: any;
  
  const getter = () => value;
  const setter = (newVal: any) => {
    if (newVal === undefined || newVal === null) {
      throw new Error(\`\${propertyKey} is required\`);
    }
    value = newVal;
  };
  
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class User {
  @required
  name!: string;
}
\`\`\`

## Best Practices ve Pattern'ler

### Repository Pattern
\`\`\`typescript
interface Repository<T> {
  find(id: string): Promise<T>;
  findAll(): Promise<T[]>;
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): Promise<void>;
}

class UserRepository implements Repository<User> {
  // Implementation
}
\`\`\`

### Factory Pattern
\`\`\`typescript
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

class FileLogger implements Logger {
  log(message: string): void {
    // File logging implementation
  }
}

class LoggerFactory {
  static createLogger(type: 'console' | 'file'): Logger {
    switch (type) {
      case 'console':
        return new ConsoleLogger();
      case 'file':
        return new FileLogger();
      default:
        throw new Error('Invalid logger type');
    }
  }
}
\`\`\`
    `,
    date: '5 Mart 2024',
    readTime: '20 dk okuma',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&h=400',
    tags: ['TypeScript', 'JavaScript', 'Development', 'Design Patterns', 'Advanced']
  },

];