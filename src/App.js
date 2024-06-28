import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobDetails from './User Panel/JobDetails';
import AdminPanel from './Admin Panel/AdminPanel';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/jobdetail" element={<JobDetails />} />
          <Route path="/resumedetail" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
