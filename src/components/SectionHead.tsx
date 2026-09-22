import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function SectionHead({
  eyebrow,
  title,
  lead,
  onDark,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('reveal max-w-3xl', className)}>
      <p className={cn('eyebrow', onDark && '!text-gold-soft')}>{eyebrow}</p>
      <h2 className={cn('h2 mt-5', onDark && 'text-paper')}>{title}</h2>
      {lead ? <p className={cn('lead mt-6', onDark && '!text-paper/75')}>{lead}</p> : null}
    </div>
  );
}
