import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Error from "./pages/Error";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto max-w-[1700px]">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
        {/* Keep footer at btm of page */}
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
