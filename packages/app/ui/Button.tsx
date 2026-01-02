import type { ComponentProps } from 'react';
import { Pressable } from 'react-native';
import { Text } from './Text';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonProps = Omit<ComponentProps<typeof Pressable>, 'children'> & {
  title: string;
  variant?: ButtonVariant;
  className?: string;
};

const VARIANT_CLASS: Record<ButtonVariant, { button: string; text: string }> = {
  primary: {
    button: 'bg-blue-600 border border-blue-600',
    text: 'text-white',
  },
  secondary: {
    button: 'bg-slate-100 border border-slate-200',
    text: 'text-slate-900',
  },
  outline: {
    button: 'bg-transparent border border-slate-300',
    text: 'text-slate-900',
  },
};

export function Button({
  title,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const variantClass = VARIANT_CLASS[variant];
  const baseClassName = 'inline-flex items-center justify-center w-auto';
  const combinedClassName = className
    ? `${baseClassName} rounded-lg px-4 py-3 ${variantClass.button} ${className}`
    : `${baseClassName} rounded-lg px-4 py-3 ${variantClass.button}`;
  return (
    <Pressable {...props} className={combinedClassName}>
      <Text className={`text-center font-semibold ${variantClass.text}`}>{title}</Text>
    </Pressable>
  );
}
