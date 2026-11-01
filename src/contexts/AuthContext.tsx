import React, { useState } from 'react';
import type { User } from '../data/users';
import { DEFAULT_USERS, STORAGE_KEYS } from '../data/users';
import { AuthContext } from './authContextDef';
import type { LoginCredentials, RegisterCredentials, AuthResult } from './types';

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
  const customEmails = new Set(customUsers.map((u) => u.email.toLowerCase()));
  const defaults = DEFAULT_USERS.filter((u) => !customEmails.has(u.email.toLowerCase()));
  return [...defaults, ...customUsers];
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Khởi tạo state lười (lazy) ngay lần render đầu tiên, tránh cascading render trong useEffect
  const [user, setUser] = useState<User | null>(() => {
    try {
      const storedUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      return storedUser ? (JSON.parse(storedUser) as User) : null;
    } catch {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      return null;
    }
  });

  const [rememberedEmail, setRememberedEmail] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.REMEMBER_EMAIL) || '';
    } catch {
      return '';
    }
  });

  const [isLoading] = useState<boolean>(false);

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
