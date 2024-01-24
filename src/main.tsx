import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import "@/assets/styles/globals.css";

const rootElement = document.getElementById("_manch") as
  | Element
  | DocumentFragment;

createRoot(rootElement).render(<App />);
