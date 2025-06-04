
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import GoogleLoginButton from '@/components/GoogleLoginButton';
import UserProfile from '@/components/UserProfile';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-yellow-500 to-green-600">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-yellow-500 to-green-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>

      {/* User profile (if logged in) */}
      {user && (
        <div className="absolute top-4 right-4 z-10">
          <UserProfile />
        </div>
      )}

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Game Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              🧩 Vietnam Heritage
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-200 mb-6 drop-shadow-lg">
              Jigsaw Quest
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow">
              Khám phá di sản Việt Nam qua những mảnh ghép thú vị
            </p>
          </div>

          {/* Authentication Section */}
          {!user ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Đăng nhập để bắt đầu chơi
              </h3>
              <p className="text-white/90 mb-6">
                Đăng nhập với Google để lưu tiến trình và tham gia bảng xếp hạng
              </p>
              <div className="max-w-sm mx-auto">
                <GoogleLoginButton />
              </div>
            </div>
          ) : (
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Chào mừng trở lại! 🎉
              </h3>
              <p className="text-white/90 mb-6">
                Sẵn sàng tiếp tục cuộc phiêu lưu khám phá di sản Việt Nam?
              </p>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Bắt đầu chơi 🚀
              </button>
            </div>
          )}

          {/* Game Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🏛️</div>
              <h4 className="text-lg font-bold text-white mb-2">Di sản lịch sử</h4>
              <p className="text-white/80 text-sm">Khám phá những di tích lịch sử nổi tiếng của Việt Nam</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-lg font-bold text-white mb-2">Thử thách</h4>
              <p className="text-white/80 text-sm">Hoàn thành puzzle với thời gian nhanh nhất</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">Bảng xếp hạng</h4>
              <p className="text-white/80 text-sm">So tài với người chơi khác trên toàn quốc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
