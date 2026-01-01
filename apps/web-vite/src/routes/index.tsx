import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import { Header, Footer } from '@/components'
import { HomeScreen } from 'app/features/home'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <HomeScreen onViewComponents={() => navigate({ to: '/nativewind' })} />
      </main>

      <Footer />
    </div>
  )
}
