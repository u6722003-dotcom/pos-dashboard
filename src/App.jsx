import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import SalesJournal from "./pages/SalesJournal";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales-journal" element={<SalesJournal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
