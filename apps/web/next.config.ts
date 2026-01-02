import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: [
    'react-native',
    'react-native-web',
    'react-native-css-interop',
    'nativewind',
    '@expo/html-elements',
    'expo',
    'app',
    'class-variance-authority',
    'clsx',
    'tailwind-merge',
    'expo-image',
    'expo-linear-gradient',
    'expo-blur',
    'expo-modules-core',
    '@rn-primitives/slot',
    '@rn-primitives/tabs'
  ],
  webpack: (config, { webpack, dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: dev,
      })
    );
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      app: path.resolve(__dirname, '../../packages/app'),
      '@ui': path.resolve(__dirname, '../../packages/app/ui'),
      'react-native-uitextview': path.resolve(
        __dirname,
        './src/shims/react-native-uitextview.ts'
      ),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions = [
      '.web.ts',
      '.web.tsx',
      '.web.js',
      ...config.resolve.extensions,
    ];
    return config;
  }
}
 
export default nextConfig
