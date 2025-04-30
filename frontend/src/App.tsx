// src/App.tsx (updates)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import placeholders
import LoginPage from './pages/auth/LoginPage';
// import RegisterPage from './pages/auth/RegisterPage';
// import StudentDashboard from './pages/student/StudentDashboard';
// import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      {/* Add Layout components here later */}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
{/*        <Route path="/register" element={<RegisterPage />} /> */}

        {/* Student Routes (add protection later) */}
{/*        <Route path="/dashboard" element={<StudentDashboard />} /> */}
        {/* Add other student routes */}


        {/* Admin Routes (add protection later) */}
{/*        <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
        {/* Add other admin routes */}


        {/* Fallback/Home Route */}
        <Route path="/" element={<h1>EDNOVA Home (Placeholder)</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Basic 404 */}
      </Routes>
    </Router>
  );
}

export default App;