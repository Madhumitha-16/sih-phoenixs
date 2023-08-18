import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Clients from './Pages/Clients';
import ClientPage from './Pages/ClientPage';
import CalendarEvents from './Pages/CalendarEvents';
import AdminPanel from './Pages/AdminPanel';
import PrivateRoute  from './AuthComponents/PrivateRoute';
import LoginRoute  from './AuthComponents/LoginRoute';
import AdminRoute  from './AuthComponents/AdminRoute';
import Sidebar from './Components/Sidebar';
import { AuthLoginInfo }  from './AuthComponents/AuthLogin';
import Register from './Pages/Register';
import TeamDetails from './Pages/TeamDetails';
import Phase1 from './Pages/Phase1';
import { Home } from './Pages/home';
import Phase2 from './Pages/Phase2';
import Phase3 from './Pages/Phase3';
import Team from './Pages/Team';
//import Logintest from './Pages/Logintest';
import Signuptest from './Pages/Signuptest';
import Submissions from './Pages/Submissions';



function App() {
    const ctx = useContext(AuthLoginInfo);
    console.log(ctx)
    return (
      <>
      <BrowserRouter>
      <Routes>
            <Route path='/login' element={
                  <LoginRoute>
                    <Login />
                  </LoginRoute>
                } />
           
            <Route path='/register' element={
                    <Register/>
                } />
                <Route path='/Phase1' element={
                    <Phase1/>
                } />
            <Route path='/team-registration' element={
                    <TeamDetails />
                } />

              <Route path='/' element={
                  <Home />
                } />
               

            </Routes>


      </BrowserRouter>


      <BrowserRouter>
  
            <Routes>
              <Route path='/home' exact element={
                  <>
                  <Sidebar />
                    <Homepage />
                  </>
                } />
              <Route path='/phase1' element={
                    <PrivateRoute>
                  <Sidebar />
                  <Phase1 />
                    </PrivateRoute>
                  } />
                  <Route path='/phase2' element={
                    <PrivateRoute>
                  <Sidebar />
                  <Phase2 />
                    </PrivateRoute>
                  } />
                  <Route path='/phase3' element={
                    <PrivateRoute>
                  <Sidebar />
                  <Phase3 />
                    </PrivateRoute>
                  } />
                  <Route path='/team' element={
                    <PrivateRoute>
                  <Sidebar />
                  <Team />
                    </PrivateRoute>
                  } />
                   <Route path='/submissions' element={
                    <PrivateRoute>
                  <Sidebar />
                  <Submissions />
                    </PrivateRoute>
                  } />
                <Route path='/orders/:orderId' element={
                    <PrivateRoute>
                    
                  <Sidebar />
                    </PrivateRoute>
                  } />
                <Route path='/clients' element={
                    <PrivateRoute>
                    
                  <Sidebar />
                      <Clients />
                    </PrivateRoute>
                  } />
                <Route path='/clients/:clientId' element={
                    <PrivateRoute>
                  <Sidebar />
                      <ClientPage />
                    </PrivateRoute>
                  } />
                <Route path='/calendar' element={
                    <PrivateRoute>
                  <Sidebar />
                      <CalendarEvents />
                    </PrivateRoute>
                  } />
                <Route path='/adminPannel' element={
                    <AdminRoute>
                  <Sidebar />
                      <AdminPanel />
                    </AdminRoute>
                  } />
            
            </Routes>
           
      </BrowserRouter>
      </>
    );
}

export default App;