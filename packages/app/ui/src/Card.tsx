import { Card as NativeCard } from 'nativewindui';
import type { ComponentProps, ComponentType } from 'react';

type NativeCardProps = ComponentProps<typeof NativeCard>;

interface CardProps extends Omit<NativeCardProps, 'variant'> {
  variant?: 'default' | 'elevated';
}

const NativeCardComponent = NativeCard as ComponentType<
  NativeCardProps & { variant?: CardProps['variant'] }
>;

export function Card({ variant, ...props }: CardProps) {
  return <NativeCardComponent {...props} variant={variant} />;
}
