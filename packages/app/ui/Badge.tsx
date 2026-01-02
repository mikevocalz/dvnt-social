import { Badge as NativeBadge } from 'nativewindui';
import type { ComponentProps, ComponentType } from 'react';

type NativeBadgeProps = ComponentProps<typeof NativeBadge>;

interface BadgeProps extends Omit<NativeBadgeProps, 'children' | 'variant'> {
  label: string;
  variant?: 'default' | 'success' | 'warning';
}

const NativeBadgeComponent = NativeBadge as ComponentType<
  NativeBadgeProps & { variant?: BadgeProps['variant'] }
>;

export function Badge({ label, variant, ...props }: BadgeProps) {
  return (
    <NativeBadgeComponent {...props} variant={variant}>
      {label}
    </NativeBadgeComponent>
  );
}
