import { BrowserRouter, Routes, Route } from "react-router";
import Loja from "./pages/loja";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/loja/:id" element={<Loja />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
