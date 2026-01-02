<<<<<<< HEAD
import { Header, Footer, Hero, TechStack, QuickStart } from '../components'

export default function Home() {
=======
'use client'

import { useRouter } from 'next/navigation'
import { Header, Footer } from '../components'
import { HomeScreen } from 'app/features/home'

export default function Home() {
  const router = useRouter()

>>>>>>> pr-2
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
<<<<<<< HEAD
        <Hero />
        <TechStack />
        <QuickStart />
=======
        <HomeScreen onViewComponents={() => router.push('/nativewind')} />
>>>>>>> pr-2
      </main>

      <Footer />
    </div>
  )
}
