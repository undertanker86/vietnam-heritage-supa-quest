
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const displayName = user.user_metadata?.full_name || user.email || 'Người chơi';
  const avatarUrl = user.user_metadata?.avatar_url;

  return (
    <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatarUrl} alt={displayName} />
        <AvatarFallback>
          {displayName.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {displayName}
        </p>
        <p className="text-xs text-gray-500 truncate">
          {user.email}
        </p>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={signOut}
        className="text-gray-500 hover:text-red-600"
      >
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default UserProfile;
