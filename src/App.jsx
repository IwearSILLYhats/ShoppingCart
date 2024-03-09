import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import useLocal from "./scripts/useLocal"

function App() {

  const [cart, setCart] = useLocal('cart', [])

  return (
    <>
    <Navbar count={cart} />
    <main>
    <Outlet context={[cart, setCart]} />
    </main>
    <Footer />
    </>
  )
}

export default App;