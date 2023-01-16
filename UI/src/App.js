import HomePage from "pages/HomePage";
import AdminPage from "pages/AdminPage";
import ApplicForm from "pages/ApplicForm";
import { Routes, Route } from "react-router-dom"




function App() {
  return (
    <Routes>
      <Route path="/application" element={<ApplicForm />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
