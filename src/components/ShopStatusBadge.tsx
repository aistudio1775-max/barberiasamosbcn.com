import React, { useState, useEffect } from 'react';
import { getShopStatus, ShopStatus } from '../utils/shopStatus';

interface ShopStatusBadgeProps {
  className?: string;
  showDetails?: boolean;
}

export const ShopStatusBadge: React.FC<ShopStatusBadgeProps> = ({
  className = '',
  showDetails = true,
}) => {
  const [status, setStatus] = useState<ShopStatus>(getShopStatus());

  useEffect(() => {
    const update = () => setStatus(getShopStatus());
    update();
    const interval = setInterval(update, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const colorStyles = {
    green: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
    amber: 'bg-amber-500/20 text-amber-300 border-amber-500/60 animate-pulse',
    red: 'bg-rose-500/15 text-rose-300 border-rose-500/40',
  };

  const dotStyles = {
    green: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]',
    amber: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]',
    red: 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold backdrop-blur-md transition-all shadow-md ${colorStyles[status.badgeColor]} ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotStyles[status.badgeColor]}`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${dotStyles[status.badgeColor]}`}
        ></span>
      </span>

      <span className="tracking-wide uppercase font-extrabold">{status.badgeText}</span>

      {showDetails && status.detailText && (
        <>
          <span className="opacity-40">•</span>
          <span className="font-normal normal-case opacity-90">{status.detailText}</span>
        </>
      )}
    </div>
  );
};
