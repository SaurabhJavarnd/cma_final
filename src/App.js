import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/UserLogin';
import AdminPage from './components/AdminPage';
import StudentPage from './components/UserPage';

function App() {
  const user = localStorage.getItem("user");
  
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/" element={user?.data?.user?.userType === "student" ? <StudentPage/> : <AdminPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/studentlogin" element={<StudentLogin/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminpage" element={<AdminPage/>}/>
        <Route path="/studentpage" element={<StudentPage/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/adminpage/tutorial/:id" element={<h1>turorialid</h1>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;

