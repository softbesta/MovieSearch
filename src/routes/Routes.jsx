import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ROUTES } from 'constants/index';
import { HomePage } from '../pages';

const AppRoutes = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
