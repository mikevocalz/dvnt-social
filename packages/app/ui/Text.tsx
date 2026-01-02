import { Text as NativeText } from 'nativewindui';
import type { ComponentProps, ComponentType } from 'react';

type NativeTextProps = ComponentProps<typeof NativeText>;

interface TextProps extends Omit<NativeTextProps, 'variant'> {
  variant?: 'title' | 'body' | 'caption';
}

const NativeTextComponent = NativeText as ComponentType<
  NativeTextProps & { variant?: TextProps['variant'] }
>;

export function Text({ variant, ...props }: TextProps) {
  return <NativeTextComponent {...props} variant={variant} />;
}
