import HomePage from "@/modules/home/HomePage";
import LoginPage from "@/modules/login/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
