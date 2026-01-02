'use client'

import { useRouter } from 'next/navigation'
import { Header, Footer } from '../components'
import { HomeScreen } from 'app/features/home'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <HomeScreen onViewComponents={() => router.push('/nativewind')} />
      </main>

      <Footer />
    </div>
  )
}
