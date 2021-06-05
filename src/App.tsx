import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import Index from "./Routes/Index";
import React, { useCallback, useState } from "react";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen((previousValue) => !previousValue)}
        />

        <main onClick={closeMenu}>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/news">
            <br />
            <br />
            <br />
            <br />
            <br />
            news
          </Route>
        </main>
        <section className="footerSection">
          <footer>
            <div className="footer_a">
              <a href="xxx">© 2021 ATOM RTC s.r.o.</a>
              <a href="tel:+420 731 505 625">+420 731 505 625</a>
              <a href="mailto:info@livesupp.com">info@livesupp.com</a>
            </div>
          </footer>
        </section>
      </div>
    </Router>
  );
}
