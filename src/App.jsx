import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Users from './pages/Users';
import Report from './pages/Report';
import AddUsers from './components/users/AddUsers';

function App() {
  const hiddenPaths = [
    '/auth',
  ];
  const shouldHideBottomNav = hiddenPaths.includes(location.pathname);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/report" element={<Report />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/users/add" element={<AddUsers />} />
          <Route path="*" element={<Report />} />
        </Routes>
        {!shouldHideBottomNav && <NavBar />}
      </Router>
    </>
  );
}

export default App;
