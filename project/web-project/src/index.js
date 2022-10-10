import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Loans from "./pages/Loans";
import Contact from "./pages/Contact";
import Users from "./admin-pages/Users";
import Books from "./admin-pages/Books";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="loans" element={<Loans />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<Users />} />
          <Route path="books" element={<Books />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
