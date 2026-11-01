import React from 'react';
import { Shield } from 'lucide-react';
import { Card } from '../../../components/ui';

export const DataPrivacyBanner: React.FC = () => {
  return (
    <Card className="p-4 bg-gradient-to-r from-sky-50/70 via-white to-cyan-50/50 border-sky-100 flex items-start gap-3">
      <div className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0">
        <Shield className="h-5 w-5" />
      </div>
      <div className="space-y-0.5">
        <h4 className="text-xs font-bold text-gray-900">
          Chính sách bảo vệ quyền riêng tư & Dữ liệu sạch
        </h4>
        <p className="text-xs text-gray-600 leading-relaxed">
          SocialPulse chỉ thu thập nội dung công khai từ các diễn đàn, fanpage mở và bài viết không giới hạn quyền riêng tư.
          Mọi dữ liệu định danh cá nhân (tên người dùng, ảnh đại diện, số điện thoại) đều được ẩn hóa hoặc loại trừ trước khi đưa vào mô hình phân tích xu hướng.
        </p>
      </div>
    </Card>
  );
};

