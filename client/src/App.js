import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import OrderPage from './Pages/OrderPage';
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
//import Fetch from './Pages/fetch';



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
                    <Register />
                } />

            </Routes>




      </BrowserRouter>


      <BrowserRouter>
  
            <Routes>
              <Route path='/' exact element={
                  <PrivateRoute>
                  <Sidebar />
                    <Homepage />
                  </PrivateRoute>
                } />
              <Route path='/orders' element={
                    <PrivateRoute>
                    
                  <Sidebar />
                      <Orders />
                    </PrivateRoute>
                  } />
                <Route path='/orders/:orderId' element={
                    <PrivateRoute>
                    
                  <Sidebar />
                      <OrderPage />
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