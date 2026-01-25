import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Authentication/login';
import Profile from './components/Authentication/profiile';
import AddBlog from './components/AddBlog';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
