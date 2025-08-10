import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import LoginPage from './pages/LoginPage';
import VerifyPage from './pages/VerifyPage';
import Home from './pages/Home';
// import Profile from './pages/Profile';
import Appointments from './pages/Appointments';

import MainLayout from './layouts/MainLayout';
import MobileLayout from './layouts/MobileLayout';
import DoctorProfile from './components/doctorProfile';
import SearchDoctorForm from './pages/SearchPage';
import TopDoctors from './components/topDoctors';
import CategoryPage from './pages/CategoryPage';
import ReservationsPage from './pages/MyAppointments';
import ReservationSuccess from './pages/SuccessReserve';
import Login from './pages/LoginPage';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <BrowserRouter>
      <Routes>
        {/* صفحات احراز هویت (هم برای موبایل هم دسکتاپ) */}
        {/* <Route element={<MainLayout />}> */}

        <Route path="/login" element={<Login mode="Login" />} />
        <Route path="/signup" element={<Login mode="Sign Up" />} />
        <Route path="/verify" element={<VerifyPage />} />
        {/* </Route> */}

        {/* صفحات بسته به دستگاه */}
        <Route element={isMobile ? <MobileLayout /> : <MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/search" element={<SearchDoctorForm />} />
          <Route path="/doctors" element={<TopDoctors />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/myAppointments" element={<ReservationsPage />} />
          <Route path="/ReservationSuccess" element={<ReservationSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
