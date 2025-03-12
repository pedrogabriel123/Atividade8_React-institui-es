import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './views/Home';
import Instituicoes from './views/Instituicoes';
import Sobre from './views/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router';
import Principal from './layouts/Principal';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}>
            <Route index element={<Home />} />
            <Route path="instituicoes" element={<Instituicoes />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
