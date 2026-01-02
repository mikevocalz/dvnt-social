'use client'

import { useRouter } from 'next/navigation'
import { HomeScreen } from 'app/features/home'

export default function HomeScreenClient() {
  const router = useRouter()

  return <HomeScreen onViewComponents={() => router.push('/nativewind')} />
}
