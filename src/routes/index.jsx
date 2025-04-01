import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import TaskDetails from "./TaskDetails";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/app/task/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
