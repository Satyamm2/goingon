import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './pages/navbar/index.js';
import PersonalRoutes from './routes/routes';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <PersonalRoutes />
        </Router>
      </div>
    </>
  );
};

export default App;