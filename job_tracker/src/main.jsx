import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./store/AuthContext.jsx";
import { JobProvider } from "./store/JobContext.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthProvider>
    <JobProvider>
      <App />
    </JobProvider>
  </AuthProvider>
  </BrowserRouter>
);
