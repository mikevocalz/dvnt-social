import type { ComponentProps } from 'react';
import { TextInput, View } from 'react-native';
import { Text } from './Text';

type InputProps = ComponentProps<typeof TextInput> & {
  label?: string;
  className?: string;
};

export function Input({ label, className, ...props }: InputProps) {
  const inputClassName = className
    ? `rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900 ${className}`
    : 'rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900';
  return (
    <View className="gap-2">
      {label ? (
        <Text className="text-sm font-medium text-gray-700">{label}</Text>
      ) : null}
      <TextInput {...props} className={inputClassName} />
    </View>
  );
}
