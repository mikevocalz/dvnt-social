import { Input as NativeInput } from 'nativewindui';
import { View } from 'react-native';
import type { ComponentProps } from 'react';
import { Text } from './Text';

type NativeInputProps = ComponentProps<typeof NativeInput>;

interface InputProps extends NativeInputProps {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <View className="gap-2">
      {label ? (
        <Text className="text-sm font-medium text-gray-700">{label}</Text>
      ) : null}
      <NativeInput {...props} />
    </View>
  );
}
