import { createFileRoute } from '@tanstack/react-router'
<<<<<<< HEAD
import { Header, Footer, Hero, TechStack, QuickStart } from '@/components'
=======
import { useNavigate } from '@tanstack/react-router'
import { Header, Footer } from '@/components'
import { HomeScreen } from 'app/features/home'
>>>>>>> pr-2

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
<<<<<<< HEAD
=======
  const navigate = useNavigate()

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
        <HomeScreen onViewComponents={() => navigate({ to: '/nativewind' })} />
>>>>>>> pr-2
      </main>

      <Footer />
    </div>
  )
}
