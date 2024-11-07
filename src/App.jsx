import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Route } from "./routes/__root";

const router = createRouter({ routeTree });


const App = () => {
  const cartHook = useState([]);
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);