import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Loans from "./pages/Loans";
import Contact from "./pages/Contact";
import Users from "./admin-pages/Users";
import Books from "./admin-pages/Books";
import { ThemeContext } from "./ThemeContext";

export default function App() {
  // default theme value
  const [theme, setTheme] = useState("primary");
  // useMemo for memoized values
  const providerTheme = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <Router>
      <ThemeContext.Provider value={providerTheme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="loans" element={<Loans />} />
            <Route path="contact" element={<Contact />} />
            <Route path="users" element={<Users />} />
            <Route path="books" element={<Books />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
