import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Input, Checkbox, Button } from '../components/ui';
import { AlertCircle, KeyRound } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, rememberedEmail } = useAuth();

  const [email, setEmail] = useState(rememberedEmail || '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(!!rememberedEmail);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Đường dẫn quay lại sau khi đăng nhập thành công
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/tong-quan';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const result = await login({ email, password, rememberMe });
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.message || 'Đăng nhập không thành công.');
      }
    } catch {
      setError('Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Nút hỗ trợ điền nhanh tài khoản demo
  const fillDemoAccount = () => {
    setEmail('demo@gmail.com');
    setPassword('123456');
    setError(null);
  };

  return (
    <div className="w-full max-w-[460px] bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
      {/* Segmented Tab Switcher */}
      <div className="bg-gray-100/80 p-1 rounded-xl flex items-center">
        <button
          type="button"
          className="w-1/2 py-2 text-center text-sm font-semibold rounded-lg bg-white text-indigo-600 shadow-sm transition-all"
        >
          Đăng nhập
        </button>
        <Link
          to="/dang-ky"
          className="w-1/2 py-2 text-center text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 transition-colors"
        >
          Đăng ký
        </Link>
      </div>

      {/* Title & Subtitle */}
      <div className="mt-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Chào mừng trở lại</h1>
        <p className="mt-1 text-sm text-gray-500">Đăng nhập để tiếp tục với SocialPulse.</p>
      </div>

      {/* Error notification banner */}
      {error && (
        <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200/80 flex items-start gap-2.5 text-xs text-rose-700 animate-fadeIn">
          <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">{error}</p>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <Input
          label="Email"
          type="email"
          placeholder="Nhập địa chỉ email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />

        {/* Password */}
        <Input
          label="Mật khẩu"
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between pt-1 text-sm">
          <Checkbox
            label={<span className="text-gray-600">Ghi nhớ đăng nhập</span>}
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

          <button
            type="button"
            onClick={() => alert('Chức năng khôi phục mật khẩu đang phát triển cho bản thử nghiệm. Bạn có thể sử dụng tài khoản demo bên dưới.')}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
          >
            Quên mật khẩu?
          </button>
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-2.5 rounded-xl font-medium shadow-sm transition-all bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          {isSubmitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </Button>
      </form>

      {/* Demo helper card */}
      <div className="mt-6 p-3 rounded-xl bg-indigo-50/50 border border-indigo-100 flex items-center justify-between text-xs text-indigo-900">
        <div className="flex items-center gap-2">
          <KeyRound className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
          <span>Demo: <strong className="font-semibold text-indigo-700">demo@gmail.com</strong> / <strong>123456</strong></span>
        </div>
        <button
          type="button"
          onClick={fillDemoAccount}
          className="text-indigo-600 font-semibold hover:underline shrink-0 text-[11px]"
        >
          Điền nhanh
        </button>
      </div>

      {/* Footer link to Register */}
      <div className="mt-6 text-center text-xs text-gray-500">
        <span>Chưa có tài khoản? </span>
        <Link to="/dang-ky" className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">
          Đăng ký
        </Link>
      </div>
    </div>
  );
};

export default Login;

