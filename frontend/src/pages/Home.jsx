import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedMenu } from "@/components/featured-menu"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedMenu />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}