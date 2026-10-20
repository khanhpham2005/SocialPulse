export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role?: string;
  createdAt: string;
}

/**
 * Tài khoản mẫu mặc định của hệ thống demo.
 */
export const DEFAULT_USERS: User[] = [
  {
    id: 'user-demo',
    name: 'Minh Anh',
    email: 'demo@gmail.com',
    password: '123456',
    role: 'Tài khoản demo',
    createdAt: '2026-10-18T10:00:00Z',
  },
];

export const STORAGE_KEYS = {
  USERS: 'socialpulse_users',
  CURRENT_USER: 'socialpulse_current_user',
  REMEMBER_EMAIL: 'socialpulse_remember_email',
} as const;

