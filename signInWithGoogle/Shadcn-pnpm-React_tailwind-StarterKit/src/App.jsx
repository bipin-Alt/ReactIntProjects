import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AuthPage from "./pages/private-route/AuthPage";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/profile" element={<AuthPage>
        <Profile/>
      </AuthPage>}/>
     </Routes>
    </>
  );
}

export default App;
