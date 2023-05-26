// @vendors
import { Navigate, Routes, Route } from "react-router-dom";

// @pages
import { Home, Task } from "../../pages";

export const router = (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/task/:taskId" element={<Task />} />
  </Routes>
);
