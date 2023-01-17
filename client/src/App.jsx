import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Components
import Main from './components/Main';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/*'
            element={<Main />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
