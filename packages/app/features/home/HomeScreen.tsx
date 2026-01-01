import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { Button } from '../../ui';

const technologies = [
  {
    name: 'Turborepo',
    description: 'High-performance build system with intelligent caching',
  },
  {
    name: 'Next.js 16',
    description: 'React framework with App Router for the web',
  },
  {
    name: 'Expo SDK 54',
    description: 'React Native framework with Expo Router',
  },
  {
    name: 'NativeWindUI',
    description: 'Cross-platform components powered by NativeWind',
  },
];

const QUICK_START = [
  'git clone https://github.com/gurselcakar/universal-react-monorepo.git',
  'cd universal-react-monorepo',
  'pnpm install',
  'pnpm dev',
];

export type HomeScreenProps = {
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onViewComponents?: () => void;
};

export function HomeScreen({
  onPrimaryAction,
  onSecondaryAction,
  onViewComponents,
}: HomeScreenProps) {
  const handlePrimaryAction =
    onPrimaryAction ??
    (() => Linking.openURL('https://github.com/gurselcakar/universal-react-monorepo'));
  const handleSecondaryAction =
    onSecondaryAction ?? (() => Linking.openURL('https://gurselcakar.com/monorepo'));

  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="px-6 py-12 items-center">
        <Text className="text-4xl font-bold text-gray-900 tracking-tight mb-4 text-center">
          Build once, run everywhere
        </Text>
        <Text className="text-lg text-gray-600 leading-relaxed text-center mb-8">
          A production-ready monorepo template for building cross-platform applications with shared
          components between React Native and Next.js.
        </Text>

        <View className="flex-row flex-wrap gap-3 justify-center">
          <Button title="Star on GitHub" onPress={handlePrimaryAction} />
          <Button title="Read Blog Post" variant="secondary" onPress={handleSecondaryAction} />
          {onViewComponents ? (
            <Pressable className="px-5 py-2.5 active:opacity-80" onPress={onViewComponents}>
              <Text className="text-gray-500 text-sm font-medium">View Components</Text>
            </Pressable>
          ) : null}
        </View>
      </View>

      <View className="px-6 pb-8 border-t border-gray-100 pt-8">
        <Text className="text-2xl font-semibold text-gray-900 mb-8 text-center">Tech Stack</Text>
        <View className="flex-row flex-wrap gap-6">
          {technologies.map((tech) => (
            <View key={tech.name} className="flex-row items-start gap-4 w-[45%]">
              <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                <Text className="text-sm font-semibold text-gray-700">
                  {tech.name.charAt(0)}
                </Text>
              </View>
              <View className="flex-1">
                <Text className="font-medium text-gray-900">{tech.name}</Text>
                <Text className="text-sm text-gray-500">{tech.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className="px-6 pb-8 border-t border-gray-100 pt-8">
        <Text className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Quick Start
        </Text>
        <View className="bg-gray-900 rounded-lg p-5">
          <Text className="text-gray-400 font-mono text-sm mb-2"># Clone and install</Text>
          {QUICK_START.slice(0, 3).map((line) => (
            <Text key={line} className="text-gray-100 font-mono text-sm mb-1">
              <Text className="text-gray-500">$ </Text>
              {line}
            </Text>
          ))}
          <Text className="text-gray-400 font-mono text-sm mb-2 mt-2"># Start development</Text>
          <Text className="text-gray-100 font-mono text-sm">
            <Text className="text-gray-500">$ </Text>
            {QUICK_START[3]}
          </Text>
        </View>
        <Text className="text-sm text-gray-500 text-center mt-4">
          Runs both web and mobile apps simultaneously with hot reload
        </Text>
      </View>
    </ScrollView>
  );
}
