import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Input, Checkbox, Button } from '../components/ui';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate họ và tên
    if (!name.trim()) {
      setError('Vui lòng nhập họ và tên của bạn.');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Địa chỉ email không hợp lệ. Vui lòng nhập đúng định dạng (ví dụ: ten@gmail.com).');
      return;
    }

    // Validate mật khẩu
    if (password.length < 6) {
      setError('Mật khẩu phải có độ dài tối thiểu 6 ký tự.');
      return;
    }

    // Validate xác nhận mật khẩu
    if (password !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại.');
      return;
    }

    // Validate điều khoản
    if (!agreed) {
      setError('Vui lòng đồng ý với Điều khoản sử dụng và Chính sách bảo mật để tiếp tục.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await register({ name, email, password });
      if (result.success) {
        setSuccessMessage('Đăng ký tài khoản thành công! Đang chuyển hướng vào hệ thống...');
        setTimeout(() => {
          navigate('/tong-quan', { replace: true });
        }, 1200);
      } else {
        setError(result.message || 'Đăng ký không thành công.');
      }
    } catch {
      setError('Đã xảy ra lỗi không mong muốn. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[460px] bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
      {/* Segmented Tab Switcher */}
      <div className="bg-gray-100/80 p-1 rounded-xl flex items-center">
        <Link
          to="/dang-nhap"
          className="w-1/2 py-2 text-center text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 transition-colors"
        >
          Đăng nhập
        </Link>
        <button
          type="button"
          className="w-1/2 py-2 text-center text-sm font-semibold rounded-lg bg-white text-indigo-600 shadow-sm transition-all"
        >
          Đăng ký
        </button>
      </div>

      {/* Title & Subtitle */}
      <div className="mt-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Tạo tài khoản</h1>
        <p className="mt-1 text-sm text-gray-500">Đăng ký để bắt đầu khám phá cùng SocialPulse.</p>
      </div>

      {/* Error / Success notification banner */}
      {error && (
        <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200/80 flex items-start gap-2.5 text-xs text-rose-700 animate-fadeIn">
          <AlertCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">{error}</p>
        </div>
      )}

      {successMessage && (
        <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-2.5 text-xs text-emerald-700 animate-fadeIn">
          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed font-medium">{successMessage}</p>
        </div>
      )}

      {/* Register Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Họ và tên */}
        <Input
          label="Họ và tên"
          type="text"
          placeholder="Nhập họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
        />

        {/* Email */}
        <Input
          label="Email"
          type="email"
          placeholder="Nhập địa chỉ email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Mật khẩu */}
        <Input
          label="Mật khẩu"
          type="password"
          placeholder="Tạo mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          helperText="Ít nhất 6 ký tự (khuyến nghị gồm chữ và số)."
          required
        />

        {/* Xác nhận mật khẩu */}
        <Input
          label="Xác nhận mật khẩu"
          type="password"
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {/* Terms checkbox */}
        <div className="pt-1">
          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            label={
              <span className="text-xs text-gray-600 leading-relaxed block">
                Tôi đồng ý với{' '}
                <button
                  type="button"
                  onClick={(ev) => {
                    ev.preventDefault();
                    alert('Chính sách và điều khoản dịch vụ SocialPulse demo.');
                  }}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Điều khoản sử dụng
                </button>{' '}
                và{' '}
                <button
                  type="button"
                  onClick={(ev) => {
                    ev.preventDefault();
                    alert('Chính sách bảo mật dữ liệu SocialPulse demo.');
                  }}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Chính sách bảo mật
                </button>{' '}
                của SocialPulse.
              </span>
            }
          />
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          disabled={isSubmitting || !!successMessage}
          className="w-full mt-2 py-2.5 rounded-xl font-medium shadow-sm transition-all bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          {isSubmitting ? 'Đang tạo tài khoản...' : 'Tạo tài khoản'}
        </Button>
      </form>

      {/* Footer link to Login */}
      <div className="mt-6 text-center text-xs text-gray-500">
        <span>Đã có tài khoản? </span>
        <Link to="/dang-nhap" className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Register;

