<<<<<<< HEAD
=======
import path from 'path'
>>>>>>> pr-2
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  transpilePackages: [
    'react-native',
    'react-native-web',
    'react-native-css-interop',
    'nativewind',
<<<<<<< HEAD
=======
    'nativewindui',
    'app',
>>>>>>> pr-2
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
<<<<<<< HEAD
=======
      app: path.resolve(__dirname, '../../packages/app'),
>>>>>>> pr-2
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
 
<<<<<<< HEAD
export default nextConfig
=======
export default nextConfig
>>>>>>> pr-2
