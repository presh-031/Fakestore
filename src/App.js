import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";

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
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
