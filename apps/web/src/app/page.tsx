import { Header, Footer } from '../components'
import HomeScreenClient from '../components/HomeScreenClient'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <HomeScreenClient />
      </main>

      <Footer />
    </div>
  )
}
