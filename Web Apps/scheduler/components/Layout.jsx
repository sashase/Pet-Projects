import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="mx-6 lg:max-w-6xl md:max-w-2xl md:mx-auto font-montserrat">
      <Nav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}
