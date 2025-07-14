import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Projects } from './pages/Projects';
import { BlogPost } from './pages/BlogPost';


function App() {
  return (
    <Router>
      <div style={{ height: '100vh', overflowY: 'auto', overscrollBehavior: 'none', WebkitOverflowScrolling: 'touch', backgroundColor: 'black' }}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}


export default App;