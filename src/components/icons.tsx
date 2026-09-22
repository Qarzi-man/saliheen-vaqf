import {
  Droplets,
  GraduationCap,
  HandCoins,
  Handshake,
  HeartPulse,
  House,
  Landmark,
  Route,
  Sprout,
  Users,
  Waypoints,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { ProjectIcon } from '@/config/projects';

export const projectIcons: Record<ProjectIcon, LucideIcon> = {
  water: Droplets,
  health: HeartPulse,
  education: GraduationCap,
  road: Route,
  power: Zap,
  bridge: Waypoints,
  home: House,
};

export const flowIcons: Record<'assets' | 'waqf' | 'management' | 'benefit' | 'society', LucideIcon> = {
  assets: HandCoins,
  waqf: Landmark,
  management: Handshake,
  benefit: Sprout,
  society: Users,
};

/** Логотип X (Twitter) — в lucide его нет в актуальном виде. */
export function XGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.53 3h3.13l-6.84 7.82L21.87 21h-6.3l-4.94-6.46L4.98 21H1.85l7.32-8.37L1.5 3h6.46l4.47 5.9L17.53 3Zm-1.1 16.13h1.73L6.95 4.77H5.1l11.33 14.36Z" />
    </svg>
  );
}
