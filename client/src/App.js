import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Clients from './Pages/Clients';
import ClientPage from './Pages/ClientPage';
import CalendarEvents from './Pages/CalendarEvents';
import AdminPanel from './Pages/AdminPanel';
import PrivateRoute from './AuthComponents/PrivateRoute';
import LoginRoute from './AuthComponents/LoginRoute';
import AdminRoute from './AuthComponents/AdminRoute';
import Sidebar from './Components/Sidebar';
import { AuthLoginInfo } from './AuthComponents/AuthLogin';
import Register from './Pages/Register';
import TeamDetails from './Pages/TeamDetails';
import Phase1 from './Pages/Phase1';
import { Home } from './Pages/home';
import Phase2 from './Pages/Phase2';
import Phase3 from './Pages/Phase3';
import Team from './Pages/Team';
import Signuptest from './Pages/Signuptest';
import Submissions from './Pages/Submissions';
import MainSideBar from './Components/MainSideBar';


function App() {
  const ctx = useContext(AuthLoginInfo);
  console.log(ctx);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/logintest" element={<Logintest />} /> */}
        <Route path="/signuptest" element={<Signuptest />} />
        <Route
          path="/team-registration/:userId"
          element={<TeamDetails />}
        />
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/home/:userId"
          exact
          element={
            <>
              <MainSideBar />
              <Homepage />
            </>
          }
        />
        <Route
          path="/phase1/:userId"
          element={
            <PrivateRoute>
              <MainSideBar />
              <Phase1 />
            </PrivateRoute>
          }
        />
        <Route
          path="/phase2"
          element={
            <PrivateRoute>
              <MainSideBar />
              <Phase2 />
            </PrivateRoute>
          }
        />
        <Route
          path="/phase3"
          element={
            <PrivateRoute>
              <MainSideBar />
              <Phase3 />
            </PrivateRoute>
          }
        />
        <Route
          path="/team/:userId"
          element={
            <PrivateRoute>
              <MainSideBar />
              <Team />
            </PrivateRoute>
          }
        />
        <Route
          path="/submissions"
          element={
            <PrivateRoute>
              <MainSideBar />
              <Submissions />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders/:orderId"
          element={
            <PrivateRoute>
              <MainSideBar />
            </PrivateRoute>
          }
        />
        <Route
          path="/clients"
          element={
            <PrivateRoute>
              <MainSideBar />
              <Clients />
            </PrivateRoute>
          }
        />
        <Route
          path="/clients/:clientId"
          element={
            <PrivateRoute>
              <MainSideBar />
              <ClientPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute>
              <MainSideBar />
              <CalendarEvents />
            </PrivateRoute>
          }
        />
        <Route
          path="/adminPannel"
          element={
            <AdminRoute>
              <MainSideBar />
              <AdminPanel />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
