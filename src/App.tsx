import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";

const HomePage = lazy(() => import("@/modules/home/HomePage"));
const LoginPage = lazy(() => import("@/modules/login/LoginPage"));
const VideoPage = lazy(() => import("@/modules/video/VideoPage"));

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Suspense>
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/video"
              element={<VideoPage />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
