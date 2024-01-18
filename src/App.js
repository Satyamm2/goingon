import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './pages/navbar/index.js';
import PersonalRoutes from './routes/routes';

function App() {
  return (
    <>
      <div className="bg-[#f7f7fc] w-full h-full">
        <Router>
          <Navbar />
          <PersonalRoutes />
        </Router>
      </div>
    </>
  );
};

export default App;










// import React, { useState } from 'react';
// import Logout from "./pages/logout/index";
// import Login from './pages/login/index';
// import Signup from './pages/signup/index';

// const App = () => {
//   const [token, setToken] = useState(null);

//   const handleLogin = (newToken) => {
//     setToken(newToken);
//   };

//   const handleLogout = () => {
//     setToken(null);
//   };

//   const handleSignup = () => {
//     // You can add additional logic here if needed
//   };

//   return (
//     <div>
//       {token ? (
//         <div>
//           <Logout token={token} onLogout={handleLogout} />
//         </div>
//       ) : (
//         <div>
//           <Login onLogin={handleLogin} />
//           <Signup onSignup={handleSignup} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
