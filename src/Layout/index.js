import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function Layout({ children }) {
  return (
    <div className="layout">
    
    
   {/* header */}
   <Header />

    {/* main */}
    <main>
        {children}
    </main>

    {/* footer */}
    <Footer />

    </div>
  )
}

