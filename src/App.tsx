import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Newsletter } from "./components/Newsletter";


function App() {
  return (
    <>
      <Navbar />

      <section id="home">
      <Hero />
      </section>

      <section id="waitinglist">
        <Newsletter/>
      </section>

      <section id="about">
      <About />
      </section>

      <section id="features">
      <HowItWorks />
      </section>
      
      
      
      <section id="pricing">
      <Pricing />
      </section>

      

      <section id="faq">
      <FAQ />
      </section>

      <section id="footer">
      <Footer />
      </section>

      <ScrollToTop />
    </>
  );
}

export default App;