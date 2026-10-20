import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../data/users';
import { DEFAULT_USERS, STORAGE_KEYS } from '../data/users';

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  message?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResult>;
  register: (credentials: RegisterCredentials) => Promise<AuthResult>;
  logout: () => void;
  rememberedEmail: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper lấy danh sách tài khoản đã đăng ký từ localStorage
const getStoredUsers = (): User[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USERS);
    if (!raw) return [];
    return JSON.parse(raw) as User[];
  } catch {
    return [];
  }
};

// Helper lấy toàn bộ danh sách tài khoản (kết hợp mặc định + đã lưu)
const getAllUsers = (): User[] => {
  const customUsers = getStoredUsers();
  // Loại trừ trùng email nếu có
  const customEmails = new Set(customUsers.map((u) => u.email.toLowerCase()));
  const defaults = DEFAULT_USERS.filter((u) => !customEmails.has(u.email.toLowerCase()));
  return [...defaults, ...customUsers];
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rememberedEmail, setRememberedEmail] = useState('');

  // Khôi phục phiên làm việc và email ghi nhớ khi tải trang
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      const storedEmail = localStorage.getItem(STORAGE_KEYS.REMEMBER_EMAIL);
      if (storedEmail) {
        setRememberedEmail(storedEmail);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async ({ email, password, rememberMe = false }: LoginCredentials): Promise<AuthResult> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      return { success: false, message: 'Vui lòng nhập đầy đủ email và mật khẩu.' };
    }

    const allUsers = getAllUsers();
    const matchedUser = allUsers.find(
      (u) => u.email.toLowerCase() === cleanEmail && u.password === cleanPassword
    );

    if (!matchedUser) {
      return {
        success: false,
        message: 'Email hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại.',
      };
    }

    // Không lưu trường password vào phiên làm việc hiện tại
    const { password: _, ...safeUser } = matchedUser;
    setUser(safeUser as User);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(safeUser));

    if (rememberMe) {
      localStorage.setItem(STORAGE_KEYS.REMEMBER_EMAIL, cleanEmail);
      setRememberedEmail(cleanEmail);
    } else {
      localStorage.removeItem(STORAGE_KEYS.REMEMBER_EMAIL);
      setRememberedEmail('');
    }

    return { success: true };
  };

  const register = async ({ name, email, password }: RegisterCredentials): Promise<AuthResult> => {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanName) {
      return { success: false, message: 'Vui lòng nhập họ và tên.' };
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return { success: false, message: 'Địa chỉ email không đúng định dạng.' };
    }

    // Validate password (tối thiểu 6 ký tự)
    if (cleanPassword.length < 6) {
      return { success: false, message: 'Mật khẩu phải có độ dài tối thiểu 6 ký tự.' };
    }

    const allUsers = getAllUsers();
    const isExisted = allUsers.some((u) => u.email.toLowerCase() === cleanEmail);

    if (isExisted) {
      return {
        success: false,
        message: 'Địa chỉ email này đã tồn tại trên hệ thống. Vui lòng đăng nhập hoặc dùng email khác.',
      };
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name: cleanName,
      email: cleanEmail,
      password: cleanPassword,
      role: 'Thành viên',
      createdAt: new Date().toISOString(),
    };

    // Lưu vào danh sách localStorage
    const currentStored = getStoredUsers();
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify([...currentStored, newUser]));

    // Tự động đăng nhập người dùng mới
    const { password: _, ...safeUser } = newUser;
    setUser(safeUser as User);
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(safeUser));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        rememberedEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

