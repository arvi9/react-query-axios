import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import ProfilePage from './pages/profile.page';
import HomePage from './pages/home.page';
import LoginPage from './pages/login.page';
import RegisterPage from './pages/register.page';
import UnauthorizePage from './pages/unauthorize.page';
import RequireUser from './components/requireUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmailVerificationPage from './pages/verifyemail.page';

function App() {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Private Route */}
          <Route element={<RequireUser allowedRoles={['user', 'admin']} />}>
            <Route path='profile' element={<ProfilePage />} />
          </Route>

          <Route path='unauthorized' element={<UnauthorizePage />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='verifyemail' element={<EmailVerificationPage />}>
          <Route path=':verificationCode' element={<EmailVerificationPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
