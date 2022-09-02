import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Components
import Main from "./components/Main";

function App() {
  return (
    <>
      <Router>
        <Main />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
