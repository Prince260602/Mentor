import "./app.css";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AuthGuard from "./components/authguard";
import Home from "./pages/home";
import Login from "./pages/login/index.jsx";
import Register from "./pages/register/index.jsx";
import Mentors from "./pages/mentors/index.jsx";
import BookMentor from "./pages/bookmentor/BookMentor.jsx";
import { useState } from "react";
import { AuthContext } from "./context/Authcontext.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import Sidebar from "./components/Admin/Sidebar.jsx";
import AdminHeader from "./components/Admin/AdminHeader.jsx";
import CourseForm from "./components/Admin/MentorForm.jsx";
import MentorForm from "./components/Admin/MentorForm.jsx";

function App() {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/mentor/:email"
            element={
              <AuthGuard>
                <BookMentor />
              </AuthGuard>
            }
          />

          
          <Route
            path="/session-book"
            element={
              <AuthGuard>
                <div>Bookings</div>
              </AuthGuard>
            }
          />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard/>} />
        {/* <Route path="/AddMentors" element={<MentorForm  />} /> */}
        <Route path="*" element={<h1>404</h1>} />

        
      </Routes>
    
    </AuthContext.Provider>
  );
}

export default App;
