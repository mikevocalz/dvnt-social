import { Button as NativeButton } from 'nativewindui';
import type { ComponentProps, ComponentType } from 'react';

type NativeButtonProps = ComponentProps<typeof NativeButton>;

interface ButtonProps extends Omit<NativeButtonProps, 'children' | 'variant'> {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

const NativeButtonComponent = NativeButton as ComponentType<
  NativeButtonProps & { variant?: ButtonProps['variant'] }
>;

export function Button({ title, variant, ...props }: ButtonProps) {
  return (
    <NativeButtonComponent {...props} variant={variant}>
      {title}
    </NativeButtonComponent>
  );
}
