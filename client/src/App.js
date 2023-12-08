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
import { AuthLoginInfo } from './AuthComponents/AuthLogin';
import Register from './Pages/Register';
import TeamDetails from './Pages/TeamDetails';
import Phase1 from './Pages/Phase1';
import { Home } from './Pages/home';
import Phase2 from './Pages/Phase2';
import Phase3 from './Pages/Phase3';
import Team from './Pages/Team';
import Submissions from './Pages/Submissions';
import MainSideBar from './Components/MainSideBar';
import ViewTeams from './Pages/hod/ViewTeams';
import ViewSubmissions from './Pages/hod/ViewSubmissions';
import Dashboard from './Pages/hod/Dashboard';
import Fetch from './Pages/fetch';
import PhaseIDataPage from './Pages/hod/PhaseIDataPage';



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
          path="/fetch"
          element={
            <Fetch />
          }
        />
        <Route
          path="/dashboard/:userId"
          element={
            <PrivateRoute>
              <MainSideBar />
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/view-submissions/:userId"
          element={
            <>
              <MainSideBar />
              <ViewSubmissions />
            </>
          }
        />
         <Route
          path="/phaseI-data/:userId"
          element={
            <>
              <MainSideBar />
              <PhaseIDataPage />
            </>
          }
        />
         <Route
          path="/view-teams/:userId"
          element={
            <>
              <MainSideBar />
              <ViewTeams />
            </>
          }
        />
    <Route
          path="/home/:userId"
          exact
          element={
            <PrivateRoute>
              <MainSideBar />
              <Homepage />
            </PrivateRoute>
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
          path="/phase2/:userId"
          element={
            <PrivateRoute>
              <MainSideBar />
              <Phase2 />
            </PrivateRoute>
          }
        />
        <Route
          path="/phase3/:userId"
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
          path="/submissions/:userId"
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
