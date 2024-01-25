import { lazy, Suspense } from "react";
import Navbar from "@/shared/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("@/modules/home/HomePage"));
const LoginPage = lazy(() => import("@/modules/login/LoginPage"));
const VideoPage = lazy(() => import("@/modules/video/VideoPage"));

export default function Router() {
  return (
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
            path="/video/:videoId"
            element={<VideoPage />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
