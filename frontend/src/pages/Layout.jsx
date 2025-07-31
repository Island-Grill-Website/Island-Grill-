import { Footer } from "../components/Footer.jsx"
import { Header } from "../components/Header.jsx"

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
