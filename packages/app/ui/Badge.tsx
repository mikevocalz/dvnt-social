import type { ComponentProps } from 'react';
import { View } from 'react-native';
import { Text } from './Text';

type BadgeVariant = 'default' | 'success' | 'warning';
type BadgeProps = Omit<ComponentProps<typeof View>, 'children'> & {
  label: string;
  variant?: BadgeVariant;
  className?: string;
};

const VARIANT_CLASS: Record<BadgeVariant, { container: string; text: string }> = {
  default: {
    container: 'bg-slate-100 border border-slate-200',
    text: 'text-slate-700',
  },
  success: {
    container: 'bg-emerald-50 border border-emerald-200',
    text: 'text-emerald-700',
  },
  warning: {
    container: 'bg-amber-50 border border-amber-200',
    text: 'text-amber-700',
  },
};

export function Badge({ label, variant = 'default', className, ...props }: BadgeProps) {
  const variantClass = VARIANT_CLASS[variant];
  const combinedClassName = className
    ? `rounded-full px-2.5 py-1 ${variantClass.container} ${className}`
    : `rounded-full px-2.5 py-1 ${variantClass.container}`;
  return (
    <View {...props} className={combinedClassName}>
      <Text className={`text-xs font-semibold ${variantClass.text}`}>{label}</Text>
    </View>
  );
}
