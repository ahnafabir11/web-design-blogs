import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';

export const BlogContext = createContext();
export const ModalContext = createContext();

function App() {
  const [selectedBlog, setSelectedBlog] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <BlogContext.Provider value={[selectedBlog, setSelectedBlog]}>
        <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
          <Home />
        </ModalContext.Provider>
      </BlogContext.Provider>
    </div>
  );
}

export default App;